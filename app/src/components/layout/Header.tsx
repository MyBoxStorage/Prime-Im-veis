'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { cn, generateWhatsAppUrl } from '@/lib/utils';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Imóveis', href: '#catalogo' },
  { label: 'Lançamentos', href: '#lancamentos' },
  { label: 'Corretores', href: '#corretores' },
  { label: 'Contato', href: '#contato' },
];

const WHATSAPP_CENTRAL = '5547991230000';
const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os imóveis da Prime Imóveis.';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-elegant',
          isScrolled
            ? 'bg-black/85 backdrop-blur-md border-b border-[rgba(200,184,154,0.18)]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <a 
              href="#inicio" 
              onClick={(e) => handleNavClick(e, '#inicio')}
              className="flex flex-col items-center"
            >
              <span className="font-display text-2xl md:text-3xl font-light tracking-[0.3em] text-white">
                PRIME
              </span>
              <span className="font-body text-[0.65rem] font-light tracking-[0.5em] text-[#C8B89A]">
                IMÓVEIS
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="nav-link text-sm text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* WhatsApp CTA */}
            <a
              href={generateWhatsAppUrl(WHATSAPP_CENTRAL, WHATSAPP_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#C8B89A] text-[#0A0A0A] text-sm hover:bg-[#D4C5A9] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Falar com Corretor</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#F5F0E8]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-lg transition-all duration-500 md:hidden',
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-display text-3xl text-[#F5F0E8] hover:text-[#C8B89A] transition-colors"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {link.label}
            </a>
          ))}
          
          <a
            href={generateWhatsAppUrl(WHATSAPP_CENTRAL, WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 px-6 py-3 bg-[#C8B89A] text-[#0A0A0A]"
          >
            <Phone className="w-5 h-5" />
            <span>Falar com Corretor</span>
          </a>
        </div>
      </div>
    </>
  );
}
