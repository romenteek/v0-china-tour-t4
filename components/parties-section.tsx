"use client";

import { Disc3, Music, PartyPopper, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const eveningHighlights = [
  {
    icon: PartyPopper,
    text: "вечеринки с Replay",
  },
  {
    icon: Music,
    text: "бары и городские районы с живой атмосферой",
  },
  {
    icon: Users,
    text: "музыка, прогулки и общение в группе",
  },
];

export function PartiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="parties" className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/15 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className={`mb-10 text-center transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="mb-4 font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
            Вечеринки <span className="text-[#FFC000]">с Replay</span>
          </h2>
          <p className="mx-auto max-w-3xl text-pretty text-base leading-relaxed text-[#c4a8e0] md:text-lg lg:text-xl">
            Вечера остаются частью поездки: бары, музыка, прогулки по ночному городу и атмосфера вечеринок Replay.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid gap-4 md:mb-12 md:grid-cols-3 md:gap-6">
            {eveningHighlights.map((highlight, index) => (
              <div
                key={highlight.text}
                className={`group flex items-center gap-3 rounded-lg border border-[#7000C1] bg-[#3d0066]/50 p-4 backdrop-blur-sm transition-all duration-500 hover:border-[#FFC000]/40 hover:bg-[#3d0066]/70 md:gap-4 md:p-6 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#FFC000]/10 transition-colors group-hover:bg-[#FFC000]/20 md:h-14 md:w-14">
                  <highlight.icon className="h-6 w-6 text-[#FFC000] md:h-7 md:w-7" />
                </div>
                <span className="text-base text-[#FFFFFF] md:text-lg">{highlight.text}</span>
              </div>
            ))}
          </div>

          <div className={`rounded-lg border border-[#7000C1]/50 bg-[#3d0066]/30 p-6 text-center transition-all duration-700 md:p-8 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`} style={{ transitionDelay: "400ms" }}>
            <div className="mb-3 flex items-center justify-center gap-2 md:mb-4 md:gap-3">
              <Disc3 className="h-5 w-5 text-[#FFC000] md:h-6 md:w-6" />
              <span className="text-base font-medium text-[#FFC000] md:text-lg">Детали вечеринок уточним ближе к поездке</span>
            </div>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#c4a8e0] md:text-base">
              Добавим расписание и детали, когда финальная программа тура будет собрана.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
