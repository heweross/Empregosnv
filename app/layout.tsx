import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empregos NV | Talentos, vagas e empresas de Nova Venécia",
  description: "A ponte local entre candidatos, oportunidades e empresas de Nova Venécia.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
