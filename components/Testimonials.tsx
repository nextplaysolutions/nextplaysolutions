import { TESTIMONIALS } from "@/lib/testimonials";

/**
 * Renders nothing until lib/testimonials.ts has a real entry — no empty
 * social-proof shell, no placeholders. See the ground rules in that file.
 */
export default function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  return (
    <section className="max-w-[1200px] mx-auto px-5 py-24 md:py-36">
      <div className="np-section-rule pb-3 mb-14">
        <span className="np-label">From the founding cohort</span>
      </div>

      <div
        className={`np-grid ${
          TESTIMONIALS.length === 1 ? "" : "md:grid-cols-2"
        }`}
      >
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="p-8 md:p-10">
            {t.metric && (
              <p className="np-label mb-5" style={{ color: "var(--np-rust)" }}>
                {t.metric}
              </p>
            )}
            <blockquote>
              <p className="text-[1.25rem] md:text-[1.375rem] font-light leading-[1.55] text-np-navy max-w-[44ch]">
                &ldquo;{t.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-6">
              <p className="text-[0.9375rem] font-medium text-np-navy">
                {t.name}
              </p>
              <p className="np-label mt-1.5">
                {t.role} · {t.business}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
