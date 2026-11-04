import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import { GUIDES } from "@/lib/guides";
export function generateStaticParams() { return GUIDES.map(({slug}) => ({slug})); }
export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const {slug} = await params; const guide = GUIDES.find(g=>g.slug===slug);
  return guide ? {title:guide.title, description:guide.intro, alternates:{canonical:`/field-notes/${slug}`}} : {};
}
export default async function Guide({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const guide=GUIDES.find(g=>g.slug===slug); if(!guide) notFound();
  return <article className="max-w-[850px] mx-auto px-5 py-20"><Link href="/field-notes" className="underline">← Field Notes</Link><p className="np-eyebrow mt-10">NextPlay / practical guide</p><h1 className="np-display text-4xl md:text-6xl mt-5">{guide.title}</h1><p className="text-xl leading-relaxed mt-7">{guide.intro}</p><ol className="mt-10">{guide.steps.map((step,i)=><li key={step} className="flex gap-6 py-6 border-t border-np-rule"><span className="np-label">0{i+1}</span><p className="text-lg leading-relaxed">{step}</p></li>)}</ol><aside className="bg-np-tint p-7 mt-8"><h2 className="text-xl font-medium">Evidence and limits</h2><p className="mt-4 leading-relaxed">{guide.evidence}</p></aside><h2 className="np-display text-3xl mt-12">Find the NextPlay for your business.</h2><p className="mt-4 mb-7">A free 25-minute conversation with Scout, followed by a human-reviewed assessment within three business days.</p><CTAButton /></article>;
}
