/**
 * A real assessment, published with permission and anonymised.
 *
 * Source: report 2026-016, delivered August 2026 to a six-person residential
 * remodeling and flips business. The company name, the owner's name and one
 * employee's name have been removed. Every figure, finding and recommendation
 * is exactly as delivered — including the parts that tell the client not to
 * buy anything.
 *
 * Publishing this is the point: the site can describe the deliverable all day,
 * but a prospect deciding whether $1,500–$3,000 is worth it wants to see one.
 */

export const SAMPLE = {
  meta: {
    reportNumber: "2026-016",
    eyebrow: "AI Readiness Assessment — Residential Remodeling & Flips",
    preparedFor: "Six-person remodeling company",
    assessmentDate: "August 2026",
    reviewedBy: "Jordan & Ethan",
  },

  headline: "Where AI pays for itself",
  subhead:
    "Seven areas of the business reviewed. Nine opportunities found. Three worth starting this month, with the tools, the cost, and the order to do them in.",

  hero: {
    label: "Recoverable per year",
    figure: "$95k",
    detail:
      "Six working weeks of the owner's time, $18,000 of under-billed change orders, and two additional flips — against roughly $700 in tooling.",
  },

  intro:
    "This business runs six people across remodels, flips and four rentals, on HousePro with Claude already wired into it. The owner built and shipped his own time-tracking app. Nothing here is a knowledge problem. What we found is that the three things most worth doing are things he had already started and run out of week to finish.",

  quotes: [
    {
      text: "Our next goal is how do we get from one million to three million in revenue.",
      attrib: "The owner — on the plan",
    },
    {
      text: "Around eight to ten hours a week that I'm currently spending on marketing. And I wish that was twenty to twenty-five.",
      attrib: "— on where his time needs to go",
    },
    {
      text: "If we want to get to three million in revenue, there will be cracks. The follow-up will start deteriorating, and my sales conversion may not be as good because I'll just be too busy.",
      attrib: "— on what breaks at scale",
    },
  ],

  findings: [
    {
      title: "The two million you want to add runs through one person.",
      body: "At forty thousand a job, going from one million to three million is roughly fifty more remodels a year — about one more every week than you run now. Every appointment, bid, follow-up and change order currently goes through you.",
    },
    {
      title: "Under-billed change orders cost about eighteen thousand a year.",
      body: "Work gets agreed on site and billed later, or not at all. At current volume that is a five-figure leak. At three million it is a much larger one.",
    },
    {
      title: "You are not short on capability. You are short on finished work.",
      body: "You have already built one tool and started two more. The constraint is not knowing what to do — it is finding an uninterrupted week to finish what you started.",
    },
  ],

  diagnosis:
    "The plan asks for fifty more remodels a year, and every appointment, bid, follow-up and change order still runs through you. Nine and a half hours of your week go to desk work that sits between you and the marketing hours you said the growth depends on.",

  readiness: [
    { area: "Operations & project admin", readiness: 70, upside: 80, priority: "NOW" },
    { area: "Deal underwriting (flips)", readiness: 60, upside: 80, priority: "NOW" },
    { area: "Marketing & content", readiness: 50, upside: 80, priority: "NOW" },
    { area: "Change orders & margin", readiness: 60, upside: 70, priority: "NEXT" },
    { area: "Sales & lead follow-up", readiness: 40, upside: 80, priority: "NEXT" },
    { area: "Client communication", readiness: 50, upside: 60, priority: "NEXT" },
    { area: "Finance & admin", readiness: 60, upside: 50, priority: "LATER" },
  ],

  plays: [
    {
      number: "PLAY 01",
      title: "Finish the underwriting tool",
      value: "+$40,000 / yr",
      today:
        "You pull MLS listings and off-market deals from wholesalers, then underwrite each one by hand to decide whether it's worth an offer. You built half a tool to do this and haven't found a clear week to finish it.",
      withAi:
        "The build gets completed: feeds pulled, each property underwritten against your own criteria, and a draft offer put in front of you to approve or kill. You spend your time judging deals instead of assembling spreadsheets. You picked this one yourself when we asked which would move the needle most.",
      tool: "Your existing build, finished",
      cost: "~$0 incremental",
    },
    {
      number: "PLAY 02",
      title: "Change orders that can't slip",
      value: "+$18,000 / yr",
      today:
        "Extra work gets agreed in conversation on site. Pricing it and billing it happens later, when the week allows — and sometimes it doesn't.",
      withAi:
        "A hard gate in HousePro: no job proceeds on an unpriced change. Claude drafts the change order from the site note so pricing takes a minute instead of an evening.",
      tool: "HousePro change orders + Claude drafting",
      cost: "~$0 incremental",
    },
    {
      number: "PLAY 03",
      title: "Buy back a day a week at your desk",
      value: "+6 working weeks / yr",
      today:
        "Nine and a half hours a week of scheduling, bid formatting, invoicing and content sit between you and the marketing time the growth plan depends on.",
      withAi:
        "Your dashboard build finished, bid drafting automated, and content templated. The hours move from admin to the marketing you said you need twenty-five of.",
      tool: "Your dashboard build + Claude + Canva templates",
      cost: "~$60 / mo",
    },
  ],

  roadmap: [
    {
      weeks: "1–2",
      step: "Finish the underwriting tool.",
      note: "Your pick, and the closest to done.",
      doneWhen: "A deal underwrites end to end without you opening a spreadsheet",
      cost: "$0",
    },
    {
      weeks: "3–4",
      step: "Put a hard gate on change orders in HousePro.",
      note: "Before volume rises, not after.",
      doneWhen: "No job proceeds on an unpriced change",
      cost: "$0",
    },
    {
      weeks: "5–6",
      step: "Automate bid drafting and formatting.",
      note: "An hour a week now; several hours a week at three million.",
      doneWhen: "A bid goes out the same day it's quoted",
      cost: "~$60 / mo",
    },
  ],

  notWorthItYet: [
    {
      title: "The site work.",
      body: "You said it yourself and you were right — supply runs, walkthroughs after subs, and keeping deadlines are physical. Twenty to twenty-five hours a week of that is a people and process question, not a software one. The honest answer there is a second lead, not a tool.",
    },
    {
      title: "A CRM.",
      body: "You run about one appointment a week. At that volume a CRM is overhead, not leverage. Revisit it when the marketing hours land and lead flow actually rises.",
    },
  ],

  assumptions:
    "Owner time valued at $150/hour, staff at $31/hour derived from a stated $65,000 average. Working weeks are calculated at forty hours and rounded down. Hours and the change-order figure are the owner's own estimates. The underwriting figure assumes two additional flips a year at a stated $20,000 average gross profit per flip — it is the most speculative number in this report and the one most worth arguing with. Everything here is a finding and an estimate, not a guarantee.",
} as const;
