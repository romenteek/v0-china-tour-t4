"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "О туре" },
  { href: "#route", label: "Маршрут" },
  { href: "#comfort", label: "Комфорт" },
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
          ? "bg-[#0f0a1a]/80 backdrop-blur-xl border-b border-[#2d2045]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-serif text-xl text-[#d4a853] hover:scale-105 transition-transform"
        >
           Ваш первый Китай
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
              className="text-[#a89fc4] hover:text-[#d4a853] transition-colors duration-300 text-sm tracking-wide animate-in fade-in slide-in-from-top-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            className="px-5 py-2.5 bg-[#d4a853] text-[#0f0a1a] rounded-full text-sm font-medium hover:bg-[#d4a853]/90 transition-all hover:scale-105 animate-in fade-in zoom-in-95 duration-500 delay-700"
          >
            Оставить заявку
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#f5f0ff] p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0a1a]/95 backdrop-blur-xl border-b border-[#2d2045] animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#f5f0ff] hover:text-[#d4a853] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-3 bg-[#d4a853] text-[#0f0a1a] rounded-full text-center font-medium mt-2"
            >
              Оставить заявку
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
