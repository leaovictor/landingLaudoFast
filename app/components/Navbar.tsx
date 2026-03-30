"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: "#problema", label: "Problema" },
    { href: "#solucao", label: "Solução" },
    { href: "#pesquisa", label: "Pesquisa" },
  ];

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.06)" : "none",
      }}
    >
      {/* Urgency bar */}
      <div className="urgency-bar">
        🔥 <strong>Acesso antecipado limitado.</strong> Apenas 200 vagas
        disponíveis. Reserve a sua agora.
      </div>

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
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
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
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#pesquisa"
          className="btn btn-primary btn-sm desktop-nav"
          style={{ animation: "pulse-glow 2s ease-in-out 3s 3" }}
        >
          Entrar na lista
        </a>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span className={`hamburger ${mobileOpen ? "open" : ""}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMobileOpen(false)}>
          <div
            className="mobile-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-menu-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pesquisa"
              className="btn btn-primary"
              style={{ width: "100%", marginTop: "1rem" }}
              onClick={() => setMobileOpen(false)}
            >
              🚀 Entrar na lista
            </a>
          </div>
        </div>
      )}

      <style>{`
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 110;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        .mobile-menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 99;
          animation: fadeIn 0.2s ease;
        }

        .mobile-menu-panel {
          position: absolute;
          top: 0;
          right: 0;
          width: 280px;
          max-width: 80vw;
          height: 100%;
          background: white;
          padding: 6rem 1.5rem 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
          animation: slideInRight 0.3s ease;
        }

        .mobile-menu-link {
          display: block;
          padding: 1rem 0;
          font-size: 1.0625rem;
          font-weight: 600;
          color: var(--text-primary);
          text-decoration: none;
          border-bottom: 1px solid var(--border-subtle);
          transition: color 0.2s;
        }

        .mobile-menu-link:hover {
          color: var(--primary);
        }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block; }
          .mobile-menu-overlay { display: block; }
        }
      `}</style>
    </nav>
  );
}
