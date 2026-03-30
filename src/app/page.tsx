import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechnologySpecs from "@/components/TechnologySpecs";
import ServiceSection from "@/components/ServiceSection";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingAction from "@/components/FloatingAction";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col antialiased bg-white selection:bg-primary-orange selection:text-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <TechnologySpecs />
      <ServiceSection />
      <PortfolioCarousel />
      <ContactSection />
      <FloatingAction />
      <Footer />
    </main>
  );
}
