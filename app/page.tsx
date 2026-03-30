import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import BenefitsSection from "./components/BenefitsSection";
import SocialProofSection from "./components/SocialProofSection";
import FaqSection from "./components/FaqSection";
import FounderSection from "./components/FounderSection";
import FormSection from "./components/FormSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "0" }}>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <SocialProofSection />
        <FaqSection />
        <FounderSection />
        <FormSection />
        <CtaSection />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
