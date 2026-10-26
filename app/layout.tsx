import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

const heading = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "block",
  preload: true,
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

const sans = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "block",
  preload: true,
  fallback: ["Arial", "Helvetica", "sans-serif"],
  adjustFontFallback: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bcadvogados.adv.br"),
  title: {
    default: "Botelho e Castro Advogados — Referência em consultoria jurídica planejativa",
    template: "%s · Botelho e Castro Advogados",
  },
  description:
    "Escritório de advocacia com mais de 25 anos de atuação, mais de 300 mil processos conduzidos e presença nacional. Consultoria jurídica planejativa, contenciosa e preventiva.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Botelho e Castro Advogados",
    images: ["/images/office/img-1376.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${heading.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only bg-black px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Pular para o conteúdo
        </a>
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
