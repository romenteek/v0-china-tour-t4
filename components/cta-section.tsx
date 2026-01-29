"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFC000]/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#FFC000]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-balance text-[#FFFFFF] uppercase tracking-wide transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Китай проще, <span className="text-[#FFC000]">чем кажется</span>
          </h2>
          
          <p className={`text-base md:text-lg lg:text-xl text-[#c4a8e0] mb-8 md:mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Когда маршрут продуман и всё уже организовано
          </p>

          <a
            href="https://t.me/SashaHohlova"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-[#FFC000] text-[#300053] rounded-full text-base md:text-lg lg:text-xl font-medium glow-pulse hover:scale-105 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Присоединиться к туру
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className={`mt-6 md:mt-8 text-xs md:text-sm text-[#c4a8e0] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Успей забронировать тур до 10.02.2026
          </p>
        </div>
      </div>
    </section>
  );
}
