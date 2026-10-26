import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ResumeForm } from "@/components/ResumeForm";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Valorizamos talentos que compartilham de nossa visão de excelência, ética e dedicação. Envie seu currículo e venha construir sua carreira conosco.",
  alternates: { canonical: "/trabalhe-conosco" },
};

export default function TrabalheConoscoPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Trabalhe Conosco"
        title="Talentos comprometidos com excelência, ética e dedicação."
        intro="Se você busca crescimento profissional, desenvolvimento contínuo e deseja fazer parte de uma equipe comprometida em transformar o direito em soluções estratégicas para nossos clientes, envie seu currículo."
        breadcrumbs={[{ label: "Trabalhe Conosco" }]}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x grid grid-cols-12 gap-y-14 md:gap-x-8">
          <aside className="col-span-12 md:col-span-1">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.25em]">01 / Carreira</p>
          </aside>
          <div className="col-span-12 md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-black/50">Junte-se ao BCA</span>
            <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] md:text-5xl">
              Uma carreira construída ao lado de <span className="italic">profissionais de referência</span>.
            </h2>
            <p className="mt-8 border-l border-black/20 pl-5 leading-relaxed text-black/65">
              Valorizamos talentos que compartilham de nossa visão de excelência, ética e dedicação. Ambiente
              multidisciplinar, com foco em resultado e desenvolvimento contínuo.
            </p>
            <ul className="mt-10 border-b border-black text-sm">
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-t border-black py-4"><span className="text-black/40">01</span> Áreas jurídicas: tributária, cível, trabalhista e licitatória</li>
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-t border-black py-4"><span className="text-black/40">02</span> Atuação preventiva, consultiva e contenciosa</li>
              <li className="grid grid-cols-[3rem_1fr] gap-3 border-t border-black py-4"><span className="text-black/40">03</span> Estrutura em oito estados e representantes em todo o Brasil</li>
            </ul>
          </div>

          <ResumeForm />
        </div>
      </section>
    </>
  );
}
