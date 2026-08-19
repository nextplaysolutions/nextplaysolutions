import { cookies } from "next/headers";
import { ghlConfigured, upsertContact } from "@/lib/ghl";
import { validateLead } from "@/lib/lead";
import { SOURCE_COOKIE, normalizeCampaign } from "@/lib/source";

/**
 * POST /api/demo-lead — the /demo funnel form.
 *
 * Captures name / email / phone / business type into GHL (tag
 * "demo-requested"), then the page reveals the demo line. The form is only
 * rendered when GHL_PI_TOKEN is configured, so this route should never be
 * hit unconfigured except by stray callers.
 *
 * Validation lives in lib/lead.ts and is shared with the form, so the two
 * cannot disagree about what a good lead looks like.
 */

export async function POST(request: Request) {
  if (!ghlConfigured()) {
    return Response.json({ error: "Not configured." }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const problem = validateLead(body);
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
    source: "Demo page",
    tags: ["demo-requested"],
    campaign,
    note:
      `Requested the Scout demo via /demo. Business type: ${businessType}` +
      (campaign ? ` · Came from link: ${campaign}` : ""),
  });

  if (!ok) {
    return Response.json({ error: "Could not save." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
