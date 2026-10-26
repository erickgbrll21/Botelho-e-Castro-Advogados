import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { practiceAreas } from "@/lib/content";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça as quatorze áreas de atuação do escritório Botelho e Castro Advogados: empresarial, tributário, trabalhista, cível, penal empresarial, sindical e outras.",
  alternates: { canonical: "/areas-de-atuacao" },
};

export default function AreasPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Áreas de Atuação"
        title="Quatorze frentes de atuação, uma única linha de conduta."
        intro="Estratégia, prevenção, técnica e resultado prático. Conheça cada uma das áreas de atuação do BCA."
        breadcrumbs={[{ label: "Áreas de Atuação" }]}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-12 border-t border-black pt-4 text-[10px] uppercase tracking-[0.28em]">
            <span className="col-span-4 md:col-span-2">Índice</span>
            <span className="col-span-8 text-right text-black/50 md:col-span-10">14 especialidades / atuação nacional</span>
          </div>
          <ul className="border-b border-black">
            {practiceAreas.map((a, index) => (
              <li key={a.slug}>
                <Link
                  href={`/areas-de-atuacao/${a.slug}`}
                  className="group grid grid-cols-[2.25rem_minmax(0,1fr)_auto] items-start gap-x-3 border-t border-black py-7 transition-colors hover:bg-black hover:text-white md:grid-cols-12 md:items-baseline md:gap-x-4 md:py-9"
                >
                  <span className="order-1 pt-1 text-[10px] tracking-[0.25em] text-black/45 group-hover:text-white/50 md:col-span-1">{a.number}</span>
                  <span className="order-2 h-serif min-w-0 text-xl leading-tight md:col-span-5 md:text-4xl">
                    {a.title}
                  </span>
                  <span className="order-4 col-span-3 mt-3 max-w-xl text-sm leading-relaxed text-black/60 group-hover:text-white/65 md:order-3 md:col-span-4 md:col-start-auto md:mt-0">{a.short}</span>
                  <span className="order-5 hidden text-right text-[10px] tracking-[0.2em] text-black/35 group-hover:text-white/50 md:order-4 md:col-span-1 md:block">
                    {String(index + 1).padStart(2, "0")} / {String(practiceAreas.length).padStart(2, "0")}
                  </span>
                  <span className="order-3 self-start transition-transform group-hover:translate-x-1 md:order-5 md:col-span-1 md:text-right">
                    <ArrowUpRight size={20} className="inline" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
