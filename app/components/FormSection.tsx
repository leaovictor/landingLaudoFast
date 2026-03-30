import ScrollReveal from "./ScrollReveal";
import SurveyForm from "./SurveyForm";

export default function FormSection() {
  return (
    <section
      className="section"
      id="pesquisa"
      style={{
        background: "linear-gradient(135deg, #f0f4ff 0%, #fafbff 50%, #f0faff 100%)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="form-grid"
        >
          {/* Left side — copy */}
          <ScrollReveal>
            <div>
              <span className="eyebrow" style={{ display: "inline-block", marginBottom: "1.25rem" }}>
                📋 Pesquisa Rápida
              </span>
              <h2
                className="heading-lg"
                style={{ marginBottom: "1.25rem" }}
              >
                Ajude a construir o LaudoFast
              </h2>
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.7",
                  marginBottom: "2rem",
                }}
              >
                Responda 5 perguntas rápidas (menos de 1 minuto) e entre na{" "}
                <strong style={{ color: "var(--text-primary)" }}>
                  lista de espera exclusiva
                </strong>
                . Seu feedback está moldando o produto.
              </p>

              {/* Benefits list */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.875rem",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  {
                    icon: "🎁",
                    text: "Acesso antecipado gratuito por 30 dias",
                  },
                  {
                    icon: "💰",
                    text: "Desconto exclusivo para early adopters",
                  },
                  { icon: "🤝", text: "Participe da beta fechada" },
                  { icon: "⏱️", text: "Leva menos de 1 minuto" },
                ].map((b) => (
                  <div
                    key={b.text}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      fontSize: "0.9375rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: "white",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        flexShrink: 0,
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      {b.icon}
                    </span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>

              {/* Scarcity */}
              <div
                style={{
                  background: "white",
                  border: "1px solid rgba(239,68,68,0.2)",
                  borderRadius: "var(--radius-md)",
                  padding: "1rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>🔒</span>
                <div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "700",
                      color: "#ef4444",
                      marginBottom: "0.125rem",
                    }}
                  >
                    Vagas limitadas
                  </div>
                  <div
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Apenas 200 usuários no acesso antecipado
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right side — form */}
          <ScrollReveal delay={200}>
            <div
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-xl)",
                padding: "2.5rem",
                boxShadow: "var(--shadow-xl)",
              }}
            >
              <SurveyForm />
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .form-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
