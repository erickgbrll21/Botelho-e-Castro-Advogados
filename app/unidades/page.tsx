import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { offices, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Unidades",
  description:
    "Sediado em Belo Horizonte com unidades em São Paulo, Belém, Vitória, Brasília, Florianópolis, Rio de Janeiro e Porto Alegre.",
  alternates: { canonical: "/unidades" },
};

export default function UnidadesPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Presença Nacional"
        title="Uma estrutura que acompanha você em todo o Brasil."
        intro="Sediado em Belo Horizonte/MG, o BCA mantém unidades em sete estados e representantes nas principais capitais do país."
        breadcrumbs={[{ label: "Unidades" }]}
        asideImage={{ src: "/images/offices/mapa-brasil.png", alt: "Mapa do Brasil com a presença nacional do BCA" }}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x">
          <div className="mb-14 grid grid-cols-2 gap-px bg-black md:grid-cols-4">
            {["/images/office/foto-069.jpg", "/images/office/foto-082.jpg", "/images/office/foto-066.jpg", "/images/office/img-1376.jpg"].map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden bg-black">
                <Image src={src} alt="Estrutura do escritório BCA" fill sizes="25vw" className="media-hover-color object-cover grayscale transition-[filter,transform] duration-700 hover:grayscale-0" />
              </div>
            ))}
          </div>
          <div className="mb-14 flex items-center justify-between gap-4 border-t border-black pt-4 text-[10px] uppercase tracking-[0.16em] sm:tracking-[0.28em]">
            <span>Índice territorial</span>
            <span className="text-black/45">{String(offices.length).padStart(2, "0")} endereços</span>
          </div>
          <div className="border-b border-black">
          {offices.map((o, index) => (
            <article key={o.slug} className="group grid grid-cols-12 gap-y-5 border-t border-black py-8 transition-colors hover:bg-black hover:text-white md:items-start md:gap-x-6 md:py-10">
              <p className="col-span-2 pl-2 text-[10px] tracking-[0.25em] text-black/40 group-hover:text-white/45 md:col-span-1">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="col-span-10 md:col-span-4">
              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-black/50 group-hover:text-white/55">
                  <MapPin size={12} />{o.isHead ? "Sede" : "Unidade"}
                </p>
              </div>
              <h2 className="h-serif mt-4 text-4xl leading-none md:text-5xl">{o.city}</h2>
              </div>
              <div className="col-span-10 col-start-3 md:col-span-4 md:col-start-auto">
                <p className="text-[10px] uppercase tracking-[0.24em] text-black/45 group-hover:text-white/45">{o.state}</p>
                <p className="mt-4 max-w-md leading-relaxed text-black/65 group-hover:text-white/65">{o.address}</p>
                <p className="mt-1 text-sm text-black/45 group-hover:text-white/45">CEP {o.zip}</p>
              </div>
              {o.isHead ? (
                <div className="col-span-10 col-start-3 space-y-3 text-sm md:col-span-3 md:col-start-auto">
                  <a href="tel:+553132950497" className="flex items-center gap-3 border-b border-black/20 pb-2 group-hover:border-white/30"><Phone size={14} /> {site.contact.phonePrimary}</a>
                  <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 break-all"><Mail size={14} /> {site.contact.email}</a>
                </div>
              ) : <span className="col-span-3 hidden md:block" />}
            </article>
          ))}
          </div>
        </div>
      </section>
    </>
  );
}
