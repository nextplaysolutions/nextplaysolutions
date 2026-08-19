import {
  AREAS,
  COMPANY,
  DELIVERABLES,
  DURATION,
  FAQ,
  PHONE,
  PRICING,
  TIERS,
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
  const price = `$${PRICING.assessment.toLocaleString()} ${PRICING.currency}, flat, charged at booking. Credited in full against a build if the business proceeds with one.`;

  const builds = TIERS.map((t) =>
    t.price === null
      ? `- ${t.name}: quoted case by case. ${t.summary}`
      : `- ${t.name}: $${t.price.toLocaleString()} ${PRICING.currency}, fixed scope. ${t.summary}`,
  ).join("\n");

  const body = `# ${COMPANY.name}

> ${COMPANY.tagline}

${OFFER_SUMMARY}

## Position

${POSITION}

## Who runs it

${FOUNDERS.map((f) => `- ${f.name}, ${f.role} — ${f.background}. Career: ${f.companies.join(", ")}. ${f.linkedin}`).join("\n")}

## What is sold

- Service: AI Readiness Assessment
- Provider: ${COMPANY.legalName}
- Delivery: Remote, United States
- Interview: ~${DURATION.assessmentMinutes} minutes by phone with an AI voice agent named Scout
- Report: written, delivered within ${DURATION.reportTurnaroundDays} business days
- Reviewed by: the two founders read every transcript before a report is written
- Price: ${price}

## What comes after the report

Implementation is optional and separately priced. The report is written so the
business can run it without us. If it would rather not, we build it:

${builds}

Scope for every build is taken from the client's own report, which states what
finished looks like for each step. No hourly billing, no retainer sold before a
build has been delivered. Ongoing support after a build is quoted privately.

## Who it is for

${WHO_ITS_FOR}

## The seven areas covered

${AREAS.map((a, i) => `${i + 1}. ${a}`).join("\n")}

## What the client receives

${DELIVERABLES.map((d) => `- ${d}`).join("\n")}

## How to evaluate this before committing

Anyone — human or agent acting for one — can hear Scout before committing.
Request the demo line at ${SITE_URL}/demo by giving a name, email, phone number
and type of business; the number is shown immediately after. The call runs about
${DURATION.demoMinutes} minutes and requires no booking.

- Request the demo (${DURATION.demoMinutes} min): ${SITE_URL}/demo
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
