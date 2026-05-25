const NAV_LINKS = [
  ["Funkce", "#funkce"],
  ["Pro koho", "#prokoho"],
  ["Ceník", "#cenik"],
  ["FAQ", "#faq"],
];

const FEATURES = [
  {
    emoji: "📊",
    title: "Přehled aktivit dítěte",
    desc: "Vidíte přesně, s jakými AI lekcemi dítě pracuje, jak dlouho a jak si vede. Přehledný log aktivit přizpůsobený pro rodiče, ne IT odborníky.",
    color: "#00e5ff",
    cls: "card-cyan",
    bg: "rgba(0,229,255,0.1)",
  },
  {
    emoji: "🌟",
    title: "Pokrok a statistiky",
    desc: "Barevné grafy vývoje dovedností, hvězdičky za splněné milníky a doporučení pedagoga. Export reportu do PDF na třídní schůzku.",
    color: "#a78bfa",
    cls: "card-purple",
    bg: "rgba(167,139,250,0.1)",
  },
  {
    emoji: "🛡️",
    title: "Bezpečnostní upozornění",
    desc: "AIBguardian middleware chrání dítě v reálném čase. Při nestandardní situaci přijde push notifikace do 3 sekund — na iOS i Android.",
    color: "#34d399",
    cls: "card-green",
    bg: "rgba(52,211,153,0.1)",
  },
  {
    emoji: "👩‍🏫",
    title: "Chat s pedagogem",
    desc: "Přímá, šifrovaná komunikace s učitelem. Komentáře k pokroku, plánování konzultací a společná nastavení pro bezpečný AI zážitek dítěte.",
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
    desc: "Vytvořte rodičovský účet pomocí e-mailu — za 2 minuty, bez kreditní karty. Plný přístup k demo prostředí okamžitě.",
    color: "#00e5ff",
    bg: "rgba(0,229,255,0.15)",
    placeholder: "Registrační formulář AIBaimy",
  },
  {
    num: "02",
    emoji: "🏫",
    title: "Propojení s třídou",
    desc: "Zadejte kód třídy od školy nebo naskenujte QR kód. Systém automaticky propojí váš účet s profilem dítěte.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.15)",
    placeholder: "QR propojení s třídou dítěte",
  },
  {
    num: "03",
    emoji: "📱",
    title: "Sledování v reálném čase",
    desc: "Okamžitý přístup k dashboardu. Notifikace do telefonu nebo e-mailem kdykoliv, kdy se v aktivitě dítěte děje něco důležitého.",
    color: "#34d399",
    bg: "rgba(52,211,153,0.15)",
    placeholder: "Live dashboard s aktivitami",
  },
];

const AGE_RANGES = [
  {
    range: "7–8 let",
    emoji: "🌱",
    title: "Začátek digitální gramotnosti",
    desc: "Děti v tomto věku začínají chápat kauzalitu a logické vztahy — ideální moment pro první setkání s řízenou AI pomocí.",
    color: "#34d399",
    border: "rgba(52,211,153,0.3)",
  },
  {
    range: "9–10 let",
    emoji: "🚀",
    title: "Rozvoj kritického myšlení",
    desc: "Piagetovo stádium konkrétních operací vrcholí. Děti dokáží evaluovat informace a rozlišovat mezi faktem a výmyslem.",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.3)",
  },
  {
    range: "11 let",
    emoji: "⭐",
    title: "Prah formálních operací",
    desc: "Začátek abstraktního myšlení. Děti jsou připraveny na komplexnější AI interakce, ale stále potřebují rodičovský dohled.",
    color: "#ffd700",
    border: "rgba(255,215,0,0.3)",
  },
];

const ECOSYSTEM = [
  {
    name: "AIBguardian",
    url: "https://www.aibguardian.cz",
    label: "aibguardian.cz",
    desc: "Bezpečnostní middleware pro AI agenty. Chrání každou interakci dítěte v reálném čase.",
    color: "#00e5ff",
  },
  {
    name: "AIBgin Platform",
    url: "https://app.aibgin.com",
    label: "app.aibgin.com",
    desc: "Vzdělávací AI platforma, ze které AIBaimy vychází. Nasazena v AIBgin školách.",
    color: "#a78bfa",
  },
  {
    name: "AIBlab",
    url: "https://aiblab.cz",
    label: "aiblab.cz",
    desc: "AI výzkumná divize SAY TO PAY s.r.o. — rodiče produktů AIBaimy, AIBguardian a AIBSN.",
    color: "#34d399",
  },
  {
    name: "AIBSN Registr",
    url: "https://aibsn.org",
    label: "aibsn.org",
    desc: "Globální identitní síť pro AI agenty. Každý AI asistent v AIBaimy má ověřenou AIBSN identitu.",
    color: "#ffd700",
  },
];

const FAQ = [
  {
    q: "Musí moje dítě vědět, že ho sleduji?",
    a: "Doporučujeme otevřenou komunikaci. AIBaimy není špehovací nástroj — jde o vzdělávací přehled sdílený celou rodinou. Vaše dítě vidí svůj vlastní profil a hvězdičky za pokrok. Transparentnost buduje důvěru.",
  },
  {
    q: "Jsou data mého dítěte chráněna podle GDPR?",
    a: "Ano. Data jsou šifrována (AES-256) a ukládána výhradně v EU (Supabase eu-central-1). Pro zpracování dat dětí mladších 15 let vyžadujeme souhlas zákonného zástupce v souladu s GDPR čl. 8. Neprodáváme data třetím stranám nikdy.",
  },
  {
    q: "Co se stane po 14 dnech zkušební doby?",
    a: "Účet zůstane aktivní, ale pokročilé funkce (push notifikace, export, chat s pedagogem) budou omezeny na přehled. Kreditní karta není při registraci vyžadována — platbu nastavíte jen pokud se rozhodnete pokračovat.",
  },
  {
    q: "Funguje AIBaimy i pro domácí vzdělávání?",
    a: "Ano. Rodič může přijmout roli pedagoga, vytvořit vlastní třídu a propojit ji s dítětem. Plná funkcionalita je dostupná i bez institucionálního zázemí.",
  },
  {
    q: "Je AIBaimy vhodné pro dítě mladší 7 let?",
    a: "Platforma je optimalizována pro věkovou skupinu 7–11 let. Pro mladší děti doporučujeme počkat — kognitivní výzkum ukazuje, že řízená AI interakce je nejbezpečnější a nejefektivnější právě od 7. roku věku.",
  },
];

const LEGAL_LINKS = [
  ["Obchodní podmínky", "/vop"],
  ["Ochrana osobních údajů", "/gdpr"],
  ["Reklamační řád", "/reklamace"],
  ["Odstoupení od smlouvy", "/odstoupeni"],
  ["Cookie Policy", "/cookies"],
];

export default function Home() {
  return (
    <div style={{ background: "#0a0e1a", minHeight: "100vh", color: "#fff" }}>

      {/* ── NAVBAR ── */}
      <nav className="nav-blur" style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 28px", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: "1.8rem" }}>🛡️</span>
            <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "#00e5ff", letterSpacing: "-0.02em" }}>AIBaimy</span>
            <span className="tag-pill" style={{ background: "rgba(167,139,250,0.15)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.35)", marginLeft: 4 }}>Beta</span>
          </div>
          <div className="hide-mob" style={{ display: "flex", gap: 32, alignItems: "center" }}>
            {NAV_LINKS.map(([label, href]) => (
              <a key={href} href={href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <a href="#cta" className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.8rem" }}>14 dní zdarma ✨</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ paddingTop: 140, paddingBottom: 80, padding: "140px 28px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="grid-2">
          <div>
            <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" }}>
              <span className="star-1" style={{ fontSize: "1.4rem" }}>⭐</span>
              <span className="star-2" style={{ fontSize: "1.1rem" }}>💜</span>
              <span className="star-3" style={{ fontSize: "1.4rem" }}>⭐</span>
              <span className="tag-pill" style={{ background: "rgba(0,229,255,0.1)", color: "#00e5ff", border: "1px solid rgba(0,229,255,0.3)", marginLeft: 4 }}>
                Věk 7–11 let · AIBgin platforma
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900, lineHeight: 1.12, marginBottom: 24, letterSpacing: "-0.03em" }}>
              Mějte přehled o AI vzdělávání{" "}
              <span style={{ background: "linear-gradient(135deg, #00e5ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                svého dítěte
              </span>{" "}🧡
            </h1>
            <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 36, maxWidth: 500 }}>
              AIBaimy je rodičovský přehled pro AI vzdělávací platformu{" "}
              <strong style={{ color: "#00e5ff" }}>AIBgin.com</strong>.
              Sledujte pokrok, dostávejte bezpečnostní upozornění a buďte ve spojení
              s pedagogem — vše na jednom místě, přehledně a bezpečně.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <a href="#cta" className="btn-primary">Vyzkoušet zdarma 14 dní 🚀</a>
              <a href="#jak" className="btn-outline">Jak to funguje</a>
            </div>
            <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
              {[["1 200+", "aktivních rodin 💜"], ["98%", "spokojenost rodičů ⭐"], ["24/7", "ochrana dítěte 🛡️"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontSize: "1.7rem", fontWeight: 900, color: "#00e5ff" }}>{num}</div>
                  <div style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", marginTop: 3 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="float-anim">
            <div className="placeholder-img pulse-glow" style={{ height: 380, border: "2px solid rgba(0,229,255,0.2)" }}>
              Dashboard AIBaimy — přehled aktivit dítěte,<br />bezpečnostní notifikace, pokrok v lekcích
            </div>
          </div>
        </div>
      </section>

      {/* ── VĚKOVÉ ROZMEZÍ ── */}
      <section id="prokoho" style={{ padding: "72px 28px", background: "rgba(167,139,250,0.03)", borderTop: "1px solid rgba(167,139,250,0.08)", borderBottom: "1px solid rgba(167,139,250,0.08)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Věkové rozmezí</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 12, letterSpacing: "-0.02em" }}>
            Proč právě 7–11 let? 🎯
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", textAlign: "center", marginBottom: 48, maxWidth: 600, margin: "0 auto 48px" }}>
            AIBaimy a platforma AIBgin jsou navrženy specificky pro tuto vývojovou fázi —
            kdy jsou děti dostatečně zralé pro řizenou AI interakci, ale stále potřebují rodičovský dohled.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 40 }} className="grid-3">
            {AGE_RANGES.map((a) => (
              <div key={a.range} className="card-base" style={{ borderColor: a.border, textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: 12 }}>{a.emoji}</div>
                <div className="tag-pill" style={{ background: `${a.color}15`, color: a.color, border: `1px solid ${a.color}40`, marginBottom: 14 }}>{a.range}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 10, color: a.color }}>{a.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{a.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: 16, padding: "20px 28px", maxWidth: 800, margin: "0 auto", display: "flex", gap: 16, alignItems: "flex-start" }}>
            <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>💡</span>
            <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.75, margin: 0 }}>
              <strong style={{ color: "#34d399" }}>Vědecký základ:</strong> Podle Piagetovy teorie kognitivního vývoje jsou děti ve věku 7–11 let ve stadiu „konkrétních operací" — dokáží logicky uvažovat, ale potřebují strukturované prostředí. AIBgin platforma je navržena tak, aby AI asistenti v tomto prostředí fungovali bezpečně, s jazykovou a obsahovou filtrací přizpůsobenou věku.
            </p>
          </div>
        </div>
      </section>

      {/* ── FUNKCE ── */}
      <section id="funkce" style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Co získáte</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            Funkce pro klidné rodiče 😌
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
      <section id="jak" style={{ padding: "72px 28px", background: "rgba(0,229,255,0.02)", borderTop: "1px solid rgba(0,229,255,0.07)", borderBottom: "1px solid rgba(0,229,255,0.07)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Jednoduché spuštění</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 56, letterSpacing: "-0.02em" }}>
            Jak to funguje? 🤔
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="grid-3">
            {STEPS.map((s) => (
              <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div className="placeholder-img" style={{ height: 200, border: `1px solid ${s.color}25` }}>
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

      {/* ── EKOSYSTÉM ── */}
      <section style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Ekosystém AIBlab</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 16, letterSpacing: "-0.02em" }}>
            Propojení s ostatními produkty 🔗
          </h2>
          <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.45)", textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            AIBaimy je součástí ekosystému bezpečného AI vzdělávání divize AIBlab.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="grid-4">
            {ECOSYSTEM.map((e) => (
              <div key={e.name} className="eco-card">
                <div style={{ fontSize: "0.62rem", letterSpacing: "0.2em", color: e.color, marginBottom: 8, textTransform: "uppercase", opacity: 0.7 }}>{e.label}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, marginBottom: 10 }}>{e.name}</h3>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65, marginBottom: 18 }}>{e.desc}</p>
                <a href={e.url} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.12em", color: e.color, border: `1px solid ${e.color}40`, borderRadius: 50, padding: "6px 16px", textDecoration: "none", display: "inline-block", transition: "all 0.2s" }}>
                  Navštívit →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CENÍK ── */}
      <section id="cenik" style={{ padding: "72px 28px", background: "rgba(255,215,0,0.02)", borderTop: "1px solid rgba(255,215,0,0.07)", borderBottom: "1px solid rgba(255,215,0,0.07)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Ceník</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            Jednoduchá cena, žádné překvapení 💰
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" }} className="grid-2">
            {/* Free */}
            <div className="price-card" style={{ background: "rgba(0,229,255,0.04)", border: "2px solid rgba(0,229,255,0.2)" }}>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", color: "#00e5ff", marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Zkušební období</div>
              <div style={{ fontSize: "3.2rem", fontWeight: 900, lineHeight: 1 }}>Zdarma</div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", margin: "8px 0 24px" }}>14 dní bez kreditní karty ✨</div>
              <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: 28 }}>
                Plný přístup ke všem funkcím. Žádné omezení. Po 14 dnech se rozhodnete sami — bez závazků.
              </p>
              <a href="#cta" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Začít zdarma 🚀</a>
            </div>
            {/* Paid */}
            <div className="price-card" style={{ background: "rgba(255,215,0,0.05)", border: "2px solid rgba(255,215,0,0.35)", position: "relative" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#ffd700", color: "#0a0e1a", fontSize: "0.65rem", fontWeight: 800, letterSpacing: "0.15em", padding: "4px 16px", borderRadius: 50, whiteSpace: "nowrap", textTransform: "uppercase" }}>
                ⭐ Nejoblíbenější
              </div>
              <div style={{ fontSize: "0.68rem", letterSpacing: "0.25em", color: "#ffd700", marginBottom: 14, textTransform: "uppercase", fontWeight: 800 }}>Rodičovský plán</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontSize: "3.2rem", fontWeight: 900, lineHeight: 1 }}>299</span>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)" }}>Kč / měsíc</span>
              </div>
              <div style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.45)", margin: "8px 0 24px" }}>Po ukončení zkušební doby</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 28 }}>
                {[
                  "Neomezený přístup k přehledům 📊",
                  "Bezpečnostní notifikace (push + e-mail) 🔔",
                  "Export reportů do PDF 📄",
                  "Propojení více dětí 👧👦",
                  "Přímý chat s pedagogem 👩‍🏫",
                  "Prioritní zákaznická podpora 💜",
                ].map((feat) => (
                  <div key={feat} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{ width: 20, height: 20, background: "rgba(255,215,0,0.15)", border: "1px solid #ffd700", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.65rem", color: "#ffd700", marginTop: 1 }}>✓</div>
                    <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.72)" }}>{feat}</span>
                  </div>
                ))}
              </div>
              <a href="#cta" className="btn-primary" style={{ display: "block", textAlign: "center", background: "linear-gradient(135deg, #ffd700, #f59e0b)", color: "#0a0e1a" }}>
                Vyzkoušet zdarma ✨
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "72px 28px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <p className="section-label" style={{ marginBottom: 12, textAlign: "center" }}>Časté dotazy</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 900, textAlign: "center", marginBottom: 48, letterSpacing: "-0.02em" }}>
            FAQ pro rodiče ❓
          </h2>
          <div>
            {FAQ.map((faq) => (
              <details key={faq.q} className="faq-details">
                <summary>{faq.q}</summary>
                <div className="faq-body">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cta" style={{ padding: "80px 28px", background: "linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(167,139,250,0.06) 50%, rgba(255,215,0,0.04) 100%)", borderTop: "1px solid rgba(0,229,255,0.1)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "3rem", marginBottom: 16 }}>🛡️</div>
          <p className="section-label" style={{ marginBottom: 14 }}>Začněte chránit pokrok svého dítěte</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, marginBottom: 20, letterSpacing: "-0.02em" }}>
            Vyzkoušejte AIBaimy{" "}
            <span style={{ background: "linear-gradient(135deg, #00e5ff, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              14 dní zdarma
            </span>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, maxWidth: 480, margin: "0 auto 36px" }}>
            Žádná kreditní karta. Žádné závazky. Plný přístup ke všem funkcím hned po registraci.
            Pokud nejste spokojeni, účet vymažeme bez otázek.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 20 }}>
            <a href="mailto:info@aiblab.cz" className="btn-primary" style={{ padding: "16px 48px", fontSize: "0.95rem" }}>
              Vyzkoušet zdarma 14 dní 🚀
            </a>
            <a href="mailto:info@aiblab.cz" className="btn-outline">Kontaktovat obchod</a>
          </div>
          <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.28)" }}>
            Nebo napište na{" "}
            <a href="mailto:info@aiblab.cz" style={{ color: "#00e5ff", textDecoration: "none" }}>info@aiblab.cz</a>
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ padding: "48px 28px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#050810" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }} className="grid-4">
            {/* Brand */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span style={{ fontSize: "1.4rem" }}>🛡️</span>
                <span style={{ fontSize: "1.2rem", fontWeight: 900, color: "#00e5ff" }}>AIBaimy</span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>
                Rodičovský přehled pro AI vzdělávání dětí 7–11 let. Produkt divize AIBlab · SAY TO PAY s.r.o.
              </p>
            </div>
            {/* Produkt */}
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#00e5ff", opacity: 0.6, marginBottom: 16, textTransform: "uppercase", fontWeight: 800 }}>Produkt</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[["Funkce", "#funkce"], ["Jak to funguje", "#jak"], ["Ceník", "#cenik"], ["FAQ", "#faq"]].map(([l, h]) => (
                  <a key={h} href={h} className="footer-link">{l}</a>
                ))}
              </div>
            </div>
            {/* AIBlab ekosystém */}
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#a78bfa", opacity: 0.6, marginBottom: 16, textTransform: "uppercase", fontWeight: 800 }}>Ekosystém</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a href="https://aibguardian.cz" target="_blank" rel="noopener noreferrer" className="footer-link">AIBguardian.cz</a>
                <a href="https://app.aibgin.com" target="_blank" rel="noopener noreferrer" className="footer-link">AIBgin Platform</a>
                <a href="https://aiblab.cz" target="_blank" rel="noopener noreferrer" className="footer-link">AIBlab.cz</a>
                <a href="https://aibsn.org" target="_blank" rel="noopener noreferrer" className="footer-link">AIBSN.org</a>
              </div>
            </div>
            {/* Právní */}
            <div>
              <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "#ffd700", opacity: 0.6, marginBottom: 16, textTransform: "uppercase", fontWeight: 800 }}>Právní</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {LEGAL_LINKS.map(([l, h]) => (
                  <a key={h} href={h} className="footer-link">{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)" }}>© 2026 SAY TO PAY s.r.o. · Patents Pending · AIBaimy v1.0</span>
            <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.22)" }}>Bezpečná AI pro celou rodinu 🛡️💜</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
