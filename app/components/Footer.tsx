"use client";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.875rem",
            }}
          >
            ⚡
          </div>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: "800",
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            LaudoFast
          </span>
        </div>

        <p
          style={{
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          Automatize seus laudos técnicos com IA. Feito para profissionais
          brasileiros.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "1.5rem",
            fontSize: "0.875rem",
          }}
        >
          <a
            href="#problema"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            O Problema
          </a>
          <a
            href="#solucao"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            Como Funciona
          </a>
          <a
            href="#faq"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            FAQ
          </a>
          <a
            href="#pesquisa"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            Entrar na Lista
          </a>
          <a
            href="/politica-de-privacidade"
            style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
            }
          >
            Privacidade
          </a>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            margin: "1.5rem 0",
          }}
        />

        <p style={{ fontSize: "0.8125rem" }}>
          © {new Date().getFullYear()}{" "}
          <strong style={{ color: "rgba(255,255,255,0.8)" }}>LaudoFast</strong>
          . Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
