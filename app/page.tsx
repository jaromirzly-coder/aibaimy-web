/* ── Data ───────────────────────────────────────────────── */

const LAYERS = [
  {
    num: "01",
    icon: "🔐",
    title: "AIBSN Identita",
    subtitle: "Žádný neznámý AI nemůže komunikovat s vaším dítětem",
    desc: "Každý AI agent musí mít ověřenou AIBSN identitu registrovanou v globální síti aibsn.org. Neregistrovaný nebo falešný AI agent je okamžitě zablokován ještě před navázáním kontaktu.",
    color: "#00e5ff",
    border: "rgba(0,229,255,0.25)",
    bg: "rgba(0,229,255,0.06)",
  },
  {
    num: "02",
    icon: "🛡️",
    title: "Guardian Middleware",
    subtitle: "Fail-closed: pokud audit selže, odpověď je zablokována",
    desc: "Každá odpověď AI prochází dvojí real-time kontrolou pomocí AIBguardian middleware. Fail-closed architektura zajišťuje, že při jakékoliv chybě nebo pochybnosti je obsah zablokován — nikdy nezveřejněn.",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.25)",
    bg: "rgba(167,139,250,0.06)",
  },
  {
    num: "03",
    icon: "🔍",
    title: "Behavioral Analysis",
    subtitle: "Detekce vzorců nevhodného chování v reálném čase",
    desc: "Systém kontinuálně analyzuje vzorce celé konverzace, nejen jednotlivých zpráv. Při detekci potenciálně nevhodného vzorce je session okamžitě přerušena a rodič obdrží notifikaci.",
    color: "#34d399",
    border: "rgba(52,211,153,0.25)",
    bg: "rgba(52,211,153,0.06)",
  },
  {
    num: "04",
    icon: "🆘",
    title: "Krizová Detekce · 116 111",
    subtitle: "Automatické napojení na Linku bezpečí",
    desc: "Pokud systém detekuje krizová klíčová slova (sebepoškozování, šikana, krize), rodič je okamžitě informován push notifikací a systém iniciuje kontakt s Linkou bezpečí 116 111 — certifikovanou krizovou linkou pro děti v ČR.",
    color: "#f87171",
    border: "rgba(248,113,113,0.3)",
    bg: "rgba(248,113,113,0.06)",
  },
  {
    num: "05",
    icon: "🔒",
    title: "Data Shield · AES-256",
    subtitle: "Nulová digitální stopa — data dítěte nikdy neopustí EU",
    desc: "Veškerá data jsou šifrována AES-256 per-tenant klíčem a uložena výhradně v EU (Frankfurt). Dítě nemá vlastní účet — přistupuje přes QR kód. Po ukončení lekce nezůstává žádná identifikovatelná digitální stopa.",
    color: "#ffd700",
    border: "rgba(255,215,0,0.25)",
    bg: "rgba(255,215,0,0.06)",
  },
];

const FEATURES = [
  {
    emoji: "📊",
    title: "Real-time Dashboard",
    desc: "Živý přehled aktivit dítěte — jakou lekci řeší, jak dlouho, jaké odpovědi AI poskytlo. Vše přehledně bez IT znalostí.",
    color: "#00e5ff",
    cls: "card-cyan",
    bg: "rgba(0,229,255,0.1)",
  },
  {
    emoji: "🔔",
    title: "Bezpečnostní notifikace",
    desc: "Push notifikace do 3 sekund při jakékoliv anomálii. E-mail záloha. Denní bezpečnostní souhrn ráno v 7:00.",
    color: "#a78bfa",
    cls: "card-purple",
    bg: "rgba(167,139,250,0.1)",
  },
  {
    emoji: "📈",
    title: "Pokrok a statistiky",
    desc: "Barevné grafy dovedností, hvězdičky za milníky, doporučení pedagoga. Export reportu PDF na třídní schůzku.",
    color: "#34d399",
    cls: "card-green",
    bg: "rgba(52,211,153,0.1)",
  },
  {
    emoji: "👩‍🏫",
    title: "Chat s pedagogem",
    desc: "Šifrovaná přímá komunikace s učitelem. Komentáře k pokroku a plánování konzultací bez sdílení dat třetím stranám.",
    color: "#ffd700",
    cls: "card-gold",
    bg: "rgba(255,215,0,0.1)",
  },
];

const STEPS = [
  {
    num: "01",
    emoji: "✉️",
    title: "Registrace rodiče",
    desc: "Vytvořte rodičovský účet e-mailem za 2 minuty. Bez kreditní karty. Plný přístup ke všem funkcím ihned.",
    color: "#00e5ff",
    bg: "rgba(0,229,255,0.12)",
    placeholder: "Registrační formulář — pouze pro rodiče",
  },
  {
    num: "02",
    emoji: "📱",
    title: "QR kód pro dítě",
    desc: "Systém vygeneruje unikátní QR kód. Dítě ho naskenuje a okamžitě přistupuje k AIBgin platformě — bez vlastní registrace, bez e-mailu, bez hesla.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.12)",
    placeholder: "Vygenerování QR kódu — žádná registrace dítěte",
  },
  {
    num: "03",
    emoji: "🛡️",
    title: "Ochrana běží automaticky",
    desc: "Všech 5 vrstev AIBguard je aktivních od prvního dotazu. Dashboard rodiče se naplní daty v reálném čase. Jste v obraze.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.12)",
    placeholder: "Live dashboard — real-time data a notifikace",
  },
];

const COMPLIANCE = [
  {
    icon: "🇪🇺",
    title: "EU AI Act Ready by Design",
    desc: "AIBaimy bylo navrženo od základu v souladu s nařízením EU 2024/1689. AI systémy ve vzdělávání jsou klasifikovány jako HIGH-RISK — AIBaimy splňuje všechny technické požadavky: risk assessment, data governance, transparentnost, lidský dohled.",
    color: "#00e5ff",
    border: "rgba(0,229,255,0.2)",
  },
  {
    icon: "🔐",
    title: "GDPR čl. 8 — Ochrana dětí",
    desc: "Souhlas zákonného zástupce je podmínkou zpracování dat dítěte. Data jsou pseudonymizována a nikdy nepoužita pro profilování ani reklamu. Dítě nemá vlastní účet — žádná data dítěte nejsou shromažďována bez vědomí rodiče.",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
  },
  {
    icon: "🏆",
    title: "Jediné řešení v ČR s technickou garancí",
    desc: "Kombinace fail-closed architektury, AIBSN identity vrstvy, krizové detekce 116 111 a AES-256 šifrování v EU tvoří unikátní technologický stack. Žádné jiné vzdělávací AI řešení na českém trhu nenabízí ekvivalentní technickou ochranu.",
    color: "#ffd700",
    border: "rgba(255,215,0,0.2)",
  },
];

const FAQ = [
  {
    q: "Co se stane, když AI napíše nevhodný obsah?",
    a: "Díky fail-closed architektuře AIBguard: pokud jakákoliv ze 5 vrstev detekuje problém nebo selže kontrola, odpověď je okamžitě zablokována — NIKDY nezveřejněna. Rodič obdrží push notifikaci do 3 sekund. Session může být automaticky ukončena.",
  },
  {
    q: "Jak přesně funguje napojení na Linku bezpečí 116 111?",
    a: "4. vrstva ochrany (Krizová Detekce) kontinuálně analyzuje obsah konverzace. Při detekci definovaných krizových vzorců (sebepoškozování, násilí, šikana) je rodič okamžitě notifikován a systém automaticky zahájí protokol pro kontakt s Linkou bezpečí 116 111. Celý proces je zdokumentován v auditním logu.",
  },
  {
    q: "Může dítě obejít bezpečnostní vrstvy nebo si vytvořit vlastní účet?",
    a: "Ne. Dítě přistupuje výhradně přes QR kód vygenerovaný rodičem — bez vlastního účtu, e-mailu ani hesla. QR kód může rodič kdykoliv zrušit nebo obnovit. Bez platného QR kódu propojeného s aktivním rodičovským účtem nelze AIBgin platformu vůbec spustit.",
  },
  {
    q: "Kde fyzicky jsou data mého dítěte uložena?",
    a: "Výhradně v EU — v datovém centru Supabase v Frankfurtu (eu-central-1). Data nikdy neopustí EU. Jsou šifrována AES-256 per-tenant klíčem. Po ukončení lekce nezůstává na zařízení dítěte žádný identifikátor — nulová digitální stopa.",
  },
  {
    q: "Co přesně znamená „nulová digitální stopa dítěte"?",
    a: "Dítě nemá účet — nemá e-mail, jméno ani heslo v systému. Jeho identita je reprezentována pouze pseudonymním tokenem vázaným na rodičovský účet. Tento token nelze použít k identifikaci dítěte bez přístupu k rodičovskému účtu. Po smazání rodičovského účtu jsou veškerá data dítěte trvale anonymizována do 30 dní.",
  },
];

const LEGAL_LINKS = [
  ["Obchodní podmínky", "/vop"],
  ["Ochrana osobních údajů", "/gdpr"],
  ["Reklamační řád", "/reklamace"],
  ["Odstoupení od smlouvy", "/odstoupeni"],
  ["Cookie Policy", "/cookies"],
];

/* ── Component ──────────────────────────────────────────── */

export default function Home() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>

      {/* ── NAVBAR ── */}
      <nav className="nav-blur" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.6rem" }}>🛡️</span>
            <span style={{ fontSize: "1.45rem", fontWeight: 900, color: "#00e5ff", letterSpacing: "-0.02em" }}>AIBaimy</span>
            <span className="tag-pill hide-mob" style={{ background: "rgba(52,211,153,0.12)", color: "#34d399", border: "1px solid rgba(52,211,153,0.3)", marginLeft: 6, fontSize: "0.65rem" }}>
              EU AI Act Ready
            </span>
          </div>
          <div className="hide-mob" style={{ display: "flex", gap: 30, alignItems: "center" }}>
            {[["Ochrana", "#ochrana"], ["Funkce", "#funkce"], ["Ceník", "#cenik"], ["FAQ", "#faq"]].map(([l, h]) => (
              <a key={h} href={h} style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.88rem", fontWeight: 600, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
          <a href="#cta" className="btn-primary" style={{ padding: "10px 26px", fontSize: "0.78rem" }}>14 dní zdarma</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 136, paddingBottom: 72, padding: "136px 28px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
          {/* Left */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: 50, padding: "6px 16px", marginBottom: 22 }}>
              <span style={{ fontSize: "0.75rem" }}>🆘</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#f87171", letterSpacing: "0.1em", textTransform: "uppercase" }}>Krizová detekce · Linka bezpečí 116 111</span>
            </div>
            <h1 style={{ fontSize: "clamp(1.9rem, 3.8vw, 3.1rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: 22, letterSpacing: "-0.03em" }}>
              <span style={{ color: "rgba(255,255,255,0.92)" }}>5 vrstev ochrany.</span><br />
              <span style={{ background: "linear-gradient(135deg, #00e5ff 0%, #a78bfa 60%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Klid, který rodiče zaslouží.
              </span>
            </h1>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: 32, maxWidth: 500 }}>
              AIBaimy je rodičovský přehled pro AI vzdělávání dětí{" "}
              <strong style={{ color: "#fff" }}>7–11 let</strong> na platformě AIBgin.
              Fail-closed architektura, AES-256 šifrování v EU, krizová detekce
              a <strong style={{ color: "#fff" }}>nulová digitální stopa dítěte</strong>.
              QR přístup — dítě nepotřebuje účet.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="#cta" className="btn-primary">Vyzkoušet zdarma 14 dní</a>
              <a href="#ochrana" className="btn-outline">5 vrstev ochrany →</a>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
              {[
                { val: "5", label: "vrstev ochrany\nAIBguard", color: "#00e5ff" },
                { val: "0", label: "registrací\npro dítě", color: "#34d399" },
                { val: "116 111", label: "crisis\ndetection", color: "#f87171" },
                { val: "AES-256", label: "šifrování\ndat v EU", color: "#ffd700" },
              ].map((s) => (
                <div key={s.val} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 12px", textAlign: "center" }}>
                  <div style={{ fontSize: s.val.length > 3 ? "0.95rem" : "1.5rem", fontWeight: 900, color: s.color, lineHeight: 1.1, marginBottom: 5 }}>{s.val}</div>
                  <div style={{ fontSize: "0.67rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.4, whiteSpace: "pre-line" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="float-anim">
            <div className="placeholder-img pulse-glow" style={{ height: 400, border: "2px solid rgba(0,229,255,0.18)", borderRadius: 20 }}>
              Dashboard AIBaimy — live přehled aktivit dítěte,<br />
              bezpečnostní notifikace, 5 vrstev status
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 VRSTEV OCHRANY ── */}
      <section id="ochrana" style={{ padding: "72px 28px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>AIBguard · Fail-Closed Architecture</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.5rem)", fontWeight: 900, textAlign: "center", marginBottom: 10, letterSpacing: "-0.02em" }}>
            5 vrstev ochrany vašeho dítěte 🛡️
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: 580, margin: "0 auto 52px" }}>
            Každá vrstva funguje nezávisle. Pokud jakákoliv selže nebo detekuje problém —
            obsah je <strong style={{ color: "#f87171" }}>zablokován</strong>, nikdy nezveřejněn.
            To je fail-closed architektura.
          </p>

          {/* Grid 2+3 nebo 5 karet */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginBottom: 20 }} className="grid-3">
            {LAYERS.slice(0, 3).map((l) => (
              <div key={l.num} className="card-base" style={{ borderColor: l.border, background: l.bg }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${l.color}18`, border: `1px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{l.icon}</div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 900, letterSpacing: "0.2em", color: l.color, opacity: 0.7, textTransform: "uppercase" }}>Vrstva {l.num}</div>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: l.color, marginBottom: 6 }}>{l.title}</h3>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.4, fontStyle: "italic" }}>{l.subtitle}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{l.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="grid-2">
            {LAYERS.slice(3).map((l) => (
              <div key={l.num} className="card-base" style={{ borderColor: l.border, background: l.bg }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${l.color}18`, border: `1px solid ${l.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{l.icon}</div>
                  <div style={{ fontSize: "0.62rem", fontWeight: 900, letterSpacing: "0.2em", color: l.color, opacity: 0.7, textTransform: "uppercase" }}>Vrstva {l.num}</div>
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 800, color: l.color, marginBottom: 6 }}>{l.title}</h3>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.4, fontStyle: "italic" }}>{l.subtitle}</p>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{l.desc}</p>
              </div>
            ))}
          </div>

          {/* Fail-closed callout */}
          <div style={{ marginTop: 28, background: "rgba(248,113,113,0.06)", border: "1px solid rgba(248,113,113,0.2)", borderRadius: 16, padding: "20px 28px", display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>⚡</span>
            <div>
              <strong style={{ color: "#f87171", fontSize: "0.9rem" }}>Fail-Closed = Bezpečnost je výchozí stav</strong>
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: "6px 0 0" }}>
                Tradiční systémy fungují „fail-open" — při chybě propustí obsah. AIBguard je navržen obráceně:
                pokud auditor selže, odpověď je <strong style={{ color: "#f87171" }}>vždy zablokována</strong>.
                Vaše dítě nikdy nevidí obsah, jehož bezpečnost nebyla stoprocentně ověřena.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FUNKCE PRO RODIČE ── */}
      <section id="funkce" style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>Nástroje pro rodiče</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            Funkce které rodiče skutečně potřebují 📊
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="grid-2">
            {FEATURES.map((f) => (
              <div key={f.title} className={`card-base ${f.cls}`}>
                <div className="emoji-box" style={{ background: f.bg }}>{f.emoji}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: f.color, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JAK TO FUNGUJE ── */}
      <section style={{ padding: "72px 28px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>Spuštění za 5 minut</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
            Jak to funguje? 🚀
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="grid-3">
            {STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
                <div className="placeholder-img" style={{ height: 200, borderRadius: 16, border: `1px solid ${s.color}20` }}>
                  {s.placeholder}
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div className="step-bubble" style={{ background: s.bg, color: s.color, border: `2px solid ${s.color}` }}>
                    {s.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 8, color: s.color }}>
                      {s.emoji} {s.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EU AI ACT + GDPR ── */}
      <section style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 20, flexWrap: "wrap" }}>
            {[
              { label: "EU AI Act 2024/1689", color: "#00e5ff" },
              { label: "GDPR čl. 8 · Ochrana dětí", color: "#a78bfa" },
              { label: "High-Risk AI Compliant", color: "#34d399" },
              { label: "Patents Pending", color: "#ffd700" },
            ].map((b) => (
              <span key={b.label} className="tag-pill" style={{ background: `${b.color}10`, color: b.color, border: `1px solid ${b.color}30`, fontSize: "0.68rem" }}>
                ✓ {b.label}
              </span>
            ))}
          </div>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>Technická garance</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-0.02em" }}>
            Jediné řešení v ČR<br />
            <span style={{ background: "linear-gradient(135deg, #00e5ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              s technickou garancí bezpečnosti
            </span>
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.42)", textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
            Nestačí říct „jsme bezpeční". AIBaimy jako první v ČR nabízí technicky vynucenou bezpečnost —
            nikoliv smluvní slib.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 36 }} className="grid-3">
            {COMPLIANCE.map((c) => (
              <div key={c.title} className="card-base" style={{ borderColor: c.border }}>
                <div style={{ fontSize: "2.4rem", marginBottom: 14 }}>{c.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: c.color, marginBottom: 12 }}>{c.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(0,229,255,0.04)", border: "1px solid rgba(0,229,255,0.15)", borderRadius: 16, padding: "24px 32px", maxWidth: 820, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, textAlign: "center" }} className="grid-3">
            {[
              { icon: "🚫", label: "Žádné profilování dítěte" },
              { icon: "🌍", label: "Data pouze v EU" },
              { icon: "👁️", label: "Transparentní AI rozhodování" },
            ].map((i) => (
              <div key={i.label}>
                <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{i.icon}</div>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>{i.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENÍK ── */}
      <section id="cenik" style={{ padding: "72px 28px", background: "rgba(255,255,255,0.015)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>Ceník</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            Jednoduchá cena, úplná ochrana 💰
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="grid-2">
            {/* Free */}
            <div className="price-card" style={{ background: "rgba(0,229,255,0.04)", border: "2px solid rgba(0,229,255,0.2)" }}>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#00e5ff", marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Zkušební období</div>
              <div style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>Zdarma</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", margin: "8px 0 24px" }}>14 dní · bez kreditní karty · bez závazků</div>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, marginBottom: 28 }}>
                Plný přístup ke všem 5 vrstvám ochrany, dashboardu i notifikacím. Po 14 dnech se rozhodujete sami.
              </p>
              <a href="#cta" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Začít zdarma</a>
            </div>
            {/* Paid */}
            <div className="price-card" style={{ background: "rgba(255,215,0,0.04)", border: "2px solid rgba(255,215,0,0.3)", position: "relative" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#ffd700", color: "#0a0e1a", fontSize: "0.62rem", fontWeight: 800, letterSpacing: "0.15em", padding: "4px 18px", borderRadius: 50, whiteSpace: "nowrap", textTransform: "uppercase" }}>
                Nejoblíbenější
              </div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.25em", color: "#ffd700", marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Rodičovský plán</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, lineHeight: 1 }}>299</span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)" }}>Kč / měs.</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", margin: "8px 0 24px" }}>Po uplynutí zkušební doby</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {[
                  "5 vrstev ochrany AIBguard vždy aktivních 🛡️",
                  "Krizová detekce 116 111 aktivní 🆘",
                  "Real-time dashboard a notifikace 📊",
                  "Export reportů PDF 📄",
                  "Propojení více dětí (QR kódy) 👧👦",
                  "Chat s pedagogem 👩‍🏫",
                  "Prioritní podpora 💜",
                ].map((feat) => (
                  <div key={feat} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 18, height: 18, background: "rgba(255,215,0,0.12)", border: "1px solid #ffd700", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.6rem", color: "#ffd700", marginTop: 2 }}>✓</div>
                    <span style={{ fontSize: "0.84rem", color: "rgba(255,255,255,0.72)" }}>{feat}</span>
                  </div>
                ))}
              </div>
              <a href="#cta" className="btn-primary" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #ffd700, #f59e0b)", color: "#0a0e1a" }}>
                Vyzkoušet zdarma
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 10, textAlign: "center" }}>Bezpečnost a soukromí</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            Nejčastější otázky rodičů ❓
          </h2>
          <div>
            {FAQ.map((f) => (
              <details key={f.q} className="faq-details">
                <summary>{f.q}</summary>
                <div className="faq-body">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: "80px 28px", background: "linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(167,139,250,0.05) 50%, rgba(255,215,0,0.03) 100%)", borderTop: "1px solid rgba(0,229,255,0.1)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "3.5rem", marginBottom: 16 }}>🛡️</div>
          <p className="section-label" style={{ marginBottom: 14 }}>Ochrana dítěte začíná teď</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, marginBottom: 18, letterSpacing: "-0.02em" }}>
            Vyzkoušejte AIBaimy{" "}
            <span style={{ background: "linear-gradient(135deg, #00e5ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              14 dní zdarma
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, maxWidth: 500, margin: "0 auto 36px" }}>
            5 vrstev ochrany AIBguard aktivních od první sekundy.
            Žádná kreditní karta. Žádné závazky. Dítě nepotřebuje účet.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
            <a href="mailto:info@aiblab.cz" className="btn-primary" style={{ padding: "16px 48px", fontSize: "0.95rem" }}>
              Vyzkoušet zdarma 14 dní
            </a>
            <a href="mailto:info@aiblab.cz" className="btn-outline">Kontaktovat obchod</a>
          </div>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.28)" }}>
            Nebo napište na{" "}
            <a href="mailto:info@aiblab.cz" style={{ color: "#00e5ff", textDecoration: "none" }}>info@aiblab.cz</a>
            {" "}· Odpovíme do 24 hodin
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 28px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050810" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }} className="grid-4">
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <span style={{ fontSize: "1.3rem" }}>🛡️</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#00e5ff" }}>AIBaimy</span>
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", lineHeight: 1.75, marginBottom: 14 }}>
                Rodičovský přehled bezpečného AI vzdělávání pro děti 7–11 let.
                5 vrstev ochrany AIBguard · Fail-closed architektura · EU AI Act Ready.
              </p>
              <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)" }}>
                Produkt divize AIBlab<br />SAY TO PAY s.r.o.
              </p>
            </div>
            {/* Navigace */}
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#00e5ff", opacity: 0.55, marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Produkt</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["5 vrstev ochrany", "#ochrana"], ["Funkce", "#funkce"], ["Jak to funguje", "#jak"], ["Ceník", "#cenik"], ["FAQ", "#faq"]].map(([l, h]) => (
                  <a key={h} href={h} className="footer-link">{l}</a>
                ))}
              </div>
            </div>
            {/* AIBlab ekosystém */}
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#a78bfa", opacity: 0.55, marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Ekosystém</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="https://www.aibguardian.cz" target="_blank" rel="noopener noreferrer" className="footer-link">aibguardian.cz</a>
                <a href="https://app.aibgin.com" target="_blank" rel="noopener noreferrer" className="footer-link">app.aibgin.com</a>
                <a href="https://aiblab.cz" target="_blank" rel="noopener noreferrer" className="footer-link">aiblab.cz</a>
                <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer" className="footer-link">aibsn.org</a>
              </div>
            </div>
            {/* Právní */}
            <div>
              <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#ffd700", opacity: 0.55, marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Právní</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {LEGAL_LINKS.map(([l, h]) => (
                  <a key={h} href={h} className="footer-link">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: "0.73rem", color: "rgba(255,255,255,0.2)" }}>
              © 2026 SAY TO PAY s.r.o. · Patents Pending · EU AI Act Ready by Design
            </span>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              <span style={{ fontSize: "0.7rem", color: "rgba(248,113,113,0.6)", fontWeight: 700 }}>🆘 Linka bezpečí: 116 111</span>
              <span style={{ fontSize: "0.7rem", color: "rgba(52,211,153,0.5)" }}>🔒 AES-256 · EU Data</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
