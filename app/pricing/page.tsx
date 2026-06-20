import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Pricing — NextPlay Solutions",
  description:
    "AI Readiness Audit starting at $500. Flat fee, no hourly billing, no retainer. Founding cohort spots still available at no cost.",
};

const included = [
  "15–20 minute discovery call with Scout",
  "Detailed AI savings report for your specific business",
  "Curated tool list with current pricing",
  "Prioritized implementation roadmap",
  "One follow-up Q&A session (30 min) to walk through the report",
];

const upsells = [
  {
    title: "Implementation support",
    body: "We help you set up and configure the tools in your roadmap — not just hand you a list.",
    badge: "Add-on",
  },
  {
    title: "Quarterly audit subscription",
    body: "AI moves fast. A quarterly check-in keeps your roadmap current as new tools become relevant.",
    badge: "Add-on",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-5">
        Flat fee. No surprises.
      </h1>
      <p className="text-xl text-brand-gray leading-relaxed mb-12">
        No hourly billing, no retainer, no upsell buried in the deliverable.
        One price, one scope, one output you can act on.
      </p>

      {/* Founding cohort callout */}
      <div className="bg-brand-teal-light border border-brand-teal rounded-xl p-6 mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-brand-dark mb-1">
            Founding cohort — still open
          </p>
          <p className="text-sm text-brand-gray">
            4 to 6 businesses go through the full audit at no cost in exchange
            for feedback and a testimonial.
          </p>
        </div>
        <Link
          href="/founding-cohort"
          className="flex-shrink-0 bg-brand-teal text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-teal-dark transition-colors whitespace-nowrap"
        >
          See founding cohort →
        </Link>
      </div>

      {/* Pricing card */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden mb-10">
        <div className="p-8 border-b border-gray-100">
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-widest mb-3">
            AI Readiness Audit
          </p>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-5xl font-bold text-brand-dark">$500</span>
            <span className="text-brand-gray text-lg mb-1.5">– $1,000</span>
          </div>
          <p className="text-brand-gray text-sm">
            Flat fee. Exact price set during booking based on business size and
            complexity.
          </p>
        </div>

        <div className="p-8">
          <p className="text-sm font-semibold text-brand-dark uppercase tracking-widest mb-5">
            What&rsquo;s included
          </p>
          <ul className="flex flex-col gap-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-brand-gray">
                <svg
                  className="w-4 h-4 text-brand-teal flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mb-14">
        <CTAButton label="Book Your Audit Call" size="large" />
        <p className="text-sm text-brand-gray mt-3">
          We confirm the exact price on the call before any work begins.
        </p>
      </div>

      {/* Add-ons */}
      <h2 className="text-2xl font-bold text-brand-dark mb-6">
        Want more than the audit?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {upsells.map((u) => (
          <div key={u.title} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-semibold text-brand-dark">{u.title}</p>
              <span className="text-xs font-semibold text-brand-gray border border-gray-300 px-2 py-0.5 rounded-full flex-shrink-0">
                {u.badge}
              </span>
            </div>
            <p className="text-sm text-brand-gray leading-relaxed">{u.body}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-brand-gray mt-5">
        Add-on pricing discussed after the audit is complete. No pressure — the
        roadmap stands on its own.
      </p>
    </div>
  );
}
