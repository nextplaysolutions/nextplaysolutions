import { ghlConfigured, upsertContact } from "@/lib/ghl";

/**
 * POST /api/demo-lead — the /demo funnel form.
 *
 * Captures name / email / phone / business type into GHL (tag
 * "demo-requested"), then the page reveals the demo line. The form is only
 * rendered when GHL_PI_TOKEN is configured, so this route should never be
 * hit unconfigured except by stray callers.
 */

const BUSINESS_TYPES = [
  "Real estate",
  "Insurance",
  "Mortgage / lending",
  "Construction / trades",
  "Professional services",
  "Healthcare",
  "Retail / e-commerce",
  "Other",
] as const;

export async function POST(request: Request) {
  if (!ghlConfigured()) {
    return Response.json({ error: "Not configured." }, { status: 503 });
  }

  let body: {
    name?: unknown;
    email?: unknown;
    phone?: unknown;
    businessType?: unknown;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, phone, businessType } = body;
  const valid =
    typeof name === "string" &&
    name.trim().length > 0 &&
    name.length <= 200 &&
    typeof email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    email.length <= 320 &&
    typeof phone === "string" &&
    phone.replace(/\D/g, "").length >= 10 &&
    phone.length <= 30 &&
    typeof businessType === "string" &&
    (BUSINESS_TYPES as readonly string[]).includes(businessType);

  if (!valid) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { ok } = await upsertContact({
    name: name as string,
    email: email as string,
    phone: phone as string,
    source: "Demo page",
    tags: ["demo-requested"],
    note: `Requested the Scout demo via /demo. Business type: ${businessType}`,
  });

  if (!ok) {
    return Response.json({ error: "Could not save." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
