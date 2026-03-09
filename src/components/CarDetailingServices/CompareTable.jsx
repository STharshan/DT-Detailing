import { useState } from "react";

const compareRows = [
  { f: "Door Panels, Dash & Console Deep Clean", t1: true, t2: true, t3: false },
  { f: "Steam Cleaning (Cup Holders, Vents, Crevices)", t1: true, t2: true, t3: false },
  { f: "Fabric Seat Shampoo & Extraction", t1: true, t2: true, t3: false },
  { f: "Leather Seat Deep Clean", t1: true, t2: true, t3: false },
  { f: "Interior Plastics Conditioned", t1: true, t2: true, t3: false },
  { f: "Foam Bath & Pre-Treat", t1: false, t2: true, t3: false },
  { f: "2 Bucket Wash", t1: false, t2: true, t3: false },
  { f: "Iron Removal Treatment", t1: false, t2: true, t3: false },
  { f: "Tar / Glue Removal", t1: false, t2: true, t3: false},
  { f: "Ceramic Sealant", t1: false, t2: true, t3: false },
  { f: "Wheels Deep Cleaned", t1: false, t2: true, t3: true },
  { f: "Tire Dressing", t1: false, t2: true, t3: false },
  { f: "Air Blower & Towel Dry", t1: false, t2: true, t3: false },
  { f: "Windows Cleaned", t1: false, t2: true, t3: false },
  { f: "Door & Trunk Jambs Deep Cleaned", t1: false, t2: true, t3: false },
  { f: "Paint Decontamination + Clay Bar", t1: false, t2: false, t3: true },
  { f: "Wheel Wells Cleaned", t1: false, t2: false, t3: true },
  { f: "Tires Cleaned & Conditioned", t1: false, t2: false, t3: true },
  { f: "Trim Conditioned & Sealed", t1: false, t2: false, t3: true },
  { f: "Paint Enhancement (Swirl Removal)", t1: false, t2: false, t3: true },
  { f: "IPA Wipe Down", t1: false, t2: false, t3: true },
  { f: "1 Year Ceramic Coating", t1: false, t2: false, t3: true },
  { f: "3 Year Ceramic Coating", t1: false, t2: false, t3: true },
  { f: "7 Year Ceramic Coating", t1: false, t2: false, t3: true },
];

const sections = [
  { label: "INTERIOR SERVICES", keys: ["Door Panels, Dash & Console Deep Clean","Steam Cleaning (Cup Holders, Vents, Crevices)","Fabric Seat Shampoo & Extraction","Leather Seat Deep Clean","Interior Plastics Conditioned"] },
  { label: "EXTERIOR SERVICES", keys: ["Foam Bath & Pre-Treat","2 Bucket Wash","Iron Removal Treatment","Tar / Glue Removal","Ceramic Sealant","Wheels Deep Cleaned","Tire Dressing","Air Blower & Towel Dry","Windows Cleaned","Door & Trunk Jambs Deep Cleaned"] },
  { label: "PAINT SERVICES", keys: ["Paint Decontamination + Clay Bar","Wheel Wells Cleaned","Tires Cleaned & Conditioned","Trim Conditioned & Sealed","Paint Enhancement (Swirl Removal)","IPA Wipe Down","1 Year Ceramic Coating","3 Year Ceramic Coating","7 Year Ceramic Coating"] },
];

const TIERS = [
  { key: "t1", label: "Full Interior Reset", highlight: false },
  { key: "t2", label: "Showroom Full Detail", highlight: true },
  { key: "t3", label: "Paint Enhancement", highlight: false },
];

function Check() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#c1c1c1]/15">
      <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
        <path d="M1 4L4 7.5L10 1" stroke="#c1c1c1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Dash() {
  return (
    <span className="inline-flex h-5 w-5 items-center justify-center">
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
        <path d="M1 1H9" stroke="rgba(255,255,255,0.15)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

export default function CompareTable() {
  const [activeTab, setActiveTab] = useState(1);
  const [expandedKey, setExpandedKey] = useState(null);

  const handleToggle = (key) => {
    setExpandedKey(prev => prev === key ? null : key);
  };

  const rowByFeature = Object.fromEntries(compareRows.map(r => [r.f, r]));

  return (
    <div style={{ background: "#0d0d0d", minHeight: "100vh", padding: "2rem 1rem" }}>
      <style>{`
        .cmp-desktop { display: none; }
        .cmp-mobile  { display: block; }
        @media (min-width: 680px) {
          .cmp-desktop { display: block; }
          .cmp-mobile  { display: none; }
        }
        .feature-row:hover { background: rgba(255,255,255,0.025) !important; }
      `}</style>

      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        {/* Heading */}
        <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "#fff", margin: 0, letterSpacing: "-0.02em" }}>
            Compare Packages
          </p>
          <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", marginTop: "0.4rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Choose the right detail for your vehicle
          </p>
        </div>

        {/* ── DESKTOP (unchanged) ── */}
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

        {/* ── MOBILE (Quoti-style) ── */}
        <div className="cmp-mobile">
          {/* Tier tabs */}
          <div style={{
            display: "flex",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 14,
            overflow: "hidden",
            background: "rgba(255,255,255,0.03)",
            marginBottom: 16,
          }}>
            {TIERS.map((t, i) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1,
                  padding: "13px 4px",
                  fontWeight: 700,
                  fontSize: "0.62rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRight: i < TIERS.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  cursor: "pointer",
                  background: activeTab === i
                    ? (t.highlight ? "rgba(193,193,193,0.18)" : "rgba(255,255,255,0.1)")
                    : "transparent",
                  color: activeTab === i
                    ? (t.highlight ? "#c1c1c1" : "rgba(255,255,255,0.85)")
                    : "rgba(255,255,255,0.3)",
                  transition: "all 0.2s",
                  lineHeight: 1.3,
                }}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Sections with expandable rows */}
          {sections.map((section) => (
            <div key={section.label} style={{ marginBottom: 4 }}>

              {/* Rows */}
              {section.keys.map((key) => {
                const row = rowByFeature[key];
                const isOpen = expandedKey === key;
                const activeTier = TIERS[activeTab];
                const included = row[activeTier.key];

                return (
                  <div key={key} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    {/* Row */}
                    <div
                      className="feature-row"
                      onClick={() => handleToggle(key)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "13px 16px",
                        cursor: "pointer",
                        background: isOpen ? "rgba(255,255,255,0.03)" : "transparent",
                        userSelect: "none",
                      }}
                    >
                      <span style={{
                        fontSize: "0.83rem",
                        color: included ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.25)",
                        flex: 1,
                        paddingRight: 10,
                      }}>
                        {row.f}
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <svg
                          width="12" height="12" viewBox="0 0 14 14" fill="none"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s", flexShrink: 0 }}
                        >
                          <path d="M2 5L7 10L12 5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded: all 3 tiers */}
                    {isOpen && (
                      <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        padding: "10px 16px 16px",
                        background: "rgba(255,255,255,0.02)",
                      }}>
                        {TIERS.map((t) => (
                          <div key={t.key} style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 6,
                          }}>
                            <span style={{
                              fontSize: "0.52rem",
                              letterSpacing: "0.07em",
                              textTransform: "uppercase",
                              color: t.highlight ? "rgba(193,193,193,0.5)" : "rgba(255,255,255,0.25)",
                              textAlign: "center",
                              lineHeight: 1.3,
                            }}>
                              {t.label}
                            </span>
                            {row[t.key] ? <Check /> : <Dash />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          {/* Dot indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: "1rem" }}>
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