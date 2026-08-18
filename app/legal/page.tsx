import type { Metadata } from "next";
import { COMPANY, DURATION, PHONE } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Privacy practices and terms of use for NextPlay Solutions, LLC.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    id: "privacy",
    label: "Privacy",
    heading: "What we collect and why",
    blocks: [
      {
        h: "Booking details",
        p: "When you book a call we collect your name, email address, phone number and business name through our scheduling provider. We use them to run the assessment and to send you the report. We do not sell them and we do not share them with tool vendors.",
      },
      {
        h: "Assessment calls",
        p: `Assessment calls are recorded and transcribed so the report can be written from what was actually said. Scout states this at the start of the call. If you would rather not be recorded, tell us before booking and we will arrange the conversation differently.`,
      },
      {
        h: "The demo line",
        p: `Calls to the demo line (${PHONE.demo}) are handled by an automated agent. We do not ask for or retain personal details from the call itself.`,
      },
      {
        h: "The demo request form",
        p: "If you reach our demo page through a link we shared, we ask for your name, email address, phone number and type of business before showing you the number. We keep those details so we can follow up once about your demo. We do not sell them and we do not add you to a mailing list.",
      },
      {
        h: "The chat on this site",
        p: `The chat is answered by an AI assistant. If you ask us to get in touch and give it your details, we save them along with a short note about what you asked, so whoever follows up already knows the context. If you would rather not leave details, the chat still answers questions without them.`,
      },
      {
        h: "Knowing which link you came from",
        p: "When you arrive from a link we shared, we store a short label for that link in your browser for thirty days — for example the name of the person who sent it. It holds no personal information, it is only readable by this site, and its only job is telling us which of our own outreach is working. We use no advertising or third-party tracking cookies.",
      },
      {
        h: "Your business information",
        p: "What you tell us during an assessment stays between you and us. We do not use one client's operational detail in another client's report. If we ever want to reference your business publicly, we will ask first and you can say no.",
      },
      {
        h: "Deletion",
        p: `Email ${COMPANY.email} and we will delete your recording, transcript and contact record. No reason needed.`,
      },
    ],
  },
  {
    id: "terms",
    label: "Terms",
    heading: "Terms of use",
    blocks: [
      {
        h: "What the assessment is",
        p: `The assessment is a written analysis of AI opportunities in your business, delivered within ${DURATION.reportTurnaroundDays} business days of the call. It covers seven areas of your operation and recommends specific tools with their prices at the time of writing.`,
      },
      {
        h: "Estimates, not guarantees",
        p: "Every figure in the report — cost savings, revenue leakage, time recovered — is an estimate derived from what you described during the call. They are findings, not warranties. Actual results depend on what you implement, how you implement it, and conditions we cannot see. Nothing in the report should be read as a promise of a particular financial outcome.",
      },
      {
        h: "Not professional advice",
        p: "The report is operational analysis. It is not legal, tax, accounting, investment or employment advice. Decisions with legal or financial consequence should go past your own advisors before you act on them.",
      },
      {
        h: "Third-party tools",
        p: "We recommend software we do not build or control. Prices, features and terms change without notice. We take no referral fees, commissions or affiliate revenue from any vendor named in a report. Your relationship with any tool you adopt is between you and that vendor.",
      },
      {
        h: "Your report is yours",
        p: "You own the report we deliver and may share it inside your business or with your advisors as you see fit.",
      },
    ],
  },
];

export default function LegalPage() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 pt-20 pb-14 md:pt-28">
        <p className="np-eyebrow">Legal</p>
        <h1 className="np-display mt-6 text-[2.5rem] md:text-[3.25rem] text-np-navy max-w-[18ch]">
          Privacy and terms
        </h1>
        <p className="mt-7 text-lg font-light leading-[1.55] text-np-body max-w-[56ch]">
          Written plainly, because a document you can&rsquo;t read protects
          nobody. Questions go to{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="text-np-navy font-medium hover:text-np-rust transition-colors"
          >
            {COMPANY.email}
          </a>
          .
        </p>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="max-w-[1200px] mx-auto px-5 pb-16">
          <div className="np-section-rule pb-3 mb-8">
            <span className="np-label">{s.label}</span>
          </div>
          <h2 className="text-[1.75rem] font-light text-np-navy mb-8">
            {s.heading}
          </h2>
          <div className="max-w-[68ch] flex flex-col">
            {s.blocks.map((b) => (
              <div key={b.h} className="py-6 border-b border-np-rule">
                <h3 className="text-[1.0625rem] font-medium text-np-navy">
                  {b.h}
                </h3>
                <p className="mt-3 leading-relaxed text-np-body font-light">
                  {b.p}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-[1200px] mx-auto px-5 pb-24">
        <p className="np-label max-w-[68ch] leading-relaxed">
          {COMPANY.legalName} · Nebraska, United States · These terms are
          governed by the laws of the State of Nebraska.
        </p>
      </section>
    </>
  );
}
