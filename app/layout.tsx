import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIBaimy — Přehled AI vzdělávání vašeho dítěte",
  description:
    "Sledujte pokrok svého dítěte v AI vzdělávání v reálném čase. Bezpečnostní upozornění, statistiky aktivity a propojení s pedagogem. Produkt divize AIBlab.",
  keywords: ["AIBaimy", "AI vzdělávání", "rodičovský přehled", "AIBlab", "bezpečné AI"],
  openGraph: {
    title: "AIBaimy — Přehled AI vzdělávání vašeho dítěte",
    description: "Mějte přehled o AI vzdělávání svého dítěte.",
    siteName: "AIBaimy",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
