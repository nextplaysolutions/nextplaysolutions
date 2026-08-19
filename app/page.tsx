import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import DemoScout from "@/components/DemoScout";
import Testimonials from "@/components/Testimonials";
import { AREAS, DURATION, FAQ_JSONLD, SERVICE_JSONLD } from "@/lib/offer";

export const metadata: Metadata = {
  title: "NextPlay Solutions — Your unfair AI advantage",
  description:
    "Seven areas of your business reviewed in 25 minutes. A report naming the tools, the real costs, and the order to do them in.",
  alternates: { canonical: "/" },
};

const steps = [
  {
    n: "01",
    title: "A conversation with Scout",
    body: `About ${DURATION.assessmentMinutes} minutes by phone. Scout works through seven areas of the business. Nothing to prepare — answer the way you'd tell a colleague.`,
  },
  {
    n: "02",
    title: "We read every transcript",
    body: "Scout runs the interview. Jordan and Ethan review the findings and write the report. Nothing reaches you unread.",
  },
  {
    n: "03",
    title: "The report, in three days",
    body: "Named tools with their real prices, ranked by what they'd return and what they'd take to put in. Plus what to skip, and why.",
  },
];

const companies = ["LinkedIn", "Meta", "Tesla", "Snapchat"];

export default function HomePage() {
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

      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-5 pt-24 pb-24 md:pt-44 md:pb-40">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="np-eyebrow">AI Readiness Assessment</p>
            {/* Leads with a finding from a real engagement rather than the
                tagline. The figure is the owner's own estimate of work agreed
                on site and never invoiced — deliberately not the report's $95k
                headline, which leans on a flips projection the report itself
                calls its most speculative number. Attribution is in the very
                next sentence: this is a finding, never a promise to the reader. */}
            <h1 className="np-display mt-8 text-[2.75rem] md:text-[4rem] text-np-navy leading-[1.05]">
              $18,000 a year, agreed on site and never billed.
            </h1>
            <p className="mt-9 text-xl md:text-[1.375rem] font-light leading-[1.5] text-np-body max-w-[38ch]">
              That was one finding, in one assessment, for a six-person
              remodeling company. Seven areas of his business in{" "}
              {DURATION.assessmentMinutes} minutes on the phone — and a report
              naming the tools, the costs, the order, and the two things worth
              skipping.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CTAButton
                label="Read the full report"
                href="/assessment/sample"
                size="large"
              />
              <Link
                href="/book"
                className="text-np-navy font-medium hover:text-np-rust transition-colors py-3"
              >
                Book an assessment call →
              </Link>
            </div>
          </div>

          <div className="lg:pt-4">
            <DemoScout />
          </div>
        </div>
      </section>

      {/* Who it's for — hairline grid, the report's signature device */}
      <section className="border-t border-np-rule bg-np-tint">
        <div className="max-w-[1200px] mx-auto px-5 py-16">
          <p className="np-label">Built for</p>
          <div className="np-grid mt-6 md:grid-cols-3">
            {[
              {
                h: "No CTO, no tech team",
                p: "Nobody whose job is to evaluate this. So it lands on yours.",
              },
              {
                h: "No time to research it",
                p: "Every tool claims the same things. Sorting them takes weeks you don't have.",
              },
              {
                h: "Wary of being sold to",
                p: "We take no referral fees from any vendor. The list is what fits, not what pays.",
              },
            ].map((c) => (
              <div key={c.h} className="p-8 md:p-9">
                <p className="font-medium text-np-navy text-[1.0625rem]">
                  {c.h}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-np-body font-light">
                  {c.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it runs */}
      <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
        <div className="flex items-baseline gap-5 np-section-rule pb-3 mb-14">
          <span className="np-label">How it runs</span>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="np-label" style={{ color: "var(--np-rust)" }}>
                {s.n}
              </p>
              <h3 className="mt-5 text-[1.375rem] font-light text-np-navy leading-snug">
                {s.title}
              </h3>
              <p className="mt-4 leading-relaxed text-np-body font-light">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-x-3 gap-y-2">
          {AREAS.map((a) => (
            <span
              key={a}
              className="np-label border border-np-rule px-3 py-2"
              style={{ color: "var(--np-body)" }}
            >
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* Trust band — the report tells you what not to buy */}
      <section className="bg-np-navy text-white">
        <div className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-start">
            <div>
              <p
                className="np-eyebrow"
                style={{ color: "var(--np-rust-light)" }}
              >
                The honest version
              </p>
              <h2 className="np-display mt-8 text-4xl md:text-[3.5rem]">
                If AI isn&rsquo;t worth it for your business yet, the report
                says so.
              </h2>
              <p className="mt-8 text-lg font-light leading-relaxed text-np-on-navy-2 max-w-[44ch]">
                Every assessment includes what not to buy. We take no referral
                fees from any vendor, so the recommendations have nothing to
                sell you.
              </p>
              <div className="mt-11">
                <CTAButton
                  label="Book an assessment call"
                  size="large"
                  variant="on-navy"
                />
              </div>
            </div>

            <div className="lg:pt-2">
              <DemoScout variant="navy" />
            </div>
          </div>
        </div>
      </section>

      {/* Client testimonials — invisible until the first real one lands */}
      <Testimonials />

      {/* Operator pedigree */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-24">
        <div className="grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {companies.map((c) => (
              <span
                key={c}
                className="text-[1.0625rem] font-medium text-np-navy"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-np-body font-light leading-relaxed max-w-[48ch]">
            25 years between them inside the companies that adopted this
            technology first. They saw which changes held and which were
            theatre.{" "}
            <Link
              href="/about"
              className="text-np-navy font-medium hover:text-np-rust transition-colors whitespace-nowrap"
            >
              About us →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
