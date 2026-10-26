import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { stats, offices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conheça a história, os números e o posicionamento do escritório Botelho e Castro Advogados. Mais de 25 anos de atuação sólida em direito empresarial.",
  alternates: { canonical: "/institucional" },
};

export default function InstitucionalPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Institucional"
        title="Uma trajetória construída sobre confiança, estratégia e resultado."
        intro="Considerado o oitavo maior escritório de Minas Gerais no ranking da OAB, o Botelho e Castro Advogados é referência na prestação de serviços jurídicos de qualidade."
        breadcrumbs={[{ label: "Institucional" }]}
      />

      {/* História */}
      <section className="bg-white pb-20 text-black md:pb-32">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-black md:aspect-[21/9]">
          <Image
            src="/images/office/foto-069.jpg"
            alt="Sala de reunião do escritório BCA"
            fill
            sizes="100vw"
            className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 hover:grayscale-0"
          />
        </div>
        <div className="container-x mt-12 grid grid-cols-12 gap-y-8 md:mt-16 md:gap-x-8">
          <div className="col-span-12 border-t border-black pt-3 md:col-span-1">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em]">01 / 04</span>
          </div>
          <div className="col-span-12 border-t border-black pt-6 md:col-span-10 md:col-start-3 md:pt-10">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em]">Nossa história</span>
            <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] text-black md:text-5xl">
              Mais de 25 anos <span className="italic">construindo decisões</span> que sustentam negócios.
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 border-l border-black/20 pl-5 text-black/70 leading-relaxed">
              <p>
                Com mais de 25 anos de experiência e uma trajetória consolidada no mercado jurídico, a Botelho e Castro
                Advogados construiu sua história a partir de uma atuação sólida, estratégica e comprometida com seus
                clientes. Ao longo desse período, o escritório já conduziu mais de 300 mil processos, atuando em
                diferentes instâncias e tribunais e adquirindo ampla experiência na estruturação jurídica de grandes
                projetos, bem como na atuação preventiva, consultiva e contenciosa, tanto no âmbito administrativo
                quanto judicial.
              </p>
              <p>
                O escritório possui atuação multidisciplinar em diversos ramos do Direito, incluindo Direito Trabalhista,
                Civil, Empresarial, Penal Empresarial, Tributário, Previdenciário, Administrativo, Sindical, do
                Consumidor, Falimentar e Ambiental, além da condução de acordos e conciliações. Sua presença abrange a
                Justiça Estadual, Federal e Trabalhista, os Juizados Especiais Estaduais e Federais e os Tribunais
                Superiores.
              </p>
              <p>
                Reconhecida pela OAB como o 8º maior escritório de advocacia de Minas Gerais, a Botelho e Castro
                Advogados alia experiência, estrutura e excelência técnica para oferecer soluções jurídicas seguras e
                alinhadas às necessidades de cada cliente.
              </p>
              <p>
                Nossa atuação é pautada pela ética, transparência, agilidade e eficiência, com uma comunicação próxima e
                clara em todas as etapas. Acreditamos que relações profissionais duradouras são construídas sobre
                confiança, atenção e comprometimento — princípios que orientam nossa atuação há mais de duas décadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="border-y border-white/20 bg-black py-20 text-white md:py-24">
        <div className="container-x">
          <div className="mb-12 flex items-center justify-between border-b border-white/30 pb-4 text-[10px] uppercase tracking-[0.28em]">
            <span>02 / 04</span><span>O escritório em números</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2">
          {stats.map((s, index) => (
            <div key={s.label} className="border-b border-white/25 py-8 md:border-b-0 md:border-l md:px-7 md:first:border-l-0 md:first:pl-0">
              <p className="text-[10px] tracking-[0.25em] text-white/50">{String(index + 1).padStart(2, "0")}</p>
              <p className="h-serif mt-8 text-[52px] leading-none text-white tabular-nums md:text-[68px]">{s.value}</p>
              <p className="mt-5 text-sm font-medium text-white">{s.label}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/55">{s.note}</p>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section className="bg-white py-20 text-black md:py-32">
        <div className="container-x grid grid-cols-12 gap-y-14 md:gap-x-8">
          <div className="col-span-12 md:col-span-1">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.28em]">03 / 04</p>
          </div>
          <div className="col-span-12 md:col-span-4">
            <span className="text-[10px] font-medium uppercase tracking-[0.28em]">Estrutura</span>
            <h2 className="h-serif mt-8 text-balance text-4xl leading-[1.12] text-black md:text-5xl">
              Infraestrutura moderna, integrada e planejada para entregar resultado.
            </h2>
            <p className="mt-8 border-l border-black/20 pl-5 leading-relaxed text-black/65">
              Sediado em Belo Horizonte/MG e com unidades em São Paulo/SP, Vitória/ES, Brasília/DF, Belém/PA,
              Florianópolis/SC, Rio de Janeiro/RJ e Porto Alegre/RS, o BCA também possui representantes nas
              principais capitais do país.
            </p>
            <Link href="/unidades" className="mt-10 inline-flex border-b border-black pb-2 text-xs uppercase tracking-[0.2em]">Conheça nossas unidades</Link>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            {[
              {
                title: "Secretaria",
                text: "Setor responsável pelo recebimento de todos os contratos e processos de clientes, cadastro, acompanhamento, solicitação e recebimento de documentação, diligências, digitalização de processos e arquivamento.",
              },
              {
                title: "Acordos e Conciliações",
                text: "Setor específico para conciliação como forma de resolução de conflitos. Buscamos soluções nas esferas extrajudicial e judicial, com foco em resultado prático e efetivo.",
              },
              {
                title: "Tecnologia da Informação",
                text: "Suporte interno em tempo integral, servidor de altíssima capacidade e última geração, com backup em nuvem. Utilizamos os sistemas CPJ, INTOUCH e CDL SPC SERASA, com possibilidade de integração.",
              },
            ].map((it, index) => (
              <div key={it.title} className="grid grid-cols-[3rem_1fr] border-t border-black py-8">
                <p className="text-[10px] tracking-[0.2em] text-black/45">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-black/50">Setor</p>
                  <h3 className="h-serif mt-3 text-2xl text-black">{it.title}</h3>
                  <p className="mt-4 max-w-xl text-black/65 leading-relaxed">{it.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sede */}
      <section className="bg-black py-20 text-white md:py-32">
        <div className="container-x grid grid-cols-12 gap-y-14 md:gap-x-8">
          <div className="col-span-12 border-t border-white/40 pt-3 md:col-span-1">
            <span className="text-[10px] uppercase tracking-[0.28em]">04 / 04</span>
          </div>
          <div className="col-span-12 md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.28em] text-white/60">Sede</span>
            <h2 className="h-serif mt-8 text-[32px] leading-tight text-white md:text-[58px]">
              {offices[0].city} / {offices[0].state}
            </h2>
            <p className="mt-8 max-w-md border-l border-white/30 pl-5 leading-relaxed text-white/65">
              {offices[0].address} — {offices[0].city}/{offices[0].state}. CEP {offices[0].zip}.
            </p>
            <Link href="/contato" className="mt-10 inline-flex items-center gap-3 border border-white px-8 py-4 text-[12px] uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black">
              Entrar em contato
            </Link>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-px bg-white/20 md:col-span-6 md:col-start-7">
            {["/images/office/foto-066.jpg", "/images/office/foto-111.jpg", "/images/office/foto-082.jpg", "/images/office/img-1383.jpg"].map((src) => (
              <div key={src} className="relative aspect-[4/5] overflow-hidden bg-black">
                <Image src={src} alt="Estrutura do escritório BCA" fill sizes="25vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
