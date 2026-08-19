import type { Metadata } from "next";
import DemoLeadForm from "@/components/DemoLeadForm";
import { ghlConfigured } from "@/lib/ghl";
import { AREAS, DURATION, PHONE } from "@/lib/offer";

/**
 * /demo — unlisted lead-capture funnel for the Scout demo.
 *
 * Not in the nav, the sitemap, or search indexes: this is the link Jordan and
 * Ethan hand a prospect. Two modes:
 *
 *   GHL connected (GHL_PI_TOKEN set)  → marketing funnel: pitch, then a
 *   name/email/phone/business-type form that files the lead into GHL
 *   (tag "demo-requested") before revealing the demo line.
 *
 *   Not connected → the simple page with the number, because a form whose
 *   leads go nowhere is worse than no form.
 *
 * Note the homepage keeps the open "no details required" demo card; this page
 * is deliberately the gated version for outreach links, so its copy makes no
 * "no details" promise.
 */

export const metadata: Metadata = {
  title: "Try Scout",
  description: "Talk to Scout, the NextPlay assessment voice agent.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  const funnel = ghlConfigured();

  return (
    <div className="max-w-[760px] mx-auto px-5 pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="np-section-rule pb-3 mb-10">
        <span className="np-label">Demo</span>
      </div>

      <h1 className="np-display text-4xl md:text-5xl text-np-navy tracking-tight">
        Talk to Scout
      </h1>

      <p className="mt-6 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[54ch]">
        {`Scout is the voice agent that runs the NextPlay assessment — a ${DURATION.assessmentMinutes}-minute interview across ${AREAS.length} areas of a business, turned into a written report within ${DURATION.reportTurnaroundDays} business days. This demo is ${DURATION.demoMinutes} minutes of the real thing: Scout asks about your business and reflects your own numbers back at you.`}
      </p>

      <div className="mt-12">
        {funnel ? (
          <DemoLeadForm />
        ) : (
          /* Degraded state: GHL is not configured, so the form cannot file
             anyone. Show the number rather than dead-end a live prospect —
             this is the ONE public place it appears ungated, and only when
             lead capture is broken. Do not render <DemoScout /> here; it
             links to this page. */
          <div className="border border-np-rule bg-np-tint p-8 md:p-10">
            <p className="np-eyebrow">
              Talk to Scout now · {DURATION.demoMinutes} minutes
            </p>
            <a
              href={`tel:${PHONE.demoE164}`}
              className="mt-5 inline-block py-2 text-4xl md:text-5xl np-display tracking-tight text-np-navy hover:text-np-rust transition-colors"
            >
              {PHONE.demo}
            </a>
          </div>
        )}
      </div>

      {/* ── SYNTHFLOW SLOT ──────────────────────────────────────────────
          When the Demo Scout web-widget embed snippet arrives from the
          Synthflow dashboard, it goes here (as a <Script> + container,
          same pattern as the GHL embed on /book) — shown after the form
          reveal so the funnel still captures first. Make sure the snippet
          is for the DEMO agent (+1 402 940 7602), not the assessment
          agent.
      ─────────────────────────────────────────────────────────────────── */}
    </div>
  );
}
