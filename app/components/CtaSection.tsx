"use client";

import ScrollReveal from "./ScrollReveal";

export default function CtaSection() {
  return (
    <section
      className="section"
      style={{
        background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0891b2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          top: "-100px",
          right: "-100px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
          bottom: "-80px",
          left: "-80px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{ textAlign: "center", position: "relative", zIndex: 1 }}
      >
        <ScrollReveal>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.15)",
              color: "white",
              borderRadius: "999px",
              padding: "0.375rem 1rem",
              fontSize: "0.8125rem",
              fontWeight: "700",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "1.5rem",
              border: "1px solid rgba(255,255,255,0.25)",
            }}
          >
            🚀 Acesso antecipado
          </span>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontWeight: "800",
              color: "white",
              lineHeight: "1.15",
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
            }}
          >
            Seja um dos primeiros a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #93c5fd, #67e8f9)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              testar o LaudoFast
            </span>
          </h2>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "520px",
              margin: "0 auto 2.5rem",
              lineHeight: "1.7",
            }}
          >
            Junte-se a mais de 100 profissionais que já estão esperando. Acesso
            gratuito por 30 dias para os primeiros usuários.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="#pesquisa"
              className="btn btn-lg"
              id="cta-final-btn"
              style={{
                background: "white",
                color: "var(--primary)",
                fontWeight: "700",
                boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
              }}
            >
              🎯 Quero acesso antecipado
            </a>
          </div>

          {/* Trust signals */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              justifyContent: "center",
              flexWrap: "wrap",
              color: "rgba(255,255,255,0.65)",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            <span>✅ Sem cartão de crédito</span>
            <span>✅ Gratuito por 30 dias</span>
            <span>✅ Sem compromisso</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
