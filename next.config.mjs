/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.bcadvogados.adv.br" },
    ],
  },
  async redirects() {
    return [
      { source: "/quem-somos", destination: "/institucional", permanent: true },
      { source: "/estrutura", destination: "/unidades", permanent: true },
      { source: "/direito-do-empresarial", destination: "/areas-de-atuacao/direito-empresarial", permanent: true },
      { source: "/direito-do-tributario", destination: "/areas-de-atuacao/direito-tributario", permanent: true },
      { source: "/direito-do-trabalho", destination: "/areas-de-atuacao/direito-trabalhista", permanent: true },
      { source: "/direito-do-bancario", destination: "/areas-de-atuacao/direito-bancario", permanent: true },
      { source: "/direito-do-falimentar", destination: "/areas-de-atuacao/direito-falimentar", permanent: true },
      { source: "/direito-civil", destination: "/areas-de-atuacao/direito-civel", permanent: true },
      { source: "/direito-penal-empresarial", destination: "/areas-de-atuacao/direito-penal-empresarial", permanent: true },
      { source: "/direito-administrativo", destination: "/areas-de-atuacao/direito-administrativo", permanent: true },
      { source: "/direito-sindical", destination: "/areas-de-atuacao/direito-sindical", permanent: true },
      { source: "/relacoes-de-consumo", destination: "/areas-de-atuacao/relacoes-de-consumo", permanent: true },
      { source: "/acordos-mediacoes-e-conciliacoes", destination: "/areas-de-atuacao/acordos-mediacoes-conciliacoes", permanent: true },
      { source: "/direito-societario-fusoes-e-incorporacoes", destination: "/areas-de-atuacao/direito-societario", permanent: true },
      { source: "/planejamento-tributario-sucessorio", destination: "/areas-de-atuacao/planejamento-tributario-societario-sucessorio", permanent: true },
      { source: "/correspondencia-juridica", destination: "/areas-de-atuacao/correspondencia-juridica", permanent: true },
      { source: "/quais-sao-os-cuidados-legais-que-as-empresas-devem-ter-ao-usar-dados-de-clientes", destination: "/noticias/dados-clientes-cuidados-legais", permanent: true },
      { source: "/quais-sao-as-leis-trabalhistas-para-contratos-temporarios", destination: "/noticias/leis-trabalhistas-contratos-temporarios", permanent: true },
      { source: "/como-funciona-a-negociacao-coletiva-de-trabalho", destination: "/noticias/negociacao-coletiva-de-trabalho", permanent: true },
    ];
  },
};

export default nextConfig;
