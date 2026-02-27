'use client';

import { useState } from 'react';
import { Bed, Bath, Car, Maximize, MessageCircle } from 'lucide-react';
import { cn, formatPrice, formatArea, generateWhatsAppUrl, getBadgeLabel } from '@/lib/utils';
import type { Property } from '@/lib/types';
import agents from '@/data/agents.json';

interface PropertyCardProps {
  property: Property;
  size?: 'large' | 'medium' | 'small';
  className?: string;
}

export function PropertyCard({ property, size = 'medium', className }: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const agent = agents.find(a => a.id === property.agent);

  const sizeClasses = {
    large: 'aspect-[4/5] min-h-[520px]',
    medium: 'aspect-[3/4] min-h-[400px]',
    small: 'aspect-[16/9] min-h-[220px]',
  };

  const getBadgeStyles = (badge: string): string => {
    switch (badge) {
      case 'exclusividade':
        return 'bg-gradient-to-r from-[#C8B89A] to-[#D4C5A9] text-[#0A0A0A]';
      case 'lancamento':
        return 'bg-white text-[#0A0A0A]';
      case 'alto-padrao':
        return 'border border-[#C8B89A] text-[#C8B89A] bg-transparent';
      case 'na-planta':
        return 'border border-[#C8B89A] text-[#C8B89A] bg-transparent animate-pulse-gold';
      default:
        return 'bg-gradient-to-r from-[#C8B89A] to-[#D4C5A9] text-[#0A0A0A]';
    }
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden cursor-pointer',
        sizeClasses[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            className={cn(
            'w-full h-full object-cover transition-transform duration-700 ease-elegant',
            isHovered && 'scale-105'
          )}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 property-card-overlay" />

      {/* Hover Glass Overlay */}
      <div
        className={cn(
          'absolute inset-0 glass transition-all duration-500 ease-elegant',
          isHovered ? 'opacity-100' : 'opacity-0'
        )}
      />

      {/* Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className={cn('px-3 py-1 text-xs font-medium tracking-wider uppercase', getBadgeStyles(property.badge))}>
          {getBadgeLabel(property.badge)}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Default State */}
        <div
          className={cn(
            'transition-all duration-500 ease-elegant',
            isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          )}
        >
          <p className="text-[#C8B89A] text-sm mb-2">
            {property.city} — {property.neighborhood}
          </p>
          <h3 className="font-display text-xl md:text-2xl text-white mb-3 line-clamp-2">
            {property.title}
          </h3>
          <p className="font-display text-2xl md:text-3xl text-white">
            {formatPrice(property.price)}
          </p>
        </div>

        {/* Hover State */}
        <div
          className={cn(
            'absolute inset-x-6 bottom-6 transition-all duration-500 ease-elegant',
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Features Row */}
          <div className="flex items-center gap-4 mb-4 text-white/90">
            <div className="flex items-center gap-1.5">
              <Maximize className="w-4 h-4 text-[#C8B89A]" />
              <span className="text-sm">{formatArea(property.area)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-[#C8B89A]" />
              <span className="text-sm">{property.rooms}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-[#C8B89A]" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-[#C8B89A]" />
              <span className="text-sm">{property.parkingSpots}</span>
            </div>
          </div>

          {/* Construction Progress for Off-Plan */}
          {property.isOffPlan && property.constructionProgress !== undefined && (
            <div className="mb-4">
              <div className="flex justify-between text-xs text-white/70 mb-1">
                <span>Obra</span>
                <span>{property.constructionProgress}%</span>
              </div>
              <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C8B89A] transition-all duration-1000"
                  style={{ width: `${property.constructionProgress}%` }}
                />
              </div>
              {property.deliveryDate && (
                <p className="text-xs text-[#C8B89A] mt-1">
                  Entrega: {property.deliveryDate}
                </p>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 btn-outline-gold text-sm py-2.5">
              Ver Detalhes
            </button>
            {agent && (
              <a
                href={generateWhatsAppUrl(agent.whatsapp, agent.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
