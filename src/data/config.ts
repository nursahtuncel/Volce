/**
 * Volce Mobilya - Central Business Configuration
 * Tüm kurumsal bilgiler, iletişim verileri, hizmetler ve galeri içerikleri
 * bu dosyadan kolayca yönetilebilir ve güncellenebilir.
 */

export const BUSINESS_CONFIG = {
  name: "Volce Design",
  title: "Koltuk Döşeme, Mobilya Yenileme & Özel Tasarım",
  tagline: "Mobilyalarınıza Yeniden Hayat Veriyoruz",
  description:
    "Değerli koltuk, sandalye ve oturma gruplarınızı usta el işçiliği, birinci sınıf sünger ve seçkin kumaş koleksiyonlarımızla ilk günkü zarafetine ve konforuna kavuşturuyoruz.",
  
  // İletişim Bilgileri
  contact: {
    phone: "+90 532 781 56 64",
    phoneClean: "905327815664",
    phoneDisplay: "+90 (532) 781 56 64",
    whatsappNumber: "905327815664",
    whatsappDefaultMessage: "Merhaba Volce Design, mobilyamın döşeme ve yenileme işlemi için fiyat teklifi almak istiyorum.",
    email: "iletisim@volcedesign.com",
    address: "Doğancılı, Değirmentaşı Caddesi No:1/1, 34980 Şile / İstanbul",
    city: "İstanbul",
    googleMapsDirectionsUrl: "https://www.google.com/maps?udm&fvr=1&pvq=Cg0vZy8xMWwzNXhndjF3IiMKHXZvaWNlIG1vYmlseWEga29sdHVrIGTDtsWfZW1lEAIYA4kBuFPCZuMsA2Y&lqi=Ch12b2ljZSBtb2JpbHlhIGtvbHR1ayBkw7bFn2VtZUi70J3ejLKAgAhaLRAAEAEQAhADGAEYAhgDIh12b2ljZSBtb2JpbHlhIGtvbHR1ayBkw7bFn2VtZZIBCnNvZmFfc3RvcmU&vet=10CAAQoqAOahcKEwjA5cKJ2IKYAxUAAAAAHQAAAAAQCw..i&cs=1&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&geocode=KW-M_I-Yt8oUMbhTwmbjLANm&daddr=Do%C4%9Fanc%C4%B1l%C4%B1,+de%C4%9Firmenta%C5%9F%C4%B1+caddesi+no:1/1,+34980+%C5%9Eile/%C4%B0stanbul",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Do%C4%9Fanc%C4%B1l%C4%B1,+de%C4%9Firmenta%C5%9F%C4%B1+caddesi+no:1/1,+34980+%C5%9Eile/%C4%B0stanbul&t=&z=15&ie=UTF8&iwloc=&output=embed",
    instagramUrl: "https://instagram.com/volcedesign",
    instagramHandle: "@volcedesign",
    workingHours: "Pazartesi – Cumartesi: 09:00 – 19:00",
    sundayHours: "Pazar: Randevu ile hizmet verilmektedir",
    serviceArea: "Şile, Ümraniye ve tüm İstanbul genelinde adresten teslim alma ve montaj",
  },

  // Hizmetlerimiz (Services)
  services: [
    {
      id: "koltuk-doseme",
      title: "Koltuk Döşeme",
      shortDescription:
        "Eski, yıpranmış veya tarzını değiştirmek istediğiniz koltuk ve kanepelerinizi birinci sınıf sünger ve kumaşlarla baştan aşağı yeniliyoruz.",
      longDescription:
        "Oturma grubu, köşe takımı, chesterfield ve berjer koltuklarınızın iskelet kontrolleri yapılır, çöken süngerler 35 DNS HR yüksek dansite süngerlerle değiştirilir ve seçtiğiniz leke tutmaz kumaşla titizlikle döşenir.",
      image: "/src/assets/images/hero_luxury_sofa_1794493578355.jpg",
      features: [
        "35 DNS HR Yüksek Dansiteli Ortopedik Sünger",
        "İskelet ve Yay Sistemi Güçlendirme",
        "Geniş İthal & Yerli Kumaş Kartelası",
        "Kordon, Fitil ve Dikiş Detaylandırma"
      ],
      whatsappPrefill: "Merhaba, koltuk döşeme hizmetiniz hakkında detay ve fiyat teklifi almak istiyorum."
    },
    {
      id: "mobilya-yenileme",
      title: "Mobilya Yenileme",
      shortDescription:
        "Antika, ahşap ve klasik mobilyalarınızın yapısal onarım, zımpara, lake boya ve gomalak cila restorasyonunu gerçekleştiriyoruz.",
      longDescription:
        "Zamanla çizilen, yıpranan veya rengi solan yemek masaları, konsollar, sehpalar ve ahşap koltuk iskeletleri zanaatkar cilacılarımız tarafından sıfırlanarak modern veya klasik tarzda yenilenir.",
      image: "/src/assets/images/craftsman_upholstery_detail_1794493579160.jpg",
      features: [
        "Doğal Ahşap Zımpara ve Yüzey Temizliği",
        "Gomalak, Mat, İpek Mat ve Lake Boyama",
        "Çatlak, Ayrılma ve Kırık Tamiri",
        "Klasik & Modern Renk Dönüşümü"
      ],
      whatsappPrefill: "Merhaba, ahşap mobilya yenileme ve cila hizmetiniz için bilgi almak istiyorum."
    },
    {
      id: "sandalye-doseme",
      title: "Sandalye Döşeme",
      shortDescription:
        "Yemek odası, mutfak ve salon sandalyelerinizin sünger ve kumaşlarını yenileyerek dayanıklı ve şık hale getiriyoruz.",
      longDescription:
        "Sallanan sandalye iskeletleri tutkallanarak sağlamlaştırılır, esneyen kolon lastikleri gerdirilir ve leke tutmayan, kolay silinebilen kumaşlarla uzun ömürlü kullanım sağlanır.",
      image: "/src/assets/images/restored_armchair_showcase_1794493580114.jpg",
      features: [
        "Kolon Lastik ve İskelet Sağlamlaştırma",
        "Sıvı İtici ve Kolay Silinebilir Kumaşlar",
        "Takım Halinde Renk ve Doku Uyumu",
        "Hızlı ve Zamanında Adrese Teslim"
      ],
      whatsappPrefill: "Merhaba, yemek masası sandalyelerimin döşemesini yeniletmek istiyorum."
    },
    {
      id: "ozel-tasarim-mobilya",
      title: "Özel Tasarım Mobilya",
      shortDescription:
        "Evinizin veya ofisinizin mimari ölçülerine tam uyum sağlayan, dilediğiniz ölçü ve kumaşta kişiye özel mobilyalar üretiyoruz.",
      longDescription:
        "Standart ölçülere sığmayan mekanlar için fırınlanmış gürgen ağacından özel ölçü köşe koltuklar, sedirler, yatak başlıkları ve puflar imal ediyoruz.",
      image: "/src/assets/images/custom_bespoke_sectional_1794493579787.jpg",
      features: [
        "Mekana Özel Milimetrik Ölçülendirme",
        "1. Sınıf Fırınlanmış Gürgen İskelet",
        "Mimar ve İç Mimar Destekli Üretim",
        "Numune Kumaş Seçimi ile Adres Ziyareti"
      ],
      whatsappPrefill: "Merhaba, mekanım için özel ölçü mobilya yaptırmak istiyorum, görüşebilir miyiz?"
    },
    {
      id: "kumas-ve-malzeme",
      title: "Kumaş ve Malzeme Seçenekleri",
      shortDescription:
        "Zengin bukle, nubuk, kadife, keten ve hakiki deri kartelalarımız ile tarzınıza en uygun dokuyu seçme özgürlüğü.",
      longDescription:
        "Evinizin kullanım sıklığına, çocuk veya evcil hayvan durumuna göre su itici, tırnak takılmayan, nefes alabilen ve solmayan yüzlerce renk ve doku seçeneğini kapınıza getiriyoruz.",
      image: "/src/assets/images/craftsman_upholstery_detail_1794493579160.jpg",
      features: [
        "Bukle & Teddy Sıcak Doku Koleksiyonu",
        "Leke Tutmaz & Kolay Temizlenen Nubuk",
        "Doğal Nefes Alan İtalyan Ketenler",
        "Lüks İpeksi Kadife & Hakiki Deri"
      ],
      whatsappPrefill: "Merhaba, döşemelik kumaş kartelalarınız ve malzeme seçenekleriniz hakkında bilgi almak istiyorum."
    }
  ],

  // Proje ve Galeri Verisi
  projects: [
    {
      id: "proje-1",
      title: "Kavisli Özel Tasarım Salon Koltuğu",
      category: "Koltuk Döşeme",
      description: "Yıpranmış köşe grubu yerine özel ölçüyle sıfırdan üretilen, sıcak fildişi bukle kumaş kaplamalı organik formlu salon koltuğu.",
      materials: "Fildişi Dokulu Bukle Kumaş · 35 DNS HR Sünger · Masif Meşe Ayaklar",
      duration: "10 İş Günü",
      image: "/src/assets/images/hero_luxury_sofa_1794493578355.jpg",
      featured: true
    },
    {
      id: "proje-2",
      title: "Mid-Century Masif Ceviz Berjer Yenilemesi",
      category: "Sandalye & Berjer",
      description: "30 yıllık antika berjerin iskelet restorasyonu, ceviz kolçak cilası ve vizon kadife kumaş ile baştan sona dönüşümü.",
      materials: "İtalyan Kadife Kumaş · Gomalak Cila · Çelik Zikzak Yay Takviyesi",
      duration: "7 İş Günü",
      image: "/src/assets/images/restored_armchair_showcase_1794493580114.jpg",
      hasBeforeAfter: true,
      featured: true
    },
    {
      id: "proje-3",
      title: "Doğal Keten Modüler Köşe Grubu",
      category: "Özel Tasarım",
      description: "Geniş yaşam alanı için doğal kum beji keten kumaşla üretilen, derin oturumlu lüks modüler köşe koltuk projesi.",
      materials: "Kum Beji Su İtici Keten · Kuştüyü Sünger Pedi · Gürgen İskelet",
      duration: "14 İş Günü",
      image: "/src/assets/images/custom_bespoke_sectional_1794493579787.jpg",
      featured: true
    },
    {
      id: "proje-4",
      title: "Klasik Yemek Odası Sandalye Takımı",
      category: "Sandalye & Berjer",
      description: "6 adet salon sandalyesinin esneyen kolonlarının değişimi, sünger yenilemesi ve kolay temizlenen dokuma kumaş kaplaması.",
      materials: "Leke Tutmaz Dokuma Kumaş · 32 DNS Sünger · Ahşap Ayak Cilası",
      duration: "5 İş Günü",
      image: "/src/assets/images/craftsman_upholstery_detail_1794493579160.jpg",
      featured: false
    },
    {
      id: "proje-5",
      title: "Masif Ahşap Kütüphane & Dinlenme Koltuğu",
      category: "Mobilya Yenileme",
      description: "Yıpranmış ahşap kısımların el zımparasıyla temizlenmesi, ceviz tonunda ipek mat koruyucu vernik ve yeni oturma minderi.",
      materials: "İpek Mat Ahşap Verniği · Terracotta Keten Kumaş · Yüksek Dansite Sünger",
      duration: "8 İş Günü",
      image: "/src/assets/images/restored_armchair_showcase_1794493580114.jpg",
      featured: false
    },
    {
      id: "proje-6",
      title: "Minimalist Alçak Tabanlı Salon Oturma Grubu",
      category: "Özel Tasarım",
      description: "Mimari projeye uygun özel ölçü üçlü ve tekli koltuk kombinasyonu. Gizli ayak sistemi ve leke tutmaz nubuk dokusu.",
      materials: "Vizon Nubuk · 35 DNS Ortopedik Blok Sünger · Çelik Karkas",
      duration: "12 İş Günü",
      image: "/src/assets/images/custom_bespoke_sectional_1794493579787.jpg",
      featured: false
    }
  ],

  // Before & After Karşılaştırma Verisi
  beforeAfterCase: {
    title: "Öncesi & Sonrası: Klasik Berjerin Yeniden Doğuşu",
    subtitle: "Yılların yıprattığı kumaş ve çöken süngerler yerini modern konfor ve zarafete bıraktı.",
    beforeImage: "/src/assets/images/worn_chair_before_1794493598412.jpg",
    afterImage: "/src/assets/images/restored_armchair_showcase_1794493580114.jpg",
    beforeLabel: "Yenileme Öncesi (Eski Hal)",
    afterLabel: "Volce Dokunuşu (Yenilenmiş)",
    details: [
      { label: "İskelet Durumu", before: "Gevşemiş bağlantılar, çizik ahşap", after: "Sağlamlaştırılmış gürgen, ceviz cila" },
      { label: "Sünger & Konfor", before: "Çökmüş 15 yıllık sünger", after: "35 DNS HR ortopedik sünger" },
      { label: "Kumaş", before: "Yırtılmış ve solmuş jakar", after: "Leke tutmaz vizon kadife kumaş" }
    ]
  },

  // Müşteri Yorumları (Editable placeholders)
  testimonials: [
    {
      id: "t1",
      author: "Selin Yılmaz",
      location: "Kadıköy / İstanbul",
      role: "Ev Sahibi",
      project: "3'lü Koltuk & 2 Berjer Döşeme",
      comment:
        "Annemden kalan 25 yıllık koltuk takımını atmaya kıyamıyorduk. Volce Design gelip kumaş numuneleriyle evimizde inceleme yaptı. Gelen sonuç inanılmaz, sanki ünlü bir İtalyan mağazasından yeni almışız gibi oldu. İşçilik ve dikişler kusursuz.",
      rating: 5
    },
    {
      id: "t2",
      author: "Murat Demir",
      location: "Ataşehir / İstanbul",
      role: "İç Mimar",
      project: "Özel Tasarım Modüler Köşe Grubu",
      comment:
        "Projemiz için özel ölçülerde bir köşe koltuk gerekiyordu. Çizdiğimiz projeyi milimetrik olarak hayata geçirdiler. Gürgen iskelet kalitesi ve sünger dolgusu standart hazır mobilyaların çok üzerinde. Artık tüm projelerimde birlikteyiz.",
      rating: 5
    },
    {
      id: "t3",
      author: "Ayşe & Kemal Özkan",
      location: "Beşiktaş / İstanbul",
      role: "Ev Sahibi",
      project: "Yemek Odası Sandalye Restorasyonu",
      comment:
        "8 adet sandalyemizin kumaşlarını ve süngerlerini yenilettik. Söz verdikleri tarihte kapımızdan aldılar ve tam zamanında teslim ettiler. Kolay silinebilen kumaş önerileri sayesinde çocuklar dökse bile hemen temizleniyor. Teşekkürler.",
      rating: 5
    }
  ],

  // Neden Biz? (Why Choose Us)
  advantages: [
    {
      number: "01",
      title: "Usta El İşçiliği",
      description: "Her mobilya, alanında uzman döşeme ve cila ustalarımızın titiz el işçiliği ve hassas dikiş kontrolünden geçer."
    },
    {
      number: "02",
      title: "Birinci Sınıf Malzeme",
      description: "Çökme yapmayan 35 DNS HR süngerler, fırınlanmış dayanıklı gürgen iskeletler ve sertifikalı kumaşlar kullanılır."
    },
    {
      number: "03",
      title: "Adresten Alım & Teslimat",
      description: "Mobilyalarınızı İstanbul'daki adresinizden koruyucu ambalajlarla alıyor, işlem sonrası kapınıza kadar teslim ediyoruz."
    },
    {
      number: "04",
      title: "Şeffaf Fiyatlandırma",
      description: "İş başlangıcında net fiyat teklifi verilir; süreç boyunca herhangi bir sürpriz veya gizli maliyet çıkarılmaz."
    }
  ],

  // Kumaş Dokuları & Malzeme Bilgisi
  fabricTypes: [
    {
      name: "Bukle (Bouclé)",
      description: "Son yılların en popüler lüks dokusu; yumuşak, sıcak ve zarif bir his sunar.",
      badge: "Trend & Konfor"
    },
    {
      name: "Leke Tutmaz Nubuk",
      description: "Süet benzeri kadifemsi yüzey, sıvı itici nano koruma ve kolay silinebilirlik.",
      badge: "Kolay Temizlenir"
    },
    {
      name: "İtalyan Dokuma Keten",
      description: "Nefes alan doğal elyaflar, yazın serin kışın ferah tutan zamansız estetik.",
      badge: "Doğal & Nefes Alır"
    },
    {
      name: "Lüks Kadife",
      description: "Işığa göre renk değiştiren ipeksi tuşe, klasik ve modern mekanların vazgeçilmezi.",
      badge: "Lüks & Zarafet"
    },
    {
      name: "Hakiki & Suni Deri",
      description: "Ağır hizmet tipi dayanıklılık, prestijli görünüm ve kolay bakım imkanı.",
      badge: "Yüksek Dayanım"
    }
  ]
};

/**
 * WhatsApp Mesajı Oluşturucu Yardımcı Fonksiyon
 */
export function createWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BUSINESS_CONFIG.contact.whatsappDefaultMessage;
  return `https://wa.me/${BUSINESS_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
