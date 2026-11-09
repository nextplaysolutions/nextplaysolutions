import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { GUIDES } from "@/lib/guides";
import { COMPANY, DURATION, SITE_URL } from "@/lib/offer";

export function generateStaticParams() {
  return GUIDES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.intro,
    alternates: { canonical: `/field-notes/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.intro,
      url: `/field-notes/${slug}`,
      type: "article",
      modifiedTime: guide.updated,
    },
  };
}

export default async function Guide({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = GUIDES.find(g => g.slug === slug);
  if (!guide) notFound();
  const url = `${SITE_URL}/field-notes/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article", "@id": `${url}#article`, headline: guide.title,
        description: guide.intro, mainEntityOfPage: url, dateModified: guide.updated,
        author: { "@type": "Organization", name: COMPANY.name, url: SITE_URL },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Field Notes", item: `${SITE_URL}/field-notes` },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
  return (
    <article className="max-w-[1000px] mx-auto px-5 py-16 md:py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <nav aria-label="Breadcrumb" className="flex flex-wrap gap-3 text-sm">
        <Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span>
        <Link href="/field-notes" className="underline underline-offset-4">Field Notes</Link><span aria-hidden="true">/</span>
        <span aria-current="page">{guide.title}</span>
      </nav>
      <header className="mt-10">
        <p className="np-eyebrow">NextPlay / practical guide</p>
        <h1 className="np-display text-4xl md:text-6xl mt-5 max-w-[22ch]">{guide.title}</h1>
        <p className="text-xl leading-relaxed mt-7 max-w-[65ch]">{guide.intro}</p>
        <p className="text-sm text-np-muted mt-5">By <Link href="/about" className="underline underline-offset-4">{COMPANY.name}</Link> · Updated <time dateTime={guide.updated}>November 6, 2026</time></p>
      </header>
      <nav aria-label="Guide sections" className="flex flex-wrap gap-x-6 gap-y-3 border-y border-np-rule py-5 mt-8 text-sm">
        <a href="#steps" className="underline underline-offset-4">Steps</a>
        <a href="#example" className="underline underline-offset-4">Worked example</a>
        <a href="#checklist" className="underline underline-offset-4">Checklist</a>
        <a href="#measure" className="underline underline-offset-4">What to measure</a>
      </nav>
      <section id="steps" className="scroll-mt-24 mt-12">
        <h2 className="np-display text-3xl">Start with four moves.</h2>
        <ol className="mt-6">{guide.steps.map((step, i) => (
          <li key={step} className="flex gap-6 py-5 border-t border-np-rule"><span className="np-label shrink-0">0{i + 1}</span><p className="text-lg leading-relaxed">{step}</p></li>
        ))}</ol>
      </section>
      <div className="mt-10 space-y-9 max-w-[75ch]">{guide.sections.map(section => (
        <section key={section.title}><h2 className="text-2xl font-medium">{section.title}</h2><p className="mt-4 leading-relaxed text-lg">{section.body}</p></section>
      ))}</div>
      <section id="example" className="scroll-mt-24 mt-12 bg-np-tint border border-np-rule p-5 md:p-8">
        <p className="np-eyebrow">Illustrative workflow</p>
        <h2 className="np-display text-3xl mt-4">{guide.example.title}</h2>
        <p className="mt-4 leading-relaxed">{guide.example.intro}</p>
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">{guide.example.title}</caption>
            <thead><tr>{guide.example.columns.map(column => <th scope="col" key={column} className="border-b border-np-rule p-3 align-top">{column}</th>)}</tr></thead>
            <tbody>{guide.example.rows.map(row => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index} className="border-b border-np-rule p-3 align-top font-medium">{cell}</th> : <td key={index} className="border-b border-np-rule p-3 align-top">{cell}</td>)}</tr>)}</tbody>
          </table>
        </div>
      </section>
      <section id="checklist" className="scroll-mt-24 mt-12">
        <h2 className="np-display text-3xl">Your handoff checklist</h2>
        <ul className="list-disc pl-5 mt-5 space-y-3">{guide.checklist.map(item => <li key={item} className="leading-relaxed">{item}</li>)}</ul>
        <a href={`/checklists/${slug}.txt`} download className="inline-block mt-6 underline underline-offset-4">Download the checklist (.txt) →</a>
      </section>
      <section id="measure" className="scroll-mt-24 mt-12 max-w-[75ch]">
        <h2 className="np-display text-3xl">What to measure</h2><p className="mt-5 text-lg leading-relaxed">{guide.measure}</p>
      </section>
      <aside className="border-l-4 border-np-rust bg-np-tint p-7 mt-10">
        <h2 className="text-xl font-medium">Evidence and limits</h2><p className="mt-4 leading-relaxed">{guide.evidence}</p>
        <Link href={guide.evidenceHref} className="inline-block mt-4 underline underline-offset-4">Read the related anonymized finding →</Link>
      </aside>
      <section className="mt-12"><h2 className="np-display text-3xl">Common questions</h2>
        {guide.faq.map(item => <div key={item.q} className="border-b border-np-rule py-6"><h3 className="text-xl font-medium">{item.q}</h3><p className="mt-3 leading-relaxed">{item.a}</p></div>)}
      </section>
      <section className="mt-12 border-t border-np-rule pt-8">
        <h2 className="np-display text-3xl">Keep exploring</h2>
        <ul className="mt-5 space-y-4">{GUIDES.filter(g => g.slug !== slug).map(g => <li key={g.slug}><Link href={`/field-notes/${g.slug}`} className="underline underline-offset-4">{g.title} →</Link></li>)}
          <li><Link href={guide.relatedHref} className="underline underline-offset-4">{guide.relatedLabel} →</Link></li>
        </ul>
      </section>
      <h2 className="np-display text-3xl mt-12">Find the NextPlay for your business.</h2>
      <p className="mt-4 mb-7">A free {DURATION.assessmentMinutes}-minute conversation with Scout, followed by a human-reviewed assessment within {DURATION.reportTurnaroundDays} business days.</p>
      <CTAButton />
    </article>
  );
}
