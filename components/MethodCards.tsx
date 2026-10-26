"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileSearch, Handshake, Scale, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const items = [
  { icon: FileSearch, title: "Diagnóstico", text: "Compreensão profunda do cenário, dos riscos e dos objetivos de cada cliente." },
  { icon: Scale, title: "Estratégia", text: "Definição de caminhos jurídicos seguros, objetivos e adequados ao negócio." },
  { icon: ShieldCheck, title: "Prevenção", text: "Antecipação de passivos e orientação contínua para decisões mais seguras." },
  { icon: Handshake, title: "Execução", text: "Atuação integrada, comunicação clara e acompanhamento em todas as etapas." },
];

export function MethodSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = gsap.utils.toArray<HTMLElement>(".method-card");
      if (!section || cards.length < 2) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) {
        gsap.set(cards, { autoAlpha: 1, y: 0, position: "relative" });
        return;
      }

      gsap.set(cards, { autoAlpha: 0, y: 16 });
      gsap.set(cards[0], { autoAlpha: 1, y: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${Math.round(window.innerHeight * 2.6)}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, index) => {
        tl.to({}, { duration: 1.4 });
        if (index === cards.length - 1) return;
        tl.to(card, { autoAlpha: 0, y: -16, duration: 0.55 });
        tl.to(cards[index + 1], { autoAlpha: 1, y: 0, duration: 0.55 }, "<");
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="relative bg-black text-white">
      <div className="absolute inset-0 opacity-20">
        <Image src="/images/office/foto-090.jpg" alt="" fill sizes="100vw" className="object-cover grayscale" />
      </div>

      <div className="container-x relative grid min-h-[100svh] items-center gap-10 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Como atuamos</p>
          <h2 className="h-serif mt-5 text-[clamp(2rem,6vw,5rem)] leading-[1.08] md:leading-[1.02]">
            Estratégia construída para cada decisão.
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-white/60">
            Segurança, objetividade e trabalho integrado para alcançar resultados práticos e efetivos.
          </p>
          <Link href="/contato" className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-xl bg-white px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-black hover:bg-neutral-200">
            Falar com especialista <ArrowRight size={15} />
          </Link>
        </div>

        <div className="relative min-h-[250px] md:min-h-[280px]">
          {items.map((item, index) => (
            <article
              key={item.title}
              className={`method-card rounded-2xl border border-white/15 bg-black/70 p-6 backdrop-blur-sm md:p-8 ${
                index === 0 ? "relative" : "absolute inset-0 opacity-0"
              }`}
            >
              <div className="flex items-start justify-between">
                <item.icon size={20} />
                <span className="text-[9px] tracking-[0.2em] text-white/35">0{index + 1}</span>
              </div>
              <h3 className="h-serif mt-8 text-2xl md:text-3xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/55 md:text-base">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
