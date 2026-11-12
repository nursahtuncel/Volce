import React, { useState } from 'react';
import { MessageSquare, Eye, X, Clock, Layers, Sparkles } from 'lucide-react';
import { BUSINESS_CONFIG, createWhatsAppUrl } from '../data/config';

type ProjectItem = (typeof BUSINESS_CONFIG.projects)[number];

export const ProjectsGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['Tümü', 'Koltuk Döşeme', 'Sandalye & Berjer', 'Mobilya Yenileme', 'Özel Tasarım'];

  const filteredProjects = selectedCategory === 'Tümü'
    ? BUSINESS_CONFIG.projects
    : BUSINESS_CONFIG.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projeler" className="py-20 lg:py-28 bg-[#FBF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 text-left">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#9E7D53] mb-3">
              <span>Portfolyo</span>
              <span aria-hidden="true">·</span>
              <span>Uygulama Örnekleri</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1C1A17] tracking-tight">
              Seçkin Proje ve Uygulamalarımız
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#57524A] font-light">
              Farklı kumaş dokuları, titiz dikiş detayları ve yenilenen iskeletleriyle atölyemizden çıkan işlerden ilham alın.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#1C1A17] text-white shadow-xs'
                    : 'bg-[#F6F2EA] text-[#57524A] hover:text-[#1C1A17] hover:bg-[#EAE3D6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer bg-[#FBF9F5] border border-[#EAE3D6] overflow-hidden hover:border-[#9E7D53]/60 transition-all duration-300 hover:shadow-lg text-left"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE3D6]">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-[#1C1A17]/85 backdrop-blur-xs text-white text-[11px] font-medium tracking-wider uppercase px-2.5 py-1">
                  {project.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#1C1A17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-[#1C1A17] text-xs font-semibold shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Projeyi İncele</span>
                  </span>
                </div>
              </div>

              {/* Text Meta Content */}
              <div className="p-5 sm:p-6 space-y-3">
                <h3 className="font-serif text-xl font-medium text-[#1C1A17] group-hover:text-[#9E7D53] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57524A] font-light line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Specs inline */}
                <div className="pt-3 border-t border-[#EAE3D6] flex items-center justify-between text-xs text-[#57524A]">
                  <span className="truncate max-w-[200px]" title={project.materials}>
                    {project.materials.split('·')[0]}
                  </span>
                  <span className="font-medium text-[#1C1A17] shrink-0">
                    {project.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note (Compliance with prompt: "Never represent stock photographs as actual Volce Mobilya projects") */}
        <div className="mt-12 text-center text-xs text-[#7F623C] bg-[#F6F2EA] p-4 border border-[#EAE3D6]">
          <p>
            * Sitemizde yer alan görseller atölyemizin işçilik standartlarını ve kumaş seçeneklerini yansıtan temsili referans ve uygulama örnekleridir. 
            Atölyemizde devam eden güncel projeleri yakından görmek için bizi ziyaret edebilir veya WhatsApp üzerinden canlı fotoğraflar talep edebilirsiniz.
          </p>
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setActiveModalProject(null)}
          />

          <div className="relative bg-[#FBF9F5] border border-[#EAE3D6] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-left">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 z-20 p-2 text-[#1C1A17] bg-white/90 hover:bg-[#1C1A17] hover:text-white transition-colors cursor-pointer"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#EAE3D6] overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-4 bg-[#1C1A17]/80 text-white text-xs px-3 py-1 uppercase tracking-wider font-medium">
                {activeModalProject.category}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1C1A17]">
                  {activeModalProject.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[#57524A] font-light leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F6F2EA] border border-[#EAE3D6] text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#9E7D53] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1A17] block">Kullanılan Malzemeler:</span>
                    <span className="text-[#57524A]">{activeModalProject.materials}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#9E7D53] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1A17] block">Teslim Süresi:</span>
                    <span className="text-[#57524A]">{activeModalProject.duration}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <a
                  href={createWhatsAppUrl(`Merhaba, "${activeModalProject.title}" projenizi inceledim. Benim de benzer bir mobilyam var, döşeme/restorasyon fiyatı alabilir miyim?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#1C1A17] hover:bg-[#9E7D53] transition-colors shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#B89768]" />
                  <span>Bu Proje İçin WhatsApp'tan Fiyat Sor</span>
                </a>

                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-3 text-xs sm:text-sm font-medium text-[#57524A] hover:text-[#1C1A17] border border-[#EAE3D6] hover:bg-[#F6F2EA] transition-colors cursor-pointer text-center"
                >
                  Pencereyi Kapat
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
