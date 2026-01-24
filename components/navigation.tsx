"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
          ? "bg-[#300053]/80 backdrop-blur-xl border-b border-[#7000C1]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="hover:scale-105 transition-transform"
        >
          <Image
            src="/images/replay-life-logo-transp.png"
            alt="Replay Life"
            width={320}
            height={240}
            className="h-24 w-auto md:h-48"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#FFFFFF] p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#300053]/95 backdrop-blur-xl border-b border-[#7000C1] animate-in slide-in-from-top-2 fade-in duration-300">
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
