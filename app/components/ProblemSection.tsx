"use client";

import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    icon: "⏰",
    color: "#ef4444",
    title: "Horas perdidas",
    desc: "Laudos manuais consomem entre 2 a 6 horas do seu dia. Tempo que você poderia usar no campo.",
  },
  {
    icon: "📋",
    color: "#f59e0b",
    title: "Falta de padronização",
    desc: "Cada laudo parece diferente. Sem um padrão, sua empresa perde credibilidade e os clientes desconfiam.",
  },
  {
    icon: "🔄",
    color: "#8b5cf6",
    title: "Retrabalho constante",
    desc: "Dados errados, campos esquecidos, revisões sem fim. O ciclo de retrabalho drena produtividade.",
  },
  {
    icon: "🐌",
    color: "#6366f1",
    title: "Processo lento e repetitivo",
    desc: "Copiar e colar de laudos antigos, editar linha por linha. Trabalho mecânico que a IA pode fazer por você.",
  },
];

export default function ProblemSection() {
  return (
    <section className="section" id="problema">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">😤 O Problema Real</span>
            <h2 className="heading-lg">
              Você ainda perde horas com laudos?
            </h2>
            <p>
              Se você é profissional de engenharia ou manutenção no Brasil, sabe
              como é. Essa realidade precisa mudar.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-2" style={{ gap: "1.25rem" }}>
          {painPoints.map((pain, i) => (
            <ScrollReveal key={pain.title} delay={i * 100}>
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "var(--shadow-lg)";
                  el.style.transform = "translateY(-4px)";
                  el.style.borderColor = pain.color + "40";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "var(--shadow-sm)";
                  el.style.transform = "none";
                  el.style.borderColor = "var(--border)";
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "12px",
                    background: pain.color + "15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {pain.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.0625rem",
                      fontWeight: "700",
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {pain.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {pain.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Call-out quote */}
        <ScrollReveal delay={400}>
          <div
            style={{
              marginTop: "3rem",
              background: "linear-gradient(135deg, #f8fafc, #f0f4ff)",
              border: "1px solid rgba(37,99,235,0.15)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                color: "var(--text-primary)",
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              "O profissional brasileiro perde em média{" "}
              <span style={{ color: "var(--primary)" }}>8 horas por semana</span>{" "}
              escrevendo laudos manualmente."
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                marginTop: "0.75rem",
                margin: "0.75rem 0 0",
              }}
            >
              — Baseado em pesquisa com mais de 100 profissionais de engenharia
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
