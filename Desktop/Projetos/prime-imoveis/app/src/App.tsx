import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedProperties } from '@/components/sections/FeaturedProperties';
import { DifferentialsSection } from '@/components/sections/DifferentialsSection';
import { ImmersiveGallery } from '@/components/sections/ImmersiveGallery';
import { PropertiesCatalog } from '@/components/sections/PropertiesCatalog';
import { NewLaunchesSection } from '@/components/sections/NewLaunchesSection';
import { OffPlanSection } from '@/components/sections/OffPlanSection';
import { RegionsMap } from '@/components/sections/RegionsMap';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { AgentsSection } from '@/components/sections/AgentsSection';
import { CtaFormSection } from '@/components/sections/CtaFormSection';
import { BlogSection } from '@/components/sections/BlogSection';
import type { SearchFilters } from '@/lib/types';

function App() {
  const [catalogFilters, setCatalogFilters] = useState<SearchFilters | null>(null);

  const handleSearch = (filters: SearchFilters) => {
    setCatalogFilters(filters);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Grain Texture Overlay */}
      <div className="grain-overlay" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <HeroSection onSearch={handleSearch} />
        <FeaturedProperties />
        <DifferentialsSection />
        <ImmersiveGallery />
        <PropertiesCatalog externalFilters={catalogFilters} />
        <NewLaunchesSection />
        <OffPlanSection />
        <RegionsMap />
        <TestimonialsSection />
        <AgentsSection />
        <CtaFormSection />
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
