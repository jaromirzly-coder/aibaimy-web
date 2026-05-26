import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "AIBaimy Rodičovský plán",
  url: "https://aibaimy.cloud",
  offers: {
    "@type": "Offer",
    price: 299,
    priceCurrency: "CZK",
    billingPeriod: "P1M",
    url: "https://aibaimy.cloud",
  },
};

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aibaimy.cloud"),
  title: "AIBaimy — Rodičovský přehled bezpečného AI vzdělávání pro děti 7–11 let",
  description:
    "AIBaimy chrání děti 7–11 let v AI vzdělávání pomocí 5 vrstev ochrany AIBguard. Fail-closed architektura, AES-256 šifrování, krizová detekce 116 111, EU AI Act & GDPR Ready by Design. QR přístup bez registrace dítěte. 14 dní zdarma.",
  keywords: [
    "bezpečné AI pro děti",
    "rodičovský přehled AI",
    "AIBaimy",
    "AI vzdělávání děti 7-11 let",
    "AIBguard ochrana",
    "EU AI Act děti",
    "GDPR ochrana dětí",
    "nulová digitální stopa",
    "linka bezpečí AI",
    "fail-closed AI architektura",
    "AES-256 šifrování děti",
    "AIBgin platforma",
    "bezpečnost dětí online",
    "ochrana dětí AI",
  ],
  openGraph: {
    title: "AIBaimy — 5 vrstev ochrany pro vaše dítě v AI vzdělávání",
    description:
      "Jediné řešení v ČR s technickou garancí bezpečnosti AI pro děti 7–11 let. Fail-closed architektura, krizová detekce 116 111, AES-256, EU AI Act Ready. 14 dní zdarma.",
    url: "https://aibaimy.cloud",
    siteName: "AIBaimy",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AIBaimy — 5 vrstev ochrany AIBguard pro děti 7–11 let",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBaimy — 5 vrstev ochrany AIBguard pro děti v AI vzdělávání",
    description:
      "Fail-closed AI, krizová detekce 116 111, AES-256, EU AI Act Ready. 14 dní zdarma.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
        />
      </head>
      <body>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID_AIMY"
        />
        <Script id="ga4-aimy-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID_AIMY');
        `}</Script>
      </body>
    </html>
  );
}
