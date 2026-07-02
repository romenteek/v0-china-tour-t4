"use client";

import { Building2, Clock, HelpCircle, Route, ShieldCheck, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { comfortItems } from "@/lib/tour-config";

const icons = [Clock, Route, HelpCircle, Building2, Users, ShieldCheck];

export function ComfortSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="comfort" className="relative scroll-mt-24 overflow-hidden bg-[#300053] py-20 md:scroll-mt-28 md:py-32" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        <div className={`mb-10 text-center transition-all duration-700 md:mb-16 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <h2 className="mb-4 font-heading text-2xl uppercase tracking-wide text-[#FFFFFF] sm:text-3xl md:mb-6 md:text-5xl lg:text-6xl">
            Комфорт и <span className="text-[#FFC000]">логистика</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-[#c4a8e0] md:text-lg">
            Между городами планируются самолёты или поезда. Трансферы предусмотрены из аэропортов и вокзалов, а также обратно.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-3 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {comfortItems.map((text, index) => {
              const Icon = icons[index] ?? ShieldCheck;

              return (
                <div
                  key={text}
                  className={`group flex items-center gap-3 rounded-lg border border-[#7000C1]/40 bg-[#3d0066]/35 p-4 backdrop-blur-sm transition-all duration-500 hover:border-[#FFC000]/40 hover:bg-[#3d0066]/55 md:gap-4 md:p-6 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: `${200 + index * 75}ms` }}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFC000]/10 transition-colors group-hover:bg-[#FFC000]/20 md:h-12 md:w-12">
                    <Icon className="h-5 w-5 text-[#FFC000] md:h-6 md:w-6" />
                  </div>
                  <span className="text-sm text-[#FFFFFF]/90 md:text-base">{text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
