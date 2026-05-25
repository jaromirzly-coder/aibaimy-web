export default function Home() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>

      {/* ── NAVBAR ── */}
      <nav className="nav-blur" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#00e5ff", letterSpacing: "-0.02em" }}>AIBaimy</span>
            <span style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#ffd700", border: "1px solid rgba(255,215,0,0.4)", padding: "2px 8px", textTransform: "uppercase" }}>Beta</span>
          </div>
          <div className="hide-mobile" style={{ display: "flex", gap: 36, alignItems: "center" }}>
            {[["Funkce", "#funkce"], ["Jak to funguje", "#jak"], ["Ceník", "#cenik"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={href} href={href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseOver={undefined}>{label}</a>
            ))}
          </div>
          <a href="#cta" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.75rem" }}>
            14 dní zdarma
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 140, paddingBottom: 100, paddingLeft: 32, paddingRight: 32, maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div>
            <p className="cyan-label" style={{ marginBottom: 16 }}>Rodičovský přehled</p>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Mějte přehled o AI vzdělávání{" "}
              <span style={{ color: "#00e5ff" }}>svého dítěte</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              AIBaimy propojuje rodiče s AI vzdělávacím prostředím jejich dětí.
              Sledujte pokrok, dostávejte bezpečnostní upozornění a komunikujte
              s pedagogem — vše na jednom místě.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <a href="#cta" className="btn-primary">Vyzkoušet zdarma 14 dní</a>
              <a href="#jak" className="btn-outline">Jak to funguje</a>
            </div>
            <div style={{ marginTop: 40, display: "flex", gap: 40, flexWrap: "wrap" }}>
              {[["1 200+", "aktivních rodin"], ["98%", "spokojenost rodičů"], ["24/7", "monitoring"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "1.6rem", fontWeight: 800, color: "#00e5ff" }}>{num}</div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="placeholder-img" style={{ width: "100%", height: 380, borderRadius: 4, border: "1px solid rgba(0,229,255,0.12)" }}>
              Dashboard s přehledem aktivit dítěte<br />a bezpečnostními notifikacemi
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNKCE ── */}
      <section id="funkce" style={{ padding: "80px 32px", background: "rgba(0,229,255,0.02)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="cyan-label" style={{ marginBottom: 12, textAlign: "center" }}>Co získáte</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
            Funkce pro klidné rodiče
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }} className="grid-2">
            {[
              {
                icon: "📊",
                title: "Přehled aktivit dítěte",
                desc: "Vidíte přesně, s jakými AI nástroji dítě pracuje, jak dlouho a v jaké části výuky. Kompletní log aktivit přehledně na jednom místě.",
                color: "#00e5ff",
              },
              {
                icon: "📈",
                title: "Pokrok a statistiky",
                desc: "Grafy vývoje dovedností, porovnání s třídou a doporučení od pedagoga. Exportujte reporty ve formátu PDF pro třídní schůzky.",
                color: "#00e5ff",
              },
              {
                icon: "🔔",
                title: "Bezpečnostní upozornění",
                desc: "AIBguardian middleware v reálném čase analyzuje obsah. Pokud dojde k nestandardní situaci, dostanete okamžité push notifikace na telefon.",
                color: "#ffd700",
              },
              {
                icon: "👩‍🏫",
                title: "Propojení s pedagogem",
                desc: "Přímá komunikace s učitelem skrze zabezpečený chat. Pedagog může přidávat komentáře k pokroku a plánovat individuální konzultace.",
                color: "#ffd700",
              },
            ].map((f) => (
              <div key={f.title} className="glass" style={{ padding: 36, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ fontSize: "2rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: f.color }}>{f.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAK TO FUNGUJE ── */}
      <section id="jak" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="cyan-label" style={{ marginBottom: 12, textAlign: "center" }}>Jednoduché spuštění</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textAlign: "center", marginBottom: 64, letterSpacing: "-0.02em" }}>
            Jak to funguje
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 40 }} className="grid-3">
            {[
              {
                num: "01",
                title: "Registrace rodiče",
                desc: "Vytvořte rodičovský účet pomocí e-mailu. Celý proces trvá méně než 2 minuty. Žádná kreditní karta při registraci.",
                placeholder: "Registrační formulář AIBaimy",
              },
              {
                num: "02",
                title: "Propojení s třídou dítěte",
                desc: "Zadejte přístupový kód třídy, který obdržíte od školy nebo pedagoga. Systém automaticky propojí váš účet s profilem dítěte.",
                placeholder: "Párování s třídou pomocí QR kódu",
              },
              {
                num: "03",
                title: "Sledování v reálném čase",
                desc: "Okamžitý přístup k dashboardu. Notifikace přichází do aplikace nebo e-mailem, vždy kdy se děje něco důležitého.",
                placeholder: "Live dashboard s notifikacemi",
              },
            ].map((step, i) => (
              <div key={step.num} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="placeholder-img" style={{ height: 200, border: "1px solid rgba(0,229,255,0.1)" }}>
                  {step.placeholder}
                </div>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 44, height: 44, border: "2px solid #00e5ff", color: "#00e5ff", fontWeight: 800, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRO KOHO ── */}
      <section style={{ padding: "80px 32px", background: "rgba(255,215,0,0.02)", borderTop: "1px solid rgba(255,215,0,0.08)", borderBottom: "1px solid rgba(255,215,0,0.08)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
          <div>
            <p className="cyan-label" style={{ marginBottom: 12, color: "#ffd700", opacity: 0.8 }}>Cílová skupina</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, marginBottom: 24, letterSpacing: "-0.02em" }}>
              Pro koho je AIBaimy?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 28 }}>
              AIBaimy je primárně určeno <strong style={{ color: "#ffd700" }}>rodičům dětí v AIBgin školách</strong> —
              vzdělávacích institucích, které využívají AI asistenty AIBgin Platform
              jako součást výuky.
            </p>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 32 }}>
              Pokud vaše škola ještě AIBgin nevyužívá, kontaktujte nás —
              pomůžeme s onboardingem celé instituce.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Rodiče dětí ve věku 8–18 let",
                "Školy a vzdělávací instituce",
                "Pedagogové hledající nástroj pro spolupráci s rodiči",
                "Domácí vzdělávání (homeschooling)",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 6, height: 6, background: "#00e5ff", borderRadius: "50%", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="placeholder-img" style={{ height: 340, border: "1px solid rgba(255,215,0,0.12)" }}>
            Rodič sledující pokrok dítěte<br />na tabletu nebo mobilu
          </div>
        </div>
      </section>

      {/* ── EKOSYSTÉM ── */}
      <section style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="cyan-label" style={{ marginBottom: 12, textAlign: "center" }}>Ekosystém AIBlab</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textAlign: "center", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Propojení s ostatními produkty
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: 48, maxWidth: 560, margin: "0 auto 48px" }}>
            AIBaimy je součástí širšího ekosystému bezpečného AI vzdělávání divize AIBlab.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="grid-4">
            {[
              {
                name: "AIBguardian",
                url: "https://www.aibguardian.cz",
                label: "aibguardian.cz",
                desc: "Bezpečnostní middleware pro AI agenty. Patents Pending.",
                color: "#00e5ff",
              },
              {
                name: "AIBgin Platform",
                url: "https://app.aibgin.com",
                label: "app.aibgin.com",
                desc: "White-label AI chatbot platforma pro vzdělávání.",
                color: "#00e5ff",
              },
              {
                name: "AIBlab",
                url: "https://aiblab.cz",
                label: "aiblab.cz",
                desc: "AI výzkumná a vývojová divize SAY TO PAY s.r.o.",
                color: "#ffd700",
              },
              {
                name: "AIBSN Registr",
                url: "https://aibsn.org",
                label: "aibsn.org",
                desc: "Globální identitní síť pro AI agenty.",
                color: "#ffd700",
              },
            ].map((p) => (
              <div key={p.name} className="ecosystem-card">
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: p.color, marginBottom: 10, textTransform: "uppercase", opacity: 0.7 }}>
                  {p.label}
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#fff" }}>{p.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6, marginBottom: 20 }}>{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.15em", color: p.color, border: `1px solid ${p.color}40`, padding: "7px 16px", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}>
                  Navštívit →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENÍK ── */}
      <section id="cenik" style={{ padding: "80px 32px", background: "rgba(0,229,255,0.02)" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p className="cyan-label" style={{ marginBottom: 12, textAlign: "center" }}>Ceník</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
            Jednoduchá cena, žádné překvapení
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }} className="grid-2">
            {/* Free trial */}
            <div className="glass" style={{ padding: 40 }}>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#00e5ff", marginBottom: 16, textTransform: "uppercase" }}>Zkušební období</div>
              <div style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>Zdarma</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", marginTop: 8, marginBottom: 28 }}>14 dní bez kreditní karty</div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.65)", marginBottom: 28, lineHeight: 1.7 }}>
                Plný přístup ke všem funkcím. Žádné omezení. Po 14 dnech se rozhodnete sami.
              </div>
              <a href="#cta" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Začít zdarma</a>
            </div>
            {/* Paid */}
            <div className="glass-gold" style={{ padding: 40, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, right: 24, background: "#ffd700", color: "#0a0e1a", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.15em", padding: "4px 12px", textTransform: "uppercase" }}>
                Nejoblíbenější
              </div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#ffd700", marginBottom: 16, textTransform: "uppercase" }}>Rodičovský plán</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontSize: "3rem", fontWeight: 800, color: "#fff", lineHeight: 1 }}>299</span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>Kč / měs.</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.5)", marginTop: 8, marginBottom: 28 }}>Po ukončení zkušební doby</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {[
                  "Neomezený přístup k přehledům",
                  "Bezpečnostní notifikace (push + e-mail)",
                  "Export reportů do PDF",
                  "Propojení více dětí",
                  "Přímý chat s pedagogem",
                  "Prioritní zákaznická podpora",
                ].map((feat) => (
                  <div key={feat} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 18, height: 18, background: "rgba(255,215,0,0.15)", border: "1px solid #ffd700", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.65rem", color: "#ffd700" }}>✓</div>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>{feat}</span>
                  </div>
                ))}
              </div>
              <a href="#cta" className="btn-primary" style={{ width: "100%", textAlign: "center", background: "#ffd700", color: "#0a0e1a" }}>Vyzkoušet zdarma</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "80px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="cyan-label" style={{ marginBottom: 12, textAlign: "center" }}>Časté dotazy</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            FAQ pro rodiče
          </h2>
          <div>
            {[
              {
                q: "Musí moje dítě vědět, že ho sleduji?",
                a: "Doporučujeme otevřenou komunikaci. AIBaimy není špehovací nástroj — jde o vzdělávací přehled. Vaše dítě vidí svůj vlastní profil a pokrok, rodič vidí souhrnný dashboard. Transparentnost je základem zdravého vztahu k technologiím.",
              },
              {
                q: "Jsou data mého dítěte v bezpečí?",
                a: "Veškerá data jsou šifrována (AES-256) a ukládána v EU (Supabase eu-central-1). Neprodáváme data třetím stranám. AIBguardian middleware v reálném čase filtruje veškerý obsah podle GDPR.",
              },
              {
                q: "Co se stane po 14 dnech zkušební doby?",
                a: "Účet zůstane aktivní, ale přístup k pokročilým funkcím (notifikace, export, chat s pedagogem) bude omezen. Kreditní karta není při registraci vyžadována — platbu nastavíte jen pokud se rozhodnete pokračovat.",
              },
              {
                q: "Funguje AIBaimy i pro homeschooling?",
                a: "Ano. Rodič v roli pedagoga může vytvořit vlastní třídu a propojit ji s dítětem. Plná funkcionalita je dostupná i bez institucionálního zázemí.",
              },
              {
                q: "Jak rychle dostanu upozornění při bezpečnostní události?",
                a: "Bezpečnostní notifikace od AIBguardianu přichází v reálném čase — typicky do 3 sekund od detekce nestandardního chování. Push notifikace fungují na iOS i Android.",
              },
            ].map((faq) => (
              <div key={faq.q} className="faq-item">
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10, color: "#fff" }}>{faq.q}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: "80px 32px", background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(255,215,0,0.03) 100%)", borderTop: "1px solid rgba(0,229,255,0.1)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <p className="cyan-label" style={{ marginBottom: 16 }}>Začněte dnes</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Vyzkoušejte AIBaimy{" "}
            <span style={{ color: "#00e5ff" }}>14 dní zdarma</span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 500, margin: "0 auto 36px" }}>
            Žádná kreditní karta. Žádné závazky. Plný přístup ke všem funkcím
            hned po registraci.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="mailto:info@aiblab.cz" className="btn-primary" style={{ fontSize: "0.9rem", padding: "16px 48px" }}>
              Vyzkoušet zdarma 14 dní
            </a>
            <a href="mailto:info@aiblab.cz" className="btn-outline">
              Kontaktovat obchod
            </a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", marginTop: 20 }}>
            Nebo napište přímo na{" "}
            <a href="mailto:info@aiblab.cz" style={{ color: "#00e5ff", textDecoration: "none" }}>info@aiblab.cz</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "40px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050810" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div>
            <span style={{ fontSize: "1.1rem", fontWeight: 800, color: "#00e5ff" }}>AIBaimy</span>
            <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)", marginLeft: 12 }}>
              Produkt divize AIBlab · SAY TO PAY s.r.o.
            </span>
          </div>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a href="https://aiblab.cz" target="_blank" rel="noopener noreferrer" className="footer-link">AIBlab</a>
            <a href="https://www.aibguardian.cz" target="_blank" rel="noopener noreferrer" className="footer-link">AIBguardian</a>
            <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer" className="footer-link">AIBSN</a>
            <a href="mailto:info@aiblab.cz" className="footer-link">Kontakt</a>
          </div>
          <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.25)" }}>
            © 2026 SAY TO PAY s.r.o. · Patents Pending
          </div>
        </div>
      </footer>

    </div>
  );
}
