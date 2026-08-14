import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import DemoScout from "@/components/DemoScout";
import Testimonials from "@/components/Testimonials";
import {
  AREAS,
  DELIVERABLES,
  DURATION,
  FAQ,
  FAQ_JSONLD,
  SERVICE_JSONLD,
} from "@/lib/offer";

export const metadata: Metadata = {
  title: "The Assessment",
  description: `Seven areas of your business reviewed in ${DURATION.assessmentMinutes} minutes. A written report in ${DURATION.reportTurnaroundDays} business days naming the tools, their real prices, and the order to implement them.`,
  alternates: { canonical: "/assessment" },
};

const stages = [
  {
    n: "01",
    label: `${DURATION.assessmentMinutes} minutes, by phone`,
    title: "Scout interviews you",
    body: "Scout is a voice agent. It works through seven areas of the business and asks follow-up questions when an answer opens something up. There is nothing to prepare and no form to fill in first.",
    points: [
      "Answer the way you'd explain it to a colleague",
      "Plain questions — no technical vocabulary",
      "Scout takes calls outside business hours",
    ],
  },
  {
    n: "02",
    label: "Reviewed by hand",
    title: "We read the transcript",
    body: "Scout runs the interview; we write the report. Jordan and Ethan read every transcript and decide what actually matters for your operation. No report is generated and sent unread.",
    points: [
      "Findings weighed against how your business really runs",
      "Opportunities that don't pay for themselves get cut",
      "We say where AI isn't worth it yet",
    ],
  },
  {
    n: "03",
    label: `${DURATION.reportTurnaroundDays} business days`,
    title: "The report arrives",
    body: "A written assessment naming specific tools and what they cost today, ranked by what they'd return against what they'd take to implement — with a defensible order to work through them.",
    points: [
      "Named products with current pricing, not categories",
      "Ranked by impact and by effort",
      "Hand it to anyone on your team to execute",
    ],
  },
];

export default function AssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />

      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-5 pt-24 pb-16 md:pt-40 md:pb-20">
        <p className="np-eyebrow">The Assessment</p>
        <h1 className="np-display mt-8 text-[2.75rem] md:text-[4rem] text-np-navy max-w-[20ch]">
          Where AI pays for itself in your business
        </h1>
        <p className="mt-8 text-xl font-light leading-[1.55] text-np-body max-w-[50ch]">
          The opportunities that hold up, the tools that fit, what each one
          costs, and the order to do them in. Every figure is a finding — an
          estimate, not a guarantee.
        </p>
      </section>

      {/* See a real one — the strongest proof we have */}
      <section className="max-w-[1200px] mx-auto px-5 pb-16">
        <Link
          href="/assessment/sample"
          className="group block border border-np-rule hover:border-np-navy transition-colors p-8 md:p-10"
        >
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-[52ch]">
              <p className="np-eyebrow">See a real one</p>
              <p className="mt-4 text-[1.375rem] md:text-[1.625rem] font-light text-np-navy leading-snug">
                A complete assessment, delivered August 2026 to a six-person
                remodeling company.
              </p>
              <p className="mt-3 text-np-body font-light leading-relaxed">
                Anonymised, otherwise unchanged — including the two sections
                telling the owner not to buy anything.
              </p>
            </div>
            <span className="np-label group-hover:text-np-rust transition-colors whitespace-nowrap">
              Read it →
            </span>
          </div>
        </Link>
      </section>

      {/* Fact strip — hairline grid */}
      <section className="max-w-[1200px] mx-auto px-5">
        <div className="np-grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { l: "Call length", v: `${DURATION.assessmentMinutes} minutes` },
            { l: "Preparation", v: "None" },
            {
              l: "Report delivered",
              v: `${DURATION.reportTurnaroundDays} business days`,
            },
            { l: "Areas covered", v: `${AREAS.length}` },
          ].map((f) => (
            <div key={f.l} className="p-6">
              <p className="np-label">{f.l}</p>
              <p className="mt-2.5 text-[1.375rem] font-light text-np-navy">
                {f.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="flex flex-col gap-16 md:gap-20">
          {stages.map((s) => (
            <div key={s.n} className="grid md:grid-cols-[7rem_1fr] gap-6 md:gap-10">
              <div>
                <p className="np-label" style={{ color: "var(--np-rust)" }}>
                  {s.n}
                </p>
                <p className="np-label mt-2">{s.label}</p>
              </div>
              <div className="max-w-[60ch]">
                <h2 className="text-[1.75rem] md:text-[2rem] font-light text-np-navy leading-snug">
                  {s.title}
                </h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-np-body font-light">
                  {s.body}
                </p>
                <ul className="mt-6 flex flex-col">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-[0.9375rem] text-np-body font-light py-3 border-t border-np-rule"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seven areas */}
      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <p className="np-label">The seven areas</p>
          <div className="np-grid mt-6 sm:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((a, i) => (
              <div key={a} className="p-6">
                <p className="np-label" style={{ color: "var(--np-rust)" }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2.5 text-[1.0625rem] font-light text-np-navy">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20">
          <div>
            <div className="np-section-rule pb-3 mb-8">
              <span className="np-label">What you receive</span>
            </div>
            <ul className="flex flex-col">
              {DELIVERABLES.map((d) => (
                <li
                  key={d}
                  className="text-[1.0625rem] text-np-body font-light leading-relaxed py-5 border-b border-np-rule"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-2">
            <DemoScout />
            <div className="mt-10">
              <p className="np-label">Ready to book</p>
              <p className="mt-3 text-np-body font-light leading-relaxed">
                Pick a time that suits you. The call is{" "}
                {DURATION.assessmentMinutes} minutes and needs nothing from you
                beforehand.
              </p>
              <div className="mt-6">
                <CTAButton label="Book an assessment call" size="large" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cohort testimonials — invisible until the first real one lands */}
      <Testimonials />

      {/* Questions */}
      <section className="bg-np-tint border-t border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <div className="np-section-rule pb-3 mb-8">
            <span className="np-label">Questions</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 max-w-[92ch]">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="text-[1.0625rem] font-medium text-np-navy">
                  {f.q}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-np-body font-light">
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
