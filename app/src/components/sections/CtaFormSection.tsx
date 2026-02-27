'use client';

import { useState } from 'react';
import { Shield, Zap, Award, MessageCircle } from 'lucide-react';
import { generateWhatsAppUrl } from '@/lib/utils';

const propertyTypes = [
  { value: '', label: 'Selecione' },
  { value: 'apartamento', label: 'Apartamento' },
  { value: 'casa', label: 'Casa' },
  { value: 'cobertura', label: 'Cobertura' },
  { value: 'na-planta', label: 'Na Planta' },
];

const cities = [
  { value: '', label: 'Selecione' },
  { value: 'Balneário Camboriú', label: 'Balneário Camboriú' },
  { value: 'Itapema', label: 'Itapema' },
  { value: 'Bombinhas', label: 'Bombinhas' },
  { value: 'Itajaí', label: 'Itajaí' },
  { value: 'Florianópolis', label: 'Florianópolis' },
  { value: 'Navegantes', label: 'Navegantes' },
];

const priceRanges = [
  { value: '', label: 'Selecione' },
  { value: '500000', label: 'Até R$ 500.000' },
  { value: '1000000', label: 'R$ 500.000 - R$ 1.000.000' },
  { value: '2000000', label: 'R$ 1.000.000 - R$ 2.000.000' },
  { value: '5000000', label: 'R$ 2.000.000 - R$ 5.000.000' },
  { value: '50000000', label: 'Acima de R$ 5.000.000' },
];

const trustSignals = [
  { icon: Shield, text: 'Seus dados são protegidos' },
  { icon: Zap, text: 'Resposta em até 2 horas' },
  { icon: Award, text: 'Atendimento Premium' },
];

export function CtaFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    propertyType: '',
    city: '',
    priceRange: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `*Novo Contato - Prime Imóveis*

*Nome:* ${formData.name}
*Telefone:* ${formData.phone}
*Tipo de Imóvel:* ${propertyTypes.find((t) => t.value === formData.propertyType)?.label}
*Cidade de Interesse:* ${formData.city}
*Faixa de Preço:* ${priceRanges.find((p) => p.value === formData.priceRange)?.label}

*Mensagem:*
${formData.message || 'Nenhuma mensagem adicional'}

---
Enviado pelo formulário do site`;

    const whatsappUrl = generateWhatsAppUrl('5547991230000', message);
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contato"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1628744404730-5e51e2f29c0d?auto=format&fit=crop&w=2000&q=90)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/75" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Encontre Seu Imóvel Ideal
          </h2>
          <div className="gold-line w-24 mx-auto mb-6" />
          <p className="text-[#8A8580] text-lg max-w-2xl mx-auto">
            Fale com um especialista e receba uma consultoria personalizada e gratuita
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glass p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-luxury"
                placeholder="Seu nome"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="input-luxury"
                placeholder="(47) 99999-9999"
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Tipo de Imóvel
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required
                className="input-luxury"
              >
                {propertyTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Cidade de Interesse
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="input-luxury"
              >
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div className="md:col-span-2">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Faixa de Preço
              </label>
              <select
                name="priceRange"
                value={formData.priceRange}
                onChange={handleChange}
                required
                className="input-luxury"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-xs text-[#8A8580] mb-2 uppercase tracking-wider">
                Mensagem (Opcional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="input-luxury resize-none"
                placeholder="Conte-nos mais sobre o que você procura..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full btn-gold flex items-center justify-center gap-2 py-4"
          >
            <MessageCircle className="w-5 h-5" />
            Enviar pelo WhatsApp
          </button>
        </form>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="flex items-center gap-2 text-[#8A8580]">
                <Icon className="w-4 h-4 text-[#C8B89A]" />
                <span className="text-sm">{signal.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
