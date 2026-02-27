'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PropertyCard } from '@/components/ui/PropertyCard';
import propertiesData from '@/data/properties.json';
import type { Property } from '@/lib/types';
const properties = propertiesData as unknown as Property[];

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function NewLaunchesSection() {
  const newLaunches = properties.filter((p) => p.isNewLaunch);

  return (
    <SectionWrapper id="lancamentos" className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-animate="fade-up">
          <div>
            <span className="inline-block px-4 py-1 bg-white text-[#0A0A0A] text-xs font-medium tracking-wider uppercase mb-4">
              Lançamentos 2025
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Novos Lançamentos
            </h2>
            <div className="gold-line w-24 mb-4" />
            <p className="text-[#8A8580] text-lg max-w-xl">
              Os empreendimentos mais aguardados chegam às principais praias do litoral catarinense
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center border border-[#C8B89A] text-[#C8B89A] hover:bg-[#C8B89A] hover:text-[#0A0A0A] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center border border-[#C8B89A] text-[#C8B89A] hover:bg-[#C8B89A] hover:text-[#0A0A0A] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1.2}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
          className="!pb-14"
        >
          {newLaunches.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} size="medium" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
