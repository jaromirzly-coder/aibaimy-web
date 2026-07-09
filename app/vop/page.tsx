export const metadata = {
  title: "Všeobecné obchodní podmínky — AIBaimy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aibaimy.cloud/vop" },
};

export default function VOP() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>
      <nav style={{ background: "rgba(10,14,26,0.95)", borderBottom: "1px solid rgba(0,229,255,0.1)", padding: "0 28px", height: 60, display: "flex", alignItems: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          🛡️ AIBaimy <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, marginLeft: 8 }}>/ Obchodní podmínky</span>
        </a>
      </nav>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "56px 28px" }}>
        <div className="legal-content">
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Všeobecné obchodní podmínky</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 40 }}>Platné od 1. 6. 2026 · SAY TO PAY s.r.o.</p>

          <h2>1. Smluvní strany a základní ustanovení</h2>
          <p>Poskytovatelem služby AIBaimy je společnost <strong>SAY TO PAY s.r.o.</strong>, se sídlem v České republice (dále jen „Poskytovatel"). Uživatelem je zákonný zástupce dítěte ve věku 7–11 let, který uzavřel smlouvu o poskytování služby (dále jen „Uživatel"). Tyto Všeobecné obchodní podmínky (dále jen „VOP") upravují vzájemná práva a povinnosti Poskytovatele a Uživatele.</p>

          <h2>2. Popis služby</h2>
          <p>AIBaimy je webová aplikace dostupná na adrese aibaimy.cloud, která umožňuje zákonným zástupcům sledovat vzdělávací aktivity dítěte na platformě AIBgin, dostávat bezpečnostní upozornění generovaná systémem AIBguardian a komunikovat s pedagogem. Aplikace je určena výhradně pro děti ve věkovém rozmezí 7–11 let.</p>

          <h2>3. Registrace a uživatelský účet</h2>
          <p>Uživatel je povinen při registraci uvést pravdivé a úplné údaje. Uživatel odpovídá za bezpečnost přihlašovacích údajů. Účet je nepřenosný. Poskytovatel si vyhrazuje právo zrušit účet, který porušuje tyto VOP.</p>

          <h2>4. Zkušební období a předplatné</h2>
          <p>Poskytovatel nabízí bezplatné zkušební období v délce <strong>1 den</strong> od registrace. Kreditní karta je při registraci vyžadována. Po uplynutí zkušebního období přechází služba automaticky do placeného modelu ve výši <strong>199 Kč bez DPH za každý započatý kalendářní měsíc</strong>, pokud Uživatel nezruší předplatné před jeho uplynutím.</p>
          <p>Předplatné se automaticky obnovuje každý měsíc, dokud jej Uživatel nezruší. Zrušení lze provést v nastavení účtu nebo e-mailem na info@aiblab.cz. Zrušení je účinné k poslednímu dni aktuálního fakturačního období.</p>

          <h2>5. Platební podmínky</h2>
          <p>Platby jsou zpracovávány prostřednictvím platební brány Stripe. Uživatel souhlasí s podmínkami platební brány. Faktura je vystavena elektronicky a zaslána e-mailem. Ceny jsou uváděny bez DPH; DPH bude účtována dle platných právních předpisů.</p>

          <h2>6. Ochrana dětí a přijatelné použití</h2>
          <p>Uživatel se zavazuje, že službu bude využívat výhradně za účelem vzdělávacího dohledu nad dítětem ve věkovém rozmezí 7–11 let. Je zakázáno: sdílet přihlašovací údaje s neoprávněnými osobami, používat službu k účelům odporujícím zákonu, pokoušet se o neoprávněný přístup k datům jiných uživatelů nebo dětí.</p>

          <h2>7. Dostupnost a odpovědnost</h2>
          <p>Poskytovatel usiluje o dostupnost služby 99 % času. Plánované odstávky budou oznámeny předem e-mailem. Poskytovatel neodpovídá za škody vzniklé výpadkem služby způsobeným okolnostmi mimo jeho kontrolu (vyšší moc, výpadek třetích stran). Celková odpovědnost Poskytovatele je omezena na výši předplatného uhrazeného Uživatelem za posledních 3 měsíce.</p>

          <h2>8. Změny VOP</h2>
          <p>Poskytovatel je oprávněn tyto VOP jednostranně měnit. O změnách bude Uživatel informován e-mailem nejméně 30 dní před jejich účinností. Pokud Uživatel se změnami nesouhlasí, je oprávněn předplatné zrušit před datem účinnosti změn.</p>

          <h2>9. Rozhodné právo a řešení sporů</h2>
          <p>Smluvní vztah se řídí právem České republiky. Spory budou řešeny přednostně mimosoudně. Spotřebitelé mohou využít platformu pro online řešení sporů EU (ec.europa.eu/consumers/odr) nebo se obrátit na Českou obchodní inspekci (www.coi.cz).</p>

          <h2>10. Kontaktní údaje</h2>
          <p>SAY TO PAY s.r.o. · E-mail: info@aiblab.cz · Web: aibaimy.cloud</p>
        </div>
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px", textAlign: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontSize: "0.85rem" }}>← Zpět na AIBaimy</a>
      </footer>
    </div>
  );
}
