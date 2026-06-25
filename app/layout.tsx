import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jsonLdSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AIBaimy",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "image": "https://aibaimy.cloud/og-image.png",
    "description": "Rodičovský přehled pro bezpečné AI vzdělávání dětí 7–11 let. 5 vrstev ochrany AIBguard, fail-closed architektura, krizová detekce 116 111, AES-256 šifrování v EU.",
    "url": "https://aibaimy.cloud",
    "offers": {
      "@type": "Offer",
      "price": "199",
      "priceCurrency": "CZK",
      "availability": "https://schema.org/InStock",
      "description": "Rodičovský plán — měsíční předplatné",
      "seller": { "@type": "Organization", "name": "SAY TO PAY s.r.o." }
    },
    "publisher": {
      "@type": "Organization",
      "name": "SAY TO PAY s.r.o.",
      "url": "https://aiblab.cz",
      "logo": "https://aibaimy.cloud/images/logo.png",
      "identifier": "08694222",
      "contactPoint": { "@type": "ContactPoint", "email": "info@aiblab.cz", "contactType": "customer support" },
      "sameAs": ["https://aiblab.cz", "https://aibgin.cz", "https://aibsn.org"]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Co se stane, když AI napíše nevhodný obsah?", "acceptedAnswer": { "@type": "Answer", "text": "Díky fail-closed architektuře AIBguard: pokud jakákoliv ze 5 vrstev detekuje problém nebo selže kontrola, odpověď je okamžitě zablokována. Rodič obdrží push notifikaci do 3 sekund." } },
      { "@type": "Question", "name": "Jak funguje napojení na Linku bezpečí 116 111?", "acceptedAnswer": { "@type": "Answer", "text": "4. vrstva ochrany kontinuálně analyzuje obsah konverzace. Při detekci krizových vzorců je rodič okamžitě notifikován a systém zahájí protokol pro kontakt s Linkou bezpečí 116 111." } },
      { "@type": "Question", "name": "Může dítě obejít bezpečnostní vrstvy?", "acceptedAnswer": { "@type": "Answer", "text": "Ne. Dítě přistupuje výhradně přes QR kód vygenerovaný rodičem. Bez platného QR kódu nelze AIBgin platformu spustit." } },
      { "@type": "Question", "name": "Kde jsou data mého dítěte uložena?", "acceptedAnswer": { "@type": "Answer", "text": "Výhradně v EU — Supabase Frankfurt (eu-central-1). AES-256 šifrování, nikdy neopustí EU." } },
      { "@type": "Question", "name": "Co znamená nulová digitální stopa dítěte?", "acceptedAnswer": { "@type": "Answer", "text": "Dítě nemá účet. Po smazání rodičovského účtu jsou data anonymizována do 30 dní." } }
    ]
  }
];

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aibaimy.cloud"),
  title: "AIBaimy — Rodičovský přehled bezpečného AI vzdělávání pro děti 7–11 let",
  description:
    "AIBaimy chrání vaše děti při používání AI chatbotů. Jediná česká platforma pro AI safety dětí doma. Ochrana, ne sledování – bezpečná AI pro celou rodinu.",
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
      "Jediné řešení v ČR s technickou garancí bezpečnosti AI pro děti 7–11 let. Fail-closed architektura, krizová detekce 116 111, AES-256, EU AI Act Ready. 1 den zdarma.",
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
      "Fail-closed AI, krizová detekce 116 111, AES-256, EU AI Act Ready. 1 den zdarma.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchemas) }}
        />
      </head>
      <body>
        <div style={{ background: "#1a1a2e", color: "#fff", textAlign: "center", padding: "12px", fontSize: "14px", fontWeight: "600", position: "sticky", top: "0", zIndex: 9999 }}>
          Plná verze bude spuštěna 1. 7. 2026 — připravujeme pro vás něco výjimečného
        </div>
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-JF6YEWCWZV"
        />
        <Script id="ga4-aimy-config" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JF6YEWCWZV');
        `}</Script>
      </body>
    </html>
  );
}
