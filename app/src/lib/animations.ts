import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Centralized animation configurations
export const DURATIONS = {
  fast: 0.4,
  medium: 0.7,
  slow: 1.0,
  elegant: 1.4,
};

export const EASINGS = {
  elegant: "power3.out",
  bounce: "back.out(1.2)",
  smooth: "power2.inOut",
  snap: "expo.out",
};

// Fade up reveal — used for section entries
export const fadeUpConfig = {
  from: { opacity: 0, y: 60 },
  to: { opacity: 1, y: 0, duration: DURATIONS.elegant, ease: EASINGS.elegant },
};

// Stagger children animation
export const staggerConfig = {
  each: 0.12,
  from: "start",
  ease: EASINGS.elegant,
};

// Hero parallax config
export const heroParallaxConfig = {
  yPercent: -30,
  ease: "none",
  scrollTrigger: {
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
};

// Counter animation
export const counterConfig = {
  duration: 2.5,
  ease: EASINGS.smooth,
};

// Gold shimmer keyframes (used in CSS)
export const goldShimmer = {
  "0%": { backgroundPosition: "200% center" },
  "100%": { backgroundPosition: "-200% center" },
};

// Initialize GSAP ScrollTrigger
export function initGSAP() {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    return { gsap, ScrollTrigger };
  }
  return null;
}

// Animate elements on scroll
export function animateOnScroll(
  elements: string | Element | Element[],
  options?: {
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    stagger?: number;
    start?: string;
    end?: string;
    scrub?: boolean | number;
  }
) {
  const defaultFrom = { opacity: 0, y: 60 };
  const defaultTo = { 
    opacity: 1, 
    y: 0, 
    duration: DURATIONS.elegant, 
    ease: EASINGS.elegant 
  };

  const config = {
    from: { ...defaultFrom, ...options?.from },
    to: { ...defaultTo, ...options?.to },
    stagger: options?.stagger || staggerConfig.each,
    start: options?.start || "top 85%",
    end: options?.end || "top 20%",
    scrub: options?.scrub || false,
  };

  return gsap.fromTo(
    elements,
    config.from,
    {
      ...config.to,
      stagger: config.stagger,
      scrollTrigger: {
        trigger: typeof elements === 'string' ? elements : (Array.isArray(elements) ? elements[0] : elements),
        start: config.start,
        end: config.end,
        scrub: config.scrub,
        toggleActions: "play none none reverse",
      },
    }
  );
}

// Animate counter
export function animateCounter(
  element: Element,
  targetValue: number,
  options?: {
    duration?: number;
    suffix?: string;
    prefix?: string;
  }
) {
  const config = {
    duration: options?.duration || counterConfig.duration,
    suffix: options?.suffix || '',
    prefix: options?.prefix || '',
  };

  const obj = { value: 0 };
  
  return gsap.to(obj, {
    value: targetValue,
    duration: config.duration,
    ease: counterConfig.ease,
    onUpdate: () => {
      if (element) {
        element.textContent = `${config.prefix}${Math.round(obj.value)}${config.suffix}`;
      }
    },
  });
}

// Parallax effect
export function parallaxEffect(
  element: Element,
  speed: number = 0.5
) {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

// Stagger reveal for lists
export function staggerReveal(
  elements: Element[],
  options?: {
    from?: gsap.TweenVars;
    stagger?: number;
    start?: string;
  }
) {
  const defaultFrom = { opacity: 0, y: 40 };
  
  return gsap.fromTo(
    elements,
    { ...defaultFrom, ...options?.from },
    {
      opacity: 1,
      y: 0,
      duration: DURATIONS.medium,
      ease: EASINGS.elegant,
      stagger: options?.stagger || staggerConfig.each,
      scrollTrigger: {
        trigger: elements[0],
        start: options?.start || "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

// Hero entrance animation
export function heroEntrance(
  elements: {
    label?: Element;
    headline?: Element;
    subheadline?: Element;
    cta?: Element;
    stats?: Element;
  }
) {
  const tl = gsap.timeline({ defaults: { ease: EASINGS.elegant } });

  if (elements.label) {
    tl.fromTo(elements.label, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: DURATIONS.medium }, 
      0
    );
  }

  if (elements.headline) {
    tl.fromTo(elements.headline, 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: DURATIONS.slow }, 
      0.2
    );
  }

  if (elements.subheadline) {
    tl.fromTo(elements.subheadline, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: DURATIONS.medium }, 
      0.5
    );
  }

  if (elements.cta) {
    tl.fromTo(elements.cta, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: DURATIONS.medium }, 
      0.7
    );
  }

  if (elements.stats) {
    tl.fromTo(elements.stats, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: DURATIONS.medium }, 
      0.9
    );
  }

  return tl;
}

// Clean up ScrollTrigger instances
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// Refresh ScrollTrigger
export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
