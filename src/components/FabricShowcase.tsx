import React from 'react';
import { Layers, Droplets, Wind, ShieldCheck, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const FabricShowcase: React.FC = () => {
  return (
    <section id="kumaslar" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
              <span>Kartela & Doku Kataloğu</span>
              <span aria-hidden="true">·</span>
              <span>Seçkin Kumaşlar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
              Evinizin Ruhu İçin Premium Kumaş Koleksiyonu
            </h2>
            <p className="mt-3 text-base text-[#57524A] font-light leading-relaxed">
              Döşemede kumaş kalitesi, mobilyanın ömrünü ve estetiğini belirleyen en kritik unsurdur. 
              Atölyemizde yalnızca yüksek sürtünme dayanımlı, kolay temizlenebilen ve solmayan kumaşlar kullanılır.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={createWhatsAppUrl("Merhaba, mobilyam için kumaş kartelası görmek istiyorum, atölyenizi ziyaret edebilir miyim veya numune gönderebiliyor musunuz?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-[#1C1A17] border border-[#1C1A17] hover:bg-[#1C1A17] hover:text-white transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#9E7D53]" />
              <span>Kumaş Kartelası Talep Et</span>
            </a>
          </div>
        </div>

        {/* 5 Fabric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {BUSINESS_CONFIG.fabricTypes.map((fabric, idx) => (
            <div
              key={idx}
              className="bg-[#F6F2EA]/40 border border-[#EAE3D6] p-6 sm:p-7 hover:border-[#9E7D53] hover:bg-white transition-all duration-300 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9E7D53] font-semibold">
                  0{idx + 1}. Koleksiyon
                </span>
                <span className="text-[11px] font-medium text-[#7F623C] bg-[#EAE3D6] px-2.5 py-0.5">
                  {fabric.badge}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
                {fabric.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
                {fabric.description}
              </p>
            </div>
          ))}

          {/* Special Fabric Card for Custom Color matching */}
          <div className="bg-[#1C1A17] text-white p-6 sm:p-7 space-y-3 border border-[#1C1A17]">
            <div className="flex items-center justify-between text-[#B89768] text-xs uppercase tracking-wider font-semibold">
              <span>Özel Renk Eşleme</span>
              <Layers className="w-4 h-4" />
            </div>

            <h3 className="font-serif text-2xl font-medium text-white">
              Kendi Kumaşınızı Getirin
            </h3>

            <p className="text-xs sm:text-sm text-[#EAE3D6]/80 font-light leading-relaxed">
              Beğendiğiniz veya mimarınızın belirlediği özel döşemelik kumaşı siz temin edebilirsiniz; 
              atölyemiz yalnızca usta işçilik ve sünger yenileme hizmeti sunar.
            </p>
          </div>
        </div>

        {/* 3 Material Standards Guarantee */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#F6F2EA] border border-[#EAE3D6]">
          <div className="flex items-start gap-3">
            <Droplets className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Nano Su & Leke İtici Koruma</h4>
              <p className="text-xs text-[#57524A] mt-1">Sıvı dökülmelerinde kumaş içine işlemeden kolayca silinir.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Wind className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Doğal & Nefes Alabilir Doku</h4>
              <p className="text-xs text-[#57524A] mt-1">Terletme yapmayan, hava sirkülasyonu sağlayan elyaf yapısı.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-[#1C1A17]">Yüksek Sürtünme Dayanımı (Martindale)</h4>
              <p className="text-xs text-[#57524A] mt-1">45.000+ sürtünme testinden geçmiş aşınmaya dirençli kumaşlar.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
