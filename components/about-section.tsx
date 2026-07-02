"use client";

import { Compass, Heart, Sparkles, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Compass,
    title: "Знакомство с современным Китаем",
    description: "Три мегаполиса с разным характером, архитектурой и городским ритмом.",
  },
  {
    icon: Sparkles,
    title: "Городская культура и кухня",
    description: "Прогулки, локальные вкусы, вечерние районы и живой повседневный Китай.",
  },
  {
    icon: Heart,
    title: "Комфортный темп",
    description: "Без перегруженной экскурсионной программы и гонки за галочками.",
  },
  {
    icon: Users,
    title: "Путешествие компанией",
    description: "Совместный маршрут, поддержка на месте и достаточно пространства для себя.",
  },
];

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a0080]/20 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className={`mb-12 text-center transition-all duration-700 md:mb-20 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="mb-4 text-balance font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
            Какой это <span className="text-[#FFC000]">тур</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-[#c4a8e0] md:text-lg lg:text-xl">
            Это обычное совместное туристическое путешествие для знакомства с современным Китаем: города, кухня, прогулки, архитектура и вечерняя жизнь.
          </p>
          <p className="mt-4 text-sm text-[#c4a8e0] md:text-base">
            С фокусом на города, атмосферу, еду, прогулки и вечеринки с Replay.
          </p>
        </div>

        <div className={`mb-6 text-center transition-all delay-200 duration-700 md:mb-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h3 className="font-heading text-xl uppercase tracking-wide text-[#FFFFFF]/90 md:text-2xl lg:text-3xl">
            Кому подойдёт этот тур
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group relative rounded-lg border border-[#7000C1]/70 bg-[#3d0066]/55 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#FFC000]/40 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="absolute inset-0 rounded-lg bg-[#FFC000]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FFC000]/10 transition-colors duration-300 group-hover:bg-[#FFC000]/20 md:mb-6 md:h-14 md:w-14">
                  <feature.icon className="h-6 w-6 text-[#FFC000] md:h-7 md:w-7" />
                </div>
                <h4 className="mb-2 text-base font-medium text-[#FFFFFF] md:mb-3 md:text-lg">
                  {feature.title}
                </h4>
                <p className="text-sm leading-relaxed text-[#c4a8e0]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
