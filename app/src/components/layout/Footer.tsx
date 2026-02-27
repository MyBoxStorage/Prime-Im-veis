'use client';

import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const navigationLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Imóveis em Destaque', href: '#destaques' },
  { label: 'Catálogo Completo', href: '#catalogo' },
  { label: 'Lançamentos', href: '#lancamentos' },
  { label: 'Corretores', href: '#corretores' },
  { label: 'Contato', href: '#contato' },
];

const propertyTypes = [
  { label: 'Apartamentos', href: '#catalogo' },
  { label: 'Casas', href: '#catalogo' },
  { label: 'Coberturas', href: '#catalogo' },
  { label: 'Lançamentos', href: '#lancamentos' },
  { label: 'Na Planta', href: '#na-planta' },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#080808] relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-start mb-6">
              <span className="font-display text-2xl font-light tracking-[0.3em] text-white">
                PRIME
              </span>
              <span className="font-body text-[0.65rem] font-light tracking-[0.5em] text-[#C8B89A]">
                IMÓVEIS
              </span>
            </div>
            <p className="text-[#8A8580] text-sm leading-relaxed mb-6">
              Imóveis de alto padrão nas praias mais exclusivas do Brasil. 
              Experiência personalizada para quem valoriza o extraordinário.
            </p>
            <p className="text-[#8A8580] text-xs">
              CRECI-SC 12345
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-[#333333] text-[#8A8580] hover:border-[#C8B89A] hover:text-[#C8B89A] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#8A8580] hover:text-[#C8B89A] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Tipos de Imóveis</h4>
            <ul className="space-y-3">
              {propertyTypes.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#8A8580] hover:text-[#C8B89A] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8B89A] flex-shrink-0 mt-0.5" />
                <span className="text-[#8A8580] text-sm">
                  Av. Atlântica, 2800 — Sala 1204<br />
                  Centro — Balneário Camboriú, SC<br />
                  CEP 88330-005
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C8B89A] flex-shrink-0" />
                <a
                  href="tel:+5547991230000"
                  className="text-[#8A8580] hover:text-[#C8B89A] transition-colors text-sm"
                >
                  (47) 99123-0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C8B89A] flex-shrink-0" />
                <a
                  href="mailto:contato@primeimoveis.com.br"
                  className="text-[#8A8580] hover:text-[#C8B89A] transition-colors text-sm"
                >
                  contato@primeimoveis.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5!2d-48.6348!3d-26.9906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU5JzI2LjIiUyA0OMKwMzgnMDUuMyJX!5e0!3m2!1spt-BR!2sbr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Prime Imóveis"
        />
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#8A8580] text-xs text-center md:text-left">
              © 2025 Prime Imóveis. Todos os direitos reservados. | CRECI-SC 12345
            </p>
            <p className="text-[#8A8580] text-xs">
              Desenvolvido por{' '}
              <a
                href="https://globallanding.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8B89A] hover:underline"
              >
                Global Landing
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
