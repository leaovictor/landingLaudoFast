"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          height: "64px",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #2563eb, #06b6d4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}
          >
            ⚡
          </div>
          <span
            style={{
              fontSize: "1.125rem",
              fontWeight: "800",
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            Laudo<span style={{ color: "var(--primary)" }}>Fast</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="desktop-nav"
        >
          <a
            href="#problema"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9375rem",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            Problema
          </a>
          <a
            href="#solucao"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9375rem",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            Solução
          </a>
          <a
            href="#pesquisa"
            style={{
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontSize: "0.9375rem",
              fontWeight: "500",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            Pesquisa
          </a>
        </div>

        {/* CTA */}
        <a
          href="#pesquisa"
          className="btn btn-primary btn-sm"
          style={{ animation: "pulse-glow 2s ease-in-out 3s 3" }}
        >
          Entrar na lista
        </a>

        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
          }
        `}</style>
      </div>
    </nav>
  );
}
