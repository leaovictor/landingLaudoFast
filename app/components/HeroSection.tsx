export default function HeroSection() {
  return (
    <section
      className="hero-bg"
      style={{ paddingTop: "9rem", paddingBottom: "5rem" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        {/* Urgency Badge */}
        <div
          className="animate-fade-up"
          style={{ marginBottom: "1.5rem" }}
        >
          <span className="badge badge-primary">
            <span>🔥</span>
            Acesso antecipado · Vagas limitadas
          </span>
        </div>

        {/* Headline */}
        <h1
          className="heading-xl animate-fade-up-delay-1"
          style={{ maxWidth: "800px", margin: "0 auto 1.25rem" }}
        >
          Gere laudos técnicos em{" "}
          <span className="text-gradient">minutos</span>, não horas.
        </h1>

        {/* Subheadline */}
        <p
          className="animate-fade-up-delay-2"
          style={{
            fontSize: "1.25rem",
            color: "var(--text-secondary)",
            maxWidth: "580px",
            margin: "0 auto 2.5rem",
            lineHeight: "1.7",
          }}
        >
          Automatize seus laudos com IA, reduza erros e economize horas toda
          semana. Sem retrabalho. Sem complicação.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-up-delay-3"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
          }}
        >
          <a href="#pesquisa" className="btn btn-primary btn-lg">
            <span>✉️</span>
            Entrar na lista de espera
          </a>
          <a href="#pesquisa" className="btn btn-secondary btn-lg">
            <span>📋</span>
            Responder pesquisa rápida
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: "400",
                color: "var(--text-muted)",
                marginLeft: "0.25rem",
              }}
            >
              (2 min)
            </span>
          </a>
        </div>

        {/* Social proof line */}
        <p
          className="animate-fade-up-delay-4"
          style={{
            fontSize: "0.875rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          <span>✅</span>
          Mais de 100 profissionais já na lista · Gratuito por tempo limitado
        </p>

        {/* Hero Visual – Mock report card */}
        <div
          className="animate-fade-up-delay-4 animate-float"
          style={{
            marginTop: "4rem",
            display: "inline-block",
            width: "100%",
            maxWidth: "680px",
            position: "relative",
          }}
        >
          {/* Video demo placeholder */}
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "-12px",
              right: "-12px",
              bottom: "-12px",
              borderRadius: "24px",
              background: "linear-gradient(135deg, rgba(37,99,235,0.06), rgba(6,182,212,0.06))",
              zIndex: 0,
            }}
          />
          <div
            style={{
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "var(--shadow-xl), var(--shadow-glow)",
              textAlign: "left",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Mock header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1.5rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--primary)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Laudo Técnico · #2024-0147
                </div>
                <div
                  style={{
                    fontSize: "1.0625rem",
                    fontWeight: "600",
                    color: "var(--text-primary)",
                  }}
                >
                  Motor elétrico W22 – Análise de falha
                </div>
              </div>
              <span className="badge badge-success">✅ Gerado com IA</span>
            </div>

            {/* Mock content rows */}
            {[
              { label: "Equipamento", value: "Motor WEG W22 15cv" },
              { label: "Local", value: "Planta Industrial – Bloco C" },
              { label: "Diagnóstico", value: "Sobrecarga elétrica – fase B" },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginBottom: "0.875rem",
                  fontSize: "0.9375rem",
                }}
              >
                <span
                  style={{
                    color: "var(--text-muted)",
                    fontWeight: "500",
                    minWidth: "100px",
                    flexShrink: 0,
                  }}
                >
                  {row.label}
                </span>
                <span style={{ color: "var(--text-primary)", fontWeight: "500" }}>
                  {row.value}
                </span>
              </div>
            ))}

            {/* IA Analysis box */}
            <div
              style={{
                background: "linear-gradient(135deg, #f0f4ff, #f0faff)",
                border: "1px solid rgba(37,99,235,0.15)",
                borderRadius: "12px",
                padding: "1rem",
                marginTop: "1rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  color: "var(--primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                }}
              >
                <span>🤖</span> Análise IA
              </div>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                &ldquo;Identificada degradação do isolamento na fase B com 89% de
                confiança. Recomenda-se substituição imediata e inspeção das
                demais fases.&rdquo;
              </p>
            </div>

            {/* Time badge */}
            <div
              style={{
                position: "absolute",
                bottom: "-16px",
                right: "24px",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                color: "white",
                borderRadius: "999px",
                padding: "0.375rem 0.875rem",
                fontSize: "0.8125rem",
                fontWeight: "700",
                boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
              }}
            >
              ⚡ Gerado em 3 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
