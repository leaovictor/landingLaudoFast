"use client";

import ScrollReveal from "./ScrollReveal";

const benefits = [
  {
    icon: "⏱️",
    title: "Economize horas por semana",
    desc: "Reduza de 6 horas para menos de 20 minutos por laudo. Mais tempo para o que importa.",
    metric: "80%",
    metricLabel: "menos tempo",
    color: "#2563eb",
  },
  {
    icon: "🎯",
    title: "Reduza erros humanos",
    desc: "A IA verifica consistência, detecta campos faltantes e garante a integridade técnica do documento.",
    metric: "95%",
    metricLabel: "menos erros",
    color: "#06b6d4",
  },
  {
    icon: "📐",
    title: "Padronize seus laudos",
    desc: "Um padrão profissional para toda a empresa. Mesma qualidade, mesma estrutura, toda vez.",
    metric: "100%",
    metricLabel: "padronizados",
    color: "#8b5cf6",
  },
  {
    icon: "🚀",
    title: "Aumente sua produtividade",
    desc: "Atenda mais clientes, entregue mais rápido e construa uma reputação de excelência técnica.",
    metric: "3×",
    metricLabel: "mais produtivo",
    color: "#10b981",
  },
];

export default function BenefitsSection() {
  return (
    <section className="section" id="beneficios">
      <div className="container">
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">🏆 Benefícios</span>
            <h2 className="heading-lg">O que você vai ganhar</h2>
            <p>
              Cada hora economizada é mais tempo para crescer sua carreira e
              atender mais clientes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-4" style={{ gap: "1.25rem" }}>
          {benefits.map((b, i) => (
            <ScrollReveal key={b.title} delay={i * 100}>
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.75rem 1.5rem",
                  textAlign: "center",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.boxShadow = "var(--shadow-lg)";
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = b.color + "40";
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
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: b.color + "15",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.625rem",
                    margin: "0 auto 1.25rem",
                  }}
                >
                  {b.icon}
                </div>

                {/* Metric */}
                <div
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: "800",
                    color: b.color,
                    lineHeight: "1",
                    marginBottom: "0.25rem",
                  }}
                >
                  {b.metric}
                </div>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: "600",
                    color: b.color + "aa",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "1rem",
                  }}
                >
                  {b.metricLabel}
                </div>

                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
