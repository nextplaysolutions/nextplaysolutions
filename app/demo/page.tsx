import type { Metadata } from "next";
import DemoScout from "@/components/DemoScout";
import { DURATION } from "@/lib/offer";

/**
 * /demo — unlisted page for sharing the Scout demo directly.
 *
 * Deliberately not in the nav, the sitemap, or search indexes: this is the
 * link Jordan and Ethan hand a prospect ("try Scout here") — not a public
 * page. The phone demo works today; the SYNTHFLOW SLOT below is where the
 * web-call widget goes once the embed snippet is pasted in.
 */

export const metadata: Metadata = {
  title: "Try Scout",
  description: "Talk to Scout, the NextPlay assessment voice agent.",
  robots: { index: false, follow: false },
};

export default function DemoPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 pt-28 md:pt-36 pb-24 md:pb-36">
      <div className="np-section-rule pb-3 mb-10">
        <span className="np-label">Demo</span>
      </div>

      <h1 className="np-display text-4xl md:text-5xl text-np-navy tracking-tight">
        Talk to Scout
      </h1>

      <p className="mt-6 text-[1.0625rem] leading-relaxed font-light text-np-body max-w-[54ch]">
        {`Scout is the voice agent that runs the NextPlay assessment. This demo takes about ${DURATION.demoMinutes} minutes — ask it anything you'd ask on a real call. No booking, no contact details, no follow-up.`}
      </p>

      <div className="mt-12">
        <DemoScout />
      </div>

      {/* ── SYNTHFLOW SLOT ──────────────────────────────────────────────
          When the Demo Scout web-widget embed snippet arrives from the
          Synthflow dashboard, it goes right here (as a <Script> +
          container, same pattern as the GHL embed on /book). Until then
          the phone line above is the demo. Make sure the snippet is for
          the DEMO agent (+1 402 940 7602), not the assessment agent.
      ─────────────────────────────────────────────────────────────────── */}
    </div>
  );
}
