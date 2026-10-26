import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { articles } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/noticias/${a.slug}` },
    openGraph: { images: [a.image] },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return notFound();
  const others = articles.filter((a) => a.slug !== article.slug);
  const dateFmt = new Date(article.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <>
      <Header />
      <article className="bg-white pb-24 pt-32 text-black md:pt-44">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Notícias", href: "/noticias" }, { label: article.category }]} />
          <div className="mt-10 grid grid-cols-12 border-t border-black pt-4 text-[10px] uppercase tracking-[0.25em]">
            <span className="col-span-4 md:col-span-2">{article.category}</span>
            <time dateTime={article.date} className="col-span-8 text-right text-black/50 md:col-span-10">{dateFmt}</time>
          </div>
          <h1 className="h-serif mt-10 max-w-5xl text-[44px] leading-[0.98] md:ml-[16.666%] md:text-[72px]">{article.title}</h1>
        </div>
        <div className="container-x mt-14">
          <div className="relative ml-auto aspect-[16/9] w-full overflow-hidden bg-black md:w-10/12">
            <Image src={article.image} alt={article.title} fill priority sizes="100vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 hover:grayscale-0" />
            <span className="absolute bottom-0 left-0 bg-black px-4 py-3 text-[10px] uppercase tracking-[0.24em] text-white">Arquivo BCA / Notícias</span>
          </div>
        </div>
        <div className="container-x mt-16 grid grid-cols-12">
          <aside className="col-span-12 mb-10 md:col-span-2 md:mb-0">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.25em]">Leitura / {String(article.content.length).padStart(2, "0")} blocos</p>
          </aside>
          <div className="col-span-12 space-y-7 text-[17px] leading-[1.8] text-black/75 md:col-span-7 md:col-start-4">
            {article.content.map((p, i) => (
              <p key={i} className={i === 0 ? "border-t border-black pt-8 text-xl leading-[1.65] text-black md:text-2xl" : undefined}>{p}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-white/20 bg-black py-20 text-white md:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-end justify-between border-t border-white/40 pt-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">Próxima leitura</span>
            <h2 className="h-serif text-4xl md:text-5xl">Continue lendo</h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-white/30 md:grid-cols-2">
            {others.map((n, index) => (
              <Link key={n.slug} href={`/noticias/${n.slug}`} className="group bg-black pb-8 md:p-8 md:first:pl-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={n.image} alt={n.title} fill sizes="(max-width:768px) 100vw, 50vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.02] group-hover:grayscale-0" />
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-white/45">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="h-serif mt-3 text-3xl leading-tight text-white">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{n.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
