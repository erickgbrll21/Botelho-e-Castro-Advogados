"use client";

import { SiteNav } from "@/components/SiteNav";

export function Header({ transparent = false }: { transparent?: boolean }) {
  void transparent;
  return <SiteNav />;
}
