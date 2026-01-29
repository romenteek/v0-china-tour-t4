"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const budgetPoints = [
  "Авторский тур в группе своих людей",
  "Cтоимость тура: От 100 000 рублей на человека без международного перелёта с учетом двухместного размещения (цена действительна на 30.01.2026)",
  "Личные расходы: ~ $50 в день на человека",
  "В стоимость тура входит посещение всех вечеринок",
  "Возможность присоединится на любом этапе, стоимость будет рассчитана индивидуально",
  "Сопровождение на всех этапах тура",
];

export function BudgetSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="budget" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-[#FFFFFF] uppercase tracking-wide">
              Формат и <span className="text-[#FFC000]">бюджет</span>
            </h2>
          </div>

          <div className={`relative p-6 md:p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#3d0066]/80 to-[#3d0066]/40 backdrop-blur-xl border border-[#7000C1] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC000]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#7000C1]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-4 md:space-y-6">
              {budgetPoints.map((point, index) => (
                <div
                  key={point}
                  className={`flex items-start gap-3 md:gap-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${300 + index * 75}ms` }}
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFC000]" />
                  </div>
                  <p className="text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
