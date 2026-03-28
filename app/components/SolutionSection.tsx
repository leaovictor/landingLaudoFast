import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    step: "01",
    icon: "📸",
    title: "Envie as fotos",
    desc: "Fotografe o equipamento ou o problema diretamente pelo celular. A IA processa automaticamente.",
    color: "#2563eb",
  },
  {
    step: "02",
    icon: "🤖",
    title: "A IA analisa",
    desc: "Nossa inteligência artificial identifica o problema, classifica a falha e gera o diagnóstico técnico.",
    color: "#06b6d4",
  },
  {
    step: "03",
    icon: "📄",
    title: "Laudo pronto em PDF",
    desc: "Em minutos você recebe um laudo completo, padronizado e pronto para assinar e entregar.",
    color: "#10b981",
  },
];

export default function SolutionSection() {
  return (
    <section
      className="section"
      id="solucao"
      style={{ background: "var(--surface-2)" }}
    >
      <div className="container">
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">✨ Como Funciona</span>
            <h2 className="heading-lg">Simples como tirar uma foto</h2>
            <p>
              Três passos simples separam você de um laudo técnico profissional
              completo. Sem complicação, sem curva de aprendizado.
            </p>
          </div>
        </ScrollReveal>

        <div className="steps-wrapper">
          {steps.map((step, i) => (
            <ScrollReveal key={step.step} delay={i * 150}>
              <div
                style={{
                  textAlign: "center",
                  padding: "1.5rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {/* Step number bubble */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)`,
                    border: `2px solid ${step.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.25rem",
                    position: "relative",
                    fontSize: "2rem",
                  }}
                >
                  {step.icon}
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: step.color,
                      color: "white",
                      fontSize: "0.6875rem",
                      fontWeight: "800",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "var(--text-primary)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature list */}
        <ScrollReveal delay={400}>
          <div
            style={{
              marginTop: "3.5rem",
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "2rem 2.5rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              justifyContent: "center",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {[
              "🎯 Diagnóstico por IA",
              "📐 Laudos padronizados",
              "📲 100% pelo celular",
              "⚡ Resultado em minutos",
              "🔒 Dados seguros",
              "✍️ Assinatura digital",
            ].map((feat) => (
              <div
                key={feat}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.9375rem",
                  fontWeight: "500",
                  color: "var(--text-secondary)",
                }}
              >
                {feat}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
