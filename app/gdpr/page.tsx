export const metadata = {
  title: "Zásady ochrany osobních údajů — AIBaimy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aibaimy.cloud/gdpr" },
};

export default function GDPR() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>
      <nav style={{ background: "rgba(10,14,26,0.95)", borderBottom: "1px solid rgba(0,229,255,0.1)", padding: "0 28px", height: 60, display: "flex", alignItems: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          🛡️ AIBaimy <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, marginLeft: 8 }}>/ Ochrana osobních údajů</span>
        </a>
      </nav>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "56px 28px" }}>
        <div className="legal-content">
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Zásady ochrany osobních údajů</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 40 }}>Platné od 1. 6. 2026 · GDPR (EU) 2016/679 · SAY TO PAY s.r.o.</p>

          <h2>1. Správce osobních údajů</h2>
          <p>Správcem osobních údajů je <strong>SAY TO PAY s.r.o.</strong> (dále jen „Správce"), provozovatel služby AIBaimy. Kontakt pro ochranu osobních údajů: <strong>gdpr@aiblab.cz</strong>.</p>

          <h2>2. Jaké údaje zpracováváme</h2>
          <p>Zpracováváme následující kategorie osobních údajů:</p>
          <ul>
            <li><strong>Identifikační údaje rodiče:</strong> jméno, e-mailová adresa, hashované heslo</li>
            <li><strong>Údaje dítěte (pseudonymizované):</strong> věk, ročník, vzdělávací aktivity na platformě AIBgin, výsledky lekcí</li>
            <li><strong>Provozní data:</strong> IP adresa při přihlášení (anonymizována po 30 dnech), logy přístupu</li>
            <li><strong>Platební data:</strong> zpracovává výhradně Stripe; Správce uchovává pouze ID transakce a datum platby</li>
          </ul>

          <h2>3. Zvláštní ochrana dat dětí (GDPR čl. 8)</h2>
          <p>V souladu s čl. 8 nařízení GDPR a § 7 zákona č. 110/2019 Sb. vyžadujeme pro zpracování osobních údajů dítěte mladšího 15 let <strong>souhlas zákonného zástupce</strong>. Registrací rodičovského účtu a propojením s profilem dítěte rodič potvrzuje, že je zákonným zástupcem dítěte a uděluje souhlas se zpracováním údajů dítěte.</p>
          <p>Data dětí jsou <strong>pseudonymizována</strong> — k přímé identifikaci konkrétního dítěte je zapotřebí přístup k rodičovskému účtu. Data dětí nejsou nikdy použita pro reklamní účely, profilování ani prodávána třetím stranám.</p>

          <h2>4. Právní základ zpracování</h2>
          <ul>
            <li>Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR) — poskytování služby AIBaimy</li>
            <li>Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR) — bezpečnost systému, ochrana před podvodem</li>
            <li>Souhlas (čl. 6 odst. 1 písm. a GDPR) — zpracování dat dítěte, cookies</li>
            <li>Plnění zákonné povinnosti (čl. 6 odst. 1 písm. c GDPR) — účetní záznamy</li>
          </ul>

          <h2>5. Příjemci osobních údajů</h2>
          <p>Údaje předáváme pouze nezbytným zpracovatelům se sídlem v EU nebo za podmínek GDPR:</p>
          <ul>
            <li><strong>Supabase Inc.</strong> (databáze, region eu-central-1 — Frankfurt)</li>
            <li><strong>Stripe Inc.</strong> (platební zpracování, Standard Contractual Clauses)</li>
            <li><strong>Resend Inc.</strong> (transakční e-mail)</li>
            <li><strong>Vercel Inc.</strong> (hosting, SCC)</li>
          </ul>

          <h2>6. Bezpečnost a šifrování</h2>
          <p>Veškerá data jsou šifrována při přenosu (TLS 1.3) i v klidu (AES-256). Každý tenant (škola/rodičovský účet) má vlastní šifrovací klíč. Auditní log aktivit je uchováván po dobu 5 let dle zákonných požadavků.</p>

          <h2>7. Doba uchování dat</h2>
          <ul>
            <li>Aktivní účet: po celou dobu trvání smlouvy</li>
            <li>Po zrušení účtu: 30 dní (možnost obnovení), poté anonymizace nebo smazání</li>
            <li>Účetní záznamy: 10 let dle zákona o účetnictví</li>
            <li>Bezpečnostní logy: 12 měsíců</li>
          </ul>

          <h2>8. Vaše práva</h2>
          <ul>
            <li><strong>Právo na přístup</strong> (čl. 15): obdržet kopii zpracovávaných údajů</li>
            <li><strong>Právo na opravu</strong> (čl. 16): opravit nepřesné údaje</li>
            <li><strong>Právo na výmaz</strong> (čl. 17): smazání dat (‍„právo být zapomenut")</li>
            <li><strong>Právo na přenositelnost</strong> (čl. 20): export dat ve formátu JSON/CSV</li>
            <li><strong>Právo odvolat souhlas</strong>: kdykoliv pro cookies nebo pro zpracování dat dítěte</li>
            <li><strong>Právo podat stížnost</strong>: u Úřadu pro ochranu osobních údajů (www.uoou.cz)</li>
          </ul>

          <h2>9. Kontakt pro ochranu osobních údajů</h2>
          <p>Žádosti o uplatnění práv zasílejte na: <strong>gdpr@aiblab.cz</strong>. Odpovíme do 30 dnů.</p>
        </div>
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px", textAlign: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontSize: "0.85rem" }}>← Zpět na AIBaimy</a>
      </footer>
    </div>
  );
}
