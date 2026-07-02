"use client";

import { Clock3, Plane, TrainFront } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { tourCities, tourConfig } from "@/lib/tour-config";

const cityStyles = [
  {
    accent: "text-amber-300",
    border: "border-amber-400/35",
    surface: "from-amber-500/18 via-[#4a0080]/55 to-[#3d0066]/65",
  },
  {
    accent: "text-fuchsia-200",
    border: "border-fuchsia-300/35",
    surface: "from-fuchsia-500/18 via-[#4a0080]/55 to-[#3d0066]/65",
  },
  {
    accent: "text-sky-200",
    border: "border-sky-300/35",
    surface: "from-sky-500/18 via-[#4a0080]/55 to-[#3d0066]/65",
  },
];

export function RouteSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="route"
      className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,192,0,0.09),transparent_28%),linear-gradient(180deg,transparent,rgba(112,0,193,0.14),transparent)]" />
      <div className="absolute left-6 right-6 top-12 h-px bg-gradient-to-r from-transparent via-[#FFC000]/45 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className={`mx-auto mb-10 max-w-4xl text-center transition-all duration-700 md:mb-14 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="mb-4 text-balance font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
            Маршрут <span className="text-[#FFC000]">трёх городов</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-[#c4a8e0] md:text-lg lg:text-xl">
            {tourConfig.route.display}. {tourConfig.route.note} Между городами планируются самолёты или поезда, подобранные с учётом удобства и времени в пути.
          </p>
        </div>

        <div className={`relative mx-auto max-w-6xl rounded-lg border border-[#7000C1]/55 bg-[#260044]/55 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur transition-all delay-150 duration-700 md:p-6 lg:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC000]/65 to-transparent" />

          <div className="mb-6 grid gap-3 border-b border-[#7000C1]/35 pb-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="flex items-center gap-3 text-sm text-[#c4a8e0]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFC000]/35 bg-[#FFC000]/10 text-[#FFC000]">
                <Clock3 className="h-5 w-5" />
              </div>
              <span>{tourConfig.dates.display}</span>
            </div>

            <div className="hidden items-center gap-2 text-[#FFC000] md:flex">
              <span className="h-px w-10 bg-[#FFC000]/45" />
              <Plane className="h-4 w-4" />
              <TrainFront className="h-4 w-4" />
              <span className="h-px w-10 bg-[#FFC000]/45" />
            </div>

            <p className="text-sm leading-relaxed text-[#c4a8e0] md:text-right">
              Порядок городов и финальную точку фиксируем после подтверждения программы.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {tourCities.map((city, index) => {
              const style = cityStyles[index] ?? cityStyles[0];

              return (
                <article
                  key={city.name}
                  className={`group relative overflow-hidden rounded-lg border ${style.border} bg-gradient-to-br ${style.surface} p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#FFC000]/55 md:p-6`}
                  style={{ transitionDelay: `${250 + index * 120}ms` }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <div className="absolute right-5 top-5 font-heading text-5xl text-[#FFFFFF]/5 transition-colors group-hover:text-[#FFC000]/10">
                    0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <div className="mb-5 flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#FFC000]/45 bg-[#300053]/70 font-heading text-[#FFC000]">
                        {index === 0 ? "S" : index + 1}
                      </span>
                      <span className="text-xs uppercase tracking-wide text-[#c4a8e0]">
                        {index === 0 ? "вероятный старт" : "город маршрута"}
                      </span>
                    </div>

                    <h3 className="mb-2 font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] md:text-3xl">
                      {city.name}
                    </h3>
                    <p className={`${style.accent} mb-4 text-base md:text-lg`}>
                      {city.subtitle}
                    </p>
                    <p className="mb-5 text-sm leading-relaxed text-[#FFFFFF]/75 md:text-base">
                      {city.description}
                    </p>

                    <ul className="space-y-2.5">
                      {city.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3 text-sm leading-relaxed text-[#FFFFFF]/82 md:text-base">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFC000]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
