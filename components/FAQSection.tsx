import Link from "next/link";
import { FAQ, FAQ_JSONLD } from "@/lib/offer";

export default function FAQSection() {
  return (
    <section className="max-w-[900px] mx-auto px-5 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <p className="np-eyebrow">Before you call</p>
      <h2 className="np-display mt-5 text-4xl">Good questions. Straight answers.</h2>
      <div className="mt-8">
        {FAQ.map(item => (
          <details className="border-b border-np-rule py-5" key={item.q}>
            <summary className="cursor-pointer text-lg font-medium">{item.q}</summary>
            <p className="mt-4 leading-relaxed">{item.a}</p>
          </details>
        ))}
      </div>
      <Link href="/legal" className="inline-block mt-6 underline underline-offset-4">Privacy and terms →</Link>
    </section>
  );
}
