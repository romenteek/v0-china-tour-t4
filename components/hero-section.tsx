import { CalendarDays, MapPin } from "lucide-react";
import { tourConfig } from "@/lib/tour-config";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#300053]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#25003f_0%,#300053_44%,#4a0080_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(255,192,0,0.12),transparent_26%),radial-gradient(circle_at_82%_72%,rgba(112,0,193,0.3),transparent_30%)]" />
        <div className="absolute inset-x-6 bottom-14 h-px bg-gradient-to-r from-transparent via-[#FFC000]/45 to-transparent" />
        <div className="absolute left-0 top-28 h-[55vh] w-px bg-gradient-to-b from-transparent via-[#FFC000]/40 to-transparent md:left-16" />
        <div className="absolute right-0 bottom-20 h-[45vh] w-px bg-gradient-to-b from-transparent via-[#7000C1] to-transparent md:right-16" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 md:pt-40 lg:pt-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="text-center lg:text-left">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium mb-5 md:mb-7 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 uppercase tracking-wide">
            <span className="text-[#FFC000]">{tourConfig.title}</span>
          </h1>

          <p className="text-lg md:text-2xl lg:text-3xl text-[#FFFFFF] max-w-3xl mx-auto lg:mx-0 mb-6 md:mb-8 text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            {tourConfig.subtitle}
          </p>

          <div className="mx-auto lg:mx-0 mb-8 grid max-w-3xl gap-3 sm:grid-cols-2 lg:grid-cols-1 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <div className="flex items-center justify-center gap-3 rounded-lg border border-[#FFC000]/25 bg-[#FFFFFF]/5 px-4 py-3 text-[#c4a8e0] backdrop-blur lg:hidden">
              <MapPin className="h-5 w-5 text-[#FFC000]" />
              <span className="text-sm md:text-base tracking-wide">{tourConfig.route.display}</span>
            </div>
            <div className="flex items-center justify-center gap-3 rounded-lg border border-[#FFC000]/25 bg-[#FFFFFF]/5 px-4 py-3 text-[#c4a8e0] backdrop-blur">
              <CalendarDays className="h-5 w-5 text-[#FFC000]" />
              <span className="text-sm md:text-base tracking-wide">{tourConfig.dates.display}</span>
            </div>
          </div>

          <p className="mx-auto lg:mx-0 -mt-5 mb-8 max-w-2xl text-xs leading-relaxed text-[#c4a8e0]/85 md:text-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            {tourConfig.dates.note}
          </p>

          <p className="mx-auto lg:mx-0 mb-10 max-w-2xl text-sm md:text-base text-[#c4a8e0] leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
            {tourConfig.positioning}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <a
              href="#route"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#FFC000] text-[#300053] rounded-lg text-base md:text-lg font-semibold glow-pulse hover:bg-[#ffd34d] active:translate-y-px transition-all"
            >
              Смотреть маршрут
            </a>
            <a
              href="#cta"
              className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#4a0080]/50 backdrop-blur-sm text-[#FFFFFF] rounded-lg text-base md:text-lg font-semibold border border-[#7000C1] hover:border-[#FFC000]/60 hover:bg-[#4a0080]/70 active:translate-y-px transition-all"
            >
              Оставить заявку
            </a>
          </div>
          </div>

          <div className="hidden animate-in fade-in slide-in-from-bottom-4 delay-300 duration-700 lg:block">
            <div className="relative rounded-lg border border-[#7000C1]/55 bg-[#260044]/55 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.2)] backdrop-blur">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#FFC000]/65 to-transparent" />
              <div className="mb-6 flex items-center justify-between text-sm text-[#c4a8e0]">
                <span>Маршрут</span>
                <span>{tourConfig.dates.display}</span>
              </div>
              <div className="space-y-5">
                {tourConfig.route.cities.map((city, index) => (
                  <div key={city} className="grid grid-cols-[42px_1fr] items-center gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#FFC000]/45 bg-[#FFC000]/10 font-heading text-[#FFC000]">
                      {index === 0 ? "S" : index + 1}
                    </span>
                    <div className="rounded-lg border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 px-4 py-3">
                      <p className="font-heading text-xl uppercase tracking-wide text-[#FFFFFF]">{city}</p>
                      <p className="mt-1 text-xs uppercase tracking-wide text-[#c4a8e0]">
                        {index === 0 ? "вероятный старт" : "город маршрута"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 border-t border-[#7000C1]/35 pt-5 text-sm leading-relaxed text-[#c4a8e0]">
                {tourConfig.route.note} Самолёты или поезда между городами, трансферы из/в аэропорты и вокзалы.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-[#c4a8e0]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#FFC000] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
