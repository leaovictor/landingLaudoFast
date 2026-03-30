"use client";

import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Carlos Menezes",
    role: "Engenheiro Eletricista · SP",
    avatar: "CM",
    avatarColor: "#2563eb",
    quote:
      "Faço laudos de instalações elétricas há 12 anos. É um trabalho que consome meu dia todo. Uma ferramenta assim faria uma diferença enorme.",
  },
  {
    name: "Ana Ferreira",
    role: "Técnica de Manutenção · MG",
    avatar: "AF",
    avatarColor: "#10b981",
    quote:
      "A padronização é minha maior dificuldade. Cada colega faz diferente. Adoraria uma solução que mantivesse tudo no mesmo padrão.",
  },
  {
    name: "Roberto Alves",
    role: "Engenheiro Civil · RJ",
    avatar: "RA",
    avatarColor: "#8b5cf6",
    quote:
      "Retrabalho é meu pesadelo. Às vezes refaço o mesmo laudo 3 vezes por mudanças mínimas. Automatizar isso seria um sonho.",
  },
];

export default function SocialProofSection() {
  return (
    <section
      className="section"
      style={{ background: "var(--surface-2)" }}
      id="depoimentos"
    >
      <div className="container">
        {/* Stats */}
        <ScrollReveal>
          <div className="stats-grid" style={{ marginBottom: "4rem" }}>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Profissionais interessados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8h</div>
              <div className="stat-label">Economizadas por semana</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3 min</div>
              <div className="stat-label">Por laudo com IA</div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">💬 Profissionais reais, dores reais</span>
            <h2 className="heading-lg">A dor é real. A solução também.</h2>
            <p>
              O que profissionais de engenharia brasileiros disseram sobre os
              desafios de criar laudos manualmente.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-3" style={{ gap: "1.25rem" }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div className="testimonial-card" style={{ height: "100%" }}>
                {/* Quote */}
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.7",
                    fontStyle: "italic",
                    marginBottom: "1.25rem",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}88)`,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8125rem",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: "600",
                        color: "var(--text-primary)",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Target audience badges */}
        <ScrollReveal delay={300}>
          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                marginBottom: "1rem",
                fontWeight: "500",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Feito para
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                "👷 Engenheiros Civis",
                "⚡ Engenheiros Elétricos",
                "⚙️ Engenheiros Mecânicos",
                "🔧 Técnicos de Campo",
                "🏭 Profissionais de Manutenção",
              ].map((a) => (
                <span
                  key={a}
                  style={{
                    padding: "0.5rem 1rem",
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: "999px",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                    color: "var(--text-secondary)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
