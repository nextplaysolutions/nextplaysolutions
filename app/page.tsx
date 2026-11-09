import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import FAQSection from "@/components/FAQSection";
import ScoutProcess from "@/components/ScoutProcess";
import AssessmentCommitment from "@/components/AssessmentCommitment";
import { INVISIBLE_TAX_SIGNS } from "@/lib/launch-content";
import ScoutSignalGraphic from "@/components/ScoutSignalGraphic";
import {
  BUILDS_JSONLD,
  FIELD_NOTES,
  NEXTPLAY_WAY,
  SERVICE_JSONLD,
  TIERS,
} from "@/lib/offer";

export const metadata: Metadata = {
  title: "Small Business Workflow Automation",
  description:
    "Find missed invoices, stalled follow-up, and repetitive admin. Get a free AI business assessment and a clear plan, with optional fixed-scope workflow implementation.",
  alternates: { canonical: "/" },
};

const SIGN_IMAGES = [
  "unbilled-work",
  "missed-follow-up",
  "duplicate-entry",
  "unused-software",
  "missing-paperwork",
  "evening-admin",
  "one-person-process",
] as const;

export default function HomePage() {
  return (
    <>
      {[SERVICE_JSONLD, BUILDS_JSONLD].map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}

      <section className="relative overflow-hidden bg-np-navy text-white border-b border-white/15">
        <div className="np-hero-grid-dark absolute inset-0 pointer-events-none" />
        <div className="np-launch-hero relative max-w-[1280px] mx-auto px-5 py-16 lg:py-20 grid lg:grid-cols-[1.05fr_.95fr] gap-10 items-center">
          <div>
            <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>
              AI readiness for real businesses
            </p>
            <h1 className="np-display mt-6 text-[2.8rem] md:text-[3.5rem] max-w-[22ch]">
              Your team isn&apos;t behind on AI. <span className="text-np-on-navy-muted">They&apos;re buried in work it should already own.</span>
            </h1>
            <p className="mt-6 text-xl md:text-[1.35rem] font-light leading-[1.55] text-np-on-navy-2 max-w-[58ch]">
              Missed invoices. Stalled follow-up. Information entered twice. Scout helps identify the recurring work worth fixing—and where automation may help.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <CTAButton label="Start my free assessment" size="large" variant="on-navy" />
              <Link
                href="/field-notes"
                className="text-white font-medium border-b border-white/35 hover:border-np-rust hover:text-np-rust transition-colors py-3"
              >
                See a real finding ↓
              </Link>
            </div>
            <p className="mt-4 text-sm text-np-on-navy-2">25-minute AI conversation. Human-reviewed written plan within 3 business days. No obligation.</p>
            <p className="mt-5 text-sm leading-relaxed text-np-on-navy-2">An anonymized remodeling assessment identified an estimated $18,000 a year in unbilled change orders. <Link href="/field-notes#finding-1" className="underline underline-offset-4">Read the finding →</Link></p>
            <div className="mt-12 grid grid-cols-3 max-w-[760px] border-t border-white/15">
              {[["25", "minute call"], ["07", "business areas"], ["03", "business days to your plan"]].map(([value, label]) => (
                <div key={label} className="pt-5 pr-4 border-r border-white/15 last:border-r-0">
                  <p className="np-display text-3xl md:text-4xl text-np-rust">{value}</p>
                  <p className="np-label mt-2" style={{ color: "var(--np-on-navy-muted)" }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
          <ScoutSignalGraphic />
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-16 md:py-20" aria-labelledby="invisible-tax-heading">
        <p className="np-eyebrow">The Invisible Tax</p>
        <h2 id="invisible-tax-heading" className="np-display mt-5 text-3xl md:text-5xl max-w-[23ch]">Seven signs your business is paying for work it shouldn’t have to.</h2>
        <p className="mt-6 text-lg leading-relaxed max-w-[65ch]">The Invisible Tax is time and money lost to manual work and dropped follow-up. These are symptoms to investigate, not a diagnosis of every business.</p>
        <ol className="mt-12 border-t border-np-rule">
          {INVISIBLE_TAX_SIGNS.map(([title, body], index) => (
            <li key={title} className="grid md:grid-cols-2 items-center gap-6 md:gap-12 lg:gap-20 py-8 md:py-10 border-b border-np-rule">
              <div className={index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}>
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center bg-np-navy text-np-rust font-mono text-sm" aria-hidden="true">0{index + 1}</span>
                  <p className="np-label">Signal {index + 1} / 07</p>
                </div>
                <h3 className="np-display mt-5 text-[1.65rem] lg:text-[2rem] max-w-[24ch]">{title}</h3>
                <p className="mt-4 text-base lg:text-lg leading-relaxed text-np-body max-w-[46ch]">{body}</p>
              </div>
              <div className={`relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-np-tint ${index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                <Image
                  src={`/images/signs/${SIGN_IMAGES[index]}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1199px) 46vw, 540px"
                  className="object-cover"
                />
                <span className="absolute bottom-0 left-0 h-1 w-16 bg-np-rust" aria-hidden="true" />
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-xs text-np-muted">Illustrative AI-generated imagery. No clients are pictured.</p>
        <div className="mt-8 flex flex-wrap gap-6 items-center">
          <CTAButton label="Find your NextPlay" />
          <Link href="/remodelers" className="underline underline-offset-4">Running a remodeling business? →</Link>
        </div>
      </section>
      <ScoutProcess />

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
          <div className="max-w-[1200px] mx-auto px-5 grid md:grid-cols-3 gap-5">
            {FIELD_NOTES.filter((_, index) => [0, 3, 5].includes(index)).map((note) => (
              <article
                key={note.vertical}
                className="border border-np-rule bg-white p-7 hover:border-np-navy transition-colors"
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
                <Link href={`/field-notes#finding-${FIELD_NOTES.indexOf(note) + 1}`} className="inline-block mt-6 underline underline-offset-8">Read the finding →</Link>
              </article>
            ))}
          </div>
          <div className="max-w-[1200px] mx-auto px-5 mt-8"><Link href="/field-notes" className="underline underline-offset-4">Read all seven Field Notes →</Link></div>
        </div>
      </section>

      <section id="nextplay-way" className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-14 lg:gap-24">
          <div>
            <p className="np-eyebrow">The NextPlay Way</p>
            <h2 className="np-display mt-6 text-4xl md:text-[3.7rem] text-np-navy max-w-[11ch]">
              Map. Score. Prioritize. Play.
            </h2>
            <p className="mt-7 text-lg font-light leading-relaxed text-np-body max-w-[38ch]">
              A clear, ranked next move and a practical way to implement it. Your plan stands on its own; paid implementation is optional.
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

      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div><p className="np-eyebrow">The people behind your plan</p><h2 className="np-display mt-5 text-4xl md:text-5xl">Big-tech perspective. Small-business stakes.</h2><p className="mt-6 text-lg leading-relaxed">Scout starts the conversation. Jordan and Ethan review it, challenge the recommendations, and stand behind the plan. We want your people spending more time on the work only they can do.</p><Link href="/about" className="inline-block mt-6 underline underline-offset-8">Meet Jordan and Ethan →</Link></div>
          <div className="grid grid-cols-2 gap-5">{[{name:"Jordan Svoboda",photo:"jordan",role:"Operations & small-business ownership"},{name:"Ethan Hamilton",photo:"ethan",role:"People, talent & customer success"}].map(f=><article key={f.name}><Image src={`/team/${f.photo}.jpg`} alt={f.name} width={400} height={480} className="w-full aspect-[4/5] object-cover" /><h3 className="text-xl font-medium mt-4">{f.name}</h3><p className="text-sm mt-2">{f.role}</p></article>)}</div>
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
                  <span className="np-label bg-np-rust px-2.5 py-1.5" style={{ color: "var(--np-navy)" }}>
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
                  {tier.price === null ? "Let’s scope your NextPlay." : `$${tier.price.toLocaleString()}`}
                </p>
                <p className="np-label mt-2">
                  {tier.price === null ? "Custom scope" : "Fixed scope"}
                </p>
              </div>
            </article>
          ))}
        </div>

        <AssessmentCommitment />
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <CTAButton label="Start with Scout" size="large" />
          <Link href="/assessment/sample" className="font-medium text-np-navy py-3 hover:text-np-body">
            See what the plan looks like →
          </Link>
        </div>
      </section>

      <FAQSection />
      <section className="max-w-[1200px] mx-auto px-5 py-20 text-center">
        <p className="np-eyebrow">Your unfair AI advantage</p>
        <h2 className="np-display mt-6 text-4xl md:text-6xl max-w-[20ch] mx-auto">Find the opening. Make the NextPlay clear.</h2>
        <p className="mt-6 text-lg max-w-[55ch] mx-auto">Start with the work your team repeats every week. Leave with a written plan for what is worth changing.</p>
        <div className="mt-9"><CTAButton label="Start my free assessment" size="large" /></div>
      </section>
    </>
  );
}
