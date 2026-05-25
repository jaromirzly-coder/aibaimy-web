import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aibaimy.cloud"),
  title: "AIBaimy — Bezpečná AI pro děti 7–11 let | Přehled pro rodiče",
  description:
    "AIBaimy propojuje rodiče s AI vzdělávacím prostředím jejich dětí ve věku 7–11 let. Sledujte pokrok, dostávejte bezpečnostní upozornění a komunikujte s pedagogem. 14 dní zdarma.",
  keywords: [
    "AIBaimy", "AI pro děti", "bezpečná AI", "vzdělávání dětí 7-11 let",
    "rodičovský přehled", "AIBlab", "AIBgin", "online bezpečnost dětí",
    "ai asistent pro školy", "GDPR děti", "digitální vzdělávání",
  ],
  openGraph: {
    title: "AIBaimy — Bezpečná AI pro děti 7–11 let",
    description:
      "Mějte přehled o AI vzdělávání svého dítěte. Bezpečnostní notifikace, statistiky pokroku, propojení s pedagogem. 14 dní zdarma, pak 299 Kč/měs.",
    url: "https://aibaimy.cloud",
    siteName: "AIBaimy",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBaimy — Bezpečná AI pro děti 7–11 let",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBaimy — Bezpečná AI pro děti 7–11 let",
    description: "Mějte přehled o AI vzdělávání svého dítěte. 14 dní zdarma.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://aibaimy.cloud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
