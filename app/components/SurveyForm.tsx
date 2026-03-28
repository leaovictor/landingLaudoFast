"use client";

import { useState } from "react";
import { saveLead } from "@/app/actions/saveLead";

type FormData = {
  nome: string;
  email: string;
  profissao: string;
  fazLaudos: string;
  laudosMes: string;
  tempoPorLaudo: string;
  maiorDificuldade: string;
  usaSoftware: string;
  pagariaPorAutomacao: string;
  quantoPagaria: string;
};

const initialData: FormData = {
  nome: "",
  email: "",
  profissao: "",
  fazLaudos: "",
  laudosMes: "",
  tempoPorLaudo: "",
  maiorDificuldade: "",
  usaSoftware: "",
  pagariaPorAutomacao: "",
  quantoPagaria: "",
};

type Step = {
  key: keyof FormData;
  question: string;
  type: "text" | "email" | "options" | "textarea" | "number";
  placeholder?: string;
  options?: string[];
  required?: boolean;
};

const steps: Step[] = [
  {
    key: "nome",
    question: "Qual é o seu nome? 👋",
    type: "text",
    placeholder: "Ex: João Silva",
    required: true,
  },
  {
    key: "email",
    question: "Qual é o seu melhor e-mail?",
    type: "email",
    placeholder: "seu@email.com",
    required: true,
  },
  {
    key: "profissao",
    question: "Qual é a sua profissão?",
    type: "options",
    options: [
      "Engenheiro Civil",
      "Engenheiro Elétrico",
      "Engenheiro Mecânico",
      "Técnico de Campo",
      "Técnico de Manutenção",
      "Outro",
    ],
    required: true,
  },
  {
    key: "fazLaudos",
    question: "Você faz laudos técnicos atualmente?",
    type: "options",
    options: ["Sim", "Não", "Às vezes"],
    required: true,
  },
  {
    key: "laudosMes",
    question: "Quantos laudos você faz por mês?",
    type: "options",
    options: ["1 a 5", "6 a 15", "16 a 30", "Mais de 30"],
    required: false,
  },
  {
    key: "tempoPorLaudo",
    question: "Quanto tempo você leva por laudo (em média)?",
    type: "options",
    options: [
      "Menos de 1 hora",
      "1 a 2 horas",
      "2 a 4 horas",
      "Mais de 4 horas",
    ],
    required: false,
  },
  {
    key: "maiorDificuldade",
    question: "Qual é sua maior dificuldade hoje com laudos?",
    type: "textarea",
    placeholder:
      "Ex: demora muito, não tem padrão, muito retrabalho...",
    required: false,
  },
  {
    key: "usaSoftware",
    question: "Você usa algum software hoje para laudos? Qual?",
    type: "text",
    placeholder: 'Ex: Word, Excel, AutoCAD, ou "Nenhum"',
    required: false,
  },
  {
    key: "pagariaPorAutomacao",
    question: "Você pagaria por uma ferramenta de automação de laudos?",
    type: "options",
    options: ["Sim, definitivamente!", "Talvez, depende do valor", "Não pagaria"],
    required: true,
  },
  {
    key: "quantoPagaria",
    question: "Quanto você pagaria por mês por essa solução?",
    type: "options",
    options: [
      "Até R$ 49/mês",
      "R$ 50 a R$ 99/mês",
      "R$ 100 a R$ 199/mês",
      "Mais de R$ 200/mês",
    ],
    required: false,
  },
];

function validateStep(step: Step, value: string): string | null {
  if (step.required && !value.trim()) {
    return "Este campo é obrigatório.";
  }
  if (step.key === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Por favor, insira um e-mail válido.";
    }
  }
  return null;
}

export default function SurveyForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const step = steps[currentStep];
  const progress = Math.round(((currentStep) / steps.length) * 100);

  const handleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, [step.key]: value }));
    if (errors[step.key]) {
      setErrors((prev) => ({ ...prev, [step.key]: undefined }));
    }
  };

  const handleNext = () => {
    const error = validateStep(step, formData[step.key]);
    if (error) {
      setErrors((prev) => ({ ...prev, [step.key]: error }));
      return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep((s) => s + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
      setErrors({});
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && step.type !== "textarea") {
      e.preventDefault();
      handleNext();
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const result = await saveLead(formData);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setErrors({ email: result.error });
      setCurrentStep(1);
    }
  };

  if (submitted) {
    return (
      <div className="success-wrap" style={{ animation: "fadeIn 0.5s ease" }}>
        <div className="success-icon">🎉</div>
        <h3
          style={{
            fontSize: "1.625rem",
            fontWeight: "800",
            color: "var(--text-primary)",
            marginBottom: "0.75rem",
          }}
        >
          {formData.nome
            ? `Obrigado, ${formData.nome.split(" ")[0]}!`
            : "Obrigado!"}
        </h3>
        <p
          style={{
            fontSize: "1.075rem",
            color: "var(--text-secondary)",
            maxWidth: "440px",
            margin: "0 auto 1.5rem",
            lineHeight: "1.6",
          }}
        >
          Você está na lista! Assim que o LaudoFast estiver pronto, você será
          um dos <strong>primeiros a testar</strong>. Fique de olho no seu
          e-mail 📧
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(16,185,129,0.1)",
              color: "var(--success)",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          >
            ✅ Na lista de espera
          </span>
          <span
            style={{
              padding: "0.5rem 1rem",
              background: "rgba(37,99,235,0.1)",
              color: "var(--primary)",
              borderRadius: "999px",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          >
            🔔 Será notificado
          </span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div style={{ marginBottom: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "0.625rem",
          }}
        >
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: "600",
              color: "var(--text-muted)",
            }}
          >
            Pergunta {currentStep + 1} de {steps.length}
          </span>
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: "700",
              color: "var(--primary)",
            }}
          >
            {progress}%
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        key={currentStep}
        style={{ animation: "fadeUp 0.4s cubic-bezier(0.4,0,0.2,1) both" }}
      >
        <label
          className="form-label"
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
            display: "block",
            lineHeight: "1.4",
          }}
        >
          {step.question}
        </label>

        {/* Text / Email inputs */}
        {(step.type === "text" || step.type === "email") && (
          <input
            id={`field-${step.key}`}
            type={step.type}
            value={formData[step.key]}
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={step.placeholder}
            className="form-input"
            autoFocus
            autoComplete={step.type === "email" ? "email" : "off"}
            style={{
              fontSize: "1.0625rem",
              padding: "0.875rem 1.125rem",
              borderColor: errors[step.key] ? "#ef4444" : undefined,
            }}
          />
        )}

        {/* Textarea */}
        {step.type === "textarea" && (
          <textarea
            id={`field-${step.key}`}
            value={formData[step.key]}
            onChange={(e) => handleChange(e.target.value)}
            placeholder={step.placeholder}
            className="form-input"
            rows={4}
            autoFocus
            style={{
              fontSize: "1.0625rem",
              padding: "0.875rem 1.125rem",
              resize: "vertical",
              borderColor: errors[step.key] ? "#ef4444" : undefined,
            }}
          />
        )}

        {/* Options */}
        {step.type === "options" && step.options && (
          <div className="option-group">
            {step.options.map((opt) => (
              <button
                key={opt}
                type="button"
                id={`option-${step.key}-${opt.replace(/\s+/g, "-")}`}
                className={`option-btn ${formData[step.key] === opt ? "selected" : ""}`}
                onClick={() => handleChange(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        )}

        {/* Error */}
        {errors[step.key] && (
          <p className="form-error" style={{ marginTop: "0.75rem" }}>
            ⚠️ {errors[step.key]}
          </p>
        )}
      </div>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <button
          type="button"
          onClick={handleBack}
          className="btn btn-secondary"
          style={{
            opacity: currentStep === 0 ? 0 : 1,
            pointerEvents: currentStep === 0 ? "none" : "auto",
          }}
          disabled={currentStep === 0}
          id="btn-back"
        >
          ← Voltar
        </button>

        <button
          type="button"
          onClick={handleNext}
          className="btn btn-primary"
          disabled={isSubmitting}
          id="btn-next"
          style={{ minWidth: "160px" }}
        >
          {isSubmitting ? (
            <>
              <span className="spinner" />
              Enviando...
            </>
          ) : currentStep === steps.length - 1 ? (
            "🚀 Entrar na lista!"
          ) : (
            "Próximo →"
          )}
        </button>
      </div>

      {/* Skip hint for optional */}
      {!step.required && (
        <p
          style={{
            textAlign: "center",
            marginTop: "1rem",
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          Pergunta opcional ·{" "}
          <button
            type="button"
            onClick={handleNext}
            style={{
              background: "none",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              fontSize: "0.8125rem",
              fontWeight: "600",
              textDecoration: "underline",
              padding: 0,
            }}
            id="btn-skip"
          >
            Pular
          </button>
        </p>
      )}
    </div>
  );
}
