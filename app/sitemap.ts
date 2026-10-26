import type { MetadataRoute } from "next";
import { practiceAreas, articles } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.bcadvogados.adv.br";
  const now = new Date();
  const routes = [
    "",
    "/institucional",
    "/areas-de-atuacao",
    "/equipe",
    "/unidades",
    "/noticias",
    "/contato",
    "/trabalhe-conosco",
    "/plataforma-de-acordo",
    "/politica-de-privacidade",
  ].map((r) => ({ url: `${base}${r}`, lastModified: now }));
  const areas = practiceAreas.map((a) => ({ url: `${base}/areas-de-atuacao/${a.slug}`, lastModified: now }));
  const posts = articles.map((a) => ({ url: `${base}/noticias/${a.slug}`, lastModified: new Date(a.date) }));
  return [...routes, ...areas, ...posts];
}
