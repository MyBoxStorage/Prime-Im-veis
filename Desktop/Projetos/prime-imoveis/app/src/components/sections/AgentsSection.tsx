'use client';

import { MessageCircle, Award, Lock } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { generateWhatsAppUrl } from '@/lib/utils';
import agents from '@/data/agents.json';

export function AgentsSection() {
  return (
    <SectionWrapper id="corretores" className="bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-animate="fade-up">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Nossa Equipe de Especialistas
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Corretores especializados por região, prontos para encontrar o imóvel ideal para você
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="glass p-6 group card-lift"
              data-animate="fade-up"
            >
              {/* Photo */}
              <div className="relative mb-6 overflow-hidden">
                <img
                  src={agent.image}
                  alt={agent.name}
                  loading="lazy"
                  className="w-full aspect-square object-cover transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent" />
              </div>

              {/* Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="font-display text-2xl text-white mb-1">
                    {agent.name}
                  </h3>
                  <p className="text-[#C8B89A] text-sm">{agent.role}</p>
                </div>

                <div className="flex items-center gap-2 text-[#8A8580] text-xs">
                  <Lock className="w-3 h-3" />
                  <span>CRECI {agent.creci}</span>
                </div>

                <p className="text-[#8A8580] text-sm line-clamp-2">
                  {agent.description}
                </p>

                {/* Specialty & Region */}
                <div className="pt-3 border-t border-[#333333]/50">
                  <p className="text-xs text-[#8A8580] mb-1">
                    <span className="text-[#C8B89A]">Especialidade:</span>{' '}
                    {agent.specialty}
                  </p>
                  <p className="text-xs text-[#8A8580]">
                    <span className="text-[#C8B89A]">Região:</span> {agent.region}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#C8B89A]" />
                    <span className="text-white text-sm">
                      {agent.propertiesSold} vendas
                    </span>
                  </div>
                  <div className="text-[#8A8580] text-sm">
                    {agent.totalValue}
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={generateWhatsAppUrl(agent.whatsapp, agent.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors mt-4"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Falar com {agent.name.split(' ')[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
