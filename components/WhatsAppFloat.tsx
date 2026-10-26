"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="currentColor">
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.55 2 2.09 6.45 2.09 11.94c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.49 0 9.95-4.45 9.95-9.94 0-2.65-1.03-5.15-2.95-7.0zm-7.01 15.24h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.01 4.54-3.69 8.23-8.24 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.1-.23-.17-.48-.29z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const chatHref = `${site.contact.whatsappLink}?text=${encodeURIComponent(
    "Olá! Gostaria de falar com o escritório Botelho e Castro Advogados.",
  )}`;

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-[max(1.15rem,env(safe-area-inset-bottom))] right-[max(1.15rem,env(safe-area-inset-right))] z-40 flex flex-col items-end gap-3 md:bottom-7 md:right-7"
    >
      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Atendimento pelo WhatsApp"
          className="w-[min(calc(100vw-2.5rem),340px)] overflow-hidden overscroll-contain rounded-[28px] bg-white text-[#111] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
        >
          <div className="flex items-center gap-3 px-5 pb-3 pt-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <WhatsAppIcon className="h-[22px] w-[22px]" />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-bold leading-tight tracking-[-0.02em]" translate="no">BCA Advogados</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-[12px] text-[#25D366]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                Online agora
              </p>
            </div>
          </div>

          <div className="px-5 pb-4">
            <p className="rounded-2xl bg-[#F3F6F4] px-4 py-3 text-[14px] leading-relaxed text-[#3d4a45]">
              👋 Olá, boas-vindas à Botelho e Castro Advogados! Como podemos te ajudar?
            </p>
            <a
              href={chatHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#1ebe57]"
            >
              Abrir bate-papo
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Fechar atendimento WhatsApp" : "Abrir atendimento WhatsApp"}
        onClick={() => setOpen((value) => !value)}
        className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.45)] transition-transform hover:scale-[1.04] motion-reduce:transition-none motion-reduce:hover:scale-100"
      >
        {open ? (
          <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <WhatsAppIcon className="h-8 w-8" />
        )}
      </button>
    </div>
  );
}
