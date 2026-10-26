import Image from "next/image";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { team } from "@/lib/content";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Equipe multidisciplinar com mais de 150 profissionais — advogados, contadores, peritos e correspondentes — liderados pelo advogado Antônio Márcio Botelho.",
  alternates: { canonical: "/equipe" },
};

export default function EquipePage() {
  const leaders = team.slice(0, 4);
  const rest = team.slice(4);
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Equipe"
        title="Uma equipe multidisciplinar comprometida com excelência."
        intro="No intuito de atender ampla gama de serviços dentro do universo jurídico-contábil, dispomos de equipe multidisciplinar composta por mais de 150 profissionais, altamente especializados, capacitados e comprometidos."
        breadcrumbs={[{ label: "Equipe" }]}
      />

      <section className="bg-white py-20 text-black md:py-32">
        <div className="container-x">
          <div className="grid grid-cols-12 gap-y-12 md:gap-x-8">
            <aside className="col-span-12 md:col-span-1">
              <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.28em]">01 / Pessoas</p>
            </aside>
            <div className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black">
                <Image src="/images/office/img-1383.jpg" alt="Sala de reunião do Botelho e Castro Advogados" fill sizes="(max-width:768px) 100vw, 40vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 hover:grayscale-0" />
              </div>
            </div>
            <div className="col-span-12 self-end border-t border-black pt-8 md:col-span-6 md:col-start-7">
              <span className="text-[10px] uppercase tracking-[0.28em] text-black/50">Liderança</span>
              <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] text-black md:text-5xl">
                Estratégia, segurança e objetividade — <span className="italic">com trabalho integrado</span>.
              </h2>
              <p className="mt-8 border-l border-black/20 pl-5 leading-relaxed text-black/65">
                As estratégias de ação da equipe são pautadas pela segurança e objetividade, com o assessoramento
                jurídico desenvolvido de forma integrada, para atingir os resultados necessários e de modo
                satisfatório.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/20 bg-black py-20 text-white md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-1 gap-4 border-t border-white/40 pt-4 md:grid-cols-12 md:gap-x-8">
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/50 md:col-span-2">02 / Diretoria</span>
            <div className="md:col-span-10">
              <span className="text-[10px] uppercase tracking-[0.28em] text-white/50">Diretoria e liderança</span>
              <h2 className="h-serif mt-5 text-4xl text-white md:text-5xl">Sócios e diretores</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {leaders.map((m, index) => (
              <article key={m.slug} className="border-t border-white/30 py-9 md:px-8 md:odd:border-r md:odd:pl-0">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">{String(index + 1).padStart(2, "0")} — {m.role}</p>
                <h3 className="h-serif mt-5 text-3xl leading-tight text-white">{m.name}</h3>
                <ul className="mt-6 space-y-2 text-sm leading-relaxed text-white/60">
                  {m.bio.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-1 gap-4 border-t border-black pt-4 md:grid-cols-12 md:gap-x-8">
            <span className="text-[10px] uppercase tracking-[0.28em] text-black/45 md:col-span-2">03 / Equipe</span>
            <div className="md:col-span-10">
              <span className="text-[10px] uppercase tracking-[0.28em] text-black/45">Corpo técnico</span>
              <h2 className="h-serif mt-5 text-4xl text-black md:text-5xl">Advogados e especialistas</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 border-b border-black md:grid-cols-3">
            {rest.map((m, index) => (
              <article key={m.slug} className="border-t border-black py-7 md:px-7 md:[&:nth-child(3n+1)]:pl-0 md:[&:not(:nth-child(3n+1))]:border-l">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/45">{String(index + 1).padStart(2, "0")} — {m.role}</p>
                <h3 className="h-serif mt-4 text-2xl leading-tight text-black">{m.name}</h3>
                <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-black/60">
                  {m.bio.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
