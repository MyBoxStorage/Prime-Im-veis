'use client';

import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozinha de Luxo',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Sala de Estar Moderna',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    alt: 'Piscina na Cobertura',
    category: 'Áreas Externas',
  },
  {
    src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Quarto de Luxo',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
    alt: 'Cozinha Gourmet',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
    alt: 'Banheiro de Luxo',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Terraço com Piscina',
    category: 'Áreas Externas',
  },
  {
    src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fachada de Mansão',
    category: 'Arquitetura',
  },
  {
    src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    alt: 'Arquitetura Moderna',
    category: 'Arquitetura',
  },
  {
    src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Vista para o Mar',
    category: 'Vistas',
  },
  {
    src: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    alt: 'Apartamento Costeiro',
    category: 'Interiores',
  },
  {
    src: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1200&q=80',
    alt: 'Villa Aérea',
    category: 'Arquitetura',
  },
];

export function ImmersiveGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <SectionWrapper id="galeria" className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Uma Coleção de Espaços Extraordinários
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Cada detalhe, uma declaração de sofisticação
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-animate="fade-up"
              className="relative group cursor-pointer overflow-hidden break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <span className="text-[#C8B89A] text-xs uppercase tracking-wider mb-2">
                  {image.category}
                </span>
                <h4 className="font-display text-xl text-white text-center px-4 mb-4">
                  {image.alt}
                </h4>
                <div className="flex items-center gap-2 text-white/80">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-sm">Ver em Tela Cheia</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={galleryImages.map((img) => ({ src: img.src, alt: img.alt }))}
        index={currentIndex}
        styles={{
          container: { backgroundColor: 'rgba(10, 10, 10, 0.95)' },
        }}
      />
    </SectionWrapper>
  );
}
