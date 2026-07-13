"use client";

import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { tourConfig } from "@/lib/tour-config";

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="cta" className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFC000]/6 via-transparent to-transparent" />
        <div className="absolute inset-x-6 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FFC000]/45 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`mb-4 text-balance font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] transition-all duration-700 sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Оставить <span className="text-[#FFC000]">заявку</span>
          </h2>

          <p className={`mb-8 text-base text-[#c4a8e0] transition-all delay-100 duration-700 md:mb-12 md:text-lg lg:text-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Напишите, если хотите попасть в предварительный список. Мы пришлём детали после подтверждения программы и стоимости.
          </p>

          <a
            href="https://t.me/SashaHohlova"
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center gap-2 rounded-lg bg-[#FFC000] px-6 py-3 text-base font-semibold text-[#300053] transition-all delay-200 duration-700 hover:bg-[#ffd34d] active:translate-y-px md:gap-3 md:px-10 md:py-5 md:text-lg lg:text-xl ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Оставить заявку в Telegram
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
          </a>

          <p className={`mt-6 text-xs text-[#c4a8e0] transition-all delay-300 duration-700 md:mt-8 md:text-sm ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            {tourConfig.dates.note} Стоимость, программа по дням, конкретные рейсы или поезда и отели требуют финального подтверждения.
          </p>
        </div>
      </div>
    </section>
  );
}
