import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import Testimonials from "@/components/Testimonials";
import ScoutSignalGraphic from "@/components/ScoutSignalGraphic";
import {
  BUILDS_JSONLD,
  CHATGPT_DIFFERENCE,
  FAQ_JSONLD,
  FIELD_NOTES,
  FIT_SIGNALS,
  NEXTPLAY_WAY,
  QUIET_LEAKS,
  SERVICE_JSONLD,
  TIERS,
} from "@/lib/offer";

export const metadata: Metadata = {
  title: "Find the Invisible Tax in Your Business",
  description:
    "NextPlay finds hidden operational waste, missed revenue, and unnecessary software. Start with a free 25-minute Scout assessment and human-reviewed action plan.",
  alternates: { canonical: "/" },
};

const companies = ["LinkedIn", "Meta", "Tesla", "Snapchat"];

export default function HomePage() {
  return (
    <>
      {[SERVICE_JSONLD, BUILDS_JSONLD, FAQ_JSONLD].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <section className="relative overflow-hidden bg-np-navy text-white border-b border-white/15">
        <div className="np-hero-grid-dark absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-20 md:py-24">
          <div className="max-w-[1050px]">
            <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>
              AI readiness for real businesses
            </p>
            <h1 className="np-display mt-8 text-[3rem] md:text-[4.45rem] lg:text-[4.7rem] max-w-[28ch]">
              Your team isn&apos;t behind on AI. <span className="text-np-on-navy-muted">They&apos;re buried in work it should already own.</span>
            </h1>
            <p className="mt-6 text-xl md:text-[1.35rem] font-light leading-[1.55] text-np-on-navy-2 max-w-[58ch]">
              That buried work is the Invisible Tax. In one 25-minute Scout
              conversation, we find the missed revenue, repeated work, and AI
              plays hiding inside your operation—then make the NextPlay clear.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CTAButton label="Find your next play" size="large" variant="on-navy" />
              <Link
                href="/field-notes"
                className="text-white font-medium border-b border-white/35 hover:border-np-rust hover:text-np-rust transition-colors py-3"
              >
                See a real finding ↓
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-3 max-w-[760px] border-t border-white/15">
              {[["25", "minute call"], ["07", "business areas"], ["03", "days to your assessment"]].map(([value, label]) => (
                <div key={label} className="pt-5 pr-4 border-r border-white/15 last:border-r-0">
                  <p className="np-display text-3xl md:text-4xl text-np-rust">{value}</p>
                  <p className="np-label mt-2" style={{ color: "var(--np-on-navy-muted)" }}>{label}</p>
                </div>
              ))}
            </div>
            <ScoutSignalGraphic />
          </div>
        </div>
      </section>

      <section className="border-b border-np-rule" aria-labelledby="invisible-tax-heading">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <div className="grid lg:grid-cols-[.7fr_1.3fr] gap-10 lg:gap-20">
            <div>
              <p className="np-eyebrow">The problem, made visible</p>
              <h2 id="invisible-tax-heading" className="np-display mt-5 text-3xl md:text-[3.25rem] text-np-navy">
                What the tax looks like.
              </h2>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-light leading-relaxed text-np-navy max-w-[50ch]">
                The Invisible Tax is the cost of work your team has learned to
                live with—small leaks, repeated every week, until they feel normal.
              </p>
              <div className="mt-8 np-grid sm:grid-cols-2">
                {["Unbilled work", "Missed follow-up", "Information entered twice", "Software nobody uses"].map((item) => (
                  <p key={item} className="p-5 text-np-body font-light">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-np-tint border-b border-np-rule overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 pt-20 md:pt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <div>
              <p className="np-eyebrow">Field Notes</p>
              <h2 className="np-display mt-5 text-3xl md:text-[3.25rem] text-np-navy">
                What owners were not seeing.
              </h2>
            </div>
            <p className="text-np-body font-light max-w-[42ch] leading-relaxed">
              Anonymized findings from real conversations. Specific enough to
              be useful. Blurred enough to protect the business.
            </p>
          </div>
        </div>

        <div className="mt-12 pb-20 md:pb-24">
          <div className="np-signal-track">
            {[...FIELD_NOTES, ...FIELD_NOTES].map((note, index) => (
              <article
                key={`${note.vertical}-${index}`}
                className="w-[340px] md:w-[440px] flex-none border-y border-r border-np-rule bg-white p-7 md:p-9"
                aria-hidden={index >= FIELD_NOTES.length || undefined}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="np-label">{note.vertical}</p>
                  <span className="w-2 h-2 bg-np-rust" aria-hidden="true" />
                </div>
                <p className="np-display mt-8 text-3xl text-np-navy">
                  {note.signal}
                </p>
                <p className="np-label mt-2">{note.metric}</p>
                <p className="mt-5 text-[1.0625rem] leading-relaxed text-np-body font-light">
                  {note.finding}
                </p>
                <p className="np-label mt-7">{note.surfaced}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="nextplay-way" className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-14 lg:gap-24">
          <div>
            <p className="np-eyebrow">The NextPlay Way</p>
            <h2 className="np-display mt-6 text-4xl md:text-[3.7rem] text-np-navy max-w-[11ch]">
              Business strategy that ends in a build.
            </h2>
            <p className="mt-7 text-lg font-light leading-relaxed text-np-body max-w-[38ch]">
              Understanding is not the deliverable. A clear, ranked move—and a
              practical way to implement it—is.
            </p>
          </div>

          <div className="border-t border-np-rule">
            {NEXTPLAY_WAY.map((step) => (
              <article
                key={step.n}
                className="np-view-rise grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_10rem_1fr] gap-4 md:gap-6 py-7 md:py-9 border-b border-np-rule"
              >
                <p className="np-label" style={{ color: "var(--np-body)" }}>
                  {step.n}
                </p>
                <h3 className="text-2xl font-medium text-np-navy">{step.name}</h3>
                <p className="col-start-2 md:col-start-auto text-np-body font-light leading-relaxed max-w-[45ch]">
                  {step.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-np-navy text-white">
        <div className="max-w-[1200px] mx-auto px-5 py-24 md:py-32">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-24 items-end">
            <div>
              <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>
                What we told them not to buy
              </p>
              <h2 className="np-display mt-7 text-4xl md:text-[3.6rem] max-w-[14ch]">
                We told a contractor to skip the CRM.
              </h2>
            </div>
            <div>
              <p className="text-xl font-light leading-relaxed text-np-on-navy-2">
                At roughly one appointment a week, it would have added another
                system without recovering meaningful revenue. Every assessment
                includes what to skip—and why.
              </p>
              <p className="np-label mt-7" style={{ color: "var(--np-on-navy-muted)" }}>
                No referral fees · no vendor commissions · no quota to fill
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="np-eyebrow">Implementation</p>
            <h2 className="np-display mt-5 text-4xl md:text-[3.5rem] text-np-navy">
              The assessment is free. The build is the offer.
            </h2>
          </div>
          <Link href="/services" className="np-label hover:text-np-body py-2">
            Compare services →
          </Link>
        </div>

        <div className="np-grid lg:grid-cols-3">
          {TIERS.map((tier, index) => (
            <article key={tier.name} className="p-8 md:p-10 flex flex-col min-h-[360px]">
              <div className="flex items-center justify-between gap-4">
                <p className="np-label">{String(index + 1).padStart(2, "0")}</p>
                {index === 0 && (
                  <span className="np-label bg-np-rust text-np-navy px-2.5 py-1.5">
                    Minimum engagement
                  </span>
                )}
              </div>
              <h3 className="np-display mt-8 text-3xl text-np-navy">{tier.name}</h3>
              <p className="mt-4 text-np-body font-light leading-relaxed">
                {tier.summary}
              </p>
              <div className="mt-auto pt-10">
                <p className="np-display text-3xl text-np-navy">
                  {tier.price === null ? "Scoped with you" : `$${tier.price.toLocaleString()}`}
                </p>
                <p className="np-label mt-2">
                  {tier.price === null ? "No public price" : "Fixed scope"}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <CTAButton label="Start with Scout" size="large" />
          <Link href="/assessment/sample" className="font-medium text-np-navy py-3 hover:text-np-body">
            See what the plan looks like →
          </Link>
        </div>
      </section>

      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
          <p className="np-eyebrow">The Invisible Tax, by industry</p>
          <h2 className="np-display mt-5 text-3xl md:text-[3.25rem] text-np-navy max-w-[18ch]">
            Every industry has one owners stop noticing.
          </h2>
          <div className="mt-12 np-grid md:grid-cols-2">
            {QUIET_LEAKS.map((item) => (
              <article key={item.vertical} className="p-7 md:p-9">
                <p className="np-label">{item.vertical}</p>
                <p className="mt-4 text-xl md:text-2xl font-light text-np-navy leading-snug">
                  {item.leak}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm text-np-muted font-light">
            These are patterns Scout investigates, not claims about every business.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-px bg-np-rule border border-np-rule">
          <article className="bg-white p-8 md:p-12">
            <p className="np-eyebrow">Who this is for</p>
            <h2 className="np-display mt-6 text-3xl md:text-[3.2rem] text-np-navy max-w-[13ch]">
              Enough moving parts to hide a leak.
            </h2>
            <div className="mt-9 border-t border-np-rule">
              {FIT_SIGNALS.map((signal) => (
                <p key={signal} className="py-4 border-b border-np-rule text-np-body font-light leading-relaxed">
                  {signal}
                </p>
              ))}
            </div>
          </article>
          <article className="bg-np-navy text-white p-8 md:p-12">
            <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>Why not just use ChatGPT?</p>
            <h2 className="np-display mt-6 text-3xl md:text-[3.2rem] max-w-[12ch]">
              Answers are cheap. Diagnosis is not.
            </h2>
            <p className="mt-8 text-lg text-np-on-navy-2 font-light leading-relaxed">
              {CHATGPT_DIFFERENCE}
            </p>
            <p className="np-label mt-8" style={{ color: "var(--np-on-navy-muted)" }}>
              Specific business · human review · implementation available
            </p>
          </article>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-36 text-center">
        <p className="np-eyebrow">One question</p>
        <h2 className="np-display mt-7 text-4xl md:text-[4.2rem] text-np-navy max-w-[19ch] mx-auto">
          If nothing changes for twelve months, what did it cost?
        </h2>
        <p className="mt-7 text-lg font-light text-np-body max-w-[52ch] mx-auto leading-relaxed">
          Most owners we have spoken with could not answer before the
          assessment. The point is not a bigger AI budget. It is a clear next move.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <CTAButton size="large" />
          <Link href="/assessment/sample" className="font-medium text-np-navy py-4 hover:text-np-body">
            Read the sample report →
          </Link>
        </div>
      </section>

      <Testimonials />

      <section className="border-t border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-24 grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {companies.map((company) => (
              <span key={company} className="text-[1.0625rem] font-medium text-np-navy">
                {company}
              </span>
            ))}
          </div>
          <p className="text-np-body font-light leading-relaxed max-w-[50ch]">
            Twenty-five years between the founders inside companies that adopted
            this technology early—plus the small-business experience to know
            enterprise answers rarely transfer unchanged.{" "}
            <Link href="/about" className="font-medium text-np-navy hover:text-np-body whitespace-nowrap">
              Meet Jordan and Ethan →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
