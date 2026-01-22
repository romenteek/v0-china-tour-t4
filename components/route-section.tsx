const cities = [
  {
    name: "Пекин",
    subtitle: "начало знакомства с Китаем",
    highlights: [
      "Запретный город",
      "Великая китайская стена",
      "Хутуны и чайные",
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
      "Настоящая городская жизнь",
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
      "Бунд",
      "Небоскрёбы",
      "Французская концессия",
      "Яркий финал путешествия",
    ],
    bgColor: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-400",
    dotColor: "bg-blue-400",
    borderColor: "border-blue-500/30",
  },
];

export function RouteSection() {
  return (
    <section id="route" className="py-32 relative overflow-hidden bg-[#0f0a1a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-[#f5f0ff]">
            Логичный и <span className="text-[#d4a853]">комфортный</span> маршрут
          </h2>
          <p className="text-lg md:text-xl text-[#a89fc4] max-w-3xl mx-auto text-pretty leading-relaxed">
            Мы перемещаемся с севера на юг и обратно без лишних переездов, используя скоростные поезда и короткие перелёты.
          </p>
        </div>

        {/* Route line connector */}
        <div className="relative mt-20">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a853]/50 via-[#d4a853]/30 to-[#d4a853]/50" />

          <div className="grid lg:grid-cols-1 gap-16 lg:gap-24">
            {cities.map((city, index) => (
              <div
                key={city.name}
                className={`relative flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-8 lg:gap-16`}
              >
                {/* City number indicator */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-[#0f0a1a] border-2 border-[#d4a853] items-center justify-center z-10">
                  <span className="font-serif text-2xl text-[#d4a853]">{index + 1}</span>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden lg:block flex-1" />

                {/* City card */}
                <div
                  className={`flex-1 w-full max-w-xl p-8 rounded-3xl ${city.bgColor} backdrop-blur-sm border ${city.borderColor} relative overflow-hidden hover:scale-[1.02] transition-transform duration-300`}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-2 lg:hidden">
                      <span className={`font-serif text-xl ${city.accentColor}`}>{index + 1}</span>
                      <div className="w-8 h-px bg-current opacity-30" />
                    </div>
                    
                    <h3 className="font-serif text-3xl md:text-4xl mb-2 text-[#f5f0ff]">
                      {city.name}
                    </h3>
                    <p className={`${city.accentColor} mb-6 text-lg`}>
                      {city.subtitle}
                    </p>
                    
                    <ul className="space-y-3">
                      {city.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 text-[#f5f0ff]/80">
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
