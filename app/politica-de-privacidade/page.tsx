import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade – LaudoFast",
  description:
    "Política de Privacidade do LaudoFast. Saiba como coletamos, usamos e protegemos seus dados.",
};

export default function PoliticaDePrivacidade() {
  return (
    <main
      style={{
        maxWidth: "720px",
        margin: "0 auto",
        padding: "4rem 1.5rem",
        lineHeight: "1.8",
        color: "var(--text-secondary)",
      }}
    >
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--primary)",
          textDecoration: "none",
          fontWeight: "600",
          fontSize: "0.9375rem",
          marginBottom: "2rem",
        }}
      >
        ← Voltar para a página inicial
      </Link>

      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "800",
          color: "var(--text-primary)",
          marginBottom: "0.5rem",
        }}
      >
        Política de Privacidade
      </h1>
      <p style={{ marginBottom: "2rem", fontSize: "0.9375rem", color: "var(--text-muted)" }}>
        Última atualização: Março de 2026
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          1. Quem somos
        </h2>
        <p>
          O LaudoFast é uma plataforma em desenvolvimento que utiliza inteligência
          artificial para automatizar a criação de laudos técnicos para
          profissionais de engenharia e manutenção. Esta política se aplica ao
          nosso site de captação de interesse (landing page) e ao futuro produto.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          2. Dados que coletamos
        </h2>
        <p>Ao preencher nosso formulário de pesquisa/lista de espera, coletamos:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>Nome</li>
          <li>Endereço de e-mail</li>
          <li>Profissão</li>
          <li>Informações sobre seu uso de laudos técnicos (respostas opcionais)</li>
          <li>Data e hora do envio</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          3. Como usamos seus dados
        </h2>
        <p>Utilizamos os dados coletados para:</p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>Entrar em contato sobre o lançamento e acesso antecipado</li>
          <li>Entender as necessidades do mercado para desenvolver o produto</li>
          <li>Enviar comunicações relacionadas ao LaudoFast (não enviamos spam)</li>
          <li>Melhorar nossa plataforma e experiência do usuário</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          4. Compartilhamento de dados
        </h2>
        <p>
          <strong>Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing.</strong>
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Seus dados são armazenados no Firebase (Google Cloud Platform) e estão
          sujeitos às políticas de segurança do Google. Podemos compartilhar dados
          agregados e anônimos para fins de análise de mercado.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          5. Seus direitos (LGPD)
        </h2>
        <p>
          De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o
          direito de:
        </p>
        <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
          <li>Confirmar a existência de tratamento dos seus dados</li>
          <li>Acessar seus dados pessoais</li>
          <li>Corrigir dados incompletos ou desatualizados</li>
          <li>Solicitar a exclusão dos seus dados</li>
          <li>Revogar seu consentimento a qualquer momento</li>
        </ul>
        <p style={{ marginTop: "0.5rem" }}>
          Para exercer qualquer um desses direitos, entre em contato pelo e-mail:{" "}
          <strong>contato@laudofast.com.br</strong>
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          6. Segurança
        </h2>
        <p>
          Implementamos medidas de segurança técnicas e organizacionais para
          proteger seus dados contra acesso não autorizado, alteração, divulgação
          ou destruição. Seus dados são transmitidos por conexão criptografada
          (HTTPS) e armazenados em servidores seguros.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          7. Retenção de dados
        </h2>
        <p>
          Mantemos seus dados enquanto você estiver na lista de espera e por até
          12 meses após o último contato. Você pode solicitar a exclusão a
          qualquer momento.
        </p>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
          8. Contato
        </h2>
        <p>
          Se você tiver dúvidas sobre esta política ou sobre como tratamos seus
          dados, entre em contato:
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          <strong>E-mail:</strong> contato@laudofast.com.br
        </p>
      </section>

      <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "3rem 0 2rem" }} />

      <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
        Esta política pode ser atualizada periodicamente. Recomendamos que você a
        revise regularmente. Alterações significativas serão comunicadas por
        e-mail.
      </p>
    </main>
  );
}
