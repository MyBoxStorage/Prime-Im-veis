'use client';

import { cn } from '@/lib/utils';
import type { BadgeType } from '@/lib/types';

interface BadgeProps {
  variant: BadgeType;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant, children, className }: BadgeProps) {
  const getBadgeStyles = (type: BadgeType): string => {
    switch (type) {
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

  const getLabel = (type: BadgeType): string => {
    switch (type) {
      case 'exclusividade':
        return 'Exclusividade';
      case 'lancamento':
        return 'Lançamento';
      case 'alto-padrao':
        return 'Alto Padrão';
      case 'na-planta':
        return 'Na Planta';
      default:
        return 'Exclusividade';
    }
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase',
        getBadgeStyles(variant),
        className
      )}
    >
      {children || getLabel(variant)}
    </span>
  );
}
