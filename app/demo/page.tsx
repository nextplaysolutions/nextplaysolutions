import type { Metadata } from "next";
import DemoLeadForm from "@/components/DemoLeadForm";
import { AREAS, DURATION } from "@/lib/offer";

/**
 * /demo — strict lead-capture gate for the full Scout assessment.
 * The phone number is never rendered before a successful GHL save.
 */

export const metadata: Metadata = {
  title: "Try Scout — Free AI Business Assessment",
  description:
    "Give Scout 25 minutes to find the invisible tax across seven areas of your business, then receive a free human-reviewed assessment within three business days.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="np-hero-grid absolute inset-0 pointer-events-none" />
      <div className="relative max-w-[1100px] mx-auto px-5 py-24 md:py-36">
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-14 lg:gap-20 items-start">
          <div>
            <p className="np-eyebrow">see if you qualify</p>
            <h1 className="np-display mt-7 text-4xl md:text-[3.8rem] text-np-navy tracking-tight">
              Twenty-five minutes to find your invisible tax.
            </h1>
            <p className="mt-7 text-lg leading-relaxed font-light text-np-body max-w-[48ch]">
              Scout maps {AREAS.length} areas of your business. Jordan and Ethan
              review the conversation and send a written assessment within
              {` ${DURATION.reportTurnaroundDays} business days`}. The call and
              report are free. Implementation is optional.
            </p>
            <div className="mt-9 border-t border-np-rule">
              {[
                "No preparation",
                "No technical vocabulary",
                "No follow-up campaign",
                "No obligation to buy a build",
              ].map((item) => (
                <p key={item} className="py-3.5 border-b border-np-rule text-sm text-np-body font-light">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <DemoLeadForm />
        </div>
      </div>
    </section>
  );
}
