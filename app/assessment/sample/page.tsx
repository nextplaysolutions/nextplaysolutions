import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { SAMPLE } from "@/lib/sample-report";
import { DURATION } from "@/lib/offer";

export const metadata: Metadata = {
  title: "A real assessment",
  description:
    "A complete AI Readiness Assessment as delivered to a six-person remodeling company, anonymised. Real findings, real tool costs, and the parts that say don't buy anything.",
  alternates: { canonical: "/assessment/sample" },
};

const priorityColor = {
  NOW: "var(--np-rust)",
  NEXT: "var(--np-blue)",
  LATER: "var(--np-muted)",
} as const;

export default function SamplePage() {
  return (
    <>
      {/* Framing — this is ours, not the report */}
      <section className="max-w-[1200px] mx-auto px-5 pt-20 pb-14 md:pt-28">
        <p className="np-eyebrow">A real assessment</p>
        <h1 className="np-display mt-7 text-[2.5rem] md:text-[3.75rem] text-np-navy max-w-[18ch]">
          This is what you get back
        </h1>
        <p className="mt-8 text-xl md:text-[1.375rem] font-light leading-[1.55] text-np-body max-w-[58ch]">
          Below is a complete assessment as delivered in August 2026, with the
          company and the names removed and nothing else changed. The numbers,
          the findings and the recommendations are exactly as they were sent —
          including the two sections telling the owner not to buy anything.
        </p>
      </section>

      {/* The report itself, set apart */}
      <div className="bg-np-tint border-y border-np-rule">
        <article className="max-w-[900px] mx-auto px-5 md:px-12 py-16 md:py-24 bg-np-white md:my-16 md:border md:border-np-rule">
          {/* Report masthead */}
          <header className="pb-12 border-b-2 border-np-navy">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-center gap-4">
                <span className="np-mark" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <span className="np-word" style={{ fontSize: "18px" }}>
                    Next<strong>Play</strong>
                  </span>
                  <span
                    className="np-label"
                    style={{ letterSpacing: "0.3em", fontSize: "0.5rem" }}
                  >
                    Solutions
                  </span>
                </span>
              </div>
              <span className="np-label">
                Report {SAMPLE.meta.reportNumber}
              </span>
            </div>

            <p className="np-eyebrow mt-12">{SAMPLE.meta.eyebrow}</p>
            <h2 className="np-display mt-5 text-[2rem] md:text-[2.75rem] text-np-navy">
              {SAMPLE.headline}
            </h2>
            <p className="mt-5 text-lg font-light leading-relaxed text-np-body max-w-[52ch]">
              {SAMPLE.subhead}
            </p>
          </header>

          {/* Fact strip */}
          <div className="np-grid mt-12 sm:grid-cols-3">
            {[
              { l: "Prepared for", v: SAMPLE.meta.preparedFor },
              { l: "Assessment date", v: SAMPLE.meta.assessmentDate },
              { l: "Reviewed by", v: SAMPLE.meta.reviewedBy },
            ].map((f) => (
              <div key={f.l} className="p-5">
                <p className="np-label">{f.l}</p>
                <p className="mt-2 text-[0.9375rem] font-medium text-np-navy">
                  {f.v}
                </p>
              </div>
            ))}
          </div>

          {/* The number */}
          <div className="mt-16 border border-np-rule p-8 md:p-12">
            <p className="np-label">{SAMPLE.hero.label}</p>
            <p className="np-display mt-4 text-[4rem] md:text-[5.5rem] text-np-navy leading-none">
              {SAMPLE.hero.figure}
            </p>
            <p className="mt-6 text-[1.0625rem] font-light leading-relaxed text-np-body max-w-[48ch]">
              {SAMPLE.hero.detail}
            </p>
          </div>

          <p className="mt-14 text-[1.125rem] font-light leading-[1.7] text-np-body">
            {SAMPLE.intro}
          </p>

          {/* Findings */}
          <Section label="What we found" />
          <div className="flex flex-col">
            {SAMPLE.findings.map((f, i) => (
              <div key={i} className="py-8 border-b border-np-rule">
                <h3 className="text-[1.25rem] md:text-[1.5rem] font-light text-np-navy leading-snug max-w-[36ch]">
                  {f.title}
                </h3>
                <p className="mt-3 leading-relaxed text-np-body font-light max-w-[62ch]">
                  {f.body}
                </p>
              </div>
            ))}
          </div>

          {/* In their words */}
          <Section label="In their words" />
          <div className="flex flex-col gap-8">
            {SAMPLE.quotes.map((q, i) => (
              <blockquote key={i} className="border-l-2 border-np-rust pl-6">
                <p className="text-[1.125rem] font-light leading-relaxed text-np-navy max-w-[56ch]">
                  &ldquo;{q.text}&rdquo;
                </p>
                <cite className="np-label not-italic block mt-3">
                  {q.attrib}
                </cite>
              </blockquote>
            ))}
          </div>

          {/* Readiness */}
          <Section label="Readiness by area" />
          <div className="flex flex-col">
            {SAMPLE.readiness.map((r) => (
              <div
                key={r.area}
                className="py-4 border-b border-np-rule flex items-center gap-4"
              >
                <span className="flex-1 text-[0.9375rem] text-np-navy font-light">
                  {r.area}
                </span>
                <span
                  className="hidden sm:block h-[3px] bg-np-rule"
                  style={{ width: 140 }}
                  aria-hidden="true"
                >
                  <span
                    className="block h-full"
                    style={{
                      width: `${r.readiness}%`,
                      background: priorityColor[r.priority],
                    }}
                  />
                </span>
                <span className="np-label w-14 text-right">
                  {r.readiness}%
                </span>
                <span
                  className="np-label w-12 text-right"
                  style={{ color: priorityColor[r.priority] }}
                >
                  {r.priority}
                </span>
              </div>
            ))}
          </div>

          {/* Plays */}
          <Section label="What to do" />
          <div className="flex flex-col gap-12">
            {SAMPLE.plays.map((p) => (
              <div key={p.number}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <p className="np-label" style={{ color: "var(--np-rust)" }}>
                    {p.number}
                  </p>
                  <p className="np-label">{p.value}</p>
                </div>
                <h3 className="mt-3 text-[1.5rem] md:text-[1.75rem] font-light text-np-navy">
                  {p.title}
                </h3>
                <div className="np-grid mt-6 md:grid-cols-2">
                  <div className="p-6">
                    <p className="np-label">Today</p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-np-body font-light">
                      {p.today}
                    </p>
                  </div>
                  <div className="p-6">
                    <p className="np-label" style={{ color: "var(--np-rust)" }}>
                      With AI
                    </p>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-np-body font-light">
                      {p.withAi}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex gap-8 flex-wrap">
                  <span className="np-label">Tool · {p.tool}</span>
                  <span className="np-label">Cost · {p.cost}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Roadmap */}
          <Section label="The order to do it in" />
          <div className="flex flex-col">
            {SAMPLE.roadmap.map((r) => (
              <div
                key={r.weeks}
                className="py-6 border-b border-np-rule grid md:grid-cols-[5rem_1fr_auto] gap-3 md:gap-6 items-start"
              >
                <span className="np-label" style={{ color: "var(--np-rust)" }}>
                  Weeks {r.weeks}
                </span>
                <div>
                  <p className="text-[1.0625rem] text-np-navy font-light">
                    {r.step}
                  </p>
                  <p className="mt-1.5 text-[0.9375rem] text-np-muted font-light">
                    {r.note}
                  </p>
                  <p className="mt-2 np-label">Done when · {r.doneWhen}</p>
                </div>
                <span className="np-label md:text-right">{r.cost}</span>
              </div>
            ))}
          </div>

          {/* Not worth it — the credibility section */}
          <Section label="Not worth it yet" />
          <div className="flex flex-col gap-8">
            {SAMPLE.notWorthItYet.map((n) => (
              <div key={n.title}>
                <h3 className="text-[1.125rem] font-medium text-np-navy">
                  {n.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-np-body font-light max-w-[62ch]">
                  {n.body}
                </p>
              </div>
            ))}
          </div>

          {/* Assumptions */}
          <Section label="How the numbers were built" />
          <p className="text-[0.9375rem] leading-relaxed text-np-body font-light max-w-[68ch]">
            {SAMPLE.assumptions}
          </p>
        </article>
      </div>

      {/* Our close */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="max-w-[54ch]">
          <h2 className="np-display text-3xl md:text-[2.75rem] text-np-navy">
            Yours would be about your business
          </h2>
          <p className="mt-6 text-lg text-np-body font-light leading-relaxed">
            Same structure, same honesty about what isn&rsquo;t worth doing.{" "}
            {DURATION.assessmentMinutes} minutes on the phone and{" "}
            {DURATION.reportTurnaroundDays} business days later, this is what
            arrives.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CTAButton label="Book an assessment call" size="large" />
            <Link
              href="/assessment"
              className="text-np-navy font-medium hover:text-np-rust transition-colors py-3"
            >
              How it works →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ label }: { label: string }) {
  return (
    <div className="np-section-rule pb-3 mt-16 mb-8">
      <span className="np-label">{label}</span>
    </div>
  );
}
