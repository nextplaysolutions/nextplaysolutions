import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { FIELD_NOTES, QUIET_LEAKS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "AI Business Findings — Field Notes",
  description:
    "Anonymized examples of the invisible tax in small businesses: revenue leakage, stalled workflows, avoidable costs, and software that was not worth buying.",
  alternates: { canonical: "/field-notes" },
};

export default function FieldNotesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-np-rule">
        <div className="np-hero-grid absolute inset-0 pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-5 py-24 md:py-36">
          <p className="np-eyebrow">Field Notes</p>
          <h1 className="np-display mt-8 text-[3rem] md:text-[4.5rem] text-np-navy max-w-[15ch]">
            Here is what the business was not seeing.
          </h1>
          <p className="mt-8 text-xl font-light leading-[1.55] text-np-body max-w-[55ch]">
            Findings from real interviews, anonymized with permission. Not
            promises. Not averages. A record of the moment a familiar process
            became a measurable problem.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
        <div className="grid gap-8">
          {FIELD_NOTES.map((note, index) => (
            <article key={note.vertical} className="np-view-rise grid md:grid-cols-[5rem_.6fr_1.4fr] gap-6 md:gap-12 border-t border-np-rule pt-8">
              <p className="np-label">{String(index + 1).padStart(2, "0")}</p>
              <div>
                <p className="np-label">{note.vertical}</p>
                <p className="np-display mt-5 text-3xl md:text-4xl text-np-navy">{note.signal}</p>
                <p className="np-label mt-2">{note.metric}</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-light leading-relaxed text-np-navy">{note.finding}</p>
                <p className="np-label mt-7">{note.surfaced}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-np-navy text-white">
        <div className="max-w-[1200px] mx-auto px-5 py-20 md:py-28">
          <p className="np-eyebrow" style={{ color: "var(--np-rust-light)" }}>What we ask about</p>
          <h2 className="np-display mt-6 text-4xl md:text-[3.4rem] max-w-[16ch]">The Invisible Tax, by industry.</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-px bg-white/15 border border-white/15">
            {QUIET_LEAKS.map((item) => (
              <article key={item.vertical} className="bg-np-navy p-8">
                <p className="np-label" style={{ color: "var(--np-on-navy-muted)" }}>{item.vertical}</p>
                <p className="mt-5 text-2xl font-light leading-snug">{item.leak}</p>
              </article>
            ))}
          </div>
          <p className="mt-7 text-sm text-np-on-navy-muted font-light">
            Patterns Scout investigates—not claims about every company in the industry.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-32 text-center">
        <p className="np-eyebrow">Your field note starts here</p>
        <h2 className="np-display mt-6 text-4xl md:text-[3.6rem] text-np-navy">
          See what Scout finds in 25 minutes.
        </h2>
        <div className="mt-9"><CTAButton size="large" /></div>
      </section>
    </>
  );
}
