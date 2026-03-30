"use client";

import ScrollReveal from "./ScrollReveal";

export default function FounderSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--surface-2)" }}
      id="sobre"
    >
      <div className="container" style={{ maxWidth: "760px" }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">👨‍💻 Quem está por trás</span>
            <h2 className="heading-lg">Construído por quem sentiu a dor</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div
            style={{
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem",
              boxShadow: "var(--shadow-sm)",
              display: "flex",
              gap: "2rem",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "20px",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                color: "white",
                fontWeight: "800",
                flexShrink: 0,
              }}
            >
              LF
            </div>

            <div style={{ flex: 1, minWidth: "280px" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "var(--text-primary)",
                  marginBottom: "0.25rem",
                }}
              >
                LaudoFast Team
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Engenharia + Tecnologia
              </p>
              <p
                style={{
                  fontSize: "1rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                  margin: 0,
                }}
              >
                Somos um time de engenheiros e desenvolvedores que vivenciamos na
                pele o problema de criar laudos técnicos manualmente. Depois de
                centenas de conversas com profissionais do setor, decidimos
                construir a solução que sempre desejamos ter. O LaudoFast nasceu
                dessa frustração — e agora está sendo moldado pelo feedback de
                quem realmente vai usar.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
