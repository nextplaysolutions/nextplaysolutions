import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "How It Works — NextPlay Solutions",
  description:
    "A 3-step AI readiness audit: discovery call with Scout, AI-generated report, and a prioritized roadmap of tools to implement.",
};

const steps = [
  {
    number: "01",
    title: "Discovery call with Scout",
    duration: "~15–20 minutes",
    body: "Scout is our AI voice agent. She'll guide you through a structured conversation covering seven areas of your business — operations, sales, customer service, marketing, finance and admin, HR, and your overall business overview.",
    details: [
      "No prep required — just show up and answer honestly",
      "Covers the areas where AI typically delivers the most impact",
      "Questions are plain-language, not technical",
      "The call is recorded and transcribed for the report",
    ],
  },
  {
    number: "02",
    title: "AI-generated report",
    duration: "Delivered within 24–48 hours",
    body: "Based on your discovery call, we generate a detailed report that maps your business against common AI use cases. You get specifics — not 'AI can help with customer service,' but 'here's how AI handles your tier-1 support tickets and what that frees up for your team.'",
    details: [
      "Identifies your highest-leverage AI opportunities",
      "Explains the potential time and cost savings per area",
      "Written in plain language — no technical background needed",
      "Honest about where AI isn't worth your time yet",
    ],
  },
  {
    number: "03",
    title: "Prioritized roadmap",
    duration: "Included in the report",
    body: "The report closes with a curated list of tools and a clear implementation order. Not a list of 40 AI apps — a short, specific set of tools that fit your business, with pricing, so you know exactly what you're getting into.",
    details: [
      "Tool recommendations matched to your actual workflows",
      "Current pricing included for each tool",
      "Prioritized by impact and ease of implementation",
      "Built to be handed to anyone on your team to execute",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-5">
        Simple process.{" "}
        <span className="text-brand-teal">Concrete output.</span>
      </h1>
      <p className="text-xl text-brand-gray leading-relaxed mb-16">
        Three steps from &ldquo;I don&rsquo;t know where to start&rdquo; to a clear plan your
        team can act on this week.
      </p>

      <div className="flex flex-col gap-14">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-6 md:gap-8">
            {/* Left — number + connector */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {step.number.replace("0", "")}
              </div>
              {i < steps.length - 1 && (
                <div className="w-px flex-1 bg-gray-200 mt-3" />
              )}
            </div>

            {/* Right — content */}
            <div className="pb-6 md:pb-10 flex-1">
              <span className="inline-block text-xs font-semibold text-brand-teal uppercase tracking-widest mb-2">
                {step.duration}
              </span>
              <h2 className="text-2xl font-bold text-brand-dark mb-3">
                {step.title}
              </h2>
              <p className="text-brand-gray leading-relaxed mb-5">{step.body}</p>
              <ul className="flex flex-col gap-2">
                {step.details.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-brand-gray">
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
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 border-t border-gray-100 pt-12">
        <h2 className="text-2xl font-bold text-brand-dark mb-3">
          Ready to find out where AI fits your business?
        </h2>
        <p className="text-brand-gray mb-6">
          Founding cohort spots are still open — go through the full audit at
          no cost.
        </p>
        <CTAButton label="Book Your Free Audit Call" size="large" />
      </div>
    </div>
  );
}
