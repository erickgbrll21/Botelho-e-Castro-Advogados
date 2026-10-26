import Image from "next/image";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  asideImage,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  breadcrumbs: { label: string; href?: string }[];
  asideImage?: { src: string; alt: string };
}) {
  return (
    <section className="border-b border-white/10 bg-black pt-24 text-white md:pt-[7.5rem]">
      <div className="container-x">
        <div className="border-b border-white/15 py-5 [&_nav]:text-white/45 [&_nav_span]:text-white/70 [&_svg]:text-white/25">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="grid min-h-[48vh] grid-cols-12">
          <div className="col-span-12 border-b border-white/15 py-7 md:col-span-3 md:border-b-0 md:border-r md:border-white/15 lg:py-10">
            <span className="eyebrow text-white">{eyebrow}</span>
            {asideImage ? (
              <div className="relative mx-auto mt-8 aspect-square w-full max-w-[280px] md:mx-0 md:mt-10">
                <Image src={asideImage.src} alt={asideImage.alt} fill sizes="(max-width:768px) 70vw, 280px" className="object-contain" />
              </div>
            ) : (
              <p className="mt-6 hidden max-w-[12rem] text-[10px] uppercase leading-relaxed tracking-[0.14em] text-black/45 md:block">
                Botelho e Castro Advogados
                <br />
                Minas Gerais · Brasil
              </p>
            )}
          </div>
          <div className="col-span-12 flex flex-col justify-end py-10 md:col-span-9 md:pl-10 lg:py-14 lg:pl-14">
            <h1 className="h-serif max-w-5xl text-[clamp(1.7rem,6vw,3.85rem)] font-bold leading-[1.12] text-white md:leading-[1.06]">{title}</h1>
            {intro ? (
              <p className="mt-8 max-w-2xl border-l border-white/40 pl-5 text-sm leading-relaxed text-white/65 md:text-base">{intro}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
