import Link from "next/link";
import { Header } from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="flex min-h-screen items-center bg-black pb-20 pt-32 text-white">
        <div className="container-x grid grid-cols-12 gap-y-12">
          <div className="col-span-12 flex justify-between border-t border-white/40 pt-4 text-[10px] uppercase tracking-[0.28em] text-white/55">
            <p>Erro / 404</p><p>Fora do índice</p>
          </div>
          <div className="col-span-12 md:col-span-10 md:col-start-3">
          <p className="h-serif text-[120px] leading-[0.75] text-white/10 md:text-[240px]">404</p>
          <h1 className="h-serif -mt-4 max-w-5xl text-[54px] leading-[0.95] text-white md:-mt-12 md:text-[92px]">Página não encontrada</h1>
          <p className="mt-10 max-w-lg border-l border-white/30 pl-6 leading-relaxed text-white/60">
            A página que você tentou acessar não existe ou foi movida. Volte para a home ou navegue pelo site.
          </p>
          <div className="mt-12 flex flex-wrap border-y border-white/40">
            <Link href="/" className="bg-white px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-black">Voltar para a home</Link>
            <Link href="/areas-de-atuacao" className="border-l border-white/40 px-7 py-4 text-[11px] uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black">Áreas de atuação</Link>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
