import { guardRequest } from "@/lib/request-guard";
const allowed = new Set(["assessment_click", "form_start", "lead_saved", "call_click", "number_saved"]);
export async function POST(request: Request) {
  const blocked = guardRequest(request, "events", 30);
  if (blocked) return blocked;
  const body = await request.json().catch(() => null);
  if (!body || !allowed.has(body.event) || typeof body.page !== "string" || !/^\/[a-z0-9/-]{0,100}$/.test(body.page)) return new Response(null, { status: 400 });
  // Deliberately no contact data, query strings or persistent visitor identifier.
  console.info(JSON.stringify({ type: "conversion", event: body.event, page: body.page, timestamp: new Date().toISOString() }));
  return new Response(null, { status: 204 });
}
