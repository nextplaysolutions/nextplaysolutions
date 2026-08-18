/**
 * GoHighLevel contact capture, shared by the chat (/api/chat) and the demo
 * funnel (/api/demo-lead).
 *
 * Server-side only — needs GHL_PI_TOKEN (a Private Integration token for the
 * Marketing sub-account) in the environment. Without it, callers fall back to
 * telling the visitor to email instead; nothing renders a form that would
 * drop leads on the floor.
 */

const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID ?? "HYMGOAeVmEvPHBCIX8Dc";
const GHL_API = "https://services.leadconnectorhq.com";

export function ghlConfigured(): boolean {
  return Boolean(process.env.GHL_PI_TOKEN);
}

function headers() {
  return {
    Authorization: `Bearer ${process.env.GHL_PI_TOKEN}`,
    Version: "2021-07-28",
    "Content-Type": "application/json",
  };
}

export async function upsertContact(lead: {
  name: string;
  email: string;
  phone?: string;
  source: string;
  tags: string[];
  note?: string;
}): Promise<{ ok: boolean }> {
  if (!ghlConfigured()) return { ok: false };

  const [firstName, ...rest] = lead.name.trim().split(/\s+/);
  const res = await fetch(`${GHL_API}/contacts/upsert`, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify({
      locationId: GHL_LOCATION_ID,
      firstName,
      lastName: rest.join(" ") || undefined,
      email: lead.email,
      phone: lead.phone || undefined,
      source: lead.source,
      tags: lead.tags,
    }),
  });

  if (!res.ok) {
    console.error("GHL upsert failed", res.status, await res.text());
    return { ok: false };
  }

  const data = (await res.json()) as { contact?: { id?: string } };
  const contactId = data.contact?.id;

  // Best-effort note; the lead itself is already saved.
  if (contactId && lead.note) {
    await fetch(`${GHL_API}/contacts/${contactId}/notes`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify({ body: lead.note }),
    }).catch(() => {});
  }

  return { ok: true };
}
