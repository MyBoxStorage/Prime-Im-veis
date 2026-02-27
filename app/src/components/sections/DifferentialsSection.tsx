'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, BarChart3, Award } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

gsap.registerPlugin(ScrollTrigger);

const differentials = [
  {
    number: '01',
    icon: User,
    title: 'Atendimento Exclusivo e Personalizado',
    description:
      'Cada cliente tem um corretor dedicado que conhece suas preferências em profundidade. Nada de atendimento genérico — cada busca é única.',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Avaliação Imobiliária Gratuita',
    description:
      'Nossa equipe realiza avaliações completas de mercado sem custo. Transparência e precisão em cada laudo técnico.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Corretores Especializados por Região',
    description:
      'Cada corretor é especialista em seu território. Conhecimento hiperlocal que transforma buscas em negócios fechados com segurança.',
  },
];

export function DifferentialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        if (!item) return;

        const isEven = index % 2 === 0;
        const fromX = isEven ? -60 : 60;

        gsap.fromTo(
          item,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 1.4,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="diferenciais" dark number="02">
      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Por Que Escolher a Prime
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Três diferenciais que nos tornam referência no mercado imobiliário de luxo
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C8B89A]/50 to-transparent hidden lg:block" />

          {/* Items */}
          <div className="space-y-16 lg:space-y-24">
            {differentials.map((diff, index) => {
              const Icon = diff.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={diff.number}
                  ref={(el) => { itemsRef.current[index] = el; }}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 text-center ${
                      isEven ? 'lg:text-right' : 'lg:text-left'
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-4 mb-4 ${
                        isEven ? 'lg:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="font-display text-6xl md:text-7xl text-[#C8B89A]/20 font-light">
                        {diff.number}
                      </span>
                      <div className="w-14 h-14 flex items-center justify-center border border-[#C8B89A]/30">
                        <Icon className="w-6 h-6 text-[#C8B89A]" />
                      </div>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-4">
                      {diff.title}
                    </h3>
                    <p className="text-[#8A8580] leading-relaxed max-w-md mx-auto lg:mx-0">
                      {diff.description}
                    </p>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex items-center justify-center w-4 h-4 relative">
                    <div className="absolute w-4 h-4 bg-[#C8B89A] rounded-full" />
                    <div className="absolute w-8 h-8 bg-[#C8B89A]/20 rounded-full animate-ping" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
