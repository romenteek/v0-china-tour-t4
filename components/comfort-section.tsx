"use client";

import { Train, Plane, Building2, Moon, Clock, Route } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const comfortFeatures = [
  {
    icon: Train,
    text: "Скоростные поезда до 350 км/ч",
  },
  {
    icon: Plane,
    text: "Внутренние перелёты",
  },
  {
    icon: Building2,
    text: "Отели в удобных локациях",
  },
  {
    icon: Moon,
    text: "Без ночных переездов",
  },
  {
    icon: Clock,
    text: "Продуманный ежедневный ритм",
  },
  {
    icon: Route,
    text: "Организованные трансферы",
  },

];

export function ComfortSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comfort" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-[#FFFFFF] uppercase tracking-wide">
            Комфорт и <span className="text-[#FFC000]">логистика</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {comfortFeatures.map((feature, index) => (
              <div
                key={feature.text}
                className={`group flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-[#3d0066]/30 backdrop-blur-sm border border-[#7000C1]/30 hover:border-[#FFC000]/30 hover:bg-[#3d0066]/50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 75}ms` }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#FFC000]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFC000]/20 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-[#FFC000]" />
                </div>
                <span className="text-sm md:text-base text-[#FFFFFF]/90">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
