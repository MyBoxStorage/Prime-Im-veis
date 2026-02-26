'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface SectionWrapperProps {
  id?: string;
  className?: string;
  dark?: boolean;
  children: ReactNode;
  number?: string;
}

export function SectionWrapper({
  id,
  className,
  dark = false,
  children,
  number,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const animatedElements = contentRef.current.querySelectorAll('[data-animate="fade-up"]');
    
    if (animatedElements.length > 0) {
      gsap.fromTo(
        animatedElements,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={cn(
        'relative py-24 md:py-32 overflow-hidden',
        dark ? 'bg-[#111111]' : 'bg-[#0A0A0A]',
        className
      )}
    >
      {/* Section Number Decoration */}
      {number && (
        <span className="section-number top-0 left-8 -translate-y-1/4">
          {number}
        </span>
      )}

      {/* Gold Decorative Line for Dark Sections */}
      {dark && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8B89A]/30 to-transparent" />
      )}

      {/* Content */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </section>
  );
}
