"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "O que é o LaudoFast?",
    answer:
      "O LaudoFast é uma plataforma que utiliza inteligência artificial para automatizar a criação de laudos técnicos. Você envia fotos do equipamento ou problema, e a IA gera um laudo completo, padronizado e pronto para assinar em minutos.",
  },
  {
    question: "Quando o produto será lançado?",
    answer:
      "Estamos em fase de desenvolvimento e coletando feedback de profissionais para construir exatamente o que o mercado precisa. Os primeiros usuários da lista de espera receberão acesso antecipado gratuito assim que a versão beta estiver pronta.",
  },
  {
    question: "Quanto vai custar?",
    answer:
      "Ainda estamos definindo os planos de precificação. Usuários que entrarem na lista de espera agora ganharão 30 dias grátis e um desconto exclusivo de early adopter. Não exigimos cartão de crédito para o acesso antecipado.",
  },
  {
    question: "Funciona pelo celular?",
    answer:
      "Sim! O LaudoFast é 100% mobile. Você fotografa o equipamento direto pelo celular e a IA processa tudo automaticamente. O laudo fica pronto para download em PDF, assinatura digital e envio, tudo pelo próprio aparelho.",
  },
  {
    question: "Que tipos de laudo o LaudoFast gera?",
    answer:
      "O LaudoFast foi projetado para laudos técnicos de engenharia elétrica, civil, mecânica e manutenção industrial. A IA entende diagnósticos de falhas, inspeções, vistorias e relatórios técnicos em geral.",
  },
  {
    question: "Meus dados ficam seguros?",
    answer:
      "Sim. Utilizamos criptografia em trânsito (HTTPS) e armazenamento seguro no Google Cloud Platform (Firebase). Seus dados nunca são vendidos ou compartilhados com terceiros. Consulte nossa Política de Privacidade para mais detalhes.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq">
      <div className="container" style={{ maxWidth: "760px" }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">❓ Perguntas Frequentes</span>
            <h2 className="heading-lg">Dúvidas? A gente responde.</h2>
            <p>
              As perguntas mais comuns de profissionais que estão conhecendo o
              LaudoFast.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s ease",
                  boxShadow: openIndex === i ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                  aria-expanded={openIndex === i}
                >
                  <span
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "var(--text-primary)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--text-muted)",
                      transition: "transform 0.3s ease",
                      transform: openIndex === i ? "rotate(45deg)" : "rotate(0)",
                      flexShrink: 0,
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                {openIndex === i && (
                  <div
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      animation: "fadeIn 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--text-secondary)",
                        lineHeight: "1.7",
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
