import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { BUILDS_JSONLD, NEXTPLAY_WAY, TIERS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "AI Automation Implementation Services",
  description:
    "Fixed-scope AI implementation for small businesses: One Play for $2,500, The Roadmap for $5,000, and custom engagements for larger operational work.",
  alternates: { canonical: "/services" },
};

const details = [
  [
    "One Play",
    [
      "One priority selected from the written assessment",
      "Tools configured around the way the business already works",
      "An owner and a clear definition of done",
      "Handoff documentation for the team",
    ],
  ],
  [
    "The Roadmap",
    [
      "The full set of opportunities marked worth doing now",
      "Sequenced implementation so one change supports the next",
      "Tool setup, workflow design, testing, and handoff",
      "One fixed scope agreed before work begins",
    ],
  ],
  [
    "Custom",
    [
      "Larger or cross-functional operational scope",
      "Multiple systems, teams, or locations",
      "A written scope and price before work begins",
      "No public price because the shape genuinely varies",
    ],
  ],
] as const;

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BUILDS_JSONLD) }}
      />

      <section className="relative overflow-hidden border-b border-np-rule">
        <div className="np-hero-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-24 md:py-36">
          <p className="np-eyebrow">AI implementation services</p>
          <h1 className="np-display mt-8 text-[3rem] md:text-[4.5rem] text-np-navy max-w-[14ch]">
            The assessment finds the tax. The build removes it.
          </h1>
          <p className="mt-8 text-xl font-light leading-[1.55] text-np-body max-w-[54ch]">
            Every paid engagement starts with a finding from your own
            assessment—not a generic package. Scope, price, ownership, and what
            counts as finished are written down before implementation begins.
          </p>
          <div className="mt-11 flex flex-wrap items-center gap-x-8 gap-y-4">
            <CTAButton label="Start with the free assessment" size="large" />
            <Link href="/assessment/sample" className="font-medium text-np-navy py-3 hover:text-np-body">
              Read a sample report →
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="flex flex-col gap-8">
          {TIERS.map((tier, index) => (
            <article
              key={tier.name}
              className="np-view-rise grid lg:grid-cols-[5rem_.65fr_1.35fr] gap-6 lg:gap-12 border-t border-np-rule pt-8 pb-4"
            >
              <p className="np-label">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <h2 className="np-display text-3xl md:text-4xl text-np-navy">{tier.name}</h2>
                <p className="np-display mt-5 text-3xl text-np-navy">
                  {tier.price === null ? "Custom quote" : `$${tier.price.toLocaleString()}`}
                </p>
                <p className="np-label mt-2">
                  {index === 0 ? "Minimum paid engagement" : tier.price === null ? "Scoped after assessment" : "Fixed scope"}
                </p>
              </div>
              <div>
                <p className="text-lg text-np-body font-light leading-relaxed max-w-[50ch]">
                  {tier.summary}
                </p>
                <ul className="mt-6 border-t border-np-rule">
                  {details[index][1].map((item) => (
                    <li key={item} className="py-3.5 border-b border-np-rule text-[0.9375rem] text-np-body font-light">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-np-navy text-white">
        <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
          <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>
            How scope is earned
          </p>
          <div className="mt-10 grid md:grid-cols-4 gap-px bg-white/15 border border-white/15">
            {NEXTPLAY_WAY.map((step) => (
              <div key={step.n} className="bg-np-navy p-7">
                <p className="np-label" style={{ color: "var(--np-on-navy-muted)" }}>{step.n}</p>
                <h3 className="mt-5 text-2xl font-medium">{step.name}</h3>
                <p className="mt-4 text-sm font-light leading-relaxed text-np-on-navy-2">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-32 text-center">
        <h2 className="np-display text-4xl md:text-[3.6rem] text-np-navy">
          First, find the right play.
        </h2>
        <p className="mt-6 text-np-body font-light">
          The 25-minute assessment and written plan are free.
        </p>
        <div className="mt-9"><CTAButton size="large" /></div>
      </section>
    </>
  );
}
