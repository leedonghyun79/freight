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
    <main className="min-h-screen flex flex-col antialiased bg-white selection:bg-primary-orange selection:text-white">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <MiddleSection />
      <ServiceSection />
      <TechnologySpecs />
      <PortfolioCarousel />
      <FloatingAction />
      <Footer />
    </main>
  );
}
