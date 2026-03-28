import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
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
  ],
  openGraph: {
    title: "LaudoFast – Gere laudos técnicos em minutos com IA",
    description:
      "Automatize seus laudos técnicos com IA. Economize horas toda semana.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
