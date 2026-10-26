import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { practiceAreas } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return practiceAreas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.summary,
    alternates: { canonical: `/areas-de-atuacao/${area.slug}` },
  };
}

export default function AreaDetailPage({ params }: { params: Params }) {
  const area = practiceAreas.find((a) => a.slug === params.slug);
  if (!area) return notFound();
  const others = practiceAreas.filter((a) => a.slug !== area.slug).slice(0, 4);

  return (
    <>
      <Header />
      <PageHero
        eyebrow={`Área ${area.number}`}
        title={area.title}
        intro={area.summary}
        breadcrumbs={[{ label: "Áreas de Atuação", href: "/areas-de-atuacao" }, { label: area.title }]}
      />

      <section className="bg-white py-20 text-black md:py-32">
        <div className="container-x grid grid-cols-12 gap-y-12 md:gap-x-8">
          <aside className="col-span-12 md:col-span-1">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.28em]">{area.number} / 14</p>
          </aside>
          <div className="col-span-12 md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.28em] text-black/50">Sobre a área</p>
            <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] text-black md:text-5xl">
              Soluções em {area.title}
            </h2>
          </div>
          <div className="col-span-12 border-t border-black pt-8 md:col-span-6 md:col-start-7 md:pt-12">
            <div className="space-y-7 text-[17px] leading-[1.8] text-black/75">
              {area.body.map((p, i) => (
                <p key={i} className={i === 0 ? "text-xl leading-[1.65] text-black" : undefined}>{p}</p>
              ))}
            </div>
            <div className="mt-14 flex flex-wrap border-y border-black">
              <Link href="/contato" className="bg-black px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">Falar com um especialista</Link>
              <Link href="/areas-de-atuacao" className="border-l border-black px-7 py-4 text-[11px] uppercase tracking-[0.2em] transition-colors hover:bg-black hover:text-white">Ver todas as áreas</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/20 bg-black py-20 text-white md:py-24">
        <div className="container-x">
          <div className="mb-12 grid grid-cols-12 items-end gap-4 border-t border-white/40 pt-4">
            <div className="col-span-10">
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/55">Também pode interessar</span>
              <h2 className="h-serif mt-5 text-3xl text-white md:text-5xl">Outras áreas de atuação</h2>
            </div>
            <Link href="/areas-de-atuacao" className="col-span-2 col-start-11 hidden justify-self-end border-b border-white pb-2 text-[10px] uppercase tracking-[0.2em] md:inline-flex">Ver todas</Link>
          </div>
          <ul className="border-b border-white/35">
            {others.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas-de-atuacao/${a.slug}`} className="group grid grid-cols-12 items-center gap-4 border-t border-white/35 py-7 transition-colors hover:bg-white hover:text-black">
                  <span className="col-span-2 pl-2 text-[10px] tracking-[0.25em] text-white/45 group-hover:text-black/45 md:col-span-1">{a.number}</span>
                  <span className="col-span-9 h-serif text-xl md:col-span-9 md:text-3xl">{a.title}</span>
                  <span className="col-span-1 transition-transform group-hover:translate-x-1 md:col-span-2 md:text-right"><ArrowUpRight size={18} className="inline" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
