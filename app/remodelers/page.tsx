import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import ScoutProcess from "@/components/ScoutProcess";
import AssessmentCommitment from "@/components/AssessmentCommitment";
import { REMODELER_SIGNS } from "@/lib/launch-content";
import { TIERS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Remodeling Workflow Assessment | Missed Change Orders & Follow-Up",
  description: "Find gaps in change-order billing, estimate follow-up, scheduling, and job handoffs. Free 25-minute Scout assessment and human-reviewed written plan.",
  alternates: { canonical: "/remodelers" },
};

export default function RemodelersPage() {
  return (
    <>
      <section className="relative bg-np-navy text-white overflow-hidden">
        <div className="np-hero-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-28">
          <p className="np-eyebrow" style={{ color: "var(--np-rust)" }}>NextPlay for remodeling businesses</p>
          <h1 className="np-display mt-6 text-4xl md:text-6xl max-w-[22ch]">Seven places remodeling companies can lose money without noticing.</h1>
          <p className="mt-7 text-xl leading-relaxed text-np-on-navy-2 max-w-[58ch]">The work gets done. Does every approved change reach the invoice? Start with the handoffs between the estimate, the jobsite, and the office.</p>
          <div className="mt-8"><CTAButton label="Find your NextPlay" variant="on-navy" size="large" /></div>
          <p className="mt-4 text-sm text-np-on-navy-2">Free assessment. No obligation to buy implementation.</p>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-5 py-16">
        <p className="np-eyebrow">Anonymized Field Note / Remodeling</p>
        <h2 className="np-display mt-5 text-4xl md:text-5xl">$18,000 a year in unbilled changes.</h2>
        <p className="mt-6 text-lg leading-relaxed max-w-[70ch]">One assessment identified this estimated annual opportunity: changes were agreed on site and completed, but never added to the final invoice. This is an assessment estimate, not verified recovered revenue or a typical client result.</p>
        <Link href="/field-notes#finding-1" className="inline-block mt-6 underline underline-offset-4">Read the finding and its limits →</Link>
      </section>
      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-16">
          <h2 className="np-display text-3xl md:text-4xl">Check the handoffs, not just the tools.</h2>
          <p className="mt-5 max-w-[65ch] leading-relaxed">These seven checks are diagnostic prompts. Only the change-order example above is a quantified finding; the other checks are not claims about client losses.</p>
          <ol className="grid md:grid-cols-2 gap-5 mt-9">
            {REMODELER_SIGNS.map(([title, body], index) => (
              <li key={title} className="bg-white border border-np-rule p-7">
                <p className="np-label">0{index + 1} / Check</p>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-4 leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto px-5 py-16">
        <p className="np-eyebrow">Illustrative workflow—not a client result</p>
        <h2 className="np-display mt-5 text-3xl md:text-4xl">From field approval to invoice check.</h2>
        <ol className="grid md:grid-cols-3 gap-5 mt-8">
          {["Record and approve the change.", "Attach it to the job record.", "Reconcile completed changes before billing."].map((step, index) => (
            <li key={step} className="border-t border-np-rule py-5 text-xl"><span className="np-label block mb-4">0{index + 1}</span>{step}</li>
          ))}
        </ol>
        <p className="mt-5 leading-relaxed">Choose the owner of each handoff first. Then decide whether your existing tools can support it.</p>
        <Link href="/field-notes/missing-change-orders" className="inline-block mt-6 underline underline-offset-4">Read the change-order guide →</Link>
      </section>
      <ScoutProcess />
      <section className="max-w-[1200px] mx-auto px-5 py-16">
        <p className="np-eyebrow">Implementation is optional</p>
        <h2 className="np-display mt-5 text-3xl md:text-4xl">Keep the plan. Choose who builds it.</h2>
        <div className="grid md:grid-cols-3 gap-5 mt-8">
          {TIERS.map(tier => (
            <article key={tier.name} className="border border-np-rule p-7">
              <h3 className="text-2xl">{tier.name}</h3>
              <p className="np-display text-3xl mt-4">{tier.price === null ? "Custom quote" : `$${tier.price.toLocaleString()}`}</p>
              <p className="mt-4 leading-relaxed">{tier.summary}</p>
            </article>
          ))}
        </div>
        <AssessmentCommitment />
        <div className="mt-8"><CTAButton label="Start my free assessment" size="large" /></div>
      </section>
    </>
  );
}
