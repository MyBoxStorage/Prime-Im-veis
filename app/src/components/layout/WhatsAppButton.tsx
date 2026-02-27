'use client';

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn, generateWhatsAppUrl } from '@/lib/utils';

const WHATSAPP_CENTRAL = '5547991230000';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os imóveis da Prime Imóveis.';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-all duration-500',
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-20 pointer-events-none'
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          'bg-[#1A1A1A] text-white text-xs px-3 py-2 rounded shadow-lg whitespace-nowrap transition-all duration-300',
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        )}
      >
        Atendimento 24h
        <div className="absolute bottom-0 right-6 translate-y-1/2 rotate-45 w-2 h-2 bg-[#1A1A1A]" />
      </div>

      {/* Online Status */}
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-[#8A8580]">Online</span>
        <span className="w-2 h-2 bg-[#25D366] rounded-full online-dot" />
      </div>

      {/* Button */}
      <a
        href={generateWhatsAppUrl(WHATSAPP_CENTRAL, WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-500 overflow-hidden',
          isHovered ? 'pr-5 pl-1' : 'w-14 h-14 justify-center'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span
          className={cn(
            'text-sm font-medium whitespace-nowrap transition-all duration-300',
            isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'
          )}
        >
          Falar com Corretor
        </span>
      </a>
    </div>
  );
}
