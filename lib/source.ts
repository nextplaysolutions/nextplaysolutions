/**
 * Lead-source attribution for tracked outreach links.
 *
 * Jordan and Ethan share links like nextplaysolutions.ai/demo?src=ethan-li.
 * The campaign slug is stored in a first-party cookie on first visit and read
 * back server-side when the visitor converts — through the chat or the demo
 * form — so the lead reaches GHL tagged with the link that earned the click.
 *
 * First touch wins: the cookie is written once and never overwritten, so a
 * lead is credited to the link that brought them in, not the last page they
 * wandered through.
 */

export const SOURCE_COOKIE = "np_src";

/** 30 days, in seconds. */
export const SOURCE_COOKIE_MAX_AGE = 60 * 60 * 24 * 30;

const MAX_LENGTH = 32;

/**
 * The trust boundary. A campaign value arrives as untrusted text in a URL and
 * ends up as a tag on a CRM record, so it is reduced to a strict slug —
 * lowercase letters, digits and hyphens — or rejected outright.
 *
 * Applied server-side in the API routes regardless of what the browser wrote
 * into the cookie; the client-side pass is convenience, not protection.
 */
export function normalizeCampaign(raw?: string | null): string | null {
  if (typeof raw !== "string" || raw.length === 0) return null;
  // Cap before any pattern work — this arrives from an unbounded URL.
  if (raw.length > 200) return null;
  // Forgive the shapes a real link might carry (case, spaces, underscores),
  // reject anything else outright rather than mangling it into a slug — a
  // hand-crafted URL should not be able to invent CRM tags.
  if (!/^[A-Za-z0-9 _-]+$/.test(raw)) return null;

  const slug = raw
    .toLowerCase()
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, MAX_LENGTH)
    // A trailing hyphen can reappear after the length cap.
    .replace(/-$/, "");

  return slug.length > 0 ? slug : null;
}
