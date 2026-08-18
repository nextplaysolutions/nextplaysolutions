import { cookies } from "next/headers";
import {
  SOURCE_COOKIE,
  SOURCE_COOKIE_MAX_AGE,
  normalizeCampaign,
} from "@/lib/source";

/**
 * POST /api/attribution — records which tracked link brought a visitor in.
 *
 * The cookie is written here rather than in the browser for one reason:
 * Safari caps JavaScript-written first-party cookies at seven days, and these
 * links are shared by text and DM, where mobile Safari is a large share of the
 * clicks. A Set-Cookie from the server keeps the full thirty days.
 *
 * First touch wins — if the cookie already exists it is left alone, so a lead
 * stays credited to the link that earned the click.
 */

export async function POST(request: Request) {
  let body: { src?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response(null, { status: 400 });
  }

  const campaign = normalizeCampaign(
    typeof body.src === "string" ? body.src : null,
  );
  // Nothing usable in the link — not an error worth surfacing to a visitor.
  if (!campaign) return new Response(null, { status: 204 });

  const jar = await cookies();
  if (jar.has(SOURCE_COOKIE)) return new Response(null, { status: 204 });

  jar.set(SOURCE_COOKIE, campaign, {
    maxAge: SOURCE_COOKIE_MAX_AGE,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return new Response(null, { status: 204 });
}
