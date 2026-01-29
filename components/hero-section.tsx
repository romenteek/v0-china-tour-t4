import { MapPin } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#300053]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#300053] via-[#300053] to-[#3d0066]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFC000]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#7000C1]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-28 md:pt-40 lg:pt-0">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium mb-4 md:mb-6 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 uppercase tracking-wide">
          <span className="text-[#FFC000]">Совместный тур в Китай</span>
          <br />
          <span className="text-[#FFFFFF]">Правильно и красиво</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-[#c4a8e0] max-w-2xl mx-auto mb-6 md:mb-8 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          От императорской истории до футуристических мегаполисов — без спешки и суеты
        </p>

        <div className="flex items-center justify-center gap-2 text-[#c4a8e0] mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <MapPin className="w-4 h-4 md:w-5 md:h-5 text-[#FFC000]" />
          <span className="text-base md:text-lg tracking-wide">Пекин → Гуанчжоу → Шанхай</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <a
            href="#cta"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#FFC000] text-[#300053] rounded-full text-base md:text-lg font-medium glow-pulse hover:scale-105 transition-transform"
          >
            Оставить заявку
          </a>
          <a
            href="#route"
            className="px-6 py-3 md:px-8 md:py-4 bg-[#4a0080]/50 backdrop-blur-sm text-[#FFFFFF] rounded-full text-base md:text-lg font-medium border border-[#7000C1] hover:bg-[#4a0080]/70 transition-all hover:scale-105"
          >
            Смотреть маршрут
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-[#c4a8e0]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#FFC000] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
