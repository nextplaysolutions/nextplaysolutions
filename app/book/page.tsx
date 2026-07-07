import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Call — NextPlay Solutions",
  description:
    "Schedule your AI Readiness Assessment discovery call. 15 minutes to find out where AI can save your business time and money.",
};

export default function BookPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-brand-dark leading-tight mb-4">
        Let&rsquo;s get you booked.
      </h1>
      <p className="text-xl text-brand-gray leading-relaxed mb-10">
        Pick a time that works for you. The call is 15–20 minutes — no prep
        needed, just show up and answer Scout&rsquo;s questions honestly.
      </p>

      {/* ── PASTE YOUR GHL CALENDAR EMBED CODE BELOW THIS LINE ── */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center text-brand-gray bg-gray-50">
        <p className="text-sm font-medium text-gray-400 mb-1">Calendar embed</p>
        <p className="text-sm text-gray-400">
          Paste your GoHighLevel calendar widget code here.
        </p>
      </div>
      {/* ── END GHL CALENDAR EMBED ── */}

      <p className="text-sm text-brand-gray mt-8">
        Questions before booking?{" "}
        <a
          href="mailto:hello@nextplaysolutions.ai"
          className="text-brand-teal hover:underline"
        >
          Email us directly
        </a>
        .
      </p>
    </div>
  );
}
