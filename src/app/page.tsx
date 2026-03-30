import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import MiddleSection from "@/components/MiddleSection";
import ServiceSection from "@/components/ServiceSection";
import TechnologySpecs from "@/components/TechnologySpecs";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import FloatingAction from "@/components/FloatingAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col antialiased selection:bg-primary-orange selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Scroll Overlay Container: Subsequent sections scroll OVER the Hero */}
      <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <FeatureStrip />
        <MiddleSection />
        <ServiceSection />
        <TechnologySpecs />
        <PortfolioCarousel />
        <FloatingAction />
        <Footer />
      </div>
    </main>
  );
}
