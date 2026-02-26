'use client';

import { useState } from 'react';
import { Search, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PropertyType, SearchFilters } from '@/lib/types';

interface SearchBarProps {
  onSearch?: (filters: SearchFilters) => void;
  className?: string;
}

const cities = [
  'Todas as Cidades',
  'Balneário Camboriú',
  'Itapema',
  'Bombinhas',
  'Itajaí',
  'Florianópolis',
  'Navegantes',
];

const priceRanges = [
  { label: 'Qualquer Preço', min: 0, max: 50000000 },
  { label: 'Até R$ 500 mil', min: 0, max: 500000 },
  { label: 'R$ 500 mil - R$ 1 milhão', min: 500000, max: 1000000 },
  { label: 'R$ 1 milhão - R$ 2 milhões', min: 1000000, max: 2000000 },
  { label: 'R$ 2 milhões - R$ 5 milhões', min: 2000000, max: 5000000 },
  { label: 'Acima de R$ 5 milhões', min: 5000000, max: 50000000 },
];

export function SearchBar({ onSearch, className }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({
    type: 'all',
    city: '',
    minPrice: 0,
    maxPrice: 50000000,
    rooms: 'all',
    minArea: 0,
  });

  const handleSearch = () => {
    onSearch?.(filters);
    setIsExpanded(false);
    
    // Scroll to catalog section
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePriceChange = (index: number) => {
    const range = priceRanges[index];
    setFilters(prev => ({
      ...prev,
      minPrice: range.min,
      maxPrice: range.max,
    }));
  };

  return (
    <div className={cn('relative', className)}>
      {/* Collapsed State - Search Button */}
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-3 px-8 py-4 border border-[#C8B89A] text-[#C8B89A] hover:bg-[#C8B89A] hover:text-[#0A0A0A] transition-all duration-500 group"
        >
          <Search className="w-5 h-5" />
          <span className="tracking-wide">Buscar Imóvel</span>
        </button>
      )}

      {/* Expanded State - Filter Panel */}
      {isExpanded && (
        <div className="glass p-6 md:p-8 w-full max-w-4xl animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-4 right-4 text-[#8A8580] hover:text-[#C8B89A] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <h3 className="font-display text-2xl text-white mb-6">
            Encontre Seu Imóvel Ideal
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {/* Property Type */}
            <div className="relative">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Tipo de Imóvel
              </label>
              <div className="relative">
                <select
                  value={filters.type}
                  onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value as PropertyType | 'all' }))}
                  className="input-luxury appearance-none pr-10"
                >
                  <option value="all">Todos</option>
                  <option value="apartamento">Apartamento</option>
                  <option value="casa">Casa</option>
                  <option value="cobertura">Cobertura</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8580] pointer-events-none" />
              </div>
            </div>

            {/* City */}
            <div className="relative">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Localização
              </label>
              <div className="relative">
                <select
                  value={filters.city}
                  onChange={(e) => setFilters(prev => ({ ...prev, city: e.target.value === 'Todas as Cidades' ? '' : e.target.value }))}
                  className="input-luxury appearance-none pr-10"
                >
                  {cities.map(city => (
                    <option key={city} value={city === 'Todas as Cidades' ? '' : city}>
                      {city}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8580] pointer-events-none" />
              </div>
            </div>

            {/* Price Range */}
            <div className="relative">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Faixa de Preço
              </label>
              <div className="relative">
                <select
                  onChange={(e) => handlePriceChange(Number(e.target.value))}
                  className="input-luxury appearance-none pr-10"
                >
                  {priceRanges.map((range, index) => (
                    <option key={index} value={index}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8580] pointer-events-none" />
              </div>
            </div>

            {/* Rooms */}
            <div className="relative">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Quartos
              </label>
              <div className="relative">
                <select
                  value={filters.rooms}
                  onChange={(e) => setFilters(prev => ({ ...prev, rooms: e.target.value === 'all' ? 'all' : Number(e.target.value) }))}
                  className="input-luxury appearance-none pr-10"
                >
                  <option value="all">Qualquer</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8A8580] pointer-events-none" />
              </div>
            </div>

            {/* Min Area */}
            <div className="relative">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Área Mínima (m²)
              </label>
              <input
                type="number"
                placeholder="0"
                value={filters.minArea || ''}
                onChange={(e) => setFilters(prev => ({ ...prev, minArea: Number(e.target.value) }))}
                className="input-luxury"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSearch}
            className="w-full btn-gold flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Encontrar Imóveis
          </button>
        </div>
      )}
    </div>
  );
}
