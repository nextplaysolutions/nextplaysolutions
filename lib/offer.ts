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
 * Copy rules that govern this file:
 *   · Always "assessment", never "audit".
 *   · The assessment is free; implementation is fixed-scope paid work.
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

/** The positioning spine used across human and machine-readable surfaces. */
export const POSITIONING = {
  problem: "The Invisible Tax",
  headline: "Your business is paying an invisible tax.",
  recognition:
    "Unbilled work. Leads nobody followed up on. Information entered twice. Software nobody uses.",
  master:
    "NextPlay finds the invisible tax hiding in your operation, shows you which move matters most, and implements it through the NextPlay Way.",
  promise: COMPANY.tagline,
} as const;

/** Live phone lines. These are different agents — do not conflate them. */
export const PHONE = {
  /** Legacy short demo line. Kept off-site; public Try Scout reveals assessment. */
  demo: "+1 402 940 7602",
  demoE164: "+14029407602",
  /** The full 25-minute Scout assessment, revealed after lead capture. */
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
  "A free written assessment of all seven areas, specific to how the business actually runs",
  "The opportunities found, ranked by impact and by effort to implement",
  "Named tools with their real current pricing — not categories",
  "An implementation order: what to do first, what to skip, and why",
  "Estimated operational cost savings and estimated revenue leakage, shown separately",
] as const;

export const DURATION = {
  assessmentMinutes: 25,
  /** Business days from call to delivered report. */
  reportTurnaroundDays: 3,
} as const;

/**
 * Public implementation pricing. The full assessment is free; paid work
 * begins only when a business asks NextPlay to implement a recommendation.
 *
 * Scope is defined by the client's own report, never by a date. Every roadmap
 * step in a report carries a "done when" line the client has already read and
 * agreed is reasonable — that is the acceptance criterion. Do not add duration
 * promises here; a missed date spends the trust the report earned.
 */
export const PRICING = {
  currency: "USD",
} as const;

/**
 * What comes after the report. Names reuse the vocabulary of the report
 * itself ("plays", "roadmap") so the pricing reads as the next page of the
 * document rather than a sales sheet. `price: null` means quoted case by case.
 *
 * One Play is the minimum paid engagement, but the client-facing name remains
 * outcome-led. Do not label the tier "Minimum" or "Basic" on the site.
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
  `The full ${DURATION.assessmentMinutes}-minute Scout assessment and written report are free. ` +
  `Implementation is fixed-scope: $${TIERS[0].price!.toLocaleString()} for One Play, ` +
  `$${TIERS[1].price!.toLocaleString()} for The Roadmap, or a custom quote for larger scope. No hourly billing.`;

/**
 * The offer in one sentence. If an agent reads nothing else, it reads this.
 * Keep it declarative: what it is, how long, what comes back, what it costs.
 */
export const OFFER_SUMMARY =
  "NextPlay Solutions finds the invisible tax hiding in small and mid-sized business operations, shows the owner which move matters most, and implements it through the NextPlay Way. " +
  "A voice agent called Scout interviews the owner for about 25 minutes across seven areas of the business. " +
  "Jordan Svoboda and Ethan Hamilton review the conversation, and within three business days the business receives a free written assessment naming the specific opportunities found, " +
  "the tools to use with their real current pricing, what to skip, and the order to implement the highest-value moves. " +
  "If the business wants help executing the plan, NextPlay implements One Play, The Roadmap, or a custom scope. " +
  "Figures in the report are estimates and findings, not guarantees.";

/** The four-part method used in every assessment and implementation. */
export const NEXTPLAY_WAY = [
  {
    n: "01",
    name: "Map",
    summary:
      `Scout walks the seven areas of the business in a ${DURATION.assessmentMinutes}-minute call. No preparation, no jargon.`,
  },
  {
    n: "02",
    name: "Score",
    summary:
      "Each opportunity is scored for readiness, upside, effort, and operational fit.",
  },
  {
    n: "03",
    name: "Prioritize",
    summary:
      "The noise is reduced to the three moves most likely to pay back and hold up in the real business.",
  },
  {
    n: "04",
    name: "Play",
    summary:
      "The chosen move becomes a fixed-scope build with named tools, an owner, a price, and a clear definition of done.",
  },
] as const;

/** Permission-cleared, anonymized findings. No invented values. */
export const FIELD_NOTES = [
  {
    vertical: "Remodeling",
    signal: "$18,000 / year",
    metric: "Estimated annual value identified",
    finding:
      "Change orders were being agreed on site, completed, and never added to the final invoice.",
    surfaced: "Surfaced during the Scout conversation",
  },
  {
    vertical: "M&A advisory",
    signal: "Weeks stalled",
    metric: "Operational delay observed",
    finding:
      "Deals were waiting on client paperwork while the cost of that delay remained unpriced and largely invisible.",
    surfaced: "The leak was not the work. It was the waiting.",
  },
  {
    vertical: "Contracting",
    signal: "CRM: not yet",
    metric: "Avoided purchase",
    finding:
      "At roughly one appointment a week, a new CRM would have added overhead without recovering meaningful revenue.",
    surfaced: "The recommendation was to skip the software.",
  },
] as const;

export const QUIET_LEAKS = [
  { vertical: "Construction", leak: "Change orders completed but never billed" },
  { vertical: "Mortgage & lending", leak: "Files stalled while documents are chased by hand" },
  { vertical: "Professional services", leak: "Specialists spending billable hours on data entry" },
  { vertical: "Local services", leak: "Referrals disappearing inside text threads" },
] as const;

export const WHO_ITS_FOR =
  "Small and mid-sized businesses with real operating complexity, no CTO or automation team, and a recurring workflow problem worth solving.";

export const FIT_SIGNALS = [
  "Four or more people—or a smaller team with meaningful recurring volume",
  "Recurring admin, handoffs, missed follow-up, unbilled work, or fragmented systems",
  "A decision-maker willing to change a process and name an internal owner",
  "An opportunity that can reasonably justify a $2,500 minimum implementation",
] as const;

export const CHATGPT_DIFFERENCE =
  "ChatGPT answers the question you ask. NextPlay determines which question matters, grounds the answer in how your business actually runs, compares the alternatives, tells you what not to buy, and can implement the move.";

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
    "The Invisible Tax in business operations",
    "AI business assessment",
    "AI business optimization",
    "AI implementation",
    "Small business operations",
    "AI tool selection",
    "Business process automation",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Product demonstration",
      url: `${SITE_URL}/demo`,
      description: `A free ${DURATION.assessmentMinutes}-minute business assessment with Scout. Request the line at ${SITE_URL}/demo.`,
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
  name: "Free AI Business Assessment",
  serviceType: "AI business assessment and optimization strategy",
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
   * The assessment is genuinely free. Paid implementation is listed in the
   * separate build catalog below.
   */
  offers: {
    "@type": "Offer",
    name: "Free AI Business Assessment",
    url: `${SITE_URL}/demo`,
    availability: "https://schema.org/InStock",
    eligibleCustomerType: "Business",
    description: PRICING_STATEMENT,
    price: 0,
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
  description: "Fixed-scope AI implementation based on the client's free written assessment.",
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
    q: "What problem does NextPlay Solutions solve?",
    a: `${POSITIONING.master} The invisible tax often looks like unbilled work, missed follow-up, duplicate data entry, stalled handoffs, or software the team does not use.`,
  },
  {
    q: "What is the free AI Business Assessment?",
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
    a: `Yes. Go to ${SITE_URL}/demo, tell us who you are and what kind of business you run, and we will open the line for the full ${DURATION.assessmentMinutes}-minute Scout assessment. The written report is free and there is no obligation to buy implementation.`,
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
      " The assessment and report are free. Scope is taken from your own report, so what counts as finished is written down before anyone starts.",
  },
  {
    q: "Are the savings figures guaranteed?",
    a: "No. Every figure in the report is an estimate and a finding based on what the business describes during the call. They are not guarantees.",
  },
  {
    q: "Why not just ask ChatGPT this myself?",
    a: `${CHATGPT_DIFFERENCE} For example, one assessment recommended against a CRM because the business did not have enough lead volume for the added system to pay back.`,
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
