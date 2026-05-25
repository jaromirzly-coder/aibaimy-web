export const metadata = {
  title: "Odstoupení od smlouvy — AIBaimy",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://aibaimy.cloud/odstoupeni" },
};

export default function Odstoupeni() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>
      <nav style={{ background: "rgba(10,14,26,0.95)", borderBottom: "1px solid rgba(0,229,255,0.1)", padding: "0 28px", height: 60, display: "flex", alignItems: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontWeight: 800, fontSize: "1rem", display: "flex", alignItems: "center", gap: 8 }}>
          🛡️ AIBaimy <span style={{ color: "rgba(255,255,255,0.3)", fontWeight: 400, marginLeft: 8 }}>/ Odstoupení od smlouvy</span>
        </a>
      </nav>
      <main style={{ maxWidth: 800, margin: "0 auto", padding: "56px 28px" }}>
        <div className="legal-content">
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 8 }}>Odstoupení od smlouvy</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", marginBottom: 40 }}>Platné od 1. 6. 2026 · dle § 1829 NOZ a směrnice EU 2011/83/EU · SAY TO PAY s.r.o.</p>

          <h2>1. Právo na odstoupení</h2>
          <p>Jako spotřebitel máte právo odstoupit od smlouvy uzavřené na dálku bez udání důvodu do <strong>14 kalendářních dnů</strong> ode dne uzavření smlouvy (registrace a aktivace předplatného).</p>
          <p><strong>Upozornění:</strong> Pokud jste výslovně souhlasili s tím, aby byla služba poskytnuta ještě před uplynutím 14denní lhůty pro odstoupení, a služba byla plně poskytnuta, ztrácíte právo na odstoupení od smlouvy dle § 1837 písm. l) NOZ. Bezplatné zkušební období (14 dní zdarma) toto právo neomezuje — v průběhu zkušebního období plná lhůta pro odstoupení běží.</p>

          <h2>2. Jak odstoupit</h2>
          <p>Odstoupení můžete provést:</p>
          <ul>
            <li><strong>E-mailem</strong> na adrese odstoupeni@aiblab.cz s předmětem „Odstoupení od smlouvy AIBaimy"</li>
            <li><strong>Písemně</strong> na adresu sídla SAY TO PAY s.r.o.</li>
            <li><strong>Prostřednictvím vzorového formuláře</strong> níže</li>
          </ul>

          <h2>3. Vzorový formulář pro odstoupení</h2>
          <div style={{ background: "#111827", borderRadius: 12, padding: "20px 24px", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 12 }}>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>
              Komu: SAY TO PAY s.r.o., odstoupeni@aiblab.cz<br /><br />
              Oznamuji, že tímto odstupuji od smlouvy o poskytování digitální služby AIBaimy.<br /><br />
              Datum registrace / uzavření smlouvy: [doplňte]<br />
              E-mail registrovaného účtu: [doplňte]<br />
              Jméno a příjmení: [doplňte]<br /><br />
              Datum: [doplňte]<br />
              Podpis (pouze pro listovní zásilku):
            </p>
          </div>

          <h2>4. Lhůta pro vrácení platby</h2>
          <p>Pokud jste v průběhu 14denní lhůty uhradili jakoukoliv platbu a právo na odstoupení nevyprší dle odst. 1, vrátíme vám příslušnou částku do <strong>14 dnů</strong> od doručení oznámení o odstoupení, stejným způsobem, jakým byla platba přijata.</p>

          <h2>5. Zrušení předplatného po 14 dnech</h2>
          <p>Po uplynutí zákonné lhůty pro odstoupení můžete předplatné kdykoliv zrušit v nastavení účtu nebo e-mailem. Zrušení je účinné k poslednímu dni aktuálního fakturačního období — za zbývající část tohoto období se vrácení neplatí.</p>

          <h2>6. Kontakt</h2>
          <p>E-mail: odstoupeni@aiblab.cz · Odpovíme do 2 pracovních dnů</p>
        </div>
      </main>
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "24px 28px", textAlign: "center" }}>
        <a href="/" style={{ color: "#00e5ff", textDecoration: "none", fontSize: "0.85rem" }}>← Zpět na AIBaimy</a>
      </footer>
    </div>
  );
}
