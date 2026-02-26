import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Property, SearchFilters } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format price to PT-BR currency
export function formatPrice(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Example output: "R$ 4.800.000"

// Format area
export function formatArea(value: number): string {
  return `${value.toLocaleString('pt-BR')} m²`;
}

// Generate WhatsApp URL with pre-filled message
export function generateWhatsAppUrl(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Filter properties by search criteria
export function filterProperties(properties: Property[], filters: SearchFilters): Property[] {
  return properties.filter(p => {
    if (filters.type !== 'all' && p.type !== filters.type) return false;
    if (filters.city && p.city !== filters.city) return false;
    if (p.price < filters.minPrice || p.price > filters.maxPrice) return false;
    if (filters.rooms !== 'all' && p.rooms < filters.rooms) return false;
    if (filters.minArea && p.area < filters.minArea) return false;
    return true;
  });
}

// Paginate array
export function paginate<T>(array: T[], page: number, perPage: number): T[] {
  return array.slice((page - 1) * perPage, page * perPage);
}

// Format date to PT-BR
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

// Get badge color class
export function getBadgeClass(badge: string): string {
  switch (badge) {
    case 'exclusividade':
      return 'badge-exclusividade';
    case 'lancamento':
      return 'badge-lancamento';
    case 'alto-padrao':
      return 'badge-alto-padrao';
    case 'na-planta':
      return 'badge-na-planta';
    default:
      return 'badge-exclusividade';
  }
}

// Get badge label in PT-BR
export function getBadgeLabel(badge: string): string {
  switch (badge) {
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
}

// Get property type label in PT-BR
export function getPropertyTypeLabel(type: string): string {
  switch (type) {
    case 'apartamento':
      return 'Apartamento';
    case 'casa':
      return 'Casa';
    case 'cobertura':
      return 'Cobertura';
    default:
      return 'Imóvel';
  }
}

// Scroll to element by ID
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

// Debounce function
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Throttle function
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
