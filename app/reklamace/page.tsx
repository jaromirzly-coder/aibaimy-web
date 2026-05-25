export const metadata = {
  title: "Reklamační řád — AIBaimy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aibaimy.cloud/reklamace" },
};

export default function Reklamace() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>
      <nav style={{ background: "rgba(10,14,26,0.95)", borderBottom: "1px solid rgba(0,229,255,0.1)", padding: "0 28px", height: 60, display: "flex", alignItems: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          🛡️ AIBaimy <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, marginLeft: 8 }}>/ Reklamační řád</span>
        </a>
      </nav>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "56px 28px" }}>
        <div className="legal-content">
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Reklamační řád</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 40 }}>Platný od 1. 6. 2026 · SAY TO PAY s.r.o. · dle § 1914–1925 NOZ a zákona č. 634/1992 Sb.</p>

          <h2>1. Úvodní ustanovení</h2>
          <p>Tento Reklamační řád upravuje postup při uplatňování práv z vadného plnění při poskytování digitální služby AIBaimy provozované společností SAY TO PAY s.r.o. (dále jen „Poskytovatel").</p>

          <h2>2. Vadné plnění</h2>
          <p>Za vadu plnění se považuje zejména:</p>
          <ul>
            <li>Nefunkčnost aplikace přesahující 24 hodin v kalendářním měsíci (mimo plánovanou údržbu)</li>
            <li>Nedoručení bezpečnostních notifikací, které mají být dle nastavení doručovány</li>
            <li>Nesprávné zobrazení dat dítěte (záměna s jiným uživatelem)</li>
            <li>Nemožnost přihlášení po dobu delší než 4 hodiny</li>
          </ul>

          <h2>3. Jak podat reklamaci</h2>
          <p>Reklamaci lze uplatnit:</p>
          <ul>
            <li><strong>E-mailem:</strong> reklamace@aiblab.cz (preferovaná cesta)</li>
            <li><strong>Korespondenčně:</strong> na adrese sídla společnosti SAY TO PAY s.r.o.</li>
          </ul>
          <p>Reklamace musí obsahovat: jméno a e-mail registrovaného účtu, popis závady, datum a čas výskytu, snímek obrazovky (pokud je to možné).</p>

          <h2>4. Lhůty pro vyřízení</h2>
          <p>Poskytovatel potvrdí přijetí reklamace do <strong>2 pracovních dnů</strong>. Reklamace bude vyřízena nejpozději do <strong>30 kalendářních dnů</strong> od jejího přijetí. V odůvodněných případech lze lhůtu prodloužit, o čemž bude Uživatel informován.</p>

          <h2>5. Způsoby vyřízení reklamace</h2>
          <ul>
            <li><strong>Opravou vady</strong> — technická náprava v nejkratším možném čase</li>
            <li><strong>Slevou z předplatného</strong> — proporcionální sleva za dobu výpadku</li>
            <li><strong>Prodloužením předplatného</strong> — bezplatné prodloužení o dobu výpadku</li>
            <li><strong>Vrácením předplatného</strong> — pro zásadní vady, kdy nelze jinak</li>
          </ul>

          <h2>6. Mimosoudní řešení sporů</h2>
          <p>V případě sporu, který se nepodaří vyřešit přímou dohodou, má Uživatel právo obrátit se na:</p>
          <ul>
            <li><strong>Českou obchodní inspekci</strong> (www.coi.cz) — pro spotřebitelské spory</li>
            <li><strong>Platformu ODR</strong> (ec.europa.eu/consumers/odr) — online řešení sporů EU</li>
          </ul>

          <h2>7. Kontakt</h2>
          <p>E-mail: reklamace@aiblab.cz · Odpověď do 2 pracovních dnů</p>
        </div>
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px", textAlign: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontSize: "0.85rem" }}>← Zpět na AIBaimy</a>
      </footer>
    </div>
  );
}
