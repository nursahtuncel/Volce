import React, { useState } from 'react';
import { Calculator, MessageSquare, CheckCircle, RefreshCw, Send } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

export const QuickQuoteCalculator: React.FC = () => {
  const [furnitureType, setFurnitureType] = useState<string>("3'lü Koltuk");
  const [serviceScope, setServiceScope] = useState<string>("Sünger Yenileme + Kumaş Değişimi");
  const [fabricType, setFabricType] = useState<string>("Leke Tutmaz Nubuk");
  const [district, setDistrict] = useState<string>("");
  const [extraNote, setExtraNote] = useState<string>("");

  const furnitureOptions = [
    { label: "3'lü Standart Koltuk", id: "3'lü Koltuk" },
    { label: "2'li Koltuk / Kanepe", id: "2'li Koltuk" },
    { label: "L Koltuk / Köşe Takımı", id: "Köşe Koltuk Takımı" },
    { label: "Berjer / Tekli Koltuk", id: "Berjer / Tekli Koltuk" },
    { label: "Yemek Sandalyeleri (4-8 Adet)", id: "Yemek Sandalye Takımı" },
    { label: "Özel Tasarım / Diğer", id: "Özel Tasarım Mobilya" }
  ];

  const serviceScopes = [
    {
      id: "Yalnızca Kumaş Değişimi",
      desc: "İskelet ve sünger sağlam ise sadece yüz kumaşı yenilenir."
    },
    {
      id: "Sünger Yenileme + Kumaş Değişimi",
      desc: "35 DNS HR ortopedik sünger dolgusu ve seçilen kumaş kaplaması (En çok tercih edilen)."
    },
    {
      id: "Komple Restorasyon (Cila + İskelet + Sünger + Kumaş)",
      desc: "Ahşap kısımlar zımparalanıp cilalanır, iskelet sağlamlaştırılır, sıfır gibi teslim edilir."
    }
  ];

  const fabricOptions = [
    "Leke Tutmaz Nubuk",
    "Sıcak Dokulu Bukle (Bouclé)",
    "Doğal İtalyan Dokuma Keten",
    "Lüks İpek Kadife",
    "Hakiki / Suni Deri",
    "Karar Vermedim (Adrese Numune Kartelası İstiyorum)"
  ];

  const istanbulDistricts = [
    "Şile", "Kadıköy", "Beşiktaş", "Ümraniye", "Ataşehir", "Şişli", "Bakırköy", 
    "Sarıyer", "Maltepe", "Üsküdar", "Beykoz", "Başakşehir", "Diğer İlçe"
  ];

  // Generated WhatsApp Message
  const generatedMessage = `Merhaba Volce Design, mobilyam için ön fiyat teklifi almak istiyorum.

📋 *Teklif Talebi Detayları:*
• *Mobilya Türü:* ${furnitureType}
• *İstenen İşlem:* ${serviceScope}
• *Kumaş Tercihi:* ${fabricType}
${district ? `• *Konum / İlçe:* ${district}` : ''}
${extraNote ? `• *Ek Not:* ${extraNote}` : ''}

Mobilyamın fotoğraflarını gönderebilirim, yaklaşık fiyat ve teslim süresi hakkında bilgi alabilir miyim?`;

  const handleReset = () => {
    setFurnitureType("3'lü Koltuk");
    setServiceScope("Sünger Yenileme + Kumaş Değişimi");
    setFabricType("Leke Tutmaz Nubuk");
    setDistrict("");
    setExtraNote("");
  };

  return (
    <section id="teklif-hesapla" className="py-20 lg:py-28 bg-[#F6F2EA]/70 border-b border-[#EAE3D6]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Hızlı WhatsApp Fiyat Asistanı</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
            Mobilyanız İçin 1 Dakikada Fiyat Teklifi Alın
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#57524A] font-light">
            Mobilya türünüzü ve tercihlerinizi belirleyin; sistem sizin için hazır WhatsApp mesajı oluştursun, tek tıkla doğrudan atölye ustamıza iletin.
          </p>
        </div>

        {/* Interactive Form Card */}
        <div className="bg-[#FBF9F5] border border-[#EAE3D6] p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Step 1: Mobilya Türü */}
          <div>
            <label className="block text-sm font-semibold text-[#1C1A17] mb-3">
              1. Mobilya Türünüzü Seçin:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {furnitureOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFurnitureType(opt.id)}
                  className={`p-3 text-xs sm:text-sm text-left border transition-all cursor-pointer ${
                    furnitureType === opt.id
                      ? 'border-[#9E7D53] bg-[#9E7D53]/10 text-[#1C1A17] font-semibold ring-1 ring-[#9E7D53]'
                      : 'border-[#EAE3D6] bg-white text-[#57524A] hover:border-[#9E7D53]/50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: İstenen İşlem Kapsamı */}
          <div>
            <label className="block text-sm font-semibold text-[#1C1A17] mb-3">
              2. İstenen İşlem Kapsamı:
            </label>
            <div className="space-y-2.5">
              {serviceScopes.map((scope) => (
                <div
                  key={scope.id}
                  onClick={() => setServiceScope(scope.id)}
                  className={`p-4 border text-left cursor-pointer transition-all flex items-start gap-3 ${
                    serviceScope === scope.id
                      ? 'border-[#9E7D53] bg-[#9E7D53]/10 ring-1 ring-[#9E7D53]'
                      : 'border-[#EAE3D6] bg-white hover:border-[#9E7D53]/40'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full mt-0.5 border flex items-center justify-center shrink-0 ${
                    serviceScope === scope.id ? 'border-[#9E7D53] bg-[#9E7D53]' : 'border-gray-300'
                  }`}>
                    {serviceScope === scope.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1C1A17]">{scope.id}</div>
                    <div className="text-xs text-[#57524A] mt-0.5">{scope.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Kumaş Tercihi */}
          <div>
            <label className="block text-sm font-semibold text-[#1C1A17] mb-3">
              3. Tercih Ettiğiniz Kumaş Dokusu:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {fabricOptions.map((fabric) => (
                <button
                  key={fabric}
                  type="button"
                  onClick={() => setFabricType(fabric)}
                  className={`p-2.5 text-xs text-left border transition-all cursor-pointer ${
                    fabricType === fabric
                      ? 'border-[#9E7D53] bg-[#9E7D53]/10 text-[#1C1A17] font-semibold ring-1 ring-[#9E7D53]'
                      : 'border-[#EAE3D6] bg-white text-[#57524A] hover:border-[#9E7D53]/40'
                  }`}
                >
                  {fabric}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Konum & Ek Bilgi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-semibold text-[#1C1A17] mb-1.5">
                Bulunduğunuz İlçe (İstanbul):
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1A17] focus:outline-none focus:border-[#9E7D53]"
              >
                <option value="">İlçe Seçiniz (Opsiyonel)</option>
                {istanbulDistricts.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1A17] mb-1.5">
                Varsa Ek Notunuz (Ölçü, Hasar vb.):
              </label>
              <input
                type="text"
                placeholder="Örn: 2 adet kolçağı sallanıyor, renk krem olacak"
                value={extraNote}
                onChange={(e) => setExtraNote(e.target.value)}
                className="w-full p-2.5 bg-white border border-[#EAE3D6] text-xs text-[#1C1A17] focus:outline-none focus:border-[#9E7D53]"
              />
            </div>
          </div>

          {/* Generated Preview & Send Action */}
          <div className="p-5 bg-[#F6F2EA] border border-[#EAE3D6] space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#9E7D53]">
                Hazırlanan WhatsApp Mesajınız:
              </span>
              <button
                onClick={handleReset}
                className="text-xs text-[#57524A] hover:text-[#1C1A17] flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Seçimleri Sıfırla</span>
              </button>
            </div>

            <pre className="text-xs text-[#2E2B26] font-mono bg-white p-3 border border-[#EAE3D6] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto">
              {generatedMessage}
            </pre>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-[#57524A]">
                <CheckCircle className="w-4 h-4 text-[#9E7D53]" />
                <span>Fotoğrafınızı WhatsApp sohbeti açıldığında ekleyebilirsiniz.</span>
              </div>

              <a
                href={createWhatsAppUrl(generatedMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Send className="w-4 h-4 text-[#B89768]" />
                <span>Mesajı WhatsApp'a Gönder</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
