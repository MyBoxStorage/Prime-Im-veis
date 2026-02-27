'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { cn, filterProperties as filterProps, paginate } from '@/lib/utils';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PropertyCard } from '@/components/ui/PropertyCard';
import propertiesData from '@/data/properties.json';
import type { Property, PropertyType, SearchFilters } from '@/lib/types';
const properties = propertiesData as unknown as Property[];

interface PropertiesCatalogProps {
  externalFilters?: SearchFilters | null;
}

const typeOptions: { value: PropertyType | 'all'; label: string }[] = [
  { value: 'all', label: 'Todos' },
  { value: 'apartamento', label: 'Apartamentos' },
  { value: 'casa', label: 'Casas' },
  { value: 'cobertura', label: 'Coberturas' },
];

const cityOptions = [
  'Todas',
  'Balneário Camboriú',
  'Itapema',
  'Bombinhas',
  'Itajaí',
  'Florianópolis',
  'Navegantes',
];

const priceOptions = [
  { label: 'Qualquer Preço', min: 0, max: 50000000 },
  { label: 'Até R$ 1M', min: 0, max: 1000000 },
  { label: 'R$ 1M - R$ 3M', min: 1000000, max: 3000000 },
  { label: 'R$ 3M - R$ 5M', min: 3000000, max: 5000000 },
  { label: 'Acima de R$ 5M', min: 5000000, max: 50000000 },
];

const sortOptions = [
  { value: 'price-asc', label: 'Menor Preço' },
  { value: 'price-desc', label: 'Maior Preço' },
  { value: 'newest', label: 'Mais Recente' },
  { value: 'area-desc', label: 'Maior Área' },
];

export function PropertiesCatalog({ externalFilters }: PropertiesCatalogProps) {
  const [activeType, setActiveType] = useState<PropertyType | 'all'>('all');
  const [selectedCity, setSelectedCity] = useState('Todas');
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [sortBy, setSortBy] = useState('price-asc');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  // Apply filters
  const filteredProperties = useMemo(() => {
    let result = [...properties];

    // Type filter
    if (activeType !== 'all') {
      result = result.filter((p) => p.type === activeType);
    }

    // City filter
    if (selectedCity !== 'Todas') {
      result = result.filter((p) => p.city === selectedCity);
    }

    // Price filter
    const priceRange = priceOptions[selectedPrice];
    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max);

    // External filters
    if (externalFilters) {
      result = filterProps(result, externalFilters);
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'area-desc':
          return b.area - a.area;
        case 'newest':
        default:
          return 0;
      }
    });

    return result;
  }, [activeType, selectedCity, selectedPrice, sortBy, externalFilters]);

  // Pagination
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = paginate(filteredProperties, currentPage, itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById('catalogo');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper id="catalogo" dark number="03">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Todos os Imóveis
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 bg-[#111111]/95 backdrop-blur-md border-b border-[#222222] py-4 mb-8" data-animate="fade-up">
          <div className="flex flex-wrap items-center gap-4">
            {/* Type Tabs */}
            <div className="flex gap-2">
              {typeOptions.map((type) => (
                <button
                  key={type.value}
                  onClick={() => {
                    setActiveType(type.value);
                    setCurrentPage(1);
                  }}
                  className={cn(
                    'px-4 py-2 text-sm transition-all duration-300',
                    activeType === type.value
                      ? 'bg-[#C8B89A] text-[#0A0A0A]'
                      : 'bg-transparent text-[#8A8580] hover:text-white border border-[#333333]'
                  )}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <div className="flex-1" />

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* City Filter */}
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setCurrentPage(1);
                }}
                className="input-luxury text-sm py-2"
              >
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={selectedPrice}
                onChange={(e) => {
                  setSelectedPrice(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="input-luxury text-sm py-2"
              >
                {priceOptions.map((option, index) => (
                  <option key={index} value={index}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-luxury text-sm py-2"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[#8A8580] text-sm">
              {filteredProperties.length} imóveis encontrados
            </p>
          </div>
        </div>

        {/* Properties Grid */}
        {paginatedProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedProperties.map((property) => (
              <PropertyCard key={property.id} property={property} size="medium" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <SlidersHorizontal className="w-12 h-12 text-[#8A8580] mx-auto mb-4" />
            <h3 className="font-display text-2xl text-white mb-2">
              Nenhum imóvel encontrado
            </h3>
            <p className="text-[#8A8580]">
              Tente ajustar seus filtros para ver mais resultados
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={cn(
                  'w-10 h-10 flex items-center justify-center text-sm transition-colors',
                  currentPage === page
                    ? 'bg-[#C8B89A] text-[#0A0A0A]'
                    : 'border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A]'
                )}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
