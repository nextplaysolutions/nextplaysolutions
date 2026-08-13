import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import { COHORT_SIZE } from "@/lib/offer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jordan and Ethan spent 25 years between them at LinkedIn, Meta, Tesla and Snapchat — in sales, operations, product and risk. NextPlay applies that lens to small and mid-sized businesses.",
  alternates: { canonical: "/about" },
};

/* Ethan leads — primary public face of the business.
   Per-founder company tags removed pending confirmation of who worked where;
   the collective claim in the intro is the verified one. */
const founders = [
  {
    name: "Ethan Hamilton",
    role: "Co-founder",
    focus: "Technology and product",
    linkedin: "https://www.linkedin.com/in/ethanhamiltonlinkedin/",
    body: "Built and shipped product at platform scale. Knows where this technology genuinely earns its keep and where the demo is doing the talking — which is most of what the work comes down to.",
  },
  {
    name: "Jordan Svoboda",
    role: "Co-founder",
    focus: "Sales, operations and risk",
    linkedin: "https://www.linkedin.com/in/jordansvoboda/",
    body: "Sat inside sales and operations teams as they rebuilt their workflows around this tooling, and alongside the risk function that had to sign off on it. Saw which changes stuck once the enthusiasm wore off.",
  },
];

const positions = [
  {
    h: "We've seen this at scale",
    p: "Not read about it. We were inside large companies while they adopted this technology, close enough to see which changes produced results and which produced slide decks.",
  },
  {
    h: "Enterprise answers don't transfer",
    p: "What works for a team of ten thousand rarely survives contact with a team of ten. The principles carry; the tooling and the sequencing do not. Translating that is the job.",
  },
  {
    h: "We don't sell software",
    p: "No referral fees, no affiliate arrangements, no vendor relationships. We have nothing to gain from one recommendation over another, which is the only way the list is worth reading.",
  },
  {
    h: "Findings, not promises",
    p: "Every number in the report is an estimate built from what you told us, labelled as such. We would rather hand you a smaller figure you can defend than a larger one you can't.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-[1200px] mx-auto px-5 pt-20 pb-16 md:pt-28">
        <p className="np-eyebrow">About</p>
        <h1 className="np-display mt-6 text-[2.5rem] md:text-[3.5rem] text-np-navy max-w-[18ch]">
          Operators, not consultants
        </h1>
        <p className="mt-7 text-xl font-light leading-[1.55] text-np-body max-w-[58ch]">
          Between us — LinkedIn, Meta, Tesla, Snapchat — 25 years in sales,
          operations, product and risk. We watched large companies use this
          technology to do more with less, and we&rsquo;re bringing the same lens
          to businesses that don&rsquo;t have a technology function to lean on.
        </p>
      </section>

      {/* Founders */}
      <section className="max-w-[1200px] mx-auto px-5 pb-20 md:pb-24">
        <div className="np-grid md:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="p-8 md:p-10">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h2 className="text-[1.75rem] font-light text-np-navy">
                  {f.name}
                </h2>
                <span className="np-label">{f.role}</span>
              </div>
              <p
                className="np-label mt-3"
                style={{ color: "var(--np-rust)" }}
              >
                {f.focus}
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-np-body font-light">
                {f.body}
              </p>
              <div className="mt-7 pt-5 border-t border-np-rule">
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="np-label inline-block py-2 hover:text-np-rust transition-colors"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Position */}
      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <div className="np-section-rule pb-3 mb-10">
            <span className="np-label">Why that matters here</span>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-[96ch]">
            {positions.map((r) => (
              <div key={r.h}>
                <h3 className="text-[1.1875rem] font-medium text-np-navy">
                  {r.h}
                </h3>
                <p className="mt-3 leading-relaxed text-np-body font-light">
                  {r.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="max-w-[1200px] mx-auto px-5 py-20 md:py-24">
        <div className="max-w-[52ch]">
          <h2 className="np-display text-3xl md:text-4xl text-np-navy">
            We&rsquo;re taking {COHORT_SIZE} businesses through this before we
            launch.
          </h2>
          <p className="mt-6 text-np-body font-light leading-relaxed">
            If your operation is a fit, the fastest way to find out is to have
            the conversation.
          </p>
          <div className="mt-8">
            <CTAButton label="Book an assessment call" size="large" />
          </div>
        </div>
      </section>
    </>
  );
}
