"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

function openWhatsApp(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nome = String(data.get("nome") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const telefone = String(data.get("telefone") ?? "").trim();
  const assunto = String(data.get("assunto") ?? "").trim();
  const mensagem = String(data.get("mensagem") ?? "").trim();

  const lines = [
    `Olá, meu nome é ${nome}.`,
    email ? `E-mail: ${email}` : "",
    telefone ? `Telefone: ${telefone}` : "",
    assunto ? `Assunto: ${assunto}` : "",
    mensagem ? `Mensagem: ${mensagem}` : "",
  ].filter(Boolean);

  window.open(`${site.contact.whatsappLink}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
}

export function ContactWhatsAppForm({ variant }: { variant: "page" | "home" }) {
  if (variant === "home") {
    return (
      <form className="rounded-2xl bg-white p-7 text-black md:p-9" onSubmit={openWhatsApp}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Preencha os campos</p>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">Nome<input required name="nome" autoComplete="name" placeholder="Maria Silva…" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-[#f5f5f5] px-4 font-normal normal-case tracking-normal focus-visible:border-black" /></label>
          <label className="text-[10px] font-semibold uppercase tracking-[0.16em]">E-mail<input required type="email" name="email" autoComplete="email" spellCheck={false} placeholder="maria@empresa.com…" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-[#f5f5f5] px-4 font-normal normal-case tracking-normal focus-visible:border-black" /></label>
          <label className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:col-span-2">Telefone<input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-0000…" className="mt-2 h-12 w-full rounded-xl border border-black/15 bg-[#f5f5f5] px-4 font-normal normal-case tracking-normal focus-visible:border-black" /></label>
          <label className="text-[10px] font-semibold uppercase tracking-[0.16em] sm:col-span-2">Mensagem<textarea required name="mensagem" rows={4} placeholder="Como podemos ajudar?…" className="mt-2 w-full resize-none rounded-xl border border-black/15 bg-[#f5f5f5] p-4 font-normal normal-case tracking-normal focus-visible:border-black" /></label>
        </div>
        <button type="submit" className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-black px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white hover:bg-neutral-800">Falar no WhatsApp <ArrowRight size={15} aria-hidden="true" /></button>
      </form>
    );
  }

  return (
    <form className="col-span-12 bg-black p-5 text-white sm:p-8 md:col-span-6 md:col-start-7 md:p-12" onSubmit={openWhatsApp}>
      <div className="flex justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/55"><span>02 / Formulário</span><span>Contato</span></div>
      <h2 className="h-serif mt-8 text-4xl text-white md:text-5xl">Envie sua mensagem</h2>
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Nome completo</span>
          <input required name="nome" autoComplete="name" placeholder="Maria Silva…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">E-mail</span>
          <input required type="email" name="email" autoComplete="email" spellCheck={false} placeholder="maria@empresa.com…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Telefone / WhatsApp</span>
          <input name="telefone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-0000…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Assunto</span>
          <input name="assunto" autoComplete="off" placeholder="Consultoria tributária…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block md:col-span-2">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Mensagem</span>
          <textarea required name="mensagem" rows={5} placeholder="Como podemos ajudar?…" className="mt-2 w-full resize-none border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
      </div>
      <button type="submit" className="mt-10 inline-flex items-center gap-3 border border-white bg-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white">Falar no WhatsApp <ArrowUpRight size={16} aria-hidden="true" /></button>
      <p className="mt-6 text-xs leading-relaxed text-white/50">
        Ao enviar, você será direcionado ao WhatsApp {site.contact.whatsapp} e concorda com nossa <Link href="/politica-de-privacidade" className="underline hover:text-white">Política de Privacidade</Link>.
      </p>
    </form>
  );
}
