"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cities = [
  {
    name: "Пекин",
    subtitle: "начало знакомства с Китаем",
    highlights: [
      "Запретный город",
      "Великая китайская стена",
      "Вечеринка с Replay в клубе DaDa",
      "Мягкое погружение в культуру",
    ],
    bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
    accentColor: "text-amber-400",
    dotColor: "bg-amber-400",
    borderColor: "border-amber-500/30",
  },
  {
    name: "Гуанчжоу",
    subtitle: "южный ритм Китая",
    highlights: [
      "Кантонская кухня",
      "Современный мегаполис",
      "Тёплые вечера и набережные",
      "Специальный бизнес завтрак",
      "Индивидуальные поездки на фабрики",
      "Новый полезные связи",
    ],
    bgColor: "bg-gradient-to-br from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "Шанхай",
    subtitle: "город будущего",
    highlights: [
      "Крупнейшая выставка текстиля",
      "Французская концессия",
      "Две вечеринки с Replay в стильных барах",
      "Яркий финал путешествия",
    ],
    bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-400",
    dotColor: "bg-blue-400",
    borderColor: "border-blue-500/30",
  },
];

export function RouteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="route" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-6 md:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-balance text-[#FFFFFF] uppercase tracking-wide">
            Логичный и <span className="text-[#FFC000]">комфортный</span> маршрут
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#c4a8e0] max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы перемещаемся с севера на юг и обратно без лишних переездов, используя скоростные поезда и короткие перелёты.
          </p>
        </div>

        {/* Route line connector */}
        <div className="relative mt-12 md:mt-20">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#FFC000]/50 via-[#FFC000]/30 to-[#FFC000]/50" />

          <div className="grid lg:grid-cols-1 gap-8 md:gap-16 lg:gap-24">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-6 md:gap-8 lg:gap-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* City number indicator */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#300053] border-2 border-[#FFC000] items-center justify-center z-10">
                  <span className="font-heading text-2xl text-[#FFC000]">{index + 1}</span>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />

                {/* City card */}
                <div
                  className={`flex-1 w-full max-w-xl p-6 md:p-8 rounded-3xl ${city.bgColor} backdrop-blur-sm border ${city.borderColor} relative overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 lg:hidden">
                      <span className={`font-heading text-lg md:text-xl ${city.accentColor}`}>{index + 1}</span>
                      <div className="w-8 h-px bg-current opacity-30" />
                    </div>
                    
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl mb-2 text-[#FFFFFF] uppercase tracking-wide">
                      {city.name}
                    </h3>
                    <p className={`${city.accentColor} mb-4 md:mb-6 text-base md:text-lg`}>
                      {city.subtitle}
                    </p>
                    
                    <ul className="space-y-2 md:space-y-3">
                      {city.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-[#FFFFFF]/80">
                          <span className={`w-1.5 h-1.5 rounded-full ${city.dotColor}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
