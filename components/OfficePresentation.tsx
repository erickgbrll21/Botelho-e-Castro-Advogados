"use client";

import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

export function OfficePresentation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  async function togglePlayback() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      await video.play();
      setPlaying(true);
      return;
    }

    video.pause();
    setPlaying(false);
  }

  return (
    <section className="bg-black py-20 text-white md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-10 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">Apresentação</p>
            <h2 className="h-serif mt-5 text-[clamp(2.7rem,5vw,5rem)] leading-[1.02]">
              O escritório em movimento.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/55 md:pb-2">
            Uma visão da estrutura, da equipe e da forma de atuar do Botelho e Castro Advogados.
          </p>
        </div>

        <div className="group relative mt-10 overflow-hidden rounded-2xl bg-[#111]">
          <video
            ref={videoRef}
            src="/videos/apresentacao-escritorio.mp4"
            className="aspect-video w-full object-cover"
            playsInline
            preload="metadata"
            onEnded={() => setPlaying(false)}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />

          <button
            type="button"
            onClick={togglePlayback}
            aria-label={playing ? "Pausar apresentação" : "Reproduzir apresentação"}
            className={`absolute inset-0 flex items-center justify-center transition-colors ${
              playing ? "bg-transparent hover:bg-black/25" : "bg-black/35"
            }`}
          >
            <span
              className={`inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white text-black transition-transform hover:scale-105 ${
                playing ? "opacity-80 md:opacity-0 md:group-hover:opacity-100" : "opacity-100"
              }`}
            >
              {playing ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
