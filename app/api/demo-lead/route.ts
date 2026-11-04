import { cookies } from "next/headers";
import { SCOUT_LINE } from "@/lib/scout-line";
import { guardRequest } from "@/lib/request-guard";
import { ghlConfigured, upsertContact } from "@/lib/ghl";
import { validateLead } from "@/lib/lead";
import { SOURCE_COOKIE, normalizeCampaign } from "@/lib/source";

/**
 * POST /api/demo-lead — the strict Scout assessment lead gate.
 *
 * Captures name / email / phone / business type into GHL before the page
 * reveals the full assessment line.
 *
 * Validation lives in lib/lead.ts and is shared with the form, so the two
 * cannot disagree about what a good lead looks like.
 */

export async function POST(request: Request) {
  const blocked = guardRequest(request, "lead", 5);
  if (blocked) return blocked;
  if (!ghlConfigured()) {
    return Response.json({ error: "Not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }
  const problem = validateLead(body);
  if (body.website) return Response.json({ error: "Unable to submit." }, { status: 400 });
  if (problem) {
    return Response.json({ error: problem }, { status: 400 });
  }

  const { name, email, phone, businessType } = body as Record<string, string>;

  // Re-validated on read: a cookie is client-controllable however it was set.
  const campaign = normalizeCampaign((await cookies()).get(SOURCE_COOKIE)?.value);

  const { ok } = await upsertContact({
    name,
    email,
    phone,
    source: "Free Scout assessment page",
    tags: ["free-assessment-requested", "scout-requested"],
    campaign,
    note:
      `Requested the free 25-minute Scout assessment via /demo. Business type: ${businessType}` +
      (campaign ? ` · Came from link: ${campaign}` : ""),
  });

  if (!ok) {
    return Response.json({ error: "Could not save." }, { status: 502 });
  }
  return Response.json({ ok: true, line: SCOUT_LINE }, { headers: { "Cache-Control": "no-store" } });
}
