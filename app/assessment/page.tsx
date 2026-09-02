import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import DemoScout from "@/components/DemoScout";
import {
  AREAS,
  DELIVERABLES,
  DURATION,
  FAQ_JSONLD,
  NEXTPLAY_WAY,
  POSITIONING,
  SERVICE_JSONLD,
} from "@/lib/offer";

export const metadata: Metadata = {
  title: "Free AI Business Assessment",
  description:
    "Find the invisible tax in seven areas of your business with a free 25-minute Scout assessment and human-reviewed written plan delivered within three business days.",
  alternates: { canonical: "/assessment" },
};

export default function AssessmentPage() {
  return (
    <>
      {[SERVICE_JSONLD, FAQ_JSONLD].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <section className="relative overflow-hidden border-b border-np-rule">
        <div className="np-hero-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-24 md:py-36">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 lg:gap-24 items-center">
            <div>
              <p className="np-eyebrow">Free AI business assessment</p>
              <h1 className="np-display mt-8 text-[3rem] md:text-[4.5rem] text-np-navy max-w-[13ch]">
                Find the invisible tax. Make the NextPlay clear.
              </h1>
              <p className="mt-8 text-xl font-light leading-[1.55] text-np-body max-w-[52ch]">
                {POSITIONING.recognition} One {DURATION.assessmentMinutes}-minute call with Scout maps
                seven areas of your business. Jordan and Ethan review the
                conversation and send your written assessment within three
                business days. The call and report are free.
              </p>
              <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
                <CTAButton label="Start the free assessment" size="large" />
                <Link href="/assessment/sample" className="font-medium text-np-navy py-3 hover:text-np-body">
                  Read a real report →
                </Link>
              </div>
            </div>
            <DemoScout />
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="np-grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Call length", `${DURATION.assessmentMinutes} minutes`],
            ["Preparation", "None"],
            ["Written report", `${DURATION.reportTurnaroundDays} business days`],
            ["Price", "$0"],
          ].map(([label, value]) => (
            <div key={label} className="p-6">
              <p className="np-label">{label}</p>
              <p className="mt-3 text-2xl font-light text-np-navy">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-14 lg:gap-24">
          <div>
            <p className="np-eyebrow">The NextPlay Way</p>
            <h2 className="np-display mt-6 text-4xl md:text-[3.4rem] text-np-navy">
              Four steps. One clear move.
            </h2>
          </div>
          <div className="border-t border-np-rule">
            {NEXTPLAY_WAY.map((step) => (
              <article key={step.n} className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_9rem_1fr] gap-4 py-7 border-b border-np-rule">
                <p className="np-label">{step.n}</p>
                <h3 className="text-xl font-medium text-np-navy">{step.name}</h3>
                <p className="col-start-2 md:col-start-auto text-np-body font-light leading-relaxed">
                  {step.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-24">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24">
            <div>
              <p className="np-label">Seven areas mapped</p>
              <div className="mt-6 np-grid sm:grid-cols-2">
                {AREAS.map((area, index) => (
                  <div key={area} className="p-5 flex items-center gap-4">
                    <span className="np-label" style={{ color: "var(--np-body)" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-np-navy font-light">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="np-label">What comes back</p>
              <ul className="mt-6 border-t border-np-rule">
                {DELIVERABLES.map((deliverable) => (
                  <li key={deliverable} className="py-4 border-b border-np-rule text-np-body font-light leading-relaxed">
                    {deliverable}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <Link
          href="/assessment/sample"
          className="group block bg-np-navy text-white p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-[58ch]">
              <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>
                See the deliverable
              </p>
              <h2 className="np-display mt-5 text-3xl md:text-[2.8rem]">
                Read a complete anonymized assessment.
              </h2>
              <p className="mt-5 text-np-on-navy-2 font-light leading-relaxed">
                Real findings, real estimates, named tools, and the two things
                the owner was told not to buy.
              </p>
            </div>
            <span className="np-label text-np-rust group-hover:text-np-rust-light transition-colors whitespace-nowrap">
              Open the report →
            </span>
          </div>
        </Link>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 pb-24 md:pb-36 text-center">
        <h2 className="np-display text-4xl md:text-[3.6rem] text-np-navy">
          See what Scout finds in yours.
        </h2>
        <p className="mt-6 text-np-body font-light">
          Free call. Free written assessment. No implementation obligation.
        </p>
        <div className="mt-9">
          <CTAButton label="Try Scout free" size="large" />
        </div>
      </section>
    </>
  );
}
