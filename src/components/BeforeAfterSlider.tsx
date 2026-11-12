import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { beforeAfterCase } = BUSINESS_CONFIG;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clampedX = Math.max(0, Math.min(x, rect.width));
    const percentage = (clampedX / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="oncesi-sonrasi" className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
            <span>Dönüşüm Hikayesi</span>
            <span aria-hidden="true">·</span>
            <span>Öncesi & Sonrası</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
            {beforeAfterCase.title}
          </h2>
          <p className="mt-4 text-base text-[#57524A] font-light leading-relaxed">
            {beforeAfterCase.subtitle} İmleci veya çizgiyi sağa-sola kaydırarak atölyemizdeki 
            restorasyon farkını birebir inceleyebilirsiniz.
          </p>
        </div>

        {/* Comparison Module */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive Split Slider (7 Cols) */}
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[4/3] w-full overflow-hidden select-none border border-[#EAE3D6] shadow-lg cursor-ew-resize bg-[#EAE3D6]/20"
            >
              {/* AFTER IMAGE (Background / Full Width) */}
              <img
                src={beforeAfterCase.afterImage}
                alt={beforeAfterCase.afterLabel}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* BEFORE IMAGE (Clipped by slider position) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={beforeAfterCase.beforeImage}
                  alt={beforeAfterCase.beforeLabel}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{
                    width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%',
                    height: '100%'
                  }}
                />
              </div>

              {/* Slider Divider Line & Thumb Handle */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1C1A17] border-2 border-white text-white flex items-center justify-center shadow-md">
                  <div className="flex items-center gap-0.5 text-[10px] font-bold tracking-tighter">
                    <span>◄</span>
                    <span>►</span>
                  </div>
                </div>
              </div>

              {/* Badges / Labels on Image */}
              <div className="absolute top-4 left-4 z-10 bg-[#1C1A17]/85 backdrop-blur-xs text-white text-[11px] uppercase tracking-wider px-3 py-1 font-medium pointer-events-none">
                {beforeAfterCase.beforeLabel}
              </div>

              <div className="absolute top-4 right-4 z-10 bg-[#9E7D53]/90 backdrop-blur-xs text-white text-[11px] uppercase tracking-wider px-3 py-1 font-medium pointer-events-none">
                {beforeAfterCase.afterLabel}
              </div>

              {/* Bottom interactive hint */}
              <div className="absolute bottom-3 inset-x-0 text-center pointer-events-none z-10">
                <span className="text-[11px] bg-black/60 text-white/90 px-3 py-1 rounded-full backdrop-blur-xs">
                  Fotoğrafı karşılaştırmak için kaydırın
                </span>
              </div>
            </div>

            {/* Quick Range Slider for Accessibility */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-[#57524A] font-medium whitespace-nowrap">Öncesi</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="w-full h-1.5 bg-[#EAE3D6] accent-[#9E7D53] rounded-lg cursor-pointer"
                aria-label="Öncesi ve sonrası geçiş kaydırıcısı"
              />
              <span className="text-xs text-[#1C1A17] font-semibold whitespace-nowrap">Sonrası</span>
            </div>
          </div>

          {/* Details & Specs Column (5 Cols) */}
          <div className="lg:col-span-5 text-left space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-[#9E7D53] font-medium uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Restorasyon Raporu</span>
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#1C1A17]">
                Eski Mobilyalarınız Yenisinden Daha Kaliteli Hale Geliyor
              </h3>
              <p className="text-sm text-[#57524A] font-light leading-relaxed">
                Klasik mobilyaların masif gürgen ve ceviz iskeletleri, günümüz seri üretim 
                mobilyalarından çok daha dayanıklıdır. Doğru sünger ve kumaşla yenilendiğinde 
                onlarca yıl daha konforla kullanılabilir.
              </p>
            </div>

            {/* Specs Table */}
            <div className="border border-[#EAE3D6] divide-y divide-[#EAE3D6] bg-[#F6F2EA]/40 text-xs sm:text-sm">
              {beforeAfterCase.details.map((item, idx) => (
                <div key={idx} className="p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div className="font-medium text-[#1C1A17] sm:col-span-1">{item.label}:</div>
                  <div className="text-[#87683F] line-through text-xs sm:col-span-1">{item.before}</div>
                  <div className="text-[#1C1A17] font-semibold sm:col-span-1 flex items-center gap-1">
                    <span className="text-[#9E7D53]">✓</span> {item.after}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href={createWhatsAppUrl("Merhaba, elimdeki eski koltuk için öncesi/sonrası gibi bir yenileme yaptırmak istiyorum. Fiyat teklifi alabilir miyim?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#B89768]" />
                <span>Benzer Mobilyam İçin Teklif Al</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
