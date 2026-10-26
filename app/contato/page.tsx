import type { Metadata } from "next";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ContactWhatsAppForm } from "@/components/ContactWhatsAppForm";
import { site, offices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com o escritório Botelho e Castro Advogados. Atendimento em Belo Horizonte e sete outras unidades.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o seu próximo passo jurídico."
        intro="Preencha o formulário abaixo. Você será direcionado ao WhatsApp do escritório para continuar o atendimento."
        breadcrumbs={[{ label: "Contato" }]}
      />

      <section className="bg-white py-20 text-black md:py-28">
        <div className="container-x grid grid-cols-12 gap-y-14 md:gap-x-8">
          <aside className="col-span-12 md:col-span-1">
            <p className="border-t border-black pt-3 text-[10px] uppercase tracking-[0.26em]">01 / Canais</p>
          </aside>
          <div className="col-span-12 md:col-span-4">
            <div className="border-t border-black py-7">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-black/50"><MapPin size={12} /> Endereço</p>
              <p className="h-serif mt-5 text-3xl">{offices[0].city} / {offices[0].state}</p>
              <p className="mt-3 leading-relaxed text-black/65">{offices[0].address}. CEP {offices[0].zip}.</p>
            </div>
            <div className="border-t border-black py-7">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-black/50"><Phone size={12} /> Telefone</p>
              <p className="h-serif mt-5 text-3xl">{site.contact.phonePrimary}</p>
              <p className="mt-1 text-sm text-black/55">{site.contact.phoneSecondary}</p>
            </div>
            <div className="border-t border-black py-7">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-black/50"><MessageCircle size={12} /> WhatsApp</p>
              <a href={site.contact.whatsappLink} target="_blank" rel="noreferrer" className="h-serif mt-5 inline-flex text-3xl hover:underline">
                {site.contact.whatsapp}
              </a>
            </div>
            <div className="border-t border-black py-7">
              <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-black/50"><Mail size={12} /> E-mail</p>
              <a href={`mailto:${site.contact.email}`} className="h-serif mt-5 inline-flex break-all text-2xl hover:underline">{site.contact.email}</a>
            </div>
            <div className="border-y border-black py-7">
              <p className="text-[10px] uppercase tracking-[0.24em] text-black/50">Horário</p>
              <p className="mt-4">{site.hoursLabel}</p>
            </div>
          </div>

          <ContactWhatsAppForm variant="page" />
        </div>
      </section>
    </>
  );
}
