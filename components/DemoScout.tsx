import Link from "next/link";
import { DURATION } from "@/lib/offer";

/**
 * The Scout invitation. Sends people to /demo, where the lead form opens the
 * full assessment line — it does NOT print the number.
 *
 * The number used to sit here in the open, which made the /demo gate
 * pointless: anyone could read it off the homepage and skip the form. It is
 * now revealed in exactly one place, after capture (components/DemoLeadForm).
 * If you are about to render PHONE.demo anywhere public, that is the bug.
 *
 * The old copy also promised "no booking, no details, no follow-up" — true of
 * the phone call itself, false of the page now. Don't reintroduce it.
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
      <p
        className="np-eyebrow"
        style={onNavy ? { color: "var(--np-rust-light)" } : undefined}
      >
        Try Scout free · {DURATION.assessmentMinutes} minutes
      </p>

      <p
        className={`mt-4 text-[1.0625rem] leading-relaxed font-light ${
          onNavy ? "text-np-on-navy-2" : "text-np-body"
        }`}
      >
        Scout maps seven areas of your business. The founders review the call
        and send a written assessment within three business days.
      </p>

      <Link
        href="/demo"
        className={`mt-6 inline-block py-2 text-xl md:text-2xl np-display tracking-tight transition-colors ${
          onNavy
            ? "text-white hover:text-np-rust-light"
            : "text-np-navy hover:text-np-body"
        }`}
      >
        Try Scout &rarr;
      </Link>
    </div>
  );
}
