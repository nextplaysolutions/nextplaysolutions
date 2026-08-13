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

/** The founding cohort size. A bar to clear, not a discount. */
export const COHORT_SIZE = 6;

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
 * Post-cohort pricing. NOT live yet — the founding cohort is by selection and
 * carries no fee. When the cohort closes, set `LIVE` to true and the price
 * enters the structured data automatically.
 */
export const PRICING = {
  LIVE: false,
  currency: "USD",
  min: 1500,
  max: 3000,
} as const;

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

export const FOUNDERS = [
  {
    name: "Jordan Ross",
    role: "Co-founder",
    background: "Sales and operations",
    companies: ["LinkedIn", "Tesla"],
  },
  {
    name: "Ethan",
    role: "Co-founder",
    background: "Technology and product",
    companies: ["Meta", "Snapchat"],
  },
] as const;

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
    availability: "https://schema.org/LimitedAvailability",
    eligibleCustomerType: "Business",
    description: PRICING.LIVE
      ? "Flat fee. Scope and price confirmed on the call before any work begins."
      : `Currently by selection: ${COHORT_SIZE} businesses are being taken through the assessment before general launch.`,
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
    a: PRICING.LIVE
      ? `A flat fee between $${PRICING.min.toLocaleString()} and $${PRICING.max.toLocaleString()}, confirmed on the call before any work begins.`
      : `${COHORT_SIZE} businesses are being selected to go through the assessment before general launch. Scope and terms are confirmed on the call.`,
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
