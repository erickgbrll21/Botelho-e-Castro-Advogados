import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Scale,
  Users,
} from "lucide-react";
import { Header } from "@/components/Header";
import { ContactWhatsAppForm } from "@/components/ContactWhatsAppForm";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { MethodSection } from "@/components/MethodCards";
import { OfficePresentation } from "@/components/OfficePresentation";
import { articles, offices, practiceAreas, site, stats } from "@/lib/content";

const capabilities = [
  "Consultoria preventiva",
  "Planejamento jurídico",
  "Atuação contenciosa",
  "Gestão de riscos",
  "Acordos e conciliações",
  "Presença nacional",
];

const faqs = [
  {
    question: "Quais áreas do Direito o BCA atende?",
    answer: "O escritório atua em quatorze frentes, incluindo Direito Empresarial, Tributário, Societário, Trabalhista, Cível, Penal Empresarial, Administrativo, Bancário, Sindical e outras.",
  },
  {
    question: "O escritório atende empresas fora de Minas Gerais?",
    answer: "Sim. O BCA possui ampla atuação em todo o território nacional, com sede em Belo Horizonte e unidades em São Paulo, Belém, Vitória, Brasília, Florianópolis, Rio de Janeiro e Porto Alegre.",
  },
  {
    question: "Como funciona a consultoria jurídica preventiva?",
    answer: "A assessoria é estruturada para antecipar riscos, prevenir litígios e orientar decisões empresariais com base na legislação, doutrina e jurisprudência aplicáveis.",
  },
  {
    question: "Como entrar em contato com a equipe?",
    answer: `O atendimento ocorre de segunda a sexta, das 07:30 às 18:00, pelo telefone ${site.contact.phonePrimary}, WhatsApp ${site.contact.whatsapp} ou e-mail ${site.contact.email}.`,
  },
];

export default function HomePage() {
  return (
    <>
      <Header transparent />

      {/* Hero — mesma arquitetura da referência: imagem escura, conteúdo lateral e prova */}
      <section className="relative min-h-[100svh] overflow-hidden bg-black text-white md:min-h-[820px]">
        <HeroSlideshow />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/20" />
        <div className="container-x relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28 md:min-h-[756px] md:py-20">
          <div className="max-w-3xl">
            <h1 className="h-serif text-[clamp(1.75rem,5.8vw,4rem)] font-bold leading-[1.12] md:leading-[1.05]">
              Planejamento estratégico que impulsiona decisões.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/70">
              Consultoria jurídica completa, atuação nacional e atendimento próximo para empresas que precisam
              decidir com segurança.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contato" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-black transition-colors hover:bg-neutral-200">
                Fale conosco <ArrowUpRight size={15} />
              </Link>
              <Link href="/areas-de-atuacao" className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/35 px-6 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-black">
                Áreas de atuação
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 md:absolute md:bottom-8 md:left-8 md:right-8 md:mt-0 md:items-end md:justify-end lg:left-12 lg:right-12 xl:left-16 xl:right-16">
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l border-white/25 pl-4">
                  <p className="font-serif text-2xl tabular-nums md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-[8px] uppercase tracking-[0.16em] text-white/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-black/15 bg-white py-4 text-black">
        <div className="ticker-track flex min-w-max items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.22em]">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-8"><span>{item}</span><span className="h-1 w-1 rounded-full bg-black" /></span>
          ))}
        </div>
      </div>

      {/* Sobre */}
      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="group relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-2xl bg-neutral-100">
            <Image src="/images/office/foto-007.jpg" alt="Escultura da Justiça no escritório Botelho e Castro Advogados" fill sizes="(max-width:1024px) 100vw, 50vw" className="media-hover-color object-cover object-[30%_center] transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute bottom-5 right-5 rounded-xl bg-black px-6 py-5 text-white">
              <p className="font-serif text-4xl">+25</p>
              <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/55">anos de excelência</p>
            </div>
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Sobre nós</p>
            <h2 className="h-serif mt-5 text-[clamp(2.7rem,5vw,5rem)] leading-[1.02]">De Minas Gerais para todo o Brasil.</h2>
            <p className="mt-7 text-lg leading-relaxed text-black/70">
              Fundado há mais de 25 anos, o <strong className="font-semibold text-black">Botelho e Castro Advogados</strong> é um
              dos escritórios mais respeitados de Minas Gerais e referência em serviços jurídicos de excelência.
            </p>
            <p className="mt-4 leading-relaxed text-black/60">
              Nossa equipe atua de forma integrada na estruturação jurídica de grandes projetos e em demandas
              preventivas e contenciosas, nas esferas administrativa e judicial.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Atendimento personalizado", "Equipe multidisciplinar", "Estratégia integrada", "Comunicação transparente"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white"><Check size={12} /></span>{item}</li>
              ))}
            </ul>
            <Link href="/institucional" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-black px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800">
              Saiba mais <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <OfficePresentation />

      {/* Áreas — cards conforme referência */}
      <section className="bg-[#f5f5f5] py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">O que fazemos</p>
            <h2 className="h-serif mt-5 text-[clamp(2.7rem,5vw,4.7rem)] leading-[1.02]">Soluções jurídicas para proteger e impulsionar seu negócio.</h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-black/60">Atuação consultiva, preventiva e contenciosa em áreas estratégicas do Direito.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.slice(0, 9).map((area) => (
              <Link key={area.slug} href={`/areas-de-atuacao/${area.slug}`} className="group flex min-h-[245px] flex-col rounded-2xl border border-black/10 bg-white p-7 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-black/30">
                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white"><BriefcaseBusiness size={17} /></span>
                  <span className="text-[9px] font-semibold tracking-[0.2em] text-black/35">{area.number}</span>
                </div>
                <h3 className="h-serif mt-8 text-2xl">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-black/55">{area.short}</p>
                <span className="mt-auto flex items-center gap-2 pt-6 text-[9px] font-semibold uppercase tracking-[0.18em]">Saiba mais <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/areas-de-atuacao" className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-black px-6 text-[10px] font-semibold uppercase tracking-[0.18em] hover:bg-black hover:text-white">Todas as áreas <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-white/10 bg-black py-4 text-white">
        <div className="ticker-track flex min-w-max items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.22em]">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-dark-${index}`} className="flex items-center gap-8"><span>{item}</span><span className="h-1 w-1 rounded-full bg-white" /></span>
          ))}
        </div>
      </div>

      <MethodSection />

      {/* Notícias */}
      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Conteúdo</p><h2 className="h-serif mt-4 text-4xl md:text-6xl">Notícias</h2></div>
            <Link href="/noticias" className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em]">Veja mais <ArrowRight size={14} /></Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Link key={article.slug} href={`/noticias/${article.slug}`} className={`group overflow-hidden rounded-2xl border border-black/10 ${index === 0 ? "lg:row-span-2" : ""}`}>
                <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/3]" : "aspect-[16/8]"}`}>
                  <Image src={article.image} alt={article.title} fill sizes="(max-width:1024px) 100vw, 33vw" className="media-hover-color object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">{article.category} · 24 abril 2023</p>
                  <h3 className="h-serif mt-4 text-2xl leading-tight">{article.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/55">{article.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em]">Leia mais <ArrowUpRight size={13} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Carreiras */}
      <section className="bg-[#f5f5f5] py-20 text-black md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Carreiras</p>
            <h2 className="h-serif mt-5 text-4xl md:text-5xl">Trabalhe conosco</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-black/60">Valorizamos talentos que compartilham nossa visão de excelência, ética e dedicação. Venha construir sua carreira conosco.</p>
            <Link href="/trabalhe-conosco" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl bg-black px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800">Cadastrar currículo <ArrowRight size={15} /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Users, title: "Ambiente colaborativo", text: "Cultura de respeito, ética e trabalho em equipe." },
              { icon: Building2, title: "Estrutura nacional", text: "Atuação integrada em oito estados brasileiros." },
              { icon: Scale, title: "Desenvolvimento", text: "Contato com diferentes áreas e desafios jurídicos." },
              { icon: BriefcaseBusiness, title: "Excelência", text: "Compromisso técnico e foco em resultados." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-black/10 bg-white p-6">
                <item.icon size={19} /><h3 className="h-serif mt-6 text-xl">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-black/55">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Dúvidas</p>
            <h2 className="h-serif mt-5 text-4xl md:text-5xl">Perguntas frequentes</h2>
            <p className="mt-6 leading-relaxed text-black/60">Não encontrou o que procura? Fale diretamente com nossa equipe.</p>
            <a href={site.contact.whatsappLink} target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-xl border border-black px-6 text-[10px] font-semibold uppercase tracking-[0.18em] hover:bg-black hover:text-white">Falar com especialista <ArrowUpRight size={14} /></a>
          </div>
          <div className="divide-y divide-black/15 border-y border-black/15">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 py-5 md:min-h-20 md:gap-4">
                  <span className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-5"><span className="shrink-0 text-[9px] tracking-[0.18em] text-black/35">0{index + 1}</span><span className="font-medium leading-snug">{faq.question}</span></span>
                  <ChevronDown size={17} className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-2xl pb-7 pl-0 text-sm leading-relaxed text-black/60 sm:pl-10">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-black py-20 text-white md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Contato</p>
            <h2 className="h-serif mt-5 text-[clamp(2.8rem,5vw,5rem)] leading-[1.02]">Estratégia jurídica e atendimento próximo.</h2>
            <p className="mt-6 max-w-xl leading-relaxed text-white/60">Envie sua mensagem e tenha ao seu lado uma equipe preparada para construir soluções sólidas e duradouras.</p>
            <div className="mt-10 space-y-5 text-sm text-white/70">
              <p className="flex gap-4"><MapPin size={17} className="shrink-0" />{offices[0].address}<br />Belo Horizonte · MG</p>
              <a href="tel:+553132950497" className="flex items-center gap-4 hover:text-white"><Phone size={17} />{site.contact.phonePrimary}</a>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-4 hover:text-white"><Mail size={17} />{site.contact.email}</a>
            </div>
          </div>
          <ContactWhatsAppForm variant="home" />
        </div>
      </section>
    </>
  );
}
