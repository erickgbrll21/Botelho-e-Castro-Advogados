"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/office/foto-090.jpg",
  "/images/office/foto-069.jpg",
  "/images/office/img-1376.jpg",
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {slides.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`editorial-image object-cover object-center transition-[opacity,transform] duration-[1400ms] ease-out ${
            index === active ? "scale-105 opacity-40" : "scale-100 opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
