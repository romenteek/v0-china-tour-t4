"use client";

import { Check, Info } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { budgetDetails } from "@/lib/tour-config";

export function BudgetSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="budget" className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className={`mb-8 text-center transition-all duration-700 md:mb-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <h2 className="mb-4 font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
              Бюджет и <span className="text-[#FFC000]">формат</span>
            </h2>
          </div>

          <div className={`relative overflow-hidden rounded-lg border border-[#7000C1] bg-gradient-to-br from-[#3d0066]/80 to-[#3d0066]/40 p-6 backdrop-blur-xl transition-all delay-200 duration-700 md:p-8 lg:p-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC000]/55 to-transparent" />

            <div className="relative z-10 space-y-8">
              <div className={`rounded-lg border border-[#FFC000]/30 bg-[#FFC000]/8 p-5 text-center transition-all duration-500 md:p-6 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`} style={{ transitionDelay: "300ms" }}>
                <div className="mb-3 flex items-center justify-center gap-2 text-[#FFC000]">
                  <Info className="h-5 w-5" />
                  <p className="text-sm font-medium uppercase tracking-wide">Предварительные параметры</p>
                </div>
                <p className="font-heading text-2xl uppercase tracking-wide text-[#FFC000] md:text-3xl lg:text-4xl">
                  {budgetDetails.title}
                </p>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#c4a8e0] md:text-base">
                  {budgetDetails.description}
                </p>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {[
                  { title: "В план включаем", items: budgetDetails.included },
                  { title: "Отдельно оплачивается", items: budgetDetails.notIncluded },
                  { title: "Формат тура", items: budgetDetails.format },
                ].map((group, groupIndex) => (
                  <div
                    key={group.title}
                    className={`transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                    style={{ transitionDelay: `${375 + groupIndex * 75}ms` }}
                  >
                    <h3 className="mb-3 text-sm font-medium text-[#FFFFFF] md:mb-4 md:text-base lg:text-lg">{group.title}:</h3>
                    <div className="space-y-3 md:space-y-4">
                      {group.items.map((item) => (
                        <div key={item} className="flex items-start gap-3 md:gap-4">
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC000]/20 md:h-6 md:w-6">
                            <Check className="h-3 w-3 text-[#FFC000] md:h-4 md:w-4" />
                          </div>
                          <p className="text-sm leading-relaxed text-[#FFFFFF]/90 md:text-base">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
