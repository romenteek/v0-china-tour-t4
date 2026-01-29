"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "#about", label: "О туре" },
  { href: "#comfort", label: "Комфорт" },
  { href: "#route", label: "Маршрут" },
  { href: "#parties", label: "Вечеринки" },
  { href: "#business", label: "Бизнес" },
  { href: "#budget", label: "Бюджет" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-in slide-in-from-top-4 fade-in ${
        isScrolled
          ? "bg-[#300053]/80 backdrop-blur-xl border-b border-[#7000C1]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hover:scale-105 transition-transform"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/REPLAY_LIFE_LOGO_transp_fixed-TZFeXz7PO97C0Wl6mVSCiph1qmnXio.png"
              alt="Replay Life"
              width={160}
              height={60}
              className="h-12 w-auto md:h-14"
            />
          </a>
          <span 
            className={`inline-flex px-2 sm:px-3 py-1 bg-[#FFC000]/10 border border-[#FFC000]/30 rounded-full text-[#FFC000] text-xs md:text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${
              isScrolled ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-0.5'
            }`}
          >
            <span className="max-[320px]:hidden">Тур в Китай · 4–17 марта</span>
            <span className="hidden max-[320px]:inline">Китай·4–17 марта</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
              className="text-[#c4a8e0] hover:text-[#FFC000] transition-colors duration-300 text-sm tracking-wide animate-in fade-in slide-in-from-top-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2.5 bg-[#FFC000] text-[#300053] rounded-full text-sm font-medium hover:bg-[#FFC000]/90 transition-all hover:scale-105 animate-in fade-in zoom-in-95 duration-500 delay-700"
          >
            Оставить заявку
          </a>
        </div>

        {/* Tablet & Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-[#FFFFFF] p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Tablet & Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#300053]/95 backdrop-blur-xl border-b border-[#7000C1] animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#FFFFFF] hover:text-[#FFC000] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 bg-[#FFC000] text-[#300053] rounded-full text-center font-medium mt-2"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
