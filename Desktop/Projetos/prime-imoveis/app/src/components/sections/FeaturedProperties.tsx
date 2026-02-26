'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PropertyCard } from '@/components/ui/PropertyCard';
import propertiesData from '@/data/properties.json';
import type { Property } from '@/lib/types';

const properties = propertiesData as unknown as Property[];

export function FeaturedProperties() {
  const featuredProperties = properties.filter((p) => p.featured);

  return (
    <SectionWrapper id="destaques" className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Imóveis em Destaque
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Uma seleção exclusiva dos imóveis mais prestigiosos do litoral catarinense
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProperties.map((property, index) => (
            <div
              key={property.id}
              data-animate="fade-up"
              className={index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <PropertyCard property={property} size="large" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
