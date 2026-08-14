/**
 * Client testimonials.
 *
 * The site renders NOTHING until this array has an entry: no empty "what our
 * clients say" section, no placeholders, ever. A pre-launch site with a hollow
 * reviews block advertises exactly one thing — that nobody has said anything.
 *
 * When the first real one lands, add it here and the section appears on the
 * homepage and /assessment on the next deploy.
 *
 * Ground rules (same §06 voice rules as everything else):
 *   · Verbatim quotes only, with written permission. Light trims allowed,
 *     no rewrites — a polished quote reads as written by us.
 *   · Attribution as specific as the client allows: name, role, business
 *     type, town. "J.S., Nebraska" is worth less than no testimonial.
 *   · Specifics beat praise: "the report paid for itself in change orders"
 *     converts; "great to work with!" doesn't.
 *   · Capture at report delivery — the moment they're most impressed —
 *     not weeks later by email.
 */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** e.g. "Six-person remodeling company, Omaha" */
  business: string;
  /** Optional hard number to pull out, e.g. "$18k found in change orders" */
  metric?: string;
};

export const TESTIMONIALS: readonly Testimonial[] = [
  // First client testimonial goes here.
];
