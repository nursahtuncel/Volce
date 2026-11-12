import React from 'react';
import { Phone, MessageSquare, MapPin, Instagram, Mail, Clock, Navigation, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const ContactSection: React.FC = () => {
  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-[#FBF9F5] relative border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
            <span>İletişim & Lokasyon</span>
            <span aria-hidden="true">·</span>
            <span>{BUSINESS_CONFIG.name}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
            Atölyemizle Doğrudan İletişime Geçin
          </h2>
          <p className="mt-4 text-base text-[#57524A] font-light leading-relaxed">
            Mobilyanızın döşeme, yenileme veya özel üretim talepleri için telefon veya WhatsApp üzerinden doğrudan ustamıza ulaşabilir; Şile'deki atölyemizi ziyaret ederek kumaş kartelalarımızı yakından inceleyebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Cards (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* WhatsApp Direct Action Card */}
            <div className="p-8 bg-[#1C1A17] text-white border border-[#2E2B26] shadow-sm">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2 text-[#B89768] text-xs font-semibold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>En Hızlı Yanıt Kanalı</span>
                </div>
                <span className="text-[11px] bg-[#9E7D53]/20 text-[#B89768] px-2.5 py-0.5 border border-[#9E7D53]/40">
                  Ort. 15 Dk. Yanıt
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-white mb-2">
                Fotoğraf Gönderin, Fiyat Alın
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE3D6]/80 font-light leading-relaxed mb-6">
                Yeniletmek istediğiniz koltuk veya mobilyanızın fotoğraflarını WhatsApp hattımıza iletin. Ustamız iskelet, sünger ve kumaş metrajı hesaplamasını yaparak aynı gün fiyat teklifi sunsun.
              </p>

              <div className="space-y-3">
                <a
                  href={createWhatsAppUrl("Merhaba Volce Design, mobilyamın fotoğrafını gönderip döşeme/restorasyon fiyat teklifi almak istiyorum.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-xs sm:text-sm font-semibold text-[#1C1A17] bg-[#B89768] hover:bg-white transition-colors cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp ile Fotoğraf Gönder</span>
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={createWhatsAppUrl("Merhaba Volce Design, kumaş kartelası ve döşemelik kumaş seçenekleri hakkında bilgi almak istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-center text-xs text-[#EAE3D6] border border-white/20 hover:border-white hover:text-white transition-colors"
                  >
                    Kumaş Kartelası İste →
                  </a>
                  <a
                    href={createWhatsAppUrl("Merhaba Volce Design, atölyenizi ziyaret etmek ve randevu almak istiyorum.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-center text-xs text-[#EAE3D6] border border-white/20 hover:border-white hover:text-white transition-colors"
                  >
                    Atölye Randevusu Al →
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Call & Telephone Card */}
            <div className="p-7 bg-[#F6F2EA]/60 border border-[#EAE3D6] space-y-4">
              <div className="flex items-center gap-2 text-xs text-[#9E7D53] font-semibold uppercase tracking-wider">
                <Phone className="w-4 h-4" />
                <span>Doğrudan Telefon Hattı</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-[#57524A]">Müşteri & Danışma Hattı:</div>
                  <a
                    href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`}
                    className="font-serif text-2xl sm:text-3xl font-semibold text-[#1C1A17] hover:text-[#9E7D53] transition-colors tracking-tight block mt-0.5"
                  >
                    {BUSINESS_CONFIG.contact.phoneDisplay}
                  </a>
                </div>

                <a
                  href={`tel:${BUSINESS_CONFIG.contact.phoneClean}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Hemen Arayın</span>
                </a>
              </div>

              <p className="text-xs text-[#57524A] pt-2 border-t border-[#EAE3D6]">
                Pazartesi – Cumartesi 09:00 – 19:00 saatleri arasında doğrudan atölye ustamız ile görüşebilirsiniz.
              </p>
            </div>

            {/* Working Hours & Service Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border border-[#EAE3D6] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1A17]">
                  <Clock className="w-4 h-4 text-[#9E7D53]" />
                  <span>Çalışma Saatlerimiz</span>
                </div>
                <p className="text-xs text-[#57524A] leading-relaxed">
                  {BUSINESS_CONFIG.contact.workingHours}
                  <br />
                  <span className="text-[#9E7D53] font-medium">{BUSINESS_CONFIG.contact.sundayHours}</span>
                </p>
              </div>

              <div className="p-5 bg-white border border-[#EAE3D6] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1C1A17]">
                  <CheckCircle2 className="w-4 h-4 text-[#9E7D53]" />
                  <span>Hizmet & Teslimat Bölgesi</span>
                </div>
                <p className="text-xs text-[#57524A] leading-relaxed">
                  {BUSINESS_CONFIG.contact.serviceArea}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Address, Google Maps & Directions (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Address & Navigation Action */}
            <div className="p-7 bg-[#F6F2EA]/60 border border-[#EAE3D6] space-y-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#9E7D53] font-semibold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Atölye Adresi</span>
                </div>
                <span className="text-xs text-[#7F623C] font-medium">Şile / İstanbul</span>
              </div>

              <div>
                <h4 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1A17]">
                  {BUSINESS_CONFIG.name} Atölyesi
                </h4>
                <p className="text-sm text-[#2E2B26] mt-2 font-light leading-relaxed">
                  {BUSINESS_CONFIG.contact.address}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B89768]" />
                  <span>Google Haritalar'da Yol Tarifi Al</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <a
                  href={`mailto:${BUSINESS_CONFIG.contact.email}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-[#1C1A17] border border-[#EAE3D6] hover:bg-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#9E7D53]" />
                  <span>{BUSINESS_CONFIG.contact.email}</span>
                </a>
              </div>
            </div>

            {/* Google Maps Interactive Container */}
            <div className="border border-[#EAE3D6] bg-white overflow-hidden shadow-sm">
              <div className="bg-[#1C1A17] text-white p-3.5 text-xs font-medium flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#B89768]" />
                  <span>{BUSINESS_CONFIG.name} — Canlı Harita Konumu</span>
                </div>
                <a
                  href={BUSINESS_CONFIG.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B89768] hover:text-white transition-colors text-[11px] underline flex items-center gap-1"
                >
                  <span>Haritada Büyüt</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative aspect-[16/11] w-full bg-[#EAE3D6]">
                <iframe
                  src={BUSINESS_CONFIG.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Volce Design Doğancılı Şile Konum Haritası"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 bg-[#F6F2EA]/40 border-t border-[#EAE3D6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#57524A]">
                <div className="flex items-center gap-1.5">
                  <Instagram className="w-4 h-4 text-[#9E7D53]" />
                  <a
                    href={BUSINESS_CONFIG.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1C1A17] hover:text-[#9E7D53] transition-colors"
                  >
                    Instagram: {BUSINESS_CONFIG.contact.instagramHandle}
                  </a>
                </div>
                <span className="text-[11px] text-[#7F623C]">
                  Atölye otoparkı mevcuttur
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
