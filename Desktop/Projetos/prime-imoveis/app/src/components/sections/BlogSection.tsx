'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import blog from '@/data/blog.json';

import 'swiper/css';
import 'swiper/css/navigation';

export function BlogSection() {
  return (
    <SectionWrapper id="blog" dark number="06">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12" data-animate="fade-up">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
              Mercado Imobiliário em Destaque
            </h2>
            <div className="gold-line w-24 mb-4" />
            <p className="text-[#8A8580] text-lg max-w-xl">
              Análises, tendências e oportunidades no litoral catarinense
            </p>
          </div>

          {/* Custom Navigation */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button className="swiper-button-prev-blog w-12 h-12 flex items-center justify-center border border-[#C8B89A] text-[#C8B89A] hover:bg-[#C8B89A] hover:text-[#0A0A0A] transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-button-next-blog w-12 h-12 flex items-center justify-center border border-[#C8B89A] text-[#C8B89A] hover:bg-[#C8B89A] hover:text-[#0A0A0A] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Blog Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev-blog',
            nextEl: '.swiper-button-next-blog',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-4"
        >
          {blog.map((post) => (
            <SwiperSlide key={post.id}>
              <article className="group cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden mb-4 aspect-video">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#C8B89A] text-[#0A0A0A] text-xs font-medium tracking-wider uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-[#8A8580]">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-[#8A8580] rounded-full" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl text-white group-hover:text-[#C8B89A] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[#8A8580] text-sm line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-[#C8B89A] pt-2">
                    <span className="text-sm">Ler Mais</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <div className="text-center mt-12" data-animate="fade-up">
          <button className="btn-outline-gold">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
