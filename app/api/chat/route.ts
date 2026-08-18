import Anthropic from "@anthropic-ai/sdk";
import { CHAT_SYSTEM_PROMPT } from "@/lib/chat-prompt";
import { cookies } from "next/headers";
import { ghlConfigured, upsertContact } from "@/lib/ghl";
import { COMPANY } from "@/lib/offer";
import { SOURCE_COOKIE, normalizeCampaign } from "@/lib/source";

/**
 * POST /api/chat — backend for the "Ask NextPlay" widget.
 *
 * Claude answers from CHAT_SYSTEM_PROMPT (built from lib/offer.ts, so it can't
 * contradict the site). One tool: capture_lead, which upserts a contact into
 * the GoHighLevel Marketing sub-account when the visitor agrees to be
 * contacted.
 *
 * Secrets live in Vercel env vars, never in this public repo:
 *   ANTHROPIC_API_KEY  — required; the widget isn't rendered without it
 *   GHL_PI_TOKEN       — optional; without it leads fall back to email
 *   GHL_LOCATION_ID    — optional; defaults to the Marketing sub-account
 */

const MAX_MESSAGES = 30;
const MAX_MESSAGE_CHARS = 2000;

const CAPTURE_LEAD_TOOL: Anthropic.Tool = {
  name: "capture_lead",
  description:
    "Save a visitor's contact details so the founders can follow up. Only call this after the visitor has confirmed their name and email and agreed to be contacted.",
  strict: true,
  input_schema: {
    type: "object",
    properties: {
      name: { type: "string", description: "The visitor's full name" },
      email: { type: "string", description: "The visitor's email address" },
      phone: {
        type: "string",
        description: "The visitor's phone number, if they offered one; empty string otherwise",
      },
      context: {
        type: "string",
        description:
          "One or two sentences on what the visitor asked about and what they want, so the founders have context when they follow up",
      },
    },
    required: ["name", "email", "phone", "context"],
    additionalProperties: false,
  },
};

type Lead = { name: string; email: string; phone: string; context: string };

async function captureLead(
  lead: Lead,
  campaign: string | null,
): Promise<string> {
  if (!ghlConfigured()) {
    return `Lead capture is not connected yet. Ask the visitor to email ${COMPANY.email} directly instead.`;
  }

  const { ok } = await upsertContact({
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    source: "Website chat",
    tags: ["website-chat"],
    campaign,
    note: lead.context
      ? `Website chat: ${lead.context}` +
        (campaign ? ` · Came from link: ${campaign}` : "")
      : undefined,
  });

  return ok
    ? "Lead saved. The founders will follow up by email."
    : `Saving the contact failed. Ask the visitor to email ${COMPANY.email} directly instead.`;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "Chat is not configured." }, { status: 503 });
  }

  let body: { messages?: unknown };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const raw = body.messages;
  if (
    !Array.isArray(raw) ||
    raw.length === 0 ||
    raw.length > MAX_MESSAGES ||
    !raw.every(
      (m): m is { role: "user" | "assistant"; content: string } =>
        typeof m === "object" &&
        m !== null &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.length > 0 &&
        m.content.length <= MAX_MESSAGE_CHARS,
    ) ||
    raw[raw.length - 1].role !== "user"
  ) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Read once per request — capture_lead can fire on any turn of the loop,
  // and the cookie cannot change mid-request. Re-validated on read because a
  // cookie is client-controllable however it was set.
  const campaign = normalizeCampaign((await cookies()).get(SOURCE_COOKIE)?.value);

  const client = new Anthropic();
  const messages: Anthropic.MessageParam[] = raw.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  try {
    // Small agentic loop: at most one capture_lead round-trip plus the reply.
    for (let turn = 0; turn < 3; turn++) {
      const response = await client.messages.create({
        model: "claude-opus-5",
        max_tokens: 1500,
        output_config: { effort: "low" },
        system: [
          {
            type: "text",
            text: CHAT_SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        tools: [CAPTURE_LEAD_TOOL],
        messages,
      });

      if (response.stop_reason === "refusal") {
        return Response.json({
          reply: `I can't help with that one. For anything about NextPlay, email ${COMPANY.email}.`,
        });
      }

      if (response.stop_reason !== "tool_use") {
        const reply = response.content
          .filter((b): b is Anthropic.TextBlock => b.type === "text")
          .map((b) => b.text)
          .join("")
          .trim();
        return Response.json({
          reply: reply || `I don't have an answer for that — try ${COMPANY.email}.`,
        });
      }

      messages.push({ role: "assistant", content: response.content });
      const toolResults: Anthropic.ToolResultBlockParam[] = [];
      for (const block of response.content) {
        if (block.type === "tool_use" && block.name === "capture_lead") {
          toolResults.push({
            type: "tool_result",
            tool_use_id: block.id,
            content: await captureLead(block.input as Lead, campaign),
          });
        }
      }
      messages.push({ role: "user", content: toolResults });
    }

    return Response.json({
      reply: `Something went sideways on my end — email ${COMPANY.email} and a founder will answer directly.`,
    });
  } catch (err) {
    console.error("Chat request failed", err);
    return Response.json(
      { error: "Chat is temporarily unavailable." },
      { status: 502 },
    );
  }
}
