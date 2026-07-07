import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Why Us — NextPlay Solutions",
  description:
    "Jordan, Ethan, and Blaine bring 25 years combined from LinkedIn, Meta, Tesla, and Snapchat. Enterprise AI experience applied to small business.",
};

const founders = [
  {
    name: "Jordan",
    background: "Sales & Operations",
    companies: ["LinkedIn", "Tesla"],
    note: "Watched enterprise sales orgs rebuild workflows around AI tooling. Knows which changes stuck and which were theater.",
  },
  {
    name: "Ethan",
    background: "Tech & Product",
    companies: ["Meta", "Snapchat"],
    note: "Built and shipped AI-adjacent features at scale. Understands where the technology is genuinely useful and where it overpromises.",
  },
  {
    name: "Blaine",
    background: "Risk & Compliance",
    companies: ["LinkedIn", "Snapchat"],
    note: "Oversaw how large organizations adopted new tools responsibly. Brings the guardrails side — which matters when you're trusting AI with real business data.",
  },
];

const reasons = [
  {
    title: "We've seen AI work at scale",
    body: "We weren't reading about AI adoption at big companies — we were inside it. We know what got results and what was just expensive noise.",
  },
  {
    title: "We speak small business",
    body: "Enterprise tools rarely translate directly. We know how to adapt the same principles to a team of 10, not 10,000 — without the overhead.",
  },
  {
    title: "We're not selling you software",
    body: "We have no referral deals, no affiliate arrangements, and nothing to gain from recommending one tool over another. The roadmap is whatever is actually best for you.",
  },
  {
    title: "We keep it direct",
    body: "No jargon, no slide decks full of frameworks, no six-week engagement. You get honest answers and a plan you can act on.",
  },
];

export default function WhyUsPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-5">
        Big-company experience.{" "}
        <span className="text-brand-teal">Applied to your business.</span>
      </h1>
      <p className="text-xl text-brand-gray leading-relaxed mb-14">
        Between us — LinkedIn, Meta, Tesla, Snapchat — 25 years in sales,
        operations, tech, and risk. We&rsquo;ve watched big companies use AI to do
        more with less. We&rsquo;re bringing that same lens to small business.
      </p>

      {/* Founders */}
      <div className="flex flex-col gap-6 mb-16">
        {founders.map((f) => (
          <div
            key={f.name}
            className="border border-gray-200 rounded-xl p-6 bg-white"
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <p className="font-bold text-brand-dark text-lg">{f.name}</p>
              <span className="text-xs font-semibold text-brand-teal bg-brand-teal-light px-2 py-0.5 rounded-full">
                {f.background}
              </span>
              <div className="flex gap-2 ml-auto">
                {f.companies.map((c) => (
                  <span
                    key={c}
                    className="text-xs font-medium text-brand-gray border border-gray-200 px-2 py-0.5 rounded"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-brand-gray leading-relaxed text-sm">{f.note}</p>
          </div>
        ))}
      </div>

      {/* Why it matters */}
      <h2 className="text-2xl font-bold text-brand-dark mb-8">
        Why that background matters for you
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        {reasons.map((r) => (
          <div key={r.title} className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-brand-dark mb-2">{r.title}</p>
            <p className="text-sm text-brand-gray leading-relaxed">{r.body}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="border-t border-gray-100 pt-10">
        <p className="text-brand-gray mb-6 leading-relaxed">
          Founding cohort spots are still open. Come see the difference for
          yourself — no cost, no commitment.
        </p>
        <CTAButton label="Book Your Free Assessment Call" size="large" />
      </div>
    </div>
  );
}
