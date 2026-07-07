import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "NextPlay Solutions — Your Unfair AI Advantage",
  description:
    "Find out exactly where AI can save your business time and money. Scout conducts a guided assessment and delivers a prioritized roadmap you can act on immediately.",
};

const steps = [
  {
    number: "01",
    title: "Discovery call with Scout",
    body: "Scout, our AI voice agent, walks through seven areas of your business in a 15-minute guided conversation.",
  },
  {
    number: "02",
    title: "AI-generated report",
    body: "You get a detailed breakdown of where AI can cut operational costs, reduce manual work, and surface new revenue opportunities — specific to how your business actually runs.",
  },
  {
    number: "03",
    title: "Prioritized roadmap",
    body: "A curated list of tools with pricing and a clear action order. Start with what moves the needle fastest.",
  },
];

const companies = ["LinkedIn", "Meta", "Tesla", "Snapchat"];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-brand-teal-light text-brand-teal-dark text-sm font-semibold px-3 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-teal rounded-full inline-block" />
            Founding cohort — free spots available
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
            Your unfair{" "}
            <span className="text-brand-teal">AI advantage.</span>
          </h1>
          <p className="text-lg font-semibold text-brand-dark mb-4">
            Enterprise AI strategy. Small business price.
          </p>
          <p className="text-xl md:text-2xl text-brand-gray leading-relaxed mb-8 max-w-2xl">
            An AI readiness assessment for small businesses. Find out exactly where
            AI can cut operational costs, free up your team, and create new
            revenue opportunities — with a roadmap you can act on this week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <CTAButton label="Book Your Free Assessment Call" size="large" />
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-brand-dark font-semibold text-base hover:text-brand-teal transition-colors py-4"
            >
              See how it works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-5 py-12">
          <p className="text-sm font-semibold text-brand-gray uppercase tracking-widest mb-6">
            Built for businesses like yours
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Small to mid-sized business", sub: "Right-sized for where you are — not enterprise overhead" },
              { label: "No CTO or tech team", sub: "We speak plain language, not jargon" },
              { label: "Too busy to research AI", sub: "We do the homework. You get the answers." },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl border border-gray-200 p-5">
                <p className="font-semibold text-brand-dark mb-1">{item.label}</p>
                <p className="text-sm text-brand-gray">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — teaser */}
      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
            Three steps. One week. Real answers.
          </h2>
          <p className="text-lg text-brand-gray">
            No consultants billing by the hour. No six-week engagement. A
            focused assessment with a clear output.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-4xl font-bold text-brand-teal-light mb-3">
                {step.number}
              </p>
              <p className="font-semibold text-brand-dark text-lg mb-2">
                {step.title}
              </p>
              <p className="text-brand-gray leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/how-it-works" className="text-brand-teal font-semibold hover:underline">
            Full breakdown →
          </Link>
        </div>
      </section>

      {/* Credibility bar */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-5 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <p className="text-sm font-semibold text-brand-gray uppercase tracking-widest whitespace-nowrap">
            Our background
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {companies.map((c) => (
              <span
                key={c}
                className="text-sm font-semibold text-brand-dark bg-white border border-gray-200 px-4 py-2 rounded-lg"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-sm text-brand-gray md:ml-auto md:text-right max-w-xs">
            25 years combined in sales, ops, tech, and risk — now applied to
            small business.
          </p>
        </div>
      </section>

      {/* Founding cohort CTA band */}
      <section className="max-w-5xl mx-auto px-5 py-16 md:py-24">
        <div className="bg-brand-dark rounded-2xl px-8 py-12 md:px-14 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
              Limited spots available
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Get the assessment free.
            </h2>
            <p className="text-gray-300 max-w-md leading-relaxed">
              We&rsquo;re taking on 4 to 6 founding clients to go through the full
              program at no cost — in exchange for honest feedback and a
              testimonial if you find it valuable.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <CTAButton label="Claim a Free Spot" href="/founding-cohort" size="large" />
            <Link
              href="/pricing"
              className="text-sm text-gray-400 hover:text-white transition-colors text-center"
            >
              See standard pricing →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
