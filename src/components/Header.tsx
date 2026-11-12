import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'anasayfa', label: 'Ana Sayfa' },
    { id: 'hizmetler', label: 'Hizmetlerimiz' },
    { id: 'projeler', label: 'Projeler' },
    { id: 'oncesi-sonrasi', label: 'Öncesi & Sonrası' },
    { id: 'kumaslar', label: 'Kumaşlar' },
    { id: 'hakkimizda', label: 'Hakkımızda' },
    { id: 'iletisim', label: 'İletişim' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE3D6] py-3.5'
            : 'bg-[#FBF9F5]/90 backdrop-blur-sm border-b border-[#EAE3D6]/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark (Strict single-line text mark) */}
            <a
              href="#anasayfa"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('anasayfa');
              }}
              className="group flex flex-col shrink-0 text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#1C1A17] uppercase group-hover:text-[#9E7D53] transition-colors whitespace-nowrap">
                VOLCE DESIGN
              </span>
              <span className="text-[10px] tracking-[0.2em] text-[#7F623C] uppercase font-sans -mt-1 font-medium">
                Döşeme & Restorasyon Atölyesi
              </span>
            </a>

            {/* Zone 2: Nav Links (Clean, single-line text links) */}
            <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-medium text-[#57524A]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`transition-colors whitespace-nowrap relative py-1 focus:outline-none cursor-pointer ${
                      isActive
                        ? 'text-[#1C1A17] font-semibold'
                        : 'hover:text-[#9E7D53]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#9E7D53] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`}
                className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#1C1A17] hover:text-[#9E7D53] transition-colors whitespace-nowrap"
                title="Hemen Arayın"
              >
                <Phone className="w-3.5 h-3.5 text-[#9E7D53]" />
                <span>{BUSINESS_CONFIG.contact.phone}</span>
              </a>

              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors rounded-none tracking-wide whitespace-nowrap shadow-sm cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp'tan Teklif Al</span>
              </a>
            </div>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1A17] hover:text-[#9E7D53] focus:outline-none cursor-pointer"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-18 inset-x-0 bg-[#FBF9F5] border-b border-[#EAE3D6] shadow-xl p-6 transition-transform">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left text-base font-medium py-2 border-b border-[#EAE3D6]/50 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-[#9E7D53] font-semibold'
                      : 'text-[#1C1A17] hover:text-[#9E7D53]'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ile Hızlı Fiyat Al</span>
                </a>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-[#1C1A17] border border-[#EAE3D6] hover:bg-[#F6F2EA] transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9E7D53]" />
                  <span>Telefon: {BUSINESS_CONFIG.contact.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
