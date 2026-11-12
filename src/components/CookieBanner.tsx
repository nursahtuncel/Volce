import React, { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('volce_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('volce_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-[#FBF9F5] border-t border-[#EAE3D6] p-4 shadow-lg text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#9E7D53] shrink-0 mt-0.5" />
          <p className="text-xs text-[#57524A] leading-relaxed">
            Sitemizde kullanıcı deneyiminizi geliştirmek ve hizmet kalitemizi artırmak amacıyla KVKK mevzuatına uygun çerezler (cookies) kullanılmaktadır.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors cursor-pointer"
          >
            Kabul Ediyorum
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 text-[#57524A] hover:text-[#1C1A17] transition-colors cursor-pointer"
            aria-label="Bildirimi Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
