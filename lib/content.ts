// Conteúdo institucional real, coletado via Firecrawl a partir de bcadvogados.adv.br
// Todo texto factual (números, endereços, telefones, biografias, textos de áreas) preserva
// integralmente a fonte original.

export const site = {
  name: "Botelho e Castro Advogados",
  short: "BCA Advogados",
  tagline: "Referência em consultoria jurídica planejativa",
  description:
    "De Minas Gerais para todo o Brasil. Escritório com mais de 25 anos de atuação, mais de 300 mil processos conduzidos e presença em todo território nacional.",
  contact: {
    email: "contato@bcadvogados.adv.br",
    phonePrimary: "(31) 3295-0497",
    phoneSecondary: "(31) 9 8246-5979",
    whatsapp: "(31) 9 8561-4005",
    whatsappLink: "https://wa.me/5531985614005",
    instagram: "https://www.instagram.com/bca.adv/",
    bcConsultores: "https://bcconsultores.adv.br/",
  },
  hoursLabel: "Segunda a sexta, das 07:30 às 18:00",
} as const;

export const stats = [
  { value: "+300 mil", label: "Processos conduzidos", note: "em todas as instâncias e tribunais" },
  { value: "+25", label: "Anos de atuação", note: "sólida e ininterrupta" },
];

export type Office = {
  slug: string;
  city: string;
  state: string;
  address: string;
  zip: string;
  isHead?: boolean;
};

export const offices: Office[] = [
  {
    slug: "belo-horizonte",
    city: "Belo Horizonte",
    state: "MG",
    address: "Rua Buenos Aires, 10 – 13º andar, Carmo",
    zip: "30.315.570",
    isHead: true,
  },
  { slug: "sao-paulo", city: "São Paulo", state: "SP", address: "Av. Paulista, 1471, conj. 511, CP 3407, Bela Vista", zip: "01311-927" },
  { slug: "belem", city: "Belém", state: "PA", address: "Tv. Quintino Bocaiúva, 2301 – Reduto", zip: "66045-315" },
  { slug: "vitoria", city: "Vitória", state: "ES", address: "Rua Alfeu Alves Pereira, 79 – Sala 305, Enseada do Suá", zip: "29050-285" },
  { slug: "brasilia", city: "Brasília", state: "DF", address: "SHS, Quadra 06, Brasil 21, Bloco A, Sala 501", zip: "70316-102" },
  { slug: "florianopolis", city: "Florianópolis", state: "SC", address: "Av. Trompowsky, 354 – sala 502, Centro", zip: "88015-300" },
  { slug: "rio-de-janeiro", city: "Rio de Janeiro", state: "RJ", address: "Rua do Russel, 804, 3º andar, Glória", zip: "22210-010" },
  { slug: "porto-alegre", city: "Porto Alegre", state: "RS", address: "Av. Dolores Alcaraz Caldas, 90, Andar 89 – Praia de Belas", zip: "90110-180" },
];

export type PracticeArea = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  body: string[];
  number: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "direito-empresarial",
    number: "01",
    title: "Direito Empresarial",
    short: "Protegemos os interesses de sua empresa.",
    summary:
      "Atuação atenta às modificações legislativas, doutrinárias e jurisprudenciais relacionadas às atividades principais da empresa.",
    body: [
      "A atuação do escritório Botelho e Castro Advogados – BCA está sempre atenta às modificações legislativas, doutrinárias e jurisprudenciais, relacionadas às atividades principais da empresa.",
      "Nosso principal papel é respaldar nossos clientes no desenvolvimento de suas atividades, evitando, principalmente, o desperdício de tempo, foco e dinheiro em longos conflitos judiciais.",
      "Atuamos na recuperação de ativos financeiros nas esferas judicial e extrajudicial; orientação e negociação com fornecedores e clientes estratégicos; proposituras de ações judiciais para recuperação de créditos; orientação e execução de recuperação judicial/extrajudicial; análise e elaboração de contratos; registro de marcas e patentes, dentre outros.",
    ],
  },
  {
    slug: "direito-tributario",
    number: "02",
    title: "Direito Tributário",
    short: "Reduzimos riscos e encargos fiscais.",
    summary:
      "Consultoria altamente especializada em processos tributários, com visão ampla e análise da legislação vigente, doutrina e jurisprudência.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA, mediante consultoria altamente especializada em processos tributários, proporciona ao cliente ampla visão de todos os procedimentos tributários, identificando novas alternativas de ação empresarial que proporcionem redução da carga tributária através de planejamento fiscal e estratégias de atuação.",
      "Atuamos na detecção de impostos indevida ou excessivamente recolhidos; obtenção de parcelamentos tributários especiais; reinclusão de empresas inadimplentes excluídas do “SIMPLES”; recuperação de crédito; saneamento fiscal; elaboração de defesas administrativas e consultas fiscais; acompanhamento de inquéritos policiais originários da prática, em tese, de ilícitos fiscais e tributários; elaboração de pareceres e estudos tributários; defesas judiciais em execuções fiscais; defesas administrativas em autos de infração municipais, estaduais e federais; propositura de ações para recuperação de créditos e anulação de cobranças.",
    ],
  },
  {
    slug: "direito-societario",
    number: "03",
    title: "Direito Societário, Fusões e Incorporações",
    short: "Estruturamos e organizamos sociedades com segurança jurídica.",
    summary:
      "Soluções estratégicas para redução da carga tributária, organização societária eficiente e proteção do patrimônio familiar.",
    body: [
      "A atuação do escritório Botelho e Castro Advogados – BCA atua com foco em Planejamento Tributário, Societário e Sucessório, oferecendo soluções estratégicas para redução da carga tributária, organização societária eficiente e proteção do patrimônio familiar, garantindo segurança e continuidade entre gerações.",
      "Com uma equipe especializada e atualizada, o BCA proporciona atendimentos personalizados, alinhando as necessidades de cada cliente à legislação vigente e às melhores práticas do mercado.",
    ],
  },
  {
    slug: "planejamento-tributario-societario-sucessorio",
    number: "04",
    title: "Planejamento Tributário, Societário e Sucessório",
    short: "Preservamos patrimônio e otimizamos resultados.",
    summary:
      "Estratégia integrada para redução de carga tributária, organização societária e continuidade entre gerações.",
    body: [
      "A atuação do escritório Botelho e Castro Advogados – BCA atua com foco em Planejamento Tributário, Societário e Sucessório, oferecendo soluções estratégicas para redução da carga tributária, organização societária eficiente e proteção do patrimônio familiar, garantindo segurança e continuidade entre gerações.",
      "Com uma equipe especializada e atualizada, o BCA proporciona atendimentos personalizados, alinhando as necessidades de cada cliente à legislação vigente e às melhores práticas do mercado.",
    ],
  },
  {
    slug: "direito-falimentar",
    number: "05",
    title: "Direito Falimentar e Recuperação de Empresas",
    short: "Soluções eficazes para momentos de crise empresarial.",
    summary:
      "Análise econômica, financeira e jurídica de sociedades em crise; planejamento, estruturação e acompanhamento de planos de recuperação judicial e extrajudicial.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA abrange sempre a análise econômica, financeira e jurídica das sociedades em crise; na instituição e na atuação em conselhos de crise; na negociação com a cadeia de fornecedores estratégicos, clientes e credores em geral; no apoio à busca por parceiros financiadores da operação; no planejamento, estruturação, implementação e acompanhamento de planos de recuperação judicial e extrajudicial; no ingresso e acompanhamento de questões incidentais em processos de recuperação de empresas (habilitações de crédito, impugnações, planos de recuperação, entre outros); na participação e representação de clientes em comitês e assembleias de credores; na assessoria e condução de fusões, aquisições e vendas de empresas em crise; e na estruturação de operações de vendas de ativos de empresas em recuperação.",
    ],
  },
  {
    slug: "direito-civel",
    number: "06",
    title: "Direito Cível",
    short: "Defendemos seus direitos nas relações civis e contratuais.",
    summary:
      "Equipe atenta às modificações legislativas, doutrinárias e jurisprudenciais, com foco em responsabilização civil e contratos.",
    body: [
      "Com equipe especializada em Direito Cível, atenta às modificações legislativas, doutrinárias e jurisprudenciais, principalmente das questões afetas à responsabilização civil por ato ilícito, o escritório Botelho e Castro Advogados – BCA oferece a seus clientes, além da advocacia contenciosa, a análise e elaboração de contratos, visando à mitigação das demandas judiciais.",
      "Para ampla cobertura das necessidades jurídicas da empresa, contamos, também, com profissionais especializados no acompanhamento de negócios imobiliários, desde a incorporação até a compra e venda, trazendo maior eficiência e segurança aos empreendimentos de nossos clientes.",
    ],
  },
  {
    slug: "direito-penal-empresarial",
    number: "07",
    title: "Direito Penal Empresarial",
    short: "Defesa estratégica em crimes econômicos e empresariais.",
    summary:
      "Especialistas em causas criminais empresariais, com atuação preventiva contra atos considerados ilícitos empresariais.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA conta com especialistas em causas criminais empresariais. A atuação nasceu da necessidade de prevenir nossos clientes de atos considerados ilícitos empresariais.",
      "Direito Penal Tributário: orientação na diferenciação entre procedimentos lícitos e ilícitos dentro da área tributária, bem como suas consequências na esfera patrimonial.",
      "Direito Penal Empresarial: crimes contra o Sistema Financeiro, crimes de sonegação fiscal, crimes de lavagem de dinheiro, infrações penais contra a ordem econômica (concorrência desleal, mercado de capitais, direito do consumidor, entre outros), infrações penais relacionadas à lei de licitações e às leis ambientais.",
    ],
  },
  {
    slug: "direito-administrativo",
    number: "08",
    title: "Direito Administrativo",
    short: "Atuamos na defesa e no relacionamento com a Administração Pública.",
    summary:
      "Experiência em licitações e contratos administrativos, ações civis de improbidade e defesa de servidores públicos.",
    body: [
      "O Direito Administrativo é a área que abrange o conjunto de normas e princípios que regem a atuação da Administração Pública.",
      "O escritório Botelho e Castro Advogados – BCA possui experiência em licitações e contratos administrativos, com análise de edital, auxílio na preparação de documentos, apresentação de recursos administrativos e medidas judiciais, incluindo a defesa de empresas em ações civis de improbidade administrativa.",
      "Atua, ainda, na defesa dos interesses de servidores públicos, de forma individual ou coletiva, tanto na recomposição de seus vencimentos, quanto em processos administrativos disciplinares.",
    ],
  },
  {
    slug: "direito-bancario",
    number: "09",
    title: "Direito Bancário",
    short: "Soluções jurídicas em contratos e litígios com instituições financeiras.",
    summary:
      "Atuação sob a ótica das instituições financeiras, credores e acionistas, com foco em recuperação célere de crédito.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA atua sob a ótica das instituições financeiras, credores e seus acionistas, visando à célere recuperação de crédito decorrente de inadimplemento contratual, mediante ingresso do procedimento judicial mais adequado, bem como na rápida identificação de créditos considerados de difícil recuperação.",
      "Dispomos de meios para localização do devedor e de seu patrimônio, bem como para identificação de fraudes para ocultação de bens.",
      "Além da recuperação de crédito, atuamos, ainda, na defesa de ações judiciais movidas contra instituições financeiras, tais como ações revisionais de contrato, ações de indenização e ações de exibição de documento, dentre outras.",
    ],
  },
  {
    slug: "relacoes-de-consumo",
    number: "10",
    title: "Relações de Consumo",
    short: "Protegemos empresas e consumidores em conflitos de consumo.",
    summary:
      "Ramificação do Direito Civil que disciplina relações entre fornecedores e consumidores, com base no CDC.",
    body: [
      "O Direito das Relações de Consumo é uma ramificação do Direito Civil, que disciplina as relações jurídicas entre fornecedores e consumidores de bens e serviços, tendo como base o Código de Defesa do Consumidor.",
      "Trata-se, portanto, do mecanismo que busca resguardar os interesses envolvidos nas relações de consumo. O escritório Botelho e Castro Advogados – BCA conta com profissionais especializados para minimizar os abusos na aplicação do Código de Defesa do Consumidor, de forma preventiva ou remediativa.",
    ],
  },
  {
    slug: "acordos-mediacoes-conciliacoes",
    number: "11",
    title: "Acordos, Mediações e Conciliações",
    short: "Soluções rápidas e estratégicas para encerrar disputas.",
    summary:
      "Conciliação como forma de resolução de conflitos, com negociadores experientes para cobrança interna, atendimento pessoal e cobrança externa.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA acredita na conciliação como forma de resolução de conflitos. Buscamos soluções para nossos clientes na esfera amigável e contenciosa, visando alcançar, de forma objetiva e rápida, resultado prático e efetivo.",
      "Cobrança Interna e Atendimento Pessoal – Nossos profissionais são treinados para conduzir com ética toda negociação envolvendo partes com relação comercial comprometida, seja via telefone, correspondência física ou eletrônica e, ainda, mediante atendimento pessoal individualizado.",
      "Cobrança externa: com profissionais preparados e eficientes, nossas negociações realizadas diretamente no endereço dos devedores são responsáveis por mais de 40% do êxito de nossa recuperação dos créditos. Esse é mais um dos diferenciais do escritório Botelho e Castro Advogados – BCA.",
    ],
  },
  {
    slug: "direito-trabalhista",
    number: "12",
    title: "Direito Trabalhista",
    short: "Protegemos os direitos nas relações de trabalho.",
    summary:
      "Larga experiência em Direito do Trabalho, com atuação consultiva preventiva e contenciosa, e mapeamento de riscos trabalhistas.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA detém larga experiência no campo do Direito do Trabalho, prestando assessoria ao empregador na defesa de seus interesses, com o intuito de evitar e/ou controlar qualquer passivo trabalhista, de forma preventiva e contenciosa, quando necessário.",
      "Consultoria e Assessoria Preventiva: antecipação de procedimentos legais através da orientação consultiva para a aplicação segura da lei e constante atualização da legislação trabalhista.",
      "Contencioso Trabalhista: acompanhamento das reclamatórias trabalhistas, elaboração de defesas, recursos e o devido acompanhamento processual até as instâncias superiores; acompanhamento e elaboração de defesa de autos de infração lavrados pelo Ministério do Trabalho, decorrentes de fiscalização.",
      "Mapeamento de riscos – utiliza metodologia de auditoria para diagnosticar as práticas e rotinas relacionadas ao RH da empresa, evidenciando as fragilidades eventualmente existentes, identificando os riscos e possibilitando a direção da empresa adotar as medidas corretivas necessárias, dentro do seu planejamento estratégico.",
    ],
  },
  {
    slug: "direito-sindical",
    number: "13",
    title: "Direito Sindical",
    short: "Assessoria em negociações e relações entre empresas e sindicatos.",
    summary:
      "Assessoria jurídica a entidades sindicais em suas quatro dimensões: privada, administrativa, pública e judicial.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA presta assessoria jurídica a entidades sindicais em suas quatro dimensões: privada (negociações entre trabalhadores e empregadores); administrativa (relações com o Estado); pública (relações com a sociedade civil) e judicial (como substituto ou representante processual).",
      "Especializado na fundação de entidades sindicais de 1º, 2º e 3º grau de categorias profissionais, profissionais diferenciadas, econômicas e profissionais liberais, além de acompanhamento no Ministério do Trabalho dos procedimentos administrativos até a expedição definitiva do respectivo registro.",
    ],
  },
  {
    slug: "correspondencia-juridica",
    number: "14",
    title: "Correspondência Jurídica",
    short: "Correspondente jurídico com agilidade e clareza.",
    summary:
      "Atendimento a escritórios contratantes em todas as áreas do Direito, em qualquer órgão ou repartição.",
    body: [
      "O escritório Botelho e Castro Advogados – BCA atua como correspondente jurídico de outros escritórios, na capital mineira, interior e outros estados.",
      "Atendemos os nossos contratantes em todas as áreas do Direito, em qualquer órgão ou repartição, seja para digitalizar processos, comparecer em audiências, protocolizar petições ou entregar memoriais, despachar com juízes ou desembargadores, fazer sustentação oral, agilizar o andamento do processo. Tudo o que for necessário para satisfazer as necessidades do contratante.",
      "Agilidade e clareza nas informações são alguns dos principais fatores que compõem a prestação deste serviço.",
    ],
  },
];

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "antonio-marcio-botelho",
    name: "Antônio Márcio Botelho",
    role: "CEO / Advogado",
    bio: [
      "Bacharel em Direito pela Universidade de Nova Iguaçu/RJ – OAB/MG 95.117.",
      "Pós-Graduado em Direito do Trabalho pela Escola Superior do Ministério Público.",
      "Especialista (MBA) em Direito Tributário pela Fundação Getúlio Vargas.",
    ],
  },
  {
    slug: "yuri-araujo-primo-videira",
    name: "Yuri Araújo Primo Videira",
    role: "Diretor / Advogado",
    bio: [
      "Bacharel em Direito pela Pontifícia Universidade Católica de Minas Gerais (PUC) – OAB/MG 105.029.",
      "Pós-graduado em Direito Penal e Processual Penal.",
      "Pós-graduado em Direito Privado pela Fundação Escola do Ministério Público de Minas Gerais.",
      "Mestre pela Pontifícia Universidade Católica de Minas Gerais (PUC).",
    ],
  },
  {
    slug: "otavio-alexandre-alves-hamdan",
    name: "Otávio Alexandre Alves Hamdan",
    role: "Diretor / Advogado e Contador",
    bio: [
      "Bacharel em Direito pela Pontifícia Universidade Católica de Minas Gerais (PUC) – OAB/MG 108.469.",
      "Bacharel em Ciências Contábeis pela Pontifícia Universidade Católica de Minas Gerais (PUC) – CRC/MG 48175/O-9.",
    ],
  },
  {
    slug: "waldir-marcio-valladares",
    name: "Waldir Márcio Valladares",
    role: "Diretor / Perito Judicial e Extrajudicial",
    bio: [
      "Graduado em Ciências Contábeis pelo Centro Universitário (UNA) – CRC/MG O77642/O.",
      "Pós-graduado em Gestão Fiscal e Tributária pela Faculdade Estácio de Sá.",
    ],
  },
  {
    slug: "renan-barros-de-carvalho",
    name: "Renan Barros de Carvalho",
    role: "Gestor / Advogado",
    bio: [
      "Bacharel em Direito pela Faculdade de Estudos Administrativos de Minas Gerais – FEAD – OAB/MG 152.706.",
      "Pós-graduado em Direito do Trabalho pela Universidade FUMEC.",
    ],
  },
  {
    slug: "aline-ferreira-santos",
    name: "Aline Ferreira Santos",
    role: "Gestora / Departamento Pessoal",
    bio: ["Bacharel em Recursos Humanos pela Faculdade Pitágoras."],
  },
  {
    slug: "iuri-veloso-oliveira-figueiredo",
    name: "Iuri Veloso Oliveira Figueiredo",
    role: "Advogado Cível",
    bio: [
      "Bacharel em Direito pela Pontifícia Universidade Católica de Minas Gerais (PUC) – OAB/MG 192.867.",
      "Pós-graduado em Direito Processual Civil pela PUC Minas.",
    ],
  },
  {
    slug: "alan-de-matos-jorge",
    name: "Alan de Matos Jorge",
    role: "Advogado",
    bio: [
      "Mestre em Direito Privado e Pós-graduado em Processo Civil pelo Instituto de Ensino Superior COC – OAB/MG 88.437.",
      "Autor de dezenas de publicações jurídicas, com experiência em direito contratual e empresarial.",
    ],
  },
  {
    slug: "maria-angelica",
    name: "Maria Angélica",
    role: "Advogada",
    bio: [
      "Doutora em Direito pela UFMG e Mestra em Direito pela PUC Minas – OAB/MG 92.195.",
      "Autora de mais de 30 artigos jurídicos publicados em periódicos e livros especializados.",
    ],
  },
  {
    slug: "leonardo-luiz-leal-murtha",
    name: "Leonardo Luiz Leal Murtha",
    role: "Advogado",
    bio: [
      "Bacharel em Direito pela Faculdade Uniam – Anhanguera Niterói – OAB/MG 238.557.",
      "Pós-graduado em Direito Empresarial pela Universidade Estácio de Sá.",
    ],
  },
  {
    slug: "giovana-mol-esposito",
    name: "Giovana Mol Esposito",
    role: "Advogada",
    bio: [
      "Formada pela Universidade do Estado de Minas Gerais – OAB/MG 244.417.",
      "Pós-graduada em Direito Civil e Empresarial e em Direito Público.",
    ],
  },
  {
    slug: "waleska-dias-sarques",
    name: "Waleska Dias Sarques",
    role: "Advogada",
    bio: [
      "Bacharel em Direito pela Universidade Professor Edson Antônio Velano – UNIFENAS – OAB/MG 182.994.",
      "Pós-Graduada em Direito Processual Empresarial e Contratual pela Universidade Professor Edson Antônio Velano – UNIFENAS.",
    ],
  },
  {
    slug: "wilson-cardoso-ferreira",
    name: "Wilson Cardoso Ferreira",
    role: "Advogado",
    bio: [
      "Bacharel em Direito pelas Faculdades Integradas Vianna Júnior – OAB/MG 207.116.",
      "Bacharel em Ciências Humanas pela Universidade Federal de Juiz de Fora.",
      "Pós-graduando em Direito do Trabalho e Direito Previdenciário pela Pontifícia Universidade Católica de Minas Gerais (PUC Minas).",
    ],
  },
];

export type Article = {
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  content: string[];
  category: string;
};

export const articles: Article[] = [
  {
    slug: "dados-clientes-cuidados-legais",
    title: "Quais são os cuidados legais que as empresas devem ter ao usar dados de clientes?",
    date: "2023-04-24",
    category: "LGPD",
    image: "/images/office/foto-139.jpg",
    excerpt:
      "A utilização de dados de clientes pelas empresas é cada vez mais comum, principalmente em um mundo cada vez mais digital.",
    content: [
      "A utilização de dados de clientes pelas empresas é cada vez mais comum, principalmente em um mundo cada vez mais digital. Porém, é importante que as empresas estejam cientes das regras e cuidados legais que devem ser tomados para garantir a segurança e privacidade dos dados de seus clientes.",
      "Em primeiro lugar, é importante que as empresas sejam transparentes com relação à coleta e utilização dos dados dos clientes, informando de forma clara e precisa como os dados serão utilizados e quais as finalidades da coleta. As empresas também devem garantir que os dados sejam coletados de forma lícita, ou seja, com o consentimento dos clientes ou com base em alguma outra justificativa legal.",
      "Outro cuidado importante é garantir a segurança dos dados, implementando medidas de segurança adequadas para proteger os dados dos clientes contra acesso não autorizado, perda ou roubo. As empresas também devem adotar medidas para garantir que os dados sejam mantidos atualizados e precisos, e que sejam descartados quando não forem mais necessários.",
      "Além disso, as empresas devem estar cientes de que existem leis específicas que regulamentam o uso de dados pessoais no Brasil, como a Lei Geral de Proteção de Dados (LGPD), que estabelece regras para a coleta, armazenamento, tratamento e compartilhamento de dados pessoais.",
      "Por fim, as empresas devem estar preparadas para lidar com possíveis incidentes de segurança ou vazamento de dados, adotando medidas para mitigar os danos e notificando as autoridades competentes e os clientes afetados.",
    ],
  },
  {
    slug: "leis-trabalhistas-contratos-temporarios",
    title: "Quais são as leis trabalhistas para contratos temporários?",
    date: "2023-04-24",
    category: "Trabalhista",
    image: "/images/office/img-1428.jpg",
    excerpt:
      "Os contratos de trabalho temporários são cada vez mais comuns no mercado de trabalho brasileiro.",
    content: [
      "Os contratos de trabalho temporários são cada vez mais comuns no mercado de trabalho brasileiro, sendo utilizados por empresas que precisam de mão de obra por um período limitado de tempo, como durante sazonalidades ou projetos específicos.",
      "De acordo com a legislação trabalhista brasileira, os contratos de trabalho temporários devem ser regidos pela Lei nº 6.019/74, que define as regras para a contratação de trabalhadores temporários no país. Essa lei estabelece que os contratos de trabalho temporários podem ter duração máxima de 180 dias, prorrogáveis por mais 90 dias, totalizando um período máximo de 270 dias.",
      "Além disso, a Lei nº 6.019/74 determina que a empresa contratante deve garantir aos trabalhadores temporários os mesmos direitos previstos na legislação trabalhista para os trabalhadores permanentes da empresa, tais como férias, 13º salário, FGTS, entre outros. A empresa também é responsável por fornecer os equipamentos de proteção individual (EPIs) necessários para a realização das atividades laborais.",
      "Vale lembrar que a contratação de trabalhadores temporários só é permitida em algumas situações específicas, como quando a empresa precisa de mão de obra para atender a um aumento sazonal da demanda, ou quando há a necessidade de substituição de funcionários efetivos em licença ou afastamento temporário.",
      "É importante destacar que a contratação de trabalhadores temporários deve ser feita de forma transparente e regulamentada, garantindo que os direitos trabalhistas dos empregados sejam respeitados.",
    ],
  },
  {
    slug: "negociacao-coletiva-de-trabalho",
    title: "Como funciona a negociação coletiva de trabalho?",
    date: "2023-04-24",
    category: "Sindical",
    image: "/images/office/foto-111.jpg",
    excerpt:
      "A negociação coletiva de trabalho é um processo muito importante para trabalhadores e empregadores.",
    content: [
      "A negociação coletiva de trabalho é um processo muito importante para os trabalhadores e empregadores, pois é por meio dela que se estabelecem as condições de trabalho de um determinado grupo de empregados.",
      "A negociação coletiva de trabalho é um instrumento de diálogo e negociação entre o sindicato dos trabalhadores e os representantes das empresas. É por meio dela que se estabelecem as condições de trabalho, tais como salários, jornada de trabalho, benefícios, dentre outros aspectos.",
      "Para que a negociação coletiva ocorra, é necessário que haja um sindicato representando a categoria profissional. O sindicato inicia o processo de negociação com a empresa ou empresas representantes do setor econômico em questão.",
      "Durante a negociação, cada parte apresenta suas propostas e reivindicações, buscando chegar a um acordo que atenda aos interesses de ambas as partes. Em geral, a negociação é conduzida por um mediador ou árbitro, que busca equilibrar os interesses e encontrar uma solução justa.",
      "Uma vez que se chega a um acordo, ele é formalizado por meio de uma convenção coletiva de trabalho ou acordo coletivo de trabalho, que deve ser registrado junto ao Ministério do Trabalho e Emprego. Esses documentos estabelecem as condições de trabalho que serão aplicadas a todos os trabalhadores daquela categoria profissional ou setor econômico.",
    ],
  },
];

export const nav = [
  { label: "Institucional", href: "/institucional" },
  { label: "Áreas de Atuação", href: "/areas-de-atuacao" },
  { label: "Plataforma de Acordo", href: "/plataforma-de-acordo" },
  { label: "Equipe", href: "/equipe" },
  { label: "Unidades", href: "/unidades" },
  { label: "Notícias", href: "/noticias" },
  { label: "Contato", href: "/contato" },
];
