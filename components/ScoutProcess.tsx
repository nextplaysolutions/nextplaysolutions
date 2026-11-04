import { DURATION } from "@/lib/offer";

export default function ScoutProcess() {
  const steps = [
    ["Talk to Scout", `Enter your contact details to receive the Scout phone number. Call for your free, approximately ${DURATION.assessmentMinutes}-minute AI assessment. No preparation needed.`],
    ["We review the findings", "Jordan and Ethan review your conversation, check the recommendations, and identify what is worth doing—and what to skip."],
    ["Keep your written plan", `Receive your plan within ${DURATION.reportTurnaroundDays} business days after the call. Implement it yourself, hand it to someone else, or ask us to build it.`],
  ];
  return (
    <section className="bg-np-navy text-white border-y border-white/15">
      <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-20">
        <p className="np-eyebrow" style={{ color: "var(--np-rust)" }}>How Scout works</p>
        <h2 className="np-display mt-5 text-3xl md:text-5xl">One conversation. A human-reviewed plan.</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {steps.map(([title, body], index) => (
            <article key={title} className="border-t border-white/25 pt-6">
              <p className="np-label" style={{ color: "var(--np-rust)" }}>0{index + 1}</p>
              <h3 className="text-2xl mt-4">{title}</h3>
              <p className="text-np-on-navy-2 leading-relaxed mt-4">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
