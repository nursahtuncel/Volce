import React from 'react';
import { Check, Shield, Award, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const AboutSection: React.FC = () => {
  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image & Atelier Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] overflow-hidden border border-[#EAE3D6] bg-[#EAE3D6]/40 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80"
                alt={`${BUSINESS_CONFIG.name} Döşeme Ustası Atölye Çalışması`}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/images/craftsman_upholstery_detail_1794493579160.jpg";
                }}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-[#1C1A17]/85 to-transparent text-white text-left">
                <span className="text-[11px] uppercase tracking-wider text-[#EAE3D6] block">
                  Atölye Değerlerimiz
                </span>
                <span className="font-serif text-lg font-medium">
                  Geleneksel Ustalık, Çağdaş Tasarım
                </span>
              </div>
            </div>

            {/* Inset Quote / Core Ethos */}
            <div className="mt-4 p-4 bg-[#F6F2EA] border border-[#EAE3D6] text-left">
              <p className="text-xs text-[#57524A] italic leading-relaxed">
                "Her mobilya bir aile mirası veya özenle seçilmiş bir yaşam alanının parçasıdır. 
                İşimize bu saygıyla yaklaşıyor, her dikişte kalıcılığı hedefliyoruz."
              </p>
            </div>
          </div>

          {/* Editorial Content (7 Cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53]">
                <span>Kurumsal Yaklaşımımız</span>
                <span aria-hidden="true">·</span>
                <span>Zanaat & Güven</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
                Mobilyanın Ruhunu Anlayan Usta Ellere Emanetsiniz
              </h2>
            </div>

            <p className="text-base text-[#57524A] font-light leading-relaxed">
              <strong className="text-[#1C1A17] font-medium">{BUSINESS_CONFIG.name}</strong>, 
              koltuk döşeme, mobilya restorasyonu ve kişiye özel mobilya üretimi alanında 
              uzmanlaşmış butik bir üretim ve yenileme atölyesidir.
            </p>

            <p className="text-sm sm:text-base text-[#57524A] font-light leading-relaxed">
              Bizim için döşeme yalnızca kumaş kaplamaktan ibaret değildir. Atölyemize giren her 
              mobilyanın önce iskelet ve yay sistemleri incelenir; gevşeyen bağlantılar fırınlanmış 
              ahşap takviyeleriyle güçlendirilir. Çöken süngerler ortopedik 35 DNS HR bloklarla 
              yenilenir ve seçtiğiniz kumaş, kumaşın desen ve iplik yönüne dikkat edilerek el işçiliğiyle giydirilir.
            </p>

            {/* Core Values 3 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#EAE3D6]">
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1A17]">
                  <Shield className="w-4 h-4 text-[#9E7D53]" />
                  <span>İskelet Sağlamlığı</span>
                </div>
                <p className="text-xs text-[#57524A] leading-relaxed">
                  Gürgen ağacı ve çelik yay mekanizmalarında sıfır toleranslı sağlamlaştırma.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1A17]">
                  <Award className="w-4 h-4 text-[#9E7D53]" />
                  <span>Konfor Standartı</span>
                </div>
                <p className="text-xs text-[#57524A] leading-relaxed">
                  Çökme yapmayan, uzun yıllar ilk formunu koruyan yüksek dansiteli süngerler.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#1C1A17]">
                  <HeartHandshake className="w-4 h-4 text-[#9E7D53]" />
                  <span>Müşteri Memnuniyeti</span>
                </div>
                <p className="text-xs text-[#57524A] leading-relaxed">
                  Adresten teslim alma, şeffaf süreç bilgilendirmesi ve zamanında teslimat.
                </p>
              </div>
            </div>

            {/* Checklist of Principles */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2E2B26]">
                <Check className="w-4 h-4 text-[#9E7D53] shrink-0" />
                <span>Seri üretim fabrikasyon malzemeler yerine birinci sınıf atölye bileşenleri</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2E2B26]">
                <Check className="w-4 h-4 text-[#9E7D53] shrink-0" />
                <span>Mekanınıza özel yerinde kumaş seçimi ve profesyonel keşif desteği</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2E2B26]">
                <Check className="w-4 h-4 text-[#9E7D53] shrink-0" />
                <span>Eski mobilyanızı değerlendirerek hem bütçenizi hem sürdürülebilirliği koruma</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
