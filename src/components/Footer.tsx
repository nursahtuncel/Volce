import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Mail, ArrowUp } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1A17] text-white pt-16 pb-12 border-t border-[#2E2B26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Craftsmanship (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl font-semibold tracking-wider text-white uppercase block">
              {BUSINESS_CONFIG.name}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#B89768] font-medium block">
              Koltuk Döşeme & Mobilya Restorasyonu
            </span>
            <p className="text-xs sm:text-sm text-[#EAE3D6]/70 font-light leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.description}
            </p>
            <div className="pt-2">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#B89768] hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ile Doğrudan Ustaya Ulaşın →</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B89768]">
              Hizmetlerimiz
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE3D6]/80 font-light">
              {BUSINESS_CONFIG.services.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('hizmetler')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Site Map (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B89768]">
              Hızlı Erişim
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#EAE3D6]/80 font-light">
              <li>
                <button onClick={() => onNavigate('anasayfa')} className="hover:text-white transition-colors cursor-pointer">
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hakkimizda')} className="hover:text-white transition-colors cursor-pointer">
                  Hakkımızda
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('projeler')} className="hover:text-white transition-colors cursor-pointer">
                  Projelerimiz
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('oncesi-sonrasi')} className="hover:text-white transition-colors cursor-pointer">
                  Öncesi & Sonrası
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kumaslar')} className="hover:text-white transition-colors cursor-pointer">
                  Kumaş Kartelası
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('iletisim')} className="hover:text-white transition-colors cursor-pointer">
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Workshop (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#B89768]">
              Atölye İletişim
            </h4>
            <div className="space-y-2 text-xs text-[#EAE3D6]/80 font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B89768] shrink-0 mt-0.5" />
                <span>{BUSINESS_CONFIG.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B89768] shrink-0" />
                <a href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#B89768] shrink-0" />
                <a href={`mailto:${BUSINESS_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_CONFIG.contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#B89768] shrink-0" />
                <a
                  href={BUSINESS_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS_CONFIG.contact.instagramHandle}
                </a>
              </p>
            </div>
            <div className="pt-2 text-[11px] text-[#B89768]/90 font-medium">
              {BUSINESS_CONFIG.contact.workingHours}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Quiet Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE3D6]/60">
          <p>
            © {new Date().getFullYear()} {BUSINESS_CONFIG.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[11px]">İstanbul Koltuk Döşeme & Mobilya Restorasyonu</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer"
            >
              <span>Yukarı Çık</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#B89768]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
