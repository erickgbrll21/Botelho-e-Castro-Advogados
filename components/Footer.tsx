import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { offices, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container-x py-14 md:py-20">
        <div className="flex flex-col items-center">
          <Link href="/" aria-label="Botelho e Castro Advogados — página inicial">
            <Image
              src="/images/logos/logo-bca.png"
              alt="Botelho e Castro Advogados"
              width={307}
              height={87}
              className="h-auto w-[180px] md:w-[215px]"
            />
          </Link>

          <div className="mt-5 flex items-center gap-2">
            <a
              href={site.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-white text-black transition-opacity hover:opacity-70"
            >
              <Instagram size={21} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              href={site.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-white text-black transition-opacity hover:opacity-70"
            >
              <MessageCircle size={22} strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              aria-label="E-mail"
              className="flex h-11 w-11 items-center justify-center rounded-[3px] bg-white text-black transition-opacity hover:opacity-70"
            >
              <Mail size={22} strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-y-16">
          {offices.map((office) => (
            <section key={office.slug}>
              <h2 className="text-[11px] font-bold uppercase tracking-[-0.01em] text-white">
                {office.city}/{office.state}:
              </h2>
              <p className="mt-4 max-w-[250px] text-[11px] leading-[1.55] text-white/75">
                {office.address} | {office.city} – {office.state}
                <br />
                CEP {office.zip}
              </p>

              {office.isHead ? (
                <div className="mt-3 space-y-0.5 text-[11px] font-semibold leading-[1.45]">
                  <a href="tel:+553132950497" className="block transition-opacity hover:opacity-65">
                    {site.contact.phonePrimary}
                  </a>
                  <a href="tel:+5531982465979" className="block transition-opacity hover:opacity-65">
                    {site.contact.phoneSecondary}
                  </a>
                  <a
                    href={site.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-opacity hover:opacity-65"
                  >
                    {site.contact.whatsapp}
                    <MessageCircle size={11} fill="currentColor" />
                  </a>
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[9px] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Botelho e Castro Advogados</p>
          <Link href="/politica-de-privacidade" className="transition-colors hover:text-white">
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  );
}
