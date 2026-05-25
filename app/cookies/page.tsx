export const metadata = {
  title: "Cookie Policy — AIBaimy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aibaimy.cloud/cookies" },
};

export default function Cookies() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>
      <nav style={{ background: "rgba(10,14,26,0.95)", borderBottom: "1px solid rgba(0,229,255,0.1)", padding: "0 28px", height: 60, display: "flex", alignItems: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          🛡️ AIBaimy <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, marginLeft: 8 }}>/ Cookie Policy</span>
        </a>
      </nav>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "56px 28px" }}>
        <div className="legal-content">
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Cookie Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 40 }}>Platná od 1. 6. 2026 · dle zákona č. 127/2005 Sb. a Směrnice 2002/58/ES · SAY TO PAY s.r.o.</p>

          <h2>1. Co jsou cookies</h2>
          <p>Cookies jsou malé textové soubory ukládané do vašeho prohlížeče při návštěvě webových stránek. Pomáhají nám zajistit funkčnost přihlášení, zapamatovat vaše preference a analyzovat využívání služby za účelem jejího zlepšení.</p>

          <h2>2. Jaké cookies používáme</h2>

          <h3>2.1 Nezbytné cookies (vždy aktivní)</h3>
          <p>Tyto cookies jsou nutné pro fungování aplikace. Nelze je vypnout bez ztráty funkcionality.</p>
          <ul>
            <li><strong>session_token</strong> — autentizační token přihlášeného rodiče (expirace: 7 dní)</li>
            <li><strong>csrf_token</strong> — ochrana před CSRF útoky (expirace: relace prohlížeče)</li>
            <li><strong>cookie_consent</strong> — uložení vašich preferencí ohledně cookies (expirace: 12 měsíců)</li>
          </ul>

          <h3>2.2 Analytické cookies (vyžadují souhlas)</h3>
          <p>Pomáhají nám pochopit, jak rodiče aplikaci používají. Všechna data jsou anonymizována a zpracovávána v EU.</p>
          <ul>
            <li><strong>Vercel Analytics</strong> — anonymní metriky návštěvnosti (bez osobních údajů)</li>
          </ul>

          <h3>2.3 Cookies třetích stran</h3>
          <p>Stripe (platební brána) může ukládat vlastní cookies pro zpracování plateb a prevenci podvodů. Tyto cookies se řídí podmínkami Stripe (stripe.com/privacy).</p>
          <p><strong>Důležité:</strong> Nepoužíváme žádné reklamní ani sledovací cookies. Data dětí nejsou nikdy zpracovávána pro analytické ani marketingové účely.</p>

          <h2>3. Jak spravovat cookies</h2>
          <p>Souhlas s analytickými cookies můžete kdykoliv odvolat v nastavení vašeho účtu (Nastavení → Soukromí) nebo přímo v nastavení prohlížeče:</p>
          <ul>
            <li><strong>Chrome:</strong> Nastavení → Zabezpečení a soukromí → Soubory cookie</li>
            <li><strong>Firefox:</strong> Předvolby → Soukromí a zabezpečení</li>
            <li><strong>Safari:</strong> Předvolby → Soukromí</li>
            <li><strong>Edge:</strong> Nastavení → Oprávnění pro web → Soubory cookie</li>
          </ul>
          <p>Vypnutí nezbytných cookies může způsobit, že se nebudete moci přihlásit do aplikace.</p>

          <h2>4. Zvláštní ochrana dětí</h2>
          <p>Přihlašovací session dítěte na platformě AIBgin je spravována výhradně přes rodičovský účet AIBaimy. Přímo na zařízení dítěte nejsou ukládány žádné identifikační cookies mimo standardní session token pro danou phihlašovací relaci.</p>

          <h2>5. Aktualizace</h2>
          <p>Tuto Cookie Policy můžeme aktualizovat. O podstatných změnách vás budeme informovat e-mailem nebo oznámením v aplikaci.</p>

          <h2>6. Kontakt</h2>
          <p>Dotazy ohledně cookies: gdpr@aiblab.cz</p>
        </div>
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px", textAlign: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontSize: "0.85rem" }}>← Zpět na AIBaimy</a>
      </footer>
    </div>
  );
}
