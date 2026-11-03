"use client";

import type { FormEvent } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/content";

function openEmail(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const nome = String(data.get("nome") ?? "").trim();
  const whatsapp = String(data.get("whatsapp") ?? "").trim();
  const area = String(data.get("area") ?? "").trim();

  const subject = `Candidatura — ${nome} (${area})`;
  const body = [
    "Olá, gostaria de enviar meu currículo para o Botelho e Castro Advogados.",
    "",
    `Nome: ${nome}`,
    `WhatsApp: ${whatsapp}`,
    `Área de interesse: ${area}`,
    "",
    "Anexei o currículo a este e-mail.",
  ].join("\n");

  window.location.href = `mailto:${site.contact.careersEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ResumeForm() {
  return (
    <form
      className="col-span-12 bg-black p-5 text-white sm:p-8 md:col-span-6 md:col-start-7 md:p-12"
      onSubmit={openEmail}
    >
      <div className="flex justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/50">
        <span>02 / Cadastro</span>
        <span>Currículo</span>
      </div>
      <h2 className="h-serif mt-8 text-4xl text-white md:text-5xl">Preencha o formulário</h2>
      <p className="mt-6 border-l border-white/40 pl-5 text-sm leading-relaxed text-white/70">
        Ao enviar, o e-mail será aberto com seus dados.{" "}
        <strong className="font-semibold text-white">Anexe o currículo à mensagem</strong> antes de disparar.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-5">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Nome completo</span>
          <input required name="nome" autoComplete="name" placeholder="Maria Silva…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">WhatsApp</span>
          <input required name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(31) 99999-0000…" className="mt-2 w-full border-b border-white/35 bg-transparent py-3 text-white focus-visible:border-white" />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Área de interesse</span>
          <select name="area" autoComplete="off" className="mt-2 w-full border-b border-white/35 bg-black py-3 text-white focus-visible:border-white">
            <option>Direito Tributário</option>
            <option>Direito Cível</option>
            <option>Direito Trabalhista</option>
            <option>Direito Licitatório</option>
          </select>
        </label>
      </div>

      <button
        type="submit"
        className="mt-10 inline-flex min-h-12 items-center gap-3 border border-white bg-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
      >
        Enviar por e-mail <ArrowUpRight size={16} aria-hidden="true" />
      </button>
      <p className="mt-6 text-xs leading-relaxed text-white/50">
        Ao enviar, você será direcionado ao e-mail {site.contact.careersEmail}. Anexe o currículo na mensagem. Ao continuar, você
        concorda com nossa{" "}
        <Link href="/politica-de-privacidade" className="underline hover:text-white">Política de Privacidade</Link>.
      </p>
    </form>
  );
}
