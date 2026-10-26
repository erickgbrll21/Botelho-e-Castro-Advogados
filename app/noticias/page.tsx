import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Notícias",
  description: "Análises e conteúdos jurídicos do escritório Botelho e Castro Advogados.",
  alternates: { canonical: "/noticias" },
};

export default function NoticiasPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Notícias"
        title="Análises jurídicas para orientar decisões empresariais."
        breadcrumbs={[{ label: "Notícias" }]}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mb-14 flex items-center justify-between border-t border-black pt-4 text-[10px] uppercase tracking-[0.28em]">
            <span>Edição atual</span><span className="text-black/45">{String(articles.length).padStart(2, "0")} artigos</span>
          </div>
          {/* Featured */}
          <Link href={`/noticias/${featured.slug}`} className="group grid grid-cols-12 gap-y-8 border-b border-black pb-16 md:gap-x-8">
            <div className="relative col-span-12 aspect-[16/10] overflow-hidden bg-black md:col-span-8">
              <Image src={featured.image} alt={featured.title} fill sizes="(max-width:768px) 100vw, 60vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0" />
              <span className="absolute left-0 top-0 bg-black px-4 py-3 text-[10px] uppercase tracking-[0.25em] text-white">Capa / 01</span>
            </div>
            <div className="col-span-12 self-end border-t border-black pt-6 md:col-span-4">
              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
                <span>{featured.category}</span>
                <span className="text-black/30">·</span>
                <time dateTime={featured.date} className="text-black/50">
                  {new Date(featured.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </time>
              </div>
              <h2 className="h-serif mt-6 text-4xl leading-[1.04] md:text-5xl">{featured.title}</h2>
              <p className="mt-6 leading-relaxed text-black/65">{featured.excerpt}</p>
              <span className="mt-9 inline-flex border-b border-black pb-2 text-[10px] uppercase tracking-[0.2em]">Leia o artigo completo</span>
            </div>
          </Link>

          <div className="mt-16 grid grid-cols-1 gap-y-14 md:grid-cols-12 md:gap-x-8">
            {rest.map((n, index) => (
              <Link key={n.slug} href={`/noticias/${n.slug}`} className={`group border-t border-black pt-4 ${index % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}`}>
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <Image src={n.image} alt={n.title} fill sizes="(max-width:768px) 100vw, 50vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0" />
                </div>
                <div className="mt-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em]">
                  <span>{String(index + 2).padStart(2, "0")} / {n.category}</span><span className="text-black/30">·</span>
                  <time dateTime={n.date} className="text-black/50">{new Date(n.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</time>
                </div>
                <h3 className="h-serif mt-4 text-3xl leading-tight">{n.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/60">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
