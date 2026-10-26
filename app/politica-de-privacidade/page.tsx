import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { site, offices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade do escritório Botelho e Castro Advogados, em conformidade com a LGPD.",
  alternates: { canonical: "/politica-de-privacidade" },
};

export default function PoliticaPage() {
  const sections = [
    {
      h: "1. Dados Pessoais Coletados",
      p: [
        "Dados fornecidos diretamente pelo usuário: Nome, endereço de e-mail e demais dados inseridos em formulários de contato, comentários e cadastro de newsletter.",
        "Dados de navegação e uso: Endereço IP, tipo de dispositivo, sistema operacional, navegador, páginas acessadas e tempo de permanência.",
        "Cookies e tecnologias similares: Utilizados para identificar preferências, melhorar a experiência de navegação, personalizar anúncios e mensurar estatísticas de tráfego.",
      ],
    },
    {
      h: "2. Finalidade do Tratamento",
      p: [
        "Aperfeiçoar a experiência de navegação do usuário; fornecer respostas a contatos, dúvidas ou solicitações; divulgar conteúdos e atualizações jurídicas; exibir publicidade direcionada por meio de ferramentas como o Google Adsense; cumprimento de obrigações legais e regulatórias.",
      ],
    },
    {
      h: "3. Compartilhamento de Informações",
      p: [
        "O compartilhamento de dados poderá ocorrer apenas com prestadores de serviços de tecnologia e análise (ex.: Google Analytics); com parceiros de publicidade (Google Adsense e equivalentes); mediante determinação legal ou solicitação de autoridades competentes.",
        "Não realizamos comercialização de dados pessoais em nenhuma hipótese.",
      ],
    },
    {
      h: "4. Direitos dos Titulares",
      p: [
        "Nos termos da LGPD, os usuários podem exercer seus direitos, incluindo: acesso às informações pessoais; retificação de dados incorretos ou desatualizados; solicitação de exclusão de informações; revogação do consentimento previamente concedido.",
        `Para exercer tais direitos, entre em contato por meio do e-mail ${site.contact.email}.`,
      ],
    },
    {
      h: "5. Segurança das Informações",
      p: [
        "Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, perdas, alterações ou divulgações indevidas.",
      ],
    },
    {
      h: "6. Alterações desta Política",
      p: [
        "Reservamo-nos o direito de revisar e atualizar esta Política de Privacidade sempre que necessário, cabendo ao usuário verificar periodicamente o seu conteúdo.",
      ],
    },
    {
      h: "7. Contato",
      p: [
        `Botelho e Castro Advogados — ${site.contact.email}. ${offices[0].address} — Belo Horizonte/MG. CEP ${offices[0].zip}.`,
      ],
    },
  ];

  return (
    <>
      <Header />
      <PageHero
        eyebrow="Política"
        title="Política de Privacidade"
        intro="Última atualização: 03/09/2025. A Botelho e Castro Advogados, responsável pelo site bcadvogados.adv.br, preza pela proteção, privacidade e segurança dos dados pessoais de seus usuários e visitantes."
        breadcrumbs={[{ label: "Política de Privacidade" }]}
      />

      <article className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-12 border-t border-black pt-4 text-[10px] uppercase tracking-[0.26em]">
            <span className="col-span-4 md:col-span-2">Documento</span>
            <span className="col-span-8 text-right text-black/45 md:col-span-10">{String(sections.length).padStart(2, "0")} seções / LGPD</span>
          </div>
          <div className="border-b border-black">
          {sections.map((s, index) => (
            <section key={s.h} className="grid grid-cols-12 gap-y-5 border-t border-black py-9 md:gap-x-8 md:py-12">
              <span className="col-span-2 text-[10px] tracking-[0.24em] text-black/40 md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <h2 className="h-serif col-span-10 text-3xl leading-tight md:col-span-4 md:text-4xl">{s.h}</h2>
              <div className="col-span-10 col-start-3 space-y-5 leading-[1.75] text-black/70 md:col-span-6 md:col-start-7">
                {s.p.map((t, i) => <p key={i}>{t}</p>)}
              </div>
            </section>
          ))}
          </div>
        </div>
      </article>
    </>
  );
}
