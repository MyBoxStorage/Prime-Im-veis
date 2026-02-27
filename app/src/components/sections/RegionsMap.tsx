'use client';

import { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import regions from '@/data/regions.json';

export function RegionsMap() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  return (
    <SectionWrapper id="regioes" className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Nossas Regiões de Atuação
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Do sul ao norte do litoral catarinense, presença onde o luxo está
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* SVG Map */}
          <div className="relative" data-animate="fade-up">
            <svg
              viewBox="0 0 400 500"
              className="w-full h-auto"
              style={{ filter: 'drop-shadow(0 0 20px rgba(200, 184, 154, 0.1))' }}
            >
              {/* Background */}
              <rect width="400" height="500" fill="#0A0A0A" />

              {/* Coastline - Simplified artistic representation */}
              <path
                d="M 50 450 
                   Q 80 420 100 400
                   Q 120 380 140 350
                   Q 160 320 180 280
                   Q 200 240 220 200
                   Q 240 160 260 120
                   Q 280 80 320 50
                   L 350 50
                   Q 320 100 300 150
                   Q 280 200 260 250
                   Q 240 300 220 350
                   Q 200 400 180 450
                   Z"
                fill="none"
                stroke="#C8B89A"
                strokeWidth="1"
                opacity="0.3"
              />

              {/* City Markers */}
              {regions.map((region) => {
                // Position markers approximately on the map
                const positions: Record<string, { x: number; y: number }> = {
                  balneario: { x: 200, y: 280 },
                  itapema: { x: 220, y: 220 },
                  bombinhas: { x: 260, y: 160 },
                  itajai: { x: 160, y: 320 },
                  florianopolis: { x: 280, y: 100 },
                  navegantes: { x: 140, y: 360 },
                };
                const pos = positions[region.id];
                const isActive = activeRegion === region.id;

                return (
                  <g
                    key={region.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveRegion(region.id)}
                    onMouseLeave={() => setActiveRegion(null)}
                  >
                    {/* Glow effect */}
                    {isActive && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="20"
                        fill="rgba(200, 184, 154, 0.2)"
                        className="animate-pulse"
                      />
                    )}

                    {/* Marker */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 8 : 6}
                      fill={isActive ? '#C8B89A' : '#1A1A1A'}
                      stroke="#C8B89A"
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />

                    {/* Label */}
                    <text
                      x={pos.x}
                      y={pos.y + 20}
                      textAnchor="middle"
                      fill={isActive ? '#C8B89A' : '#8A8580'}
                      fontSize="10"
                      fontFamily="DM Sans"
                      className="transition-colors duration-300"
                    >
                      {region.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Title */}
              <text
                x="200"
                y="480"
                textAnchor="middle"
                fill="#C8B89A"
                fontSize="12"
                fontFamily="Cormorant Garamond"
                letterSpacing="3"
              >
                LITORAL CATARINENSE
              </text>
            </svg>
          </div>

          {/* Region Cards */}
          <div className="space-y-4">
            {regions.map((region) => {
              const isActive = activeRegion === region.id;

              return (
                <div
                  key={region.id}
                  className={`glass p-6 transition-all duration-300 cursor-pointer ${
                    isActive ? 'border-[#C8B89A]/50 bg-[rgba(200,184,154,0.1)]' : ''
                  }`}
                  onMouseEnter={() => setActiveRegion(region.id)}
                  onMouseLeave={() => setActiveRegion(null)}
                  data-animate="fade-up"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[#C8B89A]" />
                        <span className="text-[#C8B89A] text-xs uppercase tracking-wider">
                          {region.tagline}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl text-white mb-2">
                        {region.name}
                      </h3>
                      <p className="text-[#8A8580] text-sm mb-4">
                        {region.description}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-white">
                          <strong className="text-[#C8B89A]">
                            {region.propertiesCount}
                          </strong>{' '}
                          imóveis
                        </span>
                        <span className="text-[#333333]">|</span>
                        <span className="text-white">
                          {region.priceRange}
                        </span>
                      </div>

                      <div className="mt-3 text-xs text-[#8A8580]">
                        Destaque: {region.highlight}
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 text-[#C8B89A] transition-transform duration-300 ${
                        isActive ? 'translate-x-1' : ''
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
