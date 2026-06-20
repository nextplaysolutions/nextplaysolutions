import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Founding Cohort — NextPlay Solutions",
  description:
    "We're selecting 4 to 6 founding clients to go through the AI Readiness Audit at no cost. Free in exchange for honest feedback and a testimonial.",
};

const deliverables = [
  {
    title: "Deep-dive discovery call",
    body: "A guided conversation with Scout across seven areas of your business — operations, sales, marketing, customer service, finance, HR, and more.",
  },
  {
    title: "AI savings report",
    body: "A detailed report that shows exactly where AI can save you time and money — specific to your business, not a generic template.",
  },
  {
    title: "Curated tool list with pricing",
    body: "A hand-picked list of tools you can implement immediately, with what each one costs and what it replaces.",
  },
  {
    title: "Prioritized roadmap",
    body: "A clear order of operations — what to tackle first, what to skip for now, and why. No fluff, no jargon.",
  },
];

export default function FoundingCohortPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-brand-teal-light text-brand-teal-dark text-sm font-semibold px-3 py-1 rounded-full mb-6">
        <span className="w-2 h-2 bg-brand-teal rounded-full inline-block" />
        Spots limited — 4 to 6 businesses
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-5">
        Be one of our founding clients.
        <span className="block text-brand-teal mt-1">Zero cost to you.</span>
      </h1>

      <p className="text-xl text-brand-gray leading-relaxed mb-10">
        We&rsquo;re selecting a small group of businesses to go through the full AI
        Readiness Audit at no charge — in exchange for honest feedback and a
        testimonial if you find it valuable. After this cohort, it becomes a
        paid service.
      </p>

      {/* What you get */}
      <div className="mb-12">
        <h2 className="text-xl font-semibold text-brand-dark mb-6">
          Here&rsquo;s exactly what you get:
        </h2>
        <div className="flex flex-col gap-5">
          {deliverables.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-teal-light flex items-center justify-center text-brand-teal font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <p className="font-semibold text-brand-dark">{item.title}</p>
                <p className="text-brand-gray text-sm mt-1 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The ask */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="font-semibold text-brand-dark mb-2">What we ask in return</h2>
        <p className="text-brand-gray leading-relaxed">
          Honest feedback on the process and the report. If you find it
          valuable, a short testimonial we can share. That&rsquo;s it — no long-term
          commitment, no sales pitch, no strings.
        </p>
      </div>

      {/* Urgency */}
      <div className="bg-brand-teal-light border border-brand-teal rounded-xl p-6 mb-10">
        <p className="text-brand-dark leading-relaxed">
          <span className="font-semibold">This offer is genuinely limited.</span>{" "}
          We&rsquo;re working with 4 to 6 businesses — enough to get real feedback,
          small enough to give each one serious attention. Once the cohort is
          full, the next audit is at our standard rate.
        </p>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <CTAButton label="Apply for a Free Spot" href="/book" size="large" />
        <p className="text-sm text-brand-gray">
          Takes 15 minutes. No prep needed.
        </p>
      </div>
    </div>
  );
}
