export type PropertyType = 'apartamento' | 'casa' | 'cobertura';
export type BadgeType = 'exclusividade' | 'lancamento' | 'alto-padrao' | 'na-planta';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  badge: BadgeType;
  city: string;
  neighborhood: string;
  price: number;
  area: number;
  rooms: number;
  bathrooms: number;
  parkingSpots: number;
  floor?: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  isNewLaunch: boolean;
  isOffPlan: boolean;
  agent: string;
  deliveryDate?: string;
  constructionProgress?: number;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  region: string;
  specialty: string;
  creci: string;
  experience: string;
  description: string;
  whatsapp: string;
  whatsappMessage: string;
  image: string;
  propertiesSold: number;
  totalValue: string;
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  propertyAcquired: string;
  propertyValue: string;
  text: string;
  image: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface Region {
  id: string;
  name: string;
  tagline: string;
  description: string;
  propertiesCount: number;
  priceRange: string;
  highlight: string;
}

export interface SearchFilters {
  type: PropertyType | 'all';
  city: string;
  minPrice: number;
  maxPrice: number;
  rooms: number | 'all';
  minArea: number;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
