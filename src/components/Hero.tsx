import React from 'react';
import { MessageSquare, ArrowRight, Truck, ShieldCheck, Sparkles, Clock } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenCalculator }) => {
  return (
    <section id="anasayfa" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F6F2EA]/60 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Quiet Kick-off Tag */}
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53]">
              <span>Koltuk Döşeme</span>
              <span aria-hidden="true">·</span>
              <span>Mobilya Restorasyonu</span>
              <span aria-hidden="true">·</span>
              <span>Özel Üretim</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#1C1A17] leading-[1.12] text-balance">
              Mobilyalarınıza Yeniden Hayat Veriyoruz.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#57524A] font-light leading-relaxed max-w-2xl">
              Eskiyen veya tarzını yenilemek istediğiniz koltuk, berjer ve sandalyelerinizi, 
              atölyemizin usta işçiliği, birinci sınıf sünger kalitesi ve zengin kumaş 
              kartelalarıyla ilk günkü zarafetine ve konforuna kavuşturuyoruz.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={createWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-sm cursor-pointer group"
              >
                <MessageSquare className="w-4 h-4 text-[#B89768] group-hover:text-white transition-colors" />
                <span>WhatsApp'tan Teklif Al</span>
              </a>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium text-[#1C1A17] border border-[#1C1A17]/30 hover:border-[#1C1A17] hover:bg-[#F6F2EA] transition-colors cursor-pointer group"
              >
                <span>Çalışmalarımızı İnceleyin</span>
                <ArrowRight className="w-4 h-4 text-[#9E7D53] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Instant Calculator Teaser */}
            <div className="pt-2 text-xs text-[#57524A] flex items-center gap-2">
              <span className="text-[#9E7D53] font-medium">Hızlı Tahmin:</span>
              <button
                onClick={onOpenCalculator}
                className="underline hover:text-[#1C1A17] cursor-pointer"
              >
                Mobilyanız için anında WhatsApp fiyat teklifi mesajı hazırlayın →
              </button>
            </div>
          </div>

          {/* Right Column: Large Editorial Furniture Image (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] lg:aspect-[5/6] overflow-hidden shadow-xl border border-[#EAE3D6] bg-[#EAE3D6]/30">
              <img
                src="/src/assets/images/hero_luxury_sofa_1794493578355.jpg"
                alt="Volce Design - Lüks Bukle Kumaş Kaplamalı Kavisli Koltuk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Subtle Editorial Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#1C1A17]/85 via-[#1C1A17]/40 to-transparent text-white text-left">
                <p className="text-xs tracking-wider uppercase text-[#EAE3D6]/80 font-medium">
                  Atölye Uygulaması
                </p>
                <p className="font-serif text-lg text-white font-medium">
                  Fildişi Bukle Özel Üretim Kavisli Salon Koltuğu
                </p>
              </div>
            </div>

            {/* Experience & Quality Badge (Geometric, un-pill, refined) */}
            <div className="hidden sm:block absolute -bottom-5 -left-5 bg-[#FBF9F5] border border-[#EAE3D6] p-4 shadow-lg max-w-[200px] text-left">
              <div className="flex items-center gap-1.5 text-[#9E7D53] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] font-semibold uppercase tracking-wider">Titiz İşçilik</span>
              </div>
              <p className="text-xs text-[#57524A] leading-snug">
                35 DNS yüksek dansite ortopedik sünger garantisi
              </p>
            </div>
          </div>
        </div>

        {/* 4 Trust Points Strip Below Hero */}
        <div className="mt-16 pt-10 border-t border-[#EAE3D6] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Adresten Alım & Teslim</h4>
              <p className="text-xs text-[#57524A] mt-0.5">İstanbul geneli güvenli korumalı nakliye</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Garantili Usta İşçiliği</h4>
              <p className="text-xs text-[#57524A] mt-0.5">İskelet takviyesi ve kusursuz overlok dikiş</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">100+ Kumaş Seçeneği</h4>
              <p className="text-xs text-[#57524A] mt-0.5">Bukle, nubuk, keten, kadife & hakiki deri</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Zamanında Teslim</h4>
              <p className="text-xs text-[#57524A] mt-0.5">Belirlenen takvime sadık üretim ve montaj</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
