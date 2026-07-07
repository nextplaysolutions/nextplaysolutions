import type { Metadata } from "next";
import Script from "next/script";

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

      {/* GHL booking calendar — NextPlay Solutions Marketing Account */}
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/KEFGPgHjpXAPtdLaxZVv"
        style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
        scrolling="no"
        id="ghl-booking-calendar"
        title="Book your AI Readiness Assessment call"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

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
