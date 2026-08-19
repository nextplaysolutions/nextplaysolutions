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
 * Public pricing. Jordan's call (2026-08-14): no dollar figures on the site
 * yet — the fee is quoted at booking and confirmed before any work begins.
 * When he's ready to publish numbers, set `LIVE` to true and the range enters
 * the page copy, FAQ, llms.txt and structured data automatically.
 */
export const PRICING = {
  LIVE: false,
  currency: "USD",
  min: 1500,
  max: 3000,
} as const;

/** The one sentence used everywhere pricing is asked about. */
export const PRICING_STATEMENT = PRICING.LIVE
  ? `A flat fee between $${PRICING.min.toLocaleString()} and $${PRICING.max.toLocaleString()}, confirmed before any work begins.`
  : "A flat fee, quoted when you book and confirmed before any work begins. No hourly billing, no retainer.";

/**
 * The offer in one sentence. If an agent reads nothing else, it reads this.
 * Keep it declarative: what it is, how long, what comes back, who it's for.
 */
export const OFFER_SUMMARY =
  "NextPlay Solutions runs an AI Readiness Assessment for small and mid-sized businesses. " +
  "A voice agent called Scout interviews the owner for about 25 minutes across seven areas of the business. " +
  "Within three business days the business receives a written report naming the specific AI opportunities found, " +
  "the tools to use with their real current pricing, and the order to implement them in. " +
  "Figures in the report are estimates and findings, not guarantees.";

export const WHO_ITS_FOR =
  "Small and mid-sized businesses with no CTO and no dedicated technical staff.";

/**
 * Company attributions verified against both LinkedIn work histories (Aug 2026).
 * Ethan: LinkedIn (4y10m), Snap, Tesla, Paylocity — talent and go-to-market.
 * Jordan: LinkedIn (8y1m), Meta (3y1m) — trust, safety and risk leadership.
 * The four-company claim is accurate; the earlier per-person split was not.
 *
 * ⚠️ These lists mix CURRENT and former employers — Ethan is at Paylocity and
 * Jordan is at LinkedIn today. Anywhere this renders, word it neutrally
 * ("Career:", "career includes"). Never "Previously" or "ex-": both founders
 * hold these jobs, and misstating that is a problem for them at work, not a
 * copy nit. Fixed 2026-08-19 after it shipped that way.
 */
export const FOUNDERS = [
  {
    name: "Ethan Hamilton",
    role: "Co-founder",
    background: "Talent, sales and go-to-market",
    companies: ["LinkedIn", "Snap", "Tesla", "Paylocity"],
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
      telephone: PHONE.demoE164,
      description: `A ${DURATION.demoMinutes}-minute conversation with Scout, the assessment voice agent. No booking required.`,
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
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/book`,
    availability: "https://schema.org/InStock",
    eligibleCustomerType: "Business",
    description: PRICING_STATEMENT,
    ...(PRICING.LIVE
      ? {
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: PRICING.currency,
            minPrice: PRICING.min,
            maxPrice: PRICING.max,
          },
        }
      : {}),
    availableAtOrFrom: { "@id": `${SITE_URL}/#organization` },
  },
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
    a: `Yes. Call ${PHONE.demo} for a ${DURATION.demoMinutes}-minute conversation with Scout. No booking and no details required.`,
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
    q: "Are the savings figures guaranteed?",
    a: "No. Every figure in the report is an estimate and a finding based on what the business describes during the call. They are not guarantees.",
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
