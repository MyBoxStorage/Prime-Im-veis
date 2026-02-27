'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import testimonials from '@/data/testimonials.json';

import 'swiper/css';
import 'swiper/css/pagination';

export function TestimonialsSection() {
  return (
    <SectionWrapper id="depoimentos" dark className="film-grain" number="05">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
        </div>

        {/* Quote Decoration */}
        <div className="absolute top-32 left-8 opacity-5">
          <Quote className="w-48 h-48 text-[#C8B89A]" />
        </div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          className="!pb-14"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center">
                {/* Opening Quote */}
                <div className="font-display text-8xl text-[#C8B89A]/20 leading-none mb-4">
                  "
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-display text-2xl md:text-3xl text-white italic leading-relaxed mb-8 max-w-3xl mx-auto">
                  {testimonial.text}
                </blockquote>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#C8B89A] text-[#C8B89A]"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#C8B89A]/30"
                  />
                  <div className="text-left">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-[#8A8580] text-sm">{testimonial.city}</p>
                    <p className="text-[#C8B89A] text-xs mt-1">
                      {testimonial.propertyAcquired}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionWrapper>
  );
}
