import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Tooltip / Invitation Prompt */}
      {showTooltip && (
        <div className="mb-3 p-4 bg-[#FBF9F5] border border-[#EAE3D6] shadow-xl text-left max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-xs font-semibold text-[#1C1A17] font-serif">
              {BUSINESS_CONFIG.name} WhatsApp Hattı
            </span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#57524A] hover:text-[#1C1A17] p-0.5 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-xs text-[#57524A] leading-relaxed mb-3">
            Mobilyanızın fotoğrafını iletin, döşeme ve restorasyon maliyetini aynı gün hesaplayalım.
          </p>
          <a
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-2 text-xs font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors"
          >
            Sohbete Başla
          </a>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!showTooltip && (
          <button
            onClick={() => setShowTooltip(true)}
            className="hidden sm:inline-flex items-center gap-1.5 bg-[#FBF9F5]/95 text-[#1C1A17] text-xs font-medium px-3 py-2 border border-[#EAE3D6] shadow-md hover:border-[#9E7D53] transition-colors cursor-pointer"
          >
            <span>Fiyat Sorun</span>
          </button>
        )}

        <a
          href={createWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setShowTooltip(true)}
          className="w-13 h-13 bg-[#1C1A17] hover:bg-[#9E7D53] text-[#B89768] hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 border border-[#B89768]/40 hover:scale-105 cursor-pointer"
          aria-label="WhatsApp üzerinden mesaj gönderin"
          title="WhatsApp İletişim"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};
