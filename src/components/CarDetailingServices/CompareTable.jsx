import { useState } from "react";

const compareRows = [
  { f: "Hand wash & dry", t1: true,  t2: true,  t3: true  },
  { f: "Vacuum interior",  t1: true,  t2: true,  t3: false },
  { f: "Leather conditioning", t1: true, t2: true, t3: false },
  { f: "Paint decontamination", t1: false, t2: true, t3: true },
  { f: "Clay bar treatment", t1: false, t2: true, t3: true  },
  { f: "Machine polish",   t1: false, t2: true,  t3: true  },
  { f: "Ceramic coating",  t1: false, t2: false, t3: true  },
  { f: "Engine bay clean", t1: false, t2: true,  t3: false },
  { f: "Odour elimination",t1: true,  t2: true,  t3: false },
  { f: "Tyre dressing",    t1: false, t2: true,  t3: true  },
];

const TIERS = [
  { key: "t1", label: "Full Interior Reset",   highlight: false },
  { key: "t2", label: "Showroom Full Detail",  highlight: true  },
  { key: "t3", label: "Paint Enhancement",     highlight: false },
];

function Check() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#c1c1c1]/15">
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path d="M1 4L4 7.5L10 1" stroke="#c1c1c1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  );
}

function Dash() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
        <path d="M1 1H9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

export default function CompareTable() {
  const [activeTab, setActiveTab] = useState(1); // mobile tab index

  return (
    <div
      style={{ fontFamily: "'DM Sans', sans-serif", background: "#0d0d0d", minHeight: "100vh", padding: "2rem 1rem" }}
    >
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=DM+Serif+Display&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
            Compare Packages
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", marginTop: "0.4rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Choose the right detail for your vehicle
          </p>
        </div>

        {/* ── DESKTOP TABLE ── */}
        <div style={{ display: "none" }} className="desktop-table">
          {/* shown via media-query workaround below */}
        </div>

        {/* Unified responsive layout using CSS grid trick */}
        <style>{`
          .cmp-desktop { display: none; }
          .cmp-mobile  { display: block; }
          @media (min-width: 680px) {
            .cmp-desktop { display: block; }
            .cmp-mobile  { display: none; }
          }
          .tier-tab { transition: color 0.2s, border-color 0.2s; }
          .feature-row { transition: background 0.15s; }
          .feature-row:hover { background: rgba(255,255,255,0.025) !important; }
        `}</style>

        {/* ── DESKTOP ── */}
        <div className="cmp-desktop" style={{
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.015)",
          overflow: "hidden",
        }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <th style={{ padding: "16px 24px", textAlign: "left", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", width: "34%" }}>
                  Feature
                </th>
                {TIERS.map((t) => (
                  <th key={t.key} style={{
                    padding: "16px 12px", textAlign: "center",
                    fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: t.highlight ? "#c1c1c1" : "rgba(255,255,255,0.3)",
                    borderLeft: t.highlight ? "1px solid rgba(193,193,193,0.12)" : "1px solid rgba(255,255,255,0.05)",
                    borderRight: t.highlight ? "1px solid rgba(193,193,193,0.12)" : "none",
                    background: t.highlight ? "rgba(193,193,193,0.03)" : "transparent",
                  }}>
                    {t.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row, i) => (
                <tr key={i} className="feature-row" style={{
                  borderBottom: i < compareRows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: i % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent",
                }}>
                  <td style={{ padding: "11px 24px", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)" }}>
                    {row.f}
                  </td>
                  {TIERS.map((t) => (
                    <td key={t.key} style={{
                      padding: "11px 12px", textAlign: "center",
                      borderLeft: t.highlight ? "1px solid rgba(193,193,193,0.08)" : "1px solid rgba(255,255,255,0.03)",
                      borderRight: t.highlight ? "1px solid rgba(193,193,193,0.08)" : "none",
                      background: t.highlight ? "rgba(193,193,193,0.015)" : "transparent",
                    }}>
                      {row[t.key] ? <Check /> : <Dash />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── MOBILE TABS ── */}
        <div className="cmp-mobile">
          {/* Tab pills */}
          <div style={{
            display: "flex", gap: 6, marginBottom: "0.75rem",
            background: "rgba(255,255,255,0.04)", borderRadius: 12,
            padding: 4, border: "1px solid rgba(255,255,255,0.06)",
          }}>
            {TIERS.map((t, i) => (
              <button
                key={t.key}
                className="tier-tab"
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1, padding: "8px 4px",
                  fontSize: "0.6rem", fontWeight: 600,
                  letterSpacing: "0.07em", textTransform: "uppercase",
                  borderRadius: 9, border: "none", cursor: "pointer",
                  transition: "all 0.2s",
                  background: activeTab === i
                    ? (t.highlight ? "rgba(193,193,193,0.18)" : "rgba(255,255,255,0.08)")
                    : "transparent",
                  color: activeTab === i
                    ? (t.highlight ? "#c1c1c1" : "rgba(255,255,255,0.8)")
                    : "rgba(255,255,255,0.3)",
                  boxShadow: activeTab === i ? "0 1px 6px rgba(0,0,0,0.3)" : "none",
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Active card */}
          {TIERS.map((t, i) => (
            activeTab === i && (
              <div key={t.key} style={{
                borderRadius: 14,
                border: t.highlight ? "1px solid rgba(193,193,193,0.22)" : "1px solid rgba(255,255,255,0.08)",
                background: t.highlight ? "rgba(193,193,193,0.03)" : "rgba(255,255,255,0.015)",
                overflow: "hidden",
              }}>
                {compareRows.map((row, ri) => (
                  <div key={ri} className="feature-row" style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "12px 18px",
                    borderBottom: ri < compareRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    background: ri % 2 === 0 ? "rgba(255,255,255,0.008)" : "transparent",
                  }}>
                    <span style={{
                      fontSize: "0.83rem",
                      color: row[t.key] ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.25)",
                    }}>
                      {row.f}
                    </span>
                    {row[t.key] ? <Check /> : <Dash />}
                  </div>
                ))}
              </div>
            )
          ))}

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "0.75rem" }}>
            {TIERS.map((_, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{
                width: activeTab === i ? 18 : 6, height: 6,
                borderRadius: 3, border: "none", cursor: "pointer",
                background: activeTab === i ? "#c1c1c1" : "rgba(255,255,255,0.15)",
                transition: "all 0.25s",
                padding: 0,
              }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}