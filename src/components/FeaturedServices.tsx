import React, { useState } from 'react';
import { MessageSquare, ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const FeaturedServices: React.FC = () => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedServiceId(expandedServiceId === id ? null : id);
  };

  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-[#F6F2EA]/50 border-y border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
            <span>Hizmet Yelpazemiz</span>
            <span aria-hidden="true">·</span>
            <span>Atölye Uzmanlıkları</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
            Ustalıkla Gerçekleştirdiğimiz Mobilya Hizmetleri
          </h2>
          <p className="mt-4 text-base text-[#57524A] font-light leading-relaxed">
            Her mobilyanın ahşap iskeleti, dolgusu ve kullanım amacı farklıdır. İhtiyacınıza uygun 
            çözümü seçerek atölyemizden hızlı fiyat teklifi ve kumaş kartelası talep edebilirsiniz.
          </p>
        </div>

        {/* Services List / Cards */}
        <div className="space-y-12">
          {BUSINESS_CONFIG.services.map((service, index) => {
            const isExpanded = expandedServiceId === service.id;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="bg-[#FBF9F5] border border-[#EAE3D6] overflow-hidden transition-all duration-300 hover:border-[#B89768]/60 hover:shadow-md"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column (5 Cols) */}
                  <div className={`lg:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px] overflow-hidden bg-[#EAE3D6] ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center transform hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-[#1C1A17]/80 backdrop-blur-xs text-[#FBF9F5] text-[11px] font-medium tracking-wider uppercase px-3 py-1">
                      0{index + 1}. Hizmet
                    </div>
                  </div>

                  {/* Content Column (7 Cols) */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 text-left ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2 text-xs text-[#9E7D53] font-medium uppercase tracking-wider mb-2">
                      <span>{BUSINESS_CONFIG.name} Atölyesi</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1A17] mb-3">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#57524A] font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pt-2 border-t border-[#EAE3D6]">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs sm:text-sm text-[#2E2B26]">
                          <Check className="w-4 h-4 text-[#9E7D53] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Expanded Detail (Accordion style for more information) */}
                    {isExpanded && (
                      <div className="mb-6 p-4 bg-[#F6F2EA] border-l-2 border-[#9E7D53] text-xs sm:text-sm text-[#57524A] leading-relaxed transition-all">
                        {service.longDescription}
                      </div>
                    )}

                    {/* Actions: WhatsApp Quote + Read Details */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <a
                        href={createWhatsAppUrl(service.whatsappPrefill)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-xs cursor-pointer group"
                      >
                        <MessageSquare className="w-4 h-4 text-[#B89768] group-hover:text-white transition-colors" />
                        <span>Bu Hizmet İçin WhatsApp'tan Teklif Al</span>
                      </a>

                      <button
                        onClick={() => toggleExpand(service.id)}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#57524A] hover:text-[#1C1A17] py-2 cursor-pointer transition-colors"
                      >
                        <span>{isExpanded ? 'Daha Az Detay' : 'Süreç Detaylarını Gör'}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project Note */}
        <div className="mt-12 p-6 sm:p-8 bg-[#FBF9F5] border border-[#EAE3D6] text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg font-medium text-[#1C1A17]">
              Farklı bir model veya özel bir tasarım projeniz mi var?
            </h4>
            <p className="text-xs sm:text-sm text-[#57524A]">
              Fotoğrafını WhatsApp üzerinden bize gönderin, döşeme ve restorasyon maliyetini aynı gün hesaplayalım.
            </p>
          </div>
          <a
            href={createWhatsAppUrl("Merhaba, elimde özel bir mobilya fotoğrafı var, döşeme maliyetini öğrenmek için paylaşmak istiyorum.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#1C1A17] border border-[#1C1A17] hover:bg-[#1C1A17] hover:text-white transition-colors whitespace-nowrap"
          >
            <span>Fotoğraf Gönder & Fiyat Al</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
