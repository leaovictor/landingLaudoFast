import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://laudofast.com.br"),
  title: "LaudoFast – Gere laudos técnicos em minutos com IA",
  description:
    "Automatize seus laudos técnicos com inteligência artificial. Reduza erros, economize horas toda semana e padronize seus relatórios. Junte-se à lista de espera.",
  keywords: [
    "laudo técnico",
    "automação de laudos",
    "IA para engenharia",
    "laudo com IA",
    "laudo rápido",
    "LaudoFast",
    "relatório técnico automático",
    "engenharia elétrica",
    "engenharia civil",
    "manutenção industrial",
  ],
  openGraph: {
    title: "LaudoFast – Gere laudos técnicos em minutos com IA",
    description:
      "Automatize seus laudos técnicos com IA. Economize horas toda semana. Acesso antecipado limitado.",
    type: "website",
    locale: "pt_BR",
    siteName: "LaudoFast",
    url: "https://laudofast.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaudoFast – Gere laudos técnicos em minutos com IA",
    description:
      "Automatize seus laudos técnicos com IA. Economize horas toda semana.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://laudofast.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "LaudoFast",
              description:
                "Plataforma de automação de laudos técnicos com inteligência artificial para profissionais de engenharia e manutenção.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "BRL",
                description: "Acesso antecipado gratuito por 30 dias",
              },
              author: {
                "@type": "Organization",
                name: "LaudoFast",
                url: "https://laudofast.com.br",
              },
              audience: {
                "@type": "Audience",
                audienceType:
                  "Engenheiros, Técnicos de Campo, Profissionais de Manutenção",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
