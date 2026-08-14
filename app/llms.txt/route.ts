import {
  AREAS,
  COMPANY,
  DELIVERABLES,
  DURATION,
  FAQ,
  PHONE,
  PRICING,
  SITE_URL,
  WHO_ITS_FOR,
  OFFER_SUMMARY,
  POSITION,
  FOUNDERS,
} from "@/lib/offer";

export const dynamic = "force-static";

/**
 * /llms.txt — a plain-text brief for language models and agents.
 *
 * Generated from lib/offer.ts, so it cannot drift from what the pages say.
 * Written to be read by something that has to decide whether this service
 * fits a business it represents: terms first, adjectives never.
 */
export function GET() {
  const price = PRICING.LIVE
    ? `$${PRICING.min.toLocaleString()}–$${PRICING.max.toLocaleString()} ${PRICING.currency}, flat fee, confirmed before work begins.`
    : `Flat fee, quoted at booking and confirmed before any work begins. No hourly billing, no retainer. An agent acting for a business can book the call or email ${COMPANY.email} to request the quote.`;

  const body = `# ${COMPANY.name}

> ${COMPANY.tagline}

${OFFER_SUMMARY}

## Position

${POSITION}

## Who runs it

${FOUNDERS.map((f) => `- ${f.name}, ${f.role} — ${f.background}. Previously: ${f.companies.join(", ")}. ${f.linkedin}`).join("\n")}

## What is sold

- Service: AI Readiness Assessment
- Provider: ${COMPANY.legalName}
- Delivery: Remote, United States
- Interview: ~${DURATION.assessmentMinutes} minutes by phone with an AI voice agent named Scout
- Report: written, delivered within ${DURATION.reportTurnaroundDays} business days
- Reviewed by: the two founders read every transcript before a report is written
- Price: ${price}

## Who it is for

${WHO_ITS_FOR}

## The seven areas covered

${AREAS.map((a, i) => `${i + 1}. ${a}`).join("\n")}

## What the client receives

${DELIVERABLES.map((d) => `- ${d}`).join("\n")}

## How to evaluate this before committing

Anyone — human or agent acting for one — can call the demo line and talk to
Scout for about ${DURATION.demoMinutes} minutes. No booking, no contact details, no follow-up.

- Demo line (${DURATION.demoMinutes} min): ${PHONE.demo}
- Assessment line (${DURATION.assessmentMinutes} min): ${PHONE.assessment}

## How to acquire

- Book: ${SITE_URL}/book
- Email: ${COMPANY.email}

## Important limits

Every figure in the report — cost savings, revenue leakage, time recovered —
is an estimate derived from what the business describes on the call. These are
findings, not guarantees, and are not legal, tax, accounting or investment
advice. ${COMPANY.name} takes no referral fees, commissions or affiliate
revenue from any software vendor named in a report.

## Questions and answers

${FAQ.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Pages

- ${SITE_URL}/ — overview and demo line
- ${SITE_URL}/assessment — what the assessment covers and what is delivered
- ${SITE_URL}/about — who runs it
- ${SITE_URL}/book — scheduling
- ${SITE_URL}/legal — privacy and terms
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
