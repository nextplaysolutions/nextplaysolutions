import { PHONE, DURATION } from "@/lib/offer";

/**
 * The demo line. A visitor can hear the product in four minutes without
 * booking anything or handing over details — the sharpest differentiator
 * we have, so it gets the primary position on the homepage.
 *
 * Note this is the DEMO agent, not the full assessment line.
 */
export default function DemoScout({
  variant = "light",
}: {
  variant?: "light" | "navy";
}) {
  const onNavy = variant === "navy";

  return (
    <div
      className={
        onNavy
          ? "border border-white/20 p-8 md:p-10"
          : "border border-np-rule p-8 md:p-10 bg-np-tint"
      }
    >
      <p className="np-eyebrow" style={onNavy ? { color: "var(--np-rust-light)" } : undefined}>
        Talk to Scout now · {DURATION.demoMinutes} minutes
      </p>

      <p
        className={`mt-4 text-[1.0625rem] leading-relaxed font-light ${
          onNavy ? "text-np-on-navy-2" : "text-np-body"
        }`}
      >
        Scout is the voice agent that runs the assessment. Call the demo line
        and ask it anything — no booking, no details, no follow-up.
      </p>

      {/* Primary mobile action — kept above the 44px tap-target floor. */}
      <a
        href={`tel:${PHONE.demoE164}`}
        className={`mt-5 inline-block py-2 text-3xl md:text-4xl np-display tracking-tight transition-colors ${
          onNavy
            ? "text-white hover:text-np-rust-light"
            : "text-np-navy hover:text-np-rust"
        }`}
      >
        {PHONE.demo}
      </a>
    </div>
  );
}
