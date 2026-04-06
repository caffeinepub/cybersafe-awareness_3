import { Toaster } from "@/components/ui/sonner";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestNews from "./components/LatestNews";
import Navbar from "./components/Navbar";
import PreventionTips from "./components/PreventionTips";
import QuizSection from "./components/QuizSection";
import RealLifeExamples from "./components/RealLifeExamples";
import Resources from "./components/Resources";
import ThreatsSection from "./components/ThreatsSection";
import ToolsProtection from "./components/ToolsProtection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ThreatsSection />
        <RealLifeExamples />
        <PreventionTips />
        <ToolsProtection />
        <QuizSection />
        <LatestNews />
        <Resources />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
