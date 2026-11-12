import React from 'react';
import { Home, ArrowLeft, MessageSquare } from 'lucide-react';
import { createWhatsAppUrl } from '../data/config';

interface Custom404Props {
  onReturnHome: () => void;
}

export const Custom404: React.FC<Custom404Props> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#FBF9F5] flex items-center justify-center px-4 py-24 text-left">
      <div className="max-w-xl w-full border border-[#EAE3D6] p-8 sm:p-12 bg-white shadow-sm space-y-6">
        <div className="text-xs uppercase tracking-widest text-[#9E7D53] font-semibold">
          Hata 404 · Sayfa Bulunamadı
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#1C1A17] leading-tight">
          Aradığınız Sayfa Atölyemizde Bulunamadı
        </h1>

        <p className="text-sm sm:text-base text-[#57524A] font-light leading-relaxed">
          Ulaşmaya çalıştığınız sayfa taşınmış, adı değiştirilmiş veya geçici olarak kullanım dışı kalmış olabilir. 
          Ana sayfamıza dönerek mobilya döşeme ve restorasyon hizmetlerimizi inceleyebilirsiniz.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            onClick={onReturnHome}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </button>

          <a
            href={createWhatsAppUrl("Merhaba, web sitenizde bir sayfayı arıyordum ancak bulamadım. Bilgi alabilir miyim?")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-medium text-[#1C1A17] border border-[#EAE3D6] hover:bg-[#F6F2EA] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#9E7D53]" />
            <span>WhatsApp ile İletişime Geç</span>
          </a>
        </div>
      </div>
    </div>
  );
};
