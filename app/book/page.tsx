import type { Metadata } from "next";
import Script from "next/script";
import DemoScout from "@/components/DemoScout";
import { COMPANY, AREAS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Talk About AI Implementation",
  description:
    "Talk with NextPlay Solutions about implementing One Play, The Roadmap, or a custom AI business optimization engagement.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 pt-24 pb-24 md:pt-40">
      <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-start">
        <div>
          <p className="np-eyebrow">Book</p>
          <h1 className="np-display mt-8 text-[2.75rem] md:text-[3.5rem] text-np-navy max-w-[16ch]">
            Talk through the build
          </h1>
          <p className="mt-7 text-xl font-light leading-[1.55] text-np-body max-w-[52ch]">
            This calendar is for businesses that already have an assessment or
            want to discuss a larger implementation. If you have not spoken
            with Scout yet, start with the free assessment.
          </p>

          {/* GHL booking calendar — NextPlay Solutions Marketing Account */}
          <div className="mt-12 border border-np-rule">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/KEFGPgHjpXAPtdLaxZVv"
              style={{
                width: "100%",
                border: "none",
                overflow: "hidden",
                minHeight: "700px",
              }}
              scrolling="no"
              id="ghl-booking-calendar"
              title="Talk to NextPlay about implementation"
            />
          </div>
          <Script
            src="https://link.msgsndr.com/js/form_embed.js"
            strategy="lazyOnload"
          />
        </div>

        {/* Aside */}
        <aside className="lg:pt-2 flex flex-col gap-10">
          <DemoScout />

          <div>
            <p className="np-label">On the call</p>
            <ul className="mt-4 flex flex-col">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="text-[0.9375rem] text-np-body font-light py-2.5 border-b border-np-rule"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-np-rust pl-5">
            <p className="np-label">After you book</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-np-body font-light">
              Jordan or Ethan will use the time to confirm the priority, the
              scope, who owns each step, and what counts as finished. Nothing
              is billed until the work is written down and agreed.
            </p>
          </div>

          <div>
            <p className="np-label">Questions first</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-3 inline-block text-np-navy font-medium hover:text-np-body transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
