import React from 'react';
import { Star, Quote } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/config';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
              <span>Müşteri Memnuniyeti</span>
              <span aria-hidden="true">·</span>
              <span>Geri Bildirimler</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
              Mobilyasını Yenilediğimiz Evlerden Yorumlar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#57524A] font-light">
              Müşterilerimizin yaşadığı dönüşüm heyecanı, işimizi her gün aynı tutkuyla yapmamızın en büyük kaynağıdır.
            </p>
          </div>

          <div className="text-xs text-[#7F623C] bg-[#F6F2EA] px-3.5 py-2 border border-[#EAE3D6] self-start md:self-auto">
            <span>Örnek Müşteri Yorumları (Düzenlenebilir Alan)</span>
          </div>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BUSINESS_CONFIG.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F6F2EA]/40 border border-[#EAE3D6] p-7 sm:p-8 flex flex-col justify-between hover:border-[#9E7D53]/60 transition-all hover:shadow-sm"
            >
              <div className="space-y-4">
                {/* Quote Icon and Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#9E7D53]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4C9BA]" />
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-[#2E2B26] font-light leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Project Details */}
              <div className="mt-6 pt-4 border-t border-[#EAE3D6]">
                <div className="font-serif text-base font-medium text-[#1C1A17]">
                  {t.author}
                </div>
                <div className="text-xs text-[#57524A] flex items-center gap-1.5 mt-0.5">
                  <span>{t.role}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t.location}</span>
                </div>
                <div className="text-[11px] text-[#9E7D53] font-medium mt-1">
                  Uygulama: {t.project}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
