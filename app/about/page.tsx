import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import { COHORT_SIZE } from "@/lib/offer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ethan Hamilton and Jordan Svoboda spent their careers on the people side of LinkedIn, Meta, Tesla and Snap. NextPlay exists to make small teams harder to replace, not easier to cut.",
  alternates: { canonical: "/about" },
};

/* Ethan first — primary public face of the business.
   Company attributions verified against both LinkedIn work histories, Aug 2026. */
const founders = [
  {
    name: "Ethan Hamilton",
    role: "Co-founder",
    focus: "Talent, sales and go-to-market",
    photo: "/team/ethan.jpg",
    linkedin: "https://www.linkedin.com/in/ethanhamiltonlinkedin/",
    companies: "LinkedIn · Snap · Tesla · Paylocity",
    body: [
      "Ethan spent a decade deciding who got hired — at LinkedIn, at Snap, at Tesla — which is an unusually honest vantage point on how a company actually works. You learn quickly which roles exist because the work matters, and which exist because nobody ever fixed the process underneath them.",
      "He has also sold real estate in Omaha since 2014, more than $18 million of it, walking people through the largest purchase most of them will ever make. Both jobs turn out to be the same job: work out what someone actually needs, then be straight with them about it.",
      "He is blunt about where this technology belongs. It should not replace the people in a business. It should take the work that was never worth a person's day to begin with.",
    ],
  },
  {
    name: "Jordan Svoboda",
    role: "Co-founder",
    focus: "Operations, trust and risk",
    photo: "/team/jordan.jpg",
    linkedin: "https://www.linkedin.com/in/jordansvoboda/",
    companies: "LinkedIn · Meta · NextPlay Homes",
    body: [
      "Jordan spent eight years at LinkedIn and three leading trust and safety work at Meta — the job of keeping products and the people using them out of harm's way. It is a discipline built on asking what could go wrong before it does, which is a useful habit to bring to a technology everyone is in a hurry about.",
      "He started out in 2007 knocking on doors as an insurance restoration rep, sitting at kitchen tables with homeowners and small business owners after something had gone wrong. He also runs a small real estate company. The customer has not really changed.",
    ],
  },
];

const positions = [
  {
    h: "We're not here to help you cut staff",
    p: "Most AI conversations open with which jobs disappear. In a business of fifteen people that framing is not just bleak, it's wrong — you don't have spare people, you have people doing three jobs each. The useful question is which of those three a machine should take so they can get back to the one only they can do.",
  },
  {
    h: "We've seen this from the inside",
    p: "Not read about it. We were in these companies while they adopted this technology, close enough to watch which changes produced results and which produced slide decks. That's the difference between a recommendation and an opinion.",
  },
  {
    h: "Enterprise answers don't transfer",
    p: "What works for a team of ten thousand rarely survives contact with a team of ten. The principles carry; the tooling and the sequencing do not. Doing that translation honestly is most of the work.",
  },
  {
    h: "We don't sell software",
    p: "No referral fees, no affiliate arrangements, no vendor relationships. We have nothing to gain from one recommendation over another, which is the only condition under which the list is worth reading.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Position */}
      <section className="max-w-[1200px] mx-auto px-5 pt-20 pb-16 md:pt-28">
        <p className="np-eyebrow">About</p>
        <h1 className="np-display mt-6 text-[2.5rem] md:text-[3.5rem] text-np-navy max-w-[20ch]">
          Make people harder to replace
        </h1>
        <div className="mt-8 max-w-[60ch] flex flex-col gap-5 text-lg md:text-xl font-light leading-[1.6] text-np-body">
          <p>
            Both of us have spent our careers on the people side of large
            technology companies — hiring them, protecting them, leading them.
            We watched those companies adopt AI early, and we watched the
            conversation about it curdle into a question about headcount.
          </p>
          <p>
            That framing does not fit the businesses we grew up around. A
            fifteen-person company has no slack to cut. It has an owner doing
            payroll at ten at night and a scheduler who has not taken a proper
            week off since 2023. Used well, this technology gives those hours
            back — to the business, and to the family waiting on the other side
            of them.
          </p>
          <p>
            That is the whole reason we started this. Not to help anyone trim a
            team, but to help the people already on it get to the work only they
            can do.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="max-w-[1200px] mx-auto px-5 pb-20 md:pb-24">
        <div className="np-grid md:grid-cols-2">
          {founders.map((f) => (
            <div key={f.name} className="p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-5">
                {f.photo ? (
                  <Image
                    src={f.photo}
                    alt={f.name}
                    width={88}
                    height={88}
                    className="w-[88px] h-[88px] object-cover flex-none"
                  />
                ) : (
                  <div
                    className="w-[88px] h-[88px] flex-none bg-np-tint border border-np-rule flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="np-label" style={{ fontSize: "1rem" }}>
                      {f.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
                <div>
                  <h2 className="text-[1.625rem] font-light text-np-navy leading-tight">
                    {f.name}
                  </h2>
                  <p className="np-label mt-1.5">{f.role}</p>
                </div>
              </div>

              <p
                className="np-label mt-7"
                style={{ color: "var(--np-rust)" }}
              >
                {f.focus}
              </p>

              <div className="mt-4 flex flex-col gap-4">
                {f.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-[1.0625rem] leading-relaxed text-np-body font-light"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <p className="np-label">{f.companies}</p>
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="np-label inline-block mt-4 py-2 hover:text-np-rust transition-colors"
                  style={{ color: "var(--np-navy)" }}
                >
                  Verify on LinkedIn ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where we stand */}
      <section className="bg-np-tint border-y border-np-rule">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
          <div className="np-section-rule pb-3 mb-10">
            <span className="np-label">Where we stand</span>
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
            If yours might be one of them, the fastest way to find out is to
            have the conversation.
          </p>
          <div className="mt-8">
            <CTAButton label="Book an assessment call" size="large" />
          </div>
        </div>
      </section>
    </>
  );
}
