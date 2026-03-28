import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import SocialProofSection from "./components/SocialProofSection";
import FormSection from "./components/FormSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Urgency bar */}
      <div className="urgency-bar">
        🔥 <strong>Acesso antecipado limitado.</strong> Apenas 200 vagas
        disponíveis. Reserve a sua agora.
      </div>

      <Navbar />

      <main style={{ paddingTop: "40px" }}>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <SocialProofSection />
        <FormSection />
        <CtaSection />
      </main>

      <Footer />
    </>
  );
}
