"use client";

import { Music, PartyPopper, Disc3 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const partyHighlights = [
  {
    icon: PartyPopper,
    text: "Одна незабываемая ночь в Пекине",
  },
  {
    icon: Music,
    text: "Две аутентичные вечеринки в Шанхае",
  },
];

export function PartiesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="parties" className="py-20 md:py-32 relative overflow-hidden bg-[#300053]" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/15 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-10 md:mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-[#FFFFFF] uppercase tracking-wide">
            Эксклюзивные <span className="text-[#FFC000]">вечеринки</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[#c4a8e0] max-w-3xl mx-auto text-pretty leading-relaxed">
            Во время нашего тура вас ждут эксклюзивные вечеринки с участием Replay Community, 
            чтобы вы могли полностью погрузиться в ночную жизнь Китая и отдохнуть в кругу единомышленников.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            {partyHighlights.map((highlight, index) => (
              <div
                key={highlight.text}
                className={`group flex items-center gap-3 md:gap-4 p-4 md:p-6 rounded-2xl bg-[#3d0066]/50 backdrop-blur-sm border border-[#7000C1] hover:border-[#FFC000]/30 hover:bg-[#3d0066]/70 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#FFC000]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFC000]/20 transition-colors">
                  <highlight.icon className="w-6 h-6 md:w-7 md:h-7 text-[#FFC000]" />
                </div>
                <span className="text-[#FFFFFF] text-base md:text-lg">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Accented text */}
          <div className={`text-center p-6 md:p-8 rounded-2xl bg-[#3d0066]/30 border border-[#7000C1]/50 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
              <Disc3 className="w-5 h-5 md:w-6 md:h-6 text-[#FFC000]" />
              <span className="text-[#FFC000] font-medium text-base md:text-lg">За пультом для вас будут играть:</span>
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-heading text-[#FFFFFF] mb-3 md:mb-4 uppercase tracking-wide">
              Luter и Marcello
            </p>
            <p className="text-sm md:text-base text-[#c4a8e0] italic">
              Приготовьтесь топтать Китай!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
