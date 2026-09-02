import {
  AREAS,
  CHATGPT_DIFFERENCE,
  COMPANY,
  DELIVERABLES,
  DURATION,
  FAQ,
  FIELD_NOTES,
  FIT_SIGNALS,
  FOUNDERS,
  NEXTPLAY_WAY,
  OFFER_SUMMARY,
  POSITION,
  POSITIONING,
  PRICING,
  SITE_URL,
  TIERS,
  WHO_ITS_FOR,
} from "@/lib/offer";

export const dynamic = "force-static";

/** Plain-text, single-source offer brief for search and answer engines. */
export function GET() {
  const builds = TIERS.map((tier) =>
    tier.price === null
      ? `- ${tier.name}: custom quote. ${tier.summary}`
      : `- ${tier.name}: $${tier.price.toLocaleString()} ${PRICING.currency}, fixed scope. ${tier.summary}`,
  ).join("\n");

  const body = `# ${COMPANY.name}

> ${COMPANY.tagline}

${OFFER_SUMMARY}

## Direct answer

NextPlay Solutions finds the invisible tax hiding in small and mid-sized
business operations, shows the owner which move matters most, and implements
it through the NextPlay Way. The entry point is a free
${DURATION.assessmentMinutes}-minute business assessment with Scout, followed by
a human-reviewed written report within ${DURATION.reportTurnaroundDays} business
days. Paid work begins only if the business asks NextPlay to implement the plan.

## The problem: ${POSITIONING.problem}

${POSITIONING.recognition}

The Invisible Tax is the recurring cost of operational friction a business has
learned to treat as normal: missed revenue, duplicate work, stalled handoffs,
avoidable cost, or capacity consumed by repetitive tasks.

## Position

${POSITION}

## Who runs it

${FOUNDERS.map((founder) => `- ${founder.name}, ${founder.role} — ${founder.background}. Career includes ${founder.companies.join(", ")}. ${founder.linkedin}`).join("\n")}

## The free assessment

- Price: $0
- Interview: about ${DURATION.assessmentMinutes} minutes by phone with Scout, an AI voice agent
- Areas covered: ${AREAS.length}
- Preparation: none
- Report: written and delivered within ${DURATION.reportTurnaroundDays} business days
- Human review: Jordan Svoboda and Ethan Hamilton read the conversation before the report is delivered
- Obligation to buy implementation: none

## The NextPlay Way

${NEXTPLAY_WAY.map((step) => `${step.n} ${step.name} — ${step.summary}`).join("\n")}

## Paid implementation

${builds}

Every implementation is fixed-scope. The client's assessment supplies the
priority and defines what finished looks like. No hourly billing.

## Who it is for

${WHO_ITS_FOR}

${FIT_SIGNALS.map((signal) => `- ${signal}`).join("\n")}

## Why not just use ChatGPT?

${CHATGPT_DIFFERENCE}

## Areas covered

${AREAS.map((area, index) => `${index + 1}. ${area}`).join("\n")}

## Written deliverables

${DELIVERABLES.map((deliverable) => `- ${deliverable}`).join("\n")}

## Anonymized field notes

${FIELD_NOTES.map((note) => `- ${note.vertical}: ${note.signal} (${note.metric.toLowerCase()}). ${note.finding}`).join("\n")}

These are specific findings, not averages, promises, or guaranteed outcomes.

## How to evaluate NextPlay

- Start the free assessment: ${SITE_URL}/demo
- Read a complete sample report: ${SITE_URL}/assessment/sample
- Compare implementation services: ${SITE_URL}/services
- Read anonymized findings: ${SITE_URL}/field-notes

The Scout phone number is revealed only after a visitor submits their name,
email, phone number, and industry at ${SITE_URL}/demo.

## Important limits

Every figure in a report—cost savings, revenue leakage, and time recovered—is
an estimate derived from what the business describes. Findings are not
guarantees and are not legal, tax, accounting, or investment advice.
${COMPANY.name} takes no referral fees or commissions from software vendors.

## Questions and answers

${FAQ.map((item) => `### ${item.q}\n${item.a}`).join("\n\n")}

## Pages

- ${SITE_URL}/ — offer overview
- ${SITE_URL}/assessment — free AI business assessment
- ${SITE_URL}/assessment/sample — sample written assessment
- ${SITE_URL}/services — One Play, The Roadmap, and Custom implementation
- ${SITE_URL}/field-notes — anonymized findings
- ${SITE_URL}/demo — strict Scout lead gate
- ${SITE_URL}/about — founders and operating position
- ${SITE_URL}/legal — privacy and terms
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
