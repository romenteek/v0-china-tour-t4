"use client";

import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const includedItems = [
  "проживание с учетом двухместного размещения",
  "трансфер до отеля и обратно",
  "перемещения между городами внутри страны",
  "посещение всех вечеринок",
];

const notIncludedItems = [
  "международный перелет",
  "личные расходы",
  "экскурсии и посещение платных достопримечательностей",
  "страховка",
];

const formatItems = [
  "авторский тур в группе своих людей",
  "возможность присоединиться на любом этапе — стоимость рассчитывается индивидуально",
  "сопровождение на всех этапах тура",
];

export function BudgetSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="budget" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-[#FFFFFF] uppercase tracking-wide">
              Бюджет и <span className="text-[#FFC000]">формат</span>
            </h2>
          </div>

          <div className={`relative p-6 md:p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-[#3d0066]/80 to-[#3d0066]/40 backdrop-blur-xl border border-[#7000C1] transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC000]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#7000C1]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              {/* Price */}
              <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
                <p className="text-sm md:text-base text-[#FFFFFF]/90 mb-2">Стоимость на одного человека:</p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading text-[#FFC000] uppercase tracking-wide">от 83 000 рублей</p>
                <p className="text-xs md:text-sm text-[#c4a8e0] mt-2">(цена действительна на 31.01.2026)</p>
              </div>

              {/* Included */}
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '375ms' }}>
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#FFFFFF] mb-3 md:mb-4">В стоимость входит:</h3>
                <div className="space-y-3 md:space-y-4">
                  {includedItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFC000]" />
                      </div>
                      <p className="text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Included */}
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '450ms' }}>
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#FFFFFF] mb-3 md:mb-4">В стоимость не входит:</h3>
                <div className="space-y-3 md:space-y-4">
                  {notIncludedItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFC000]" />
                      </div>
                      <p className="text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Format */}
              <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '525ms' }}>
                <h3 className="text-sm md:text-base lg:text-lg font-medium text-[#FFFFFF] mb-3 md:mb-4">Формат тура:</h3>
                <div className="space-y-3 md:space-y-4">
                  {formatItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 md:gap-4">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 md:w-4 md:h-4 text-[#FFC000]" />
                      </div>
                      <p className="text-sm md:text-base lg:text-lg text-[#FFFFFF]/90 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
