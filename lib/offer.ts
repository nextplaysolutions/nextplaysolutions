/**
 * THE OFFER — single source of truth.
 *
 * Everything about what NextPlay sells lives here: the visible page copy, the
 * schema.org JSON-LD, /llms.txt and the sitemap all read from this file. One
 * definition, so the human-readable offer and the machine-readable offer can
 * never drift apart.
 *
 * Why this exists: AI agents are starting to search, evaluate and transact on
 * behalf of the people who own them. An offer an agent cannot parse is an offer
 * it cannot choose. So the terms below are stated plainly — nouns, numbers,
 * durations, and one unambiguous way to acquire the service.
 *
 * Copy rules that govern this file (brand guidelines §06):
 *   · Always "assessment", never "audit".
 *   · Never devalue — no price-anchoring, no cheapness claims.
 *   · Selection, not favour — never lead with "free".
 *   · Specific over grand — numbers and nouns, not adjectives.
 *   · Findings, not promises — figures are estimates, never guarantees.
 */

export const SITE_URL = "https://nextplaysolutions.ai";

export const COMPANY = {
  legalName: "NextPlay Solutions, LLC",
  name: "NextPlay Solutions",
  tagline: "Your unfair AI advantage",
  email: "hello@nextplaysolutions.ai",
} as const;

/* Founding-cohort framing removed 2026-08-14 — the site now sells the
   assessment as a standard paid engagement. Do not reintroduce cohort or
   "free" language. */

/** Live phone lines. These are different agents — do not conflate them. */
export const PHONE = {
  /** 4-minute demo: a visitor can talk to Scout and hear the product. */
  demo: "+1 402 940 7602",
  demoE164: "+14029407602",
  /** The full 25-minute assessment agent. */
  assessment: "+1 402 407 2540",
  assessmentE164: "+14024072540",
} as const;

/** The seven areas Scout covers. */
export const AREAS = [
  "Business overview",
  "Operations",
  "Sales",
  "Customer service",
  "Marketing",
  "Finance and admin",
  "HR",
] as const;

/** What the client receives. Deliverables, stated as nouns. */
export const DELIVERABLES = [
  "A written assessment of all seven areas, specific to how the business actually runs",
  "The opportunities found, ranked by impact and by effort to implement",
  "Named tools with their real current pricing — not categories",
  "An implementation order: what to do first, what to skip, and why",
  "Estimated operational cost savings and estimated revenue leakage, shown separately",
] as const;

export const DURATION = {
  demoMinutes: 4,
  assessmentMinutes: 25,
  /** Business days from call to delivered report. */
  reportTurnaroundDays: 3,
} as const;

/**
 * Public pricing. Published 2026-08-19 (Jordan's call), replacing the earlier
 * "quoted at booking" position and the internal $1,500–$3,000 range.
 *
 * The shape is deliberate: a low, fixed assessment fee that is CREDITED
 * against a build, then fixed-scope builds. It is not a monthly retainer —
 * both founders still hold full-time jobs, and selling recurring hours before
 * delivering a single month is how a two-person shop drowns. Ongoing support
 * exists but is quoted privately after a build, and is deliberately NOT on
 * the site until there is delivery data behind it.
 *
 * Scope is defined by the client's own report, never by a date. Every roadmap
 * step in a report carries a "done when" line the client has already read and
 * agreed is reasonable — that is the acceptance criterion. Do not add duration
 * promises here; a missed date spends the trust the report earned.
 */
export const PRICING = {
  currency: "USD",
  /** The assessment. Credited in full against a build if they proceed. */
  assessment: 500,
} as const;

/**
 * What comes after the report. Names reuse the vocabulary of the report
 * itself ("plays", "roadmap") so the pricing reads as the next page of the
 * document rather than a sales sheet. `price: null` means quoted case by case.
 *
 * ⚠️ "Minimum Offer" was considered and rejected as a tier name: it describes
 * our constraint rather than the client's outcome, anchors on the floor, and
 * devalues — the same reason "Enterprise AI strategy. Small business price."
 * was deleted. Don't reintroduce it.
 */
export const TIERS = [
  {
    name: "One play",
    price: 2500,
    summary:
      "We implement the single highest-impact opportunity from your report, end to end. Done when your report says it is done.",
  },
  {
    name: "The roadmap",
    price: 5000,
    summary:
      "Everything your report marks as worth doing now, in the order it recommends.",
  },
  {
    name: "Custom",
    price: null,
    summary:
      "Quoted after the assessment, for larger or unusual scope. Same rule: the scope is written down before any work begins.",
  },
] as const;

/** The one sentence used everywhere pricing is asked about. */
export const PRICING_STATEMENT =
  `The assessment is $${PRICING.assessment.toLocaleString()}. ` +
  `If you go ahead with a build afterwards, that $${PRICING.assessment.toLocaleString()} comes off the first invoice. ` +
  `Builds are fixed-scope and quoted from your own report — $${TIERS[0].price!.toLocaleString()} for one play, ` +
  `$${TIERS[1].price!.toLocaleString()} for the roadmap, or custom for larger scope. No hourly billing.`;

/**
 * The offer in one sentence. If an agent reads nothing else, it reads this.
 * Keep it declarative: what it is, how long, what comes back, what it costs.
 */
export const OFFER_SUMMARY =
  "NextPlay Solutions runs an AI Readiness Assessment for small and mid-sized businesses. " +
  "A voice agent called Scout interviews the owner for about 25 minutes across seven areas of the business. " +
  "Within three business days the business receives a written report naming the specific AI opportunities found, " +
  "the tools to use with their real current pricing, and the order to implement them in. " +
  `The assessment costs $${PRICING.assessment.toLocaleString()} ${PRICING.currency}, credited against a build if the business goes ahead with one. ` +
  "Figures in the report are estimates and findings, not guarantees.";

export const WHO_ITS_FOR =
  "Small and mid-sized businesses with no CTO and no dedicated technical staff.";

/**
 * Company attributions verified against both LinkedIn work histories (Aug 2026).
 * Ethan: LinkedIn (4y10m), Snap, Tesla — talent and go-to-market.
 * Jordan: LinkedIn (8y1m), Meta (3y1m) — trust, safety and risk leadership.
 *
 * ⚠️ Two rules here, both learned the hard way:
 *
 *  1. Paylocity is Ethan's CURRENT employer and was deliberately removed from
 *     this list on 2026-08-19 (Jordan's call). Do not add it back.
 *  2. Jordan is at LinkedIn today, so this list still mixes current and former
 *     employers. Word it neutrally wherever it renders — "Career:", "career
 *     includes". Never "Previously" or "ex-". It shipped as "Previously" once;
 *     misstating a founder's employment is a problem for them at work, not a
 *     copy nit.
 */
export const FOUNDERS = [
  {
    name: "Ethan Hamilton",
    role: "Co-founder",
    background: "Talent, sales and go-to-market",
    companies: ["LinkedIn", "Snap", "Tesla"],
    linkedin: "https://www.linkedin.com/in/ethanhamiltonlinkedin/",
  },
  {
    name: "Jordan Svoboda",
    role: "Co-founder",
    background: "Operations, trust and risk",
    companies: ["LinkedIn", "Meta"],
    linkedin: "https://www.linkedin.com/in/jordansvoboda/",
  },
] as const;

/**
 * Why the company exists. Stated plainly because it is the actual
 * differentiator, not a values statement: the same technology can be pointed
 * at cutting people or at freeing them, and we point it at the second.
 */
export const POSITION =
  "NextPlay exists to make small teams harder to replace, not easier to cut. " +
  "A fifteen-person business has no slack to trim — it has people doing three jobs each. " +
  "The assessment identifies which of those jobs software should take, so the people can return to the work only they can do.";

/* -------------------------------------------------------------------------
   Structured data. schema.org vocabulary, so crawlers and purchasing agents
   parse the same terms a human reads on the page.
------------------------------------------------------------------------- */

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY.name,
  legalName: COMPANY.legalName,
  url: SITE_URL,
  slogan: COMPANY.tagline,
  description: OFFER_SUMMARY,
  email: COMPANY.email,
  telephone: PHONE.assessmentE164,
  areaServed: { "@type": "Country", name: "United States" },
  founder: FOUNDERS.map((f) => ({
    "@type": "Person",
    name: f.name,
    jobTitle: f.role,
    sameAs: f.linkedin,
  })),
  knowsAbout: [
    "AI readiness assessment",
    "Small business operations",
    "AI tool selection",
    "Business process automation",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Product demonstration",
      url: `${SITE_URL}/demo`,
      description: `A ${DURATION.demoMinutes}-minute conversation with Scout, the assessment voice agent. Request the line at ${SITE_URL}/demo — no booking required.`,
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: COMPANY.email,
      availableLanguage: "English",
    },
  ],
};

export const SERVICE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/assessment#service`,
  name: "AI Readiness Assessment",
  serviceType: "Business technology assessment",
  provider: { "@id": `${SITE_URL}/#organization` },
  description: OFFER_SUMMARY,
  audience: {
    "@type": "BusinessAudience",
    audienceType: WHO_ITS_FOR,
  },
  areaServed: { "@type": "Country", name: "United States" },
  termsOfService: `${SITE_URL}/legal`,
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    description:
      "Scout is an automated voice agent and takes assessment calls outside normal business hours.",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Assessment deliverables",
    itemListElement: DELIVERABLES.map((d, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: { "@type": "Service", name: d },
    })),
  },
  /**
   * A real price, not a range and not "contact us". An agent evaluating this
   * on a business's behalf cannot choose an offer it cannot price.
   */
  offers: {
    "@type": "Offer",
    name: "AI Readiness Assessment",
    url: `${SITE_URL}/book`,
    availability: "https://schema.org/InStock",
    eligibleCustomerType: "Business",
    description: PRICING_STATEMENT,
    price: PRICING.assessment,
    priceCurrency: PRICING.currency,
    availableAtOrFrom: { "@id": `${SITE_URL}/#organization` },
  },
};

/**
 * The builds that follow an assessment, as their own catalog so an agent can
 * see the whole ladder rather than just the entry fee.
 */
export const BUILDS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE_URL}/assessment#builds`,
  name: "Implementation builds",
  description: `Fixed-scope builds quoted from the client's own assessment report. The $${PRICING.assessment.toLocaleString()} assessment fee is credited against the first invoice.`,
  itemListElement: TIERS.map((t, i) => ({
    "@type": "Offer",
    position: i + 1,
    name: t.name,
    description: t.summary,
    eligibleCustomerType: "Business",
    availability: "https://schema.org/InStock",
    ...(t.price === null
      ? {}
      : { price: t.price, priceCurrency: PRICING.currency }),
    itemOffered: {
      "@type": "Service",
      name: `${t.name} — implementation`,
      provider: { "@id": `${SITE_URL}/#organization` },
    },
  })),
};

/** Questions an evaluating agent (or a skeptical owner) actually asks. */
export const FAQ = [
  {
    q: "What is the AI Readiness Assessment?",
    a: OFFER_SUMMARY,
  },
  {
    q: "How long does the assessment call take?",
    a: `About ${DURATION.assessmentMinutes} minutes. It covers seven areas of the business: ${AREAS.join(", ").toLowerCase()}. No preparation is needed.`,
  },
  {
    q: "What do I receive afterwards?",
    a: `A written report within ${DURATION.reportTurnaroundDays} business days containing: ${DELIVERABLES.join("; ")}.`,
  },
  {
    q: "Can I try it before booking?",
    a: `Yes. Go to ${SITE_URL}/demo, tell us who you are and what kind of business you run, and we will open the line — a ${DURATION.demoMinutes}-minute conversation with Scout, no booking and no commitment.`,
  },
  {
    q: "Who is it for?",
    a: WHO_ITS_FOR,
  },
  {
    q: "What does it cost?",
    a: PRICING_STATEMENT,
  },
  {
    q: "What happens after the report — do you do the work too?",
    a:
      "Yes, if you want it. The report is yours either way and it is written so you can run it yourself. If you would rather not, we build it: " +
      TIERS.map((t) =>
        t.price === null
          ? `${t.name} — ${t.summary}`
          : `${t.name}, $${t.price.toLocaleString()} — ${t.summary}`,
      ).join(" ") +
      ` The $${PRICING.assessment.toLocaleString()} assessment fee comes off the first invoice. Scope is taken from your own report, so what counts as finished is written down before anyone starts.`,
  },
  {
    q: "Are the savings figures guaranteed?",
    a: "No. Every figure in the report is an estimate and a finding based on what the business describes during the call. They are not guarantees.",
  },
  {
    q: "Why not just ask ChatGPT this myself?",
    a: "You can, and for a general list of tools it will do a reasonable job. The difference is what it will not tell you: what to skip. In one assessment of a six-person remodeling company we recommended against a CRM — at one appointment a week it is overhead, not leverage — and against automating the site work, because twenty hours a week of supply runs and walkthroughs is a hiring question, not a software one. That report was written from a recorded conversation about that specific business, with both founders reading the transcript, and every figure in it came from the owner's own numbers. A general tool has no reason to talk you out of anything.",
  },
] as const;

export const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
