import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { AgreementForm } from "@/components/AgreementForm";

export const metadata: Metadata = {
  title: "Plataforma de Acordo",
  description:
    "Nossa Plataforma de Acordo foi criada para facilitar a resolução de pendências jurídicas de forma rápida, segura e totalmente online.",
  alternates: { canonical: "/plataforma-de-acordo" },
};

export default function PlataformaDeAcordoPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Plataforma de Acordo"
        title="Resolução de pendências jurídicas de forma rápida, segura e online."
        intro="Nossa Plataforma de Acordo foi criada para facilitar a resolução de pendências jurídicas de forma rápida, segura e totalmente online."
        breadcrumbs={[{ label: "Plataforma de Acordo" }]}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x grid grid-cols-12 gap-y-14 md:gap-x-8">
          <aside className="col-span-12 md:col-span-1">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.25em]">01 / Atendimento</p>
          </aside>
          <div className="col-span-12 md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/50">Como funciona</span>
            <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] md:text-5xl">
              Preencha o formulário e siga para o <span className="italic">atendimento</span>.
            </h2>
            <p className="mt-8 border-l border-black/20 pl-5 leading-relaxed text-black/65">
              Preencha o formulário, em seguida, você será redirecionado diretamente para o nosso atendimento, onde
              nossa equipe fará a análise do seu caso e apresentará as orientações necessárias.
            </p>
          </div>

          <AgreementForm />
        </div>
      </section>
    </>
  );
}
