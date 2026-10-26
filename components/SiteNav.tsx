"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Calculator,
  ChevronDown,
  Handshake,
  MapPin,
  Menu,
  Newspaper,
  Phone,
  Scale,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import { site } from "@/lib/content";

type MegaLink = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
  cta?: string;
  external?: boolean;
};

type NavItem = {
  id: string;
  label: string;
  href?: string;
  featured?: MegaLink[];
  asideTitle?: string;
  aside?: MegaLink[];
  promo?: {
    title: string;
    description: string;
    href: string;
    cta: string;
    external?: boolean;
  };
};

const navItems: NavItem[] = [
  {
    id: "escritorio",
    label: "Escritório",
    featured: [
      {
        label: "Institucional",
        href: "/institucional",
        description:
          "História, posicionamento e a forma como conduzimos a consultoria jurídica planejativa.",
        icon: Building2,
        cta: "Ver página",
      },
      {
        label: "Equipe",
        href: "/equipe",
        description:
          "Sócios, diretores e especialistas que sustentam a atuação nacional do escritório.",
        icon: Users,
        cta: "Ver página",
      },
    ],
    asideTitle: "Presença",
    aside: [
      {
        label: "Unidades",
        href: "/unidades",
        description: "Sede em Belo Horizonte e atendimento em todo o Brasil.",
        icon: MapPin,
      },
    ],
    promo: {
      title: "BC Consultores",
      description: "Planejamento tributário e empresarial com a mesma base do escritório.",
      href: site.contact.bcConsultores,
      cta: "Acessar agora",
      external: true,
    },
  },
  {
    id: "atuacao",
    label: "Atuação",
    featured: [
      {
        label: "Áreas de atuação",
        href: "/areas-de-atuacao",
        description:
          "Quatorze frentes jurídicas para empresas que precisam decidir com segurança.",
        icon: Scale,
        cta: "Ver página",
      },
      {
        label: "Plataforma de Acordo",
        href: "/plataforma-de-acordo",
        description:
          "Envie sua solicitação e avance pendências com atendimento direto pelo WhatsApp.",
        icon: Handshake,
        cta: "Ver página",
      },
    ],
    asideTitle: "Conteúdo",
    aside: [
      {
        label: "Notícias",
        href: "/noticias",
        description: "Análises jurídicas para orientar decisões.",
        icon: Newspaper,
      },
    ],
    promo: {
      title: "Fale com o escritório",
      description: "Atendimento humano, direto e sem formulário genérico.",
      href: "/contato",
      cta: "Começar agora",
    },
  },
  {
    id: "contato",
    label: "Contato",
    featured: [
      {
        label: "Fale conosco",
        href: "/contato",
        description: "Canais oficiais, WhatsApp e horários de atendimento do escritório.",
        icon: Phone,
        cta: "Ver página",
      },
      {
        label: "Trabalhe conosco",
        href: "/trabalhe-conosco",
        description: "Envie currículo e candidate-se às oportunidades do BCA.",
        icon: Briefcase,
        cta: "Ver página",
      },
    ],
    asideTitle: "Parceiros",
    aside: [
      {
        label: "BC Consultores",
        href: site.contact.bcConsultores,
        description: "Consultoria tributária e empresarial.",
        icon: Calculator,
        external: true,
      },
    ],
    promo: {
      title: "Atendimento imediato",
      description: "Fale agora com a equipe pelo WhatsApp.",
      href: site.contact.whatsappLink,
      cta: "Conversar",
      external: true,
    },
  },
];

function isActiveGroup(item: NavItem, pathname: string) {
  const hrefs = [
    ...(item.featured ?? []).map((link) => link.href),
    ...(item.aside ?? []).map((link) => link.href),
  ].filter((href) => href.startsWith("/"));

  return hrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));
}

function NavLinkItem({
  href,
  external,
  className,
  children,
  onClick,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const navId = useId();
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const openItem = navItems.find((item) => item.id === openId) ?? null;
  const lastItemRef = useRef<NavItem | null>(null);
  if (openItem) lastItemRef.current = openItem;
  const panelItem = openItem ?? lastItemRef.current;
  const panelOpen = Boolean(openItem) && !mobileOpen;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpenId(null), 160);
  };

  const openGroup = (id: string) => {
    clearCloseTimer();
    setOpenId(id);
  };

  useEffect(() => {
    setOpenId(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    const onPointer = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenId(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
      clearCloseTimer();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      ref={navRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-[99] px-3 pt-3 sm:px-4 sm:pt-4"
    >
      <nav
        onMouseLeave={scheduleClose}
        onMouseEnter={clearCloseTimer}
        className="pointer-events-auto mx-auto w-full max-w-[1180px] rounded-[28px] border border-white/10 bg-[#141414] text-white shadow-[0_18px_50px_rgba(0,0,0,0.35)]"
        aria-label="Principal"
      >
        <div className="relative flex h-[72px] items-center gap-2 px-3 sm:h-[76px] sm:px-4">
          <Link href="/" className="relative z-10 flex min-w-0 shrink-0 items-center" aria-label="Botelho e Castro Advogados">
            <Image
              src="/images/logos/logo-bca.png"
              alt="Botelho e Castro Advogados"
              width={280}
              height={72}
              className="h-11 w-auto max-w-[58vw] object-contain sm:h-12 md:h-14"
              priority
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
            <div className="flex items-center rounded-full bg-black/55 px-1 py-1">
              {navItems.map((item) => {
                const expanded = openId === item.id;
                const active = isActiveGroup(item, pathname);
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`${navId}-${item.id}`}
                    onMouseEnter={() => openGroup(item.id)}
                    onFocus={() => openGroup(item.id)}
                    onClick={() => setOpenId(expanded ? null : item.id)}
                    className={`flex h-9 items-center gap-1.5 rounded-full px-4 text-[13px] font-medium tracking-[-0.01em] transition-colors ${
                      expanded || active
                        ? "bg-white/[0.08] text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className={`opacity-70 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 ml-auto flex items-center gap-2">
            <a
              href={site.contact.bcConsultores}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-full bg-white px-4 text-[13px] font-semibold text-black transition-colors hover:bg-white/90 lg:inline-flex"
            >
              <Calculator size={15} strokeWidth={2.2} aria-hidden="true" />
              BC Consultores
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={mobileOpen}
              onClick={() => {
                setOpenId(null);
                setMobileOpen((value) => !value);
              }}
            >
              {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          className={`hidden lg:grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            panelOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {panelItem ? (
              <div
                id={`${navId}-${panelItem.id}`}
                className="border-t border-white/[0.07] px-3 pb-3 pt-3 sm:px-4 sm:pb-4"
              >
                <MegaPanel item={panelItem} onNavigate={() => setOpenId(null)} />
              </div>
            ) : null}
          </div>
        </div>
      </nav>

      {mobileOpen ? (
        <div className="pointer-events-auto mx-auto mt-2 w-full max-w-[1180px] overflow-hidden overscroll-contain rounded-[24px] border border-white/10 bg-[#141414] text-white lg:hidden">
          <div className="max-h-[min(78vh,720px)] overflow-y-auto overscroll-contain p-3">
            {navItems.map((item) => (
              <div key={item.id} className="mb-2 rounded-2xl bg-white/[0.04] p-2">
                <p className="px-3 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
                  {item.label}
                </p>
                {[...(item.featured ?? []), ...(item.aside ?? [])].map((link) => (
                  <NavLinkItem
                    key={link.href}
                    href={link.href}
                    external={link.external}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-start gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.06]"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
                      <link.icon size={16} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-[14px] font-semibold">{link.label}</span>
                      <span className="mt-0.5 block text-[12.5px] leading-snug text-white/50">{link.description}</span>
                    </span>
                  </NavLinkItem>
                ))}
              </div>
            ))}
            <a
              href={site.contact.bcConsultores}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-1 flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-[14px] font-semibold text-black"
            >
              <Calculator size={16} strokeWidth={2.2} aria-hidden="true" />
              BC Consultores
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function MegaPanel({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  return (
    <div className="grid gap-3 lg:grid-cols-[1.15fr_1.15fr_0.9fr]">
      {(item.featured ?? []).map((link) => (
        <NavLinkItem
          key={link.href}
          href={link.href}
          external={link.external}
          onClick={onNavigate}
          className="group flex min-h-[196px] flex-col rounded-[22px] bg-[#1d1d1d] p-5 transition-colors hover:bg-[#222]"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
            <link.icon size={18} aria-hidden="true" />
          </span>
          <h3 className="nav-card-label mt-5 text-[17px] font-bold tracking-[-0.02em]">{link.label}</h3>
          <p className="mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-white/55">{link.description}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] font-medium text-white/80 transition-colors group-hover:text-white">
            {link.cta ?? "Ver página"}
            <ArrowUpRight size={14} aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </NavLinkItem>
      ))}

      <div className="flex flex-col gap-3">
        {item.asideTitle ? (
          <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40">
            {item.asideTitle}
          </p>
        ) : null}

        {(item.aside ?? []).map((link) => (
          <NavLinkItem
            key={link.href}
            href={link.href}
            external={link.external}
            onClick={onNavigate}
            className="flex items-start gap-3 rounded-[18px] bg-[#1d1d1d] px-4 py-3.5 transition-colors hover:bg-[#222]"
          >
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <link.icon size={16} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[14px] font-semibold tracking-[-0.02em]">{link.label}</span>
              <span className="mt-0.5 block text-[12.5px] leading-snug text-white/50">{link.description}</span>
            </span>
          </NavLinkItem>
        ))}

        {item.promo ? (
          <NavLinkItem
            href={item.promo.href}
            external={item.promo.external}
            onClick={onNavigate}
            className="mt-auto flex min-h-[132px] flex-col rounded-[22px] bg-white p-5 text-black"
          >
            <h3 className="nav-card-label text-[17px] font-bold tracking-[-0.02em]">{item.promo.title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-black/60">{item.promo.description}</p>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-semibold">
              {item.promo.cta}
              <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          </NavLinkItem>
        ) : null}
      </div>
    </div>
  );
}
