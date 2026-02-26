'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';
import { SearchBar } from '@/components/ui/SearchBar';
import type { SearchFilters } from '@/lib/types';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onSearch?: (filters: SearchFilters) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0
      )
        .fromTo(
          headlineRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.2 },
          0.2
        )
        .fromTo(
          subheadlineRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        )
        .fromTo(
          searchRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.7
        )
        .fromTo(
          statsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        );

      // Parallax effect for video
      gsap.to(videoRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover scale-110"
          poster="https://images.unsplash.com/photo-1628744404730-5e51e2f29c0d?auto=format&fit=crop&w=2000&q=90"
        >
          <source
            src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Label */}
        <div ref={labelRef} className="flex items-center justify-center gap-4 mb-8">
          <div className="w-12 h-px bg-[#C8B89A]" />
          <span className="text-[#C8B89A] text-sm tracking-[0.3em] uppercase">
            Balneário Camboriú · SC
          </span>
          <div className="w-12 h-px bg-[#C8B89A]" />
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-6"
        >
          Encontre Onde Sua
          <br />
          <span className="italic">História Merece</span> Ser Escrita
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-[#F5F0E8]/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light"
        >
          Imóveis de alto padrão nas praias mais exclusivas do Brasil. Experiência
          personalizada para quem valoriza o extraordinário.
        </p>

        {/* Search Bar */}
        <div ref={searchRef} className="flex justify-center mb-16">
          <SearchBar onSearch={onSearch} />
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">380+</p>
            <p className="text-[#8A8580] text-sm tracking-wide">Imóveis Disponíveis</p>
          </div>

          <div className="hidden md:block w-px h-16 gold-line-vertical" />

          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">R$ 2,1bi</p>
            <p className="text-[#8A8580] text-sm tracking-wide">Em Negociações</p>
          </div>

          <div className="hidden md:block w-px h-16 gold-line-vertical" />

          <div className="text-center">
            <p className="font-display text-4xl md:text-5xl text-white mb-1">14 Anos</p>
            <p className="text-[#8A8580] text-sm tracking-wide">De Experiência</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[#C8B89A] text-xs tracking-wider">Role para explorar</span>
        <ChevronDown className="w-5 h-5 text-[#C8B89A] animate-bounce" />
      </div>
    </section>
  );
}
