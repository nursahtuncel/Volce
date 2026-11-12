import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedServices } from './components/FeaturedServices';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProjectsGallery } from './components/ProjectsGallery';
import { QuickQuoteCalculator } from './components/QuickQuoteCalculator';
import { FabricShowcase } from './components/FabricShowcase';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CookieBanner } from './components/CookieBanner';
import { Custom404 } from './components/Custom404';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('anasayfa');
  const [is404Mode, setIs404Mode] = useState<boolean>(false);

  // Scroll spy to highlight active section in top bar
  useEffect(() => {
    const sections = ['anasayfa', 'hizmetler', 'projeler', 'oncesi-sonrasi', 'kumaslar', 'hakkimizda', 'iletisim'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (is404Mode) {
      setIs404Mode(false);
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenCalculator = () => {
    const el = document.getElementById('teklif-hesapla');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projeler');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (is404Mode) {
    return (
      <div className="min-h-screen bg-[#FBF9F5] text-[#1C1A17] font-sans">
        <Custom404 onReturnHome={() => setIs404Mode(false)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#1C1A17] font-sans selection:bg-[#B89768]/20 selection:text-[#1C1A17]">
      {/* Sticky Header with 3-Zone Contract */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={handleExploreProjects}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 2. Featured Services (Koltuk Döşeme, Mobilya Yenileme, Sandalye Döşeme, Özel Tasarım, Kumaş Seçenekleri) */}
        <FeaturedServices />

        {/* 3. Interactive Before & After Slider */}
        <BeforeAfterSlider />

        {/* 4. Projects & Gallery with Category Filters and High-Res Modal */}
        <ProjectsGallery />

        {/* 5. Interactive WhatsApp Quote Calculator & Request Assistant */}
        <QuickQuoteCalculator />

        {/* 6. Fabric & Materials Showcase */}
        <FabricShowcase />

        {/* 7. About Us & Atelier Craftsmanship */}
        <AboutSection />

        {/* 8. Why Choose Us (4 Core Standards) */}
        <WhyChooseUs />

        {/* 9. Testimonials (Editable Customer Feedback) */}
        <TestimonialsSection />

        {/* 10. Contact Section with Form, Direct Links & Map */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp />

      {/* Privacy & Cookie Notice */}
      <CookieBanner />
    </div>
  );
}
