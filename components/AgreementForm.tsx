"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

function openWhatsApp(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nome = String(data.get("nome") ?? "").trim();
  const numero = String(data.get("numero") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const processo = String(data.get("processo") ?? "").trim();
  const solicitacao = String(data.get("solicitacao") ?? "").trim();

  const lines = [
    "Olá, gostaria de atendimento pela Plataforma de Acordo.",
    `Nome: ${nome}`,
    `Número: ${numero}`,
    `E-mail: ${email}`,
    `Número do processo: ${processo}`,
    `Solicitação: ${solicitacao}`,
  ];

  window.open(`${site.contact.whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
}

export function AgreementForm() {
  return (
    <form className="col-span-12 bg-black p-5 text-white sm:p-8 md:col-span-6 md:col-start-7 md:p-12" onSubmit={openWhatsApp}>
      <div className="flex justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/55">
        <span>02 / Formulário</span>
        <span>Acordo</span>
      </div>
      <h2 className="h-serif mt-8 text-4xl text-white md:text-5xl">Preencha os dados abaixo</h2>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Nome</span>
          <input required name="nome" autoComplete="name" placeholder="Maria Silva…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Número</span>
          <input required name="numero" type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-0000…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">E-mail</span>
          <input required type="email" name="email" autoComplete="email" spellCheck={false} placeholder="maria@empresa.com…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Número do Processo</span>
          <input required name="processo" autoComplete="off" inputMode="numeric" placeholder="0000000-00.0000.0.00.0000…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Escreva sua solicitação</span>
          <textarea required name="solicitacao" rows={5} placeholder="Descreva sua solicitação…" className="mt-2 w-full resize-none border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
      </div>

      <button type="submit" className="mt-10 inline-flex min-h-12 items-center gap-3 border border-white bg-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white">
        Enviar solicitação <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="mt-6 text-xs leading-relaxed text-white/50">
        Ao enviar, você será direcionado ao WhatsApp {site.contact.whatsapp} e concorda com nossa{" "}
        <Link href="/politica-de-privacidade" className="underline hover:text-white">Política de Privacidade</Link>.
      </p>
    </form>
  );
}
