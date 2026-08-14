import type { Metadata } from "next";
import Script from "next/script";
import DemoScout from "@/components/DemoScout";
import { COMPANY, DURATION, AREAS } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Book an assessment call",
  description: `Pick a time for your AI Readiness Assessment. ${DURATION.assessmentMinutes} minutes by phone, nothing to prepare, report in ${DURATION.reportTurnaroundDays} business days.`,
  alternates: { canonical: "/book" },
};

export default function BookPage() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 pt-24 pb-24 md:pt-40">
      <div className="grid lg:grid-cols-[1fr_380px] gap-14 lg:gap-20 items-start">
        <div>
          <p className="np-eyebrow">Book</p>
          <h1 className="np-display mt-8 text-[2.75rem] md:text-[3.5rem] text-np-navy max-w-[16ch]">
            Pick a time that works
          </h1>
          <p className="mt-7 text-xl font-light leading-[1.55] text-np-body max-w-[52ch]">
            The call runs about {DURATION.assessmentMinutes} minutes. Nothing to
            prepare — Scout asks the questions, you answer them the way
            you&rsquo;d explain your business to a colleague.
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
              title="Book your AI Readiness Assessment call"
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
              Scout calls at your chosen time. Jordan and Ethan review the
              transcript, and your report arrives within{" "}
              {DURATION.reportTurnaroundDays} business days. The fee is a flat
              rate, confirmed before any work begins.
            </p>
          </div>

          <div>
            <p className="np-label">Questions first</p>
            <a
              href={`mailto:${COMPANY.email}`}
              className="mt-3 inline-block text-np-navy font-medium hover:text-np-rust transition-colors"
            >
              {COMPANY.email}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
