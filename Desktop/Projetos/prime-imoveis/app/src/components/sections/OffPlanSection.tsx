'use client';

import { TrendingUp, Calendar, Wallet } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { PropertyCard } from '@/components/ui/PropertyCard';
import propertiesData from '@/data/properties.json';
import type { Property } from '@/lib/types';

const properties = propertiesData as unknown as Property[];

const benefits = [
  {
    icon: Wallet,
    title: 'Menor Preço de Entrada',
    description: 'Adquira por valores abaixo do mercado',
  },
  {
    icon: TrendingUp,
    title: 'Valorização Garantida',
    description: 'Imóveis que valorizam durante a obra',
  },
  {
    icon: Calendar,
    title: 'Condições Flexíveis',
    description: 'Pagamento facilitado durante a construção',
  },
];

export function OffPlanSection() {
  const offPlanProperties = properties.filter((p) => p.isOffPlan);

  return (
    <SectionWrapper id="na-planta" dark number="04">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Imóveis na Planta
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto mb-12">
            Invista no futuro com segurança e condições exclusivas de pagamento
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="glass p-6 text-center"
                  data-animate="fade-up"
                >
                  <div className="w-14 h-14 flex items-center justify-center border border-[#C8B89A]/30 mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#C8B89A]" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#8A8580] text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offPlanProperties.map((property) => (
            <div key={property.id} data-animate="fade-up">
              <PropertyCard property={property} size="medium" />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
