"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const MAX_PDF_BYTES = 10 * 1024 * 1024;

export function ResumeForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const form = formRef.current;
    if (!form) return;

    const file = (form.elements.namedItem("curriculo") as HTMLInputElement | null)?.files?.[0];
    if (!file) {
      setError("Anexe o currículo em PDF.");
      setSuccess(false);
      return;
    }
    if (file.type !== "application/pdf") {
      setError("O currículo deve estar em PDF.");
      setSuccess(false);
      return;
    }
    if (file.size > MAX_PDF_BYTES) {
      setError("O PDF deve ter no máximo 10 MB.");
      setSuccess(false);
      return;
    }

    setSending(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/curriculo", {
        method: "POST",
        body: new FormData(form),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "Não foi possível enviar o currículo. Tente novamente.");
      }

      form.reset();
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Não foi possível enviar o currículo. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form
      ref={formRef}
      className="col-span-12 bg-black p-5 text-white sm:p-8 md:col-span-6 md:col-start-7 md:p-12"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.25em] text-white/50">
        <span>02 / Cadastro</span>
        <span>Currículo</span>
      </div>
      <h2 className="h-serif mt-8 text-4xl text-white md:text-5xl">Preencha o formulário</h2>

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
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.22em] text-white/55">Currículo (PDF, até 10&nbsp;MB)</span>
          <input required type="file" accept="application/pdf" name="curriculo" className="mt-3 w-full text-sm text-white/70" />
        </label>
      </div>

      {error ? (
        <p role="alert" aria-live="assertive" className="mt-6 text-xs text-red-300">{error}</p>
      ) : success ? (
        <p role="status" aria-live="polite" className="mt-6 text-xs text-white">Currículo enviado. Entraremos em contato em breve.</p>
      ) : null}

      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="mt-10 inline-flex min-h-12 items-center gap-3 border border-white bg-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white disabled:cursor-wait disabled:opacity-60"
      >
        {sending ? "Enviando…" : "Enviar currículo"} <ArrowUpRight size={16} aria-hidden="true" />
      </button>
    </form>
  );
}
