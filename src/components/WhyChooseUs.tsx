import React from 'react';
import { BUSINESS_CONFIG } from '../data/config';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F6F2EA]/40 border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
            <span>Farkımız & Güvencemiz</span>
            <span aria-hidden="true">·</span>
            <span>Neden Volce Mobilya?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
            Mobilya Yenilemede Standartları Yeniden Belirliyoruz
          </h2>
          <p className="mt-4 text-base text-[#57524A] font-light leading-relaxed">
            Koltuk ve mobilya döşemesinde en sık yaşanan sünger çökmesi, potluk ve dikiş atması gibi 
            sorunları doğru malzeme ve ödünsüz zanaatkarlık disiplini ile ortadan kaldırıyoruz.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BUSINESS_CONFIG.advantages.map((item) => (
            <div
              key={item.number}
              className="bg-[#FBF9F5] border border-[#EAE3D6] p-7 sm:p-8 flex flex-col justify-between hover:border-[#9E7D53] transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-light text-[#9E7D53] block mb-4">
                  {item.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1C1A17] mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57524A] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE3D6]/70 flex items-center justify-between text-xs text-[#9E7D53] font-medium">
                <span>Volce Güvencesi</span>
                <span>—</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
