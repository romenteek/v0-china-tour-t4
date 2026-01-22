import { MapPin, Calendar } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0a1a]">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a1a] via-[#0f0a1a] to-[#1a1128]" />
        
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4a853]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#d4a853]/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#251a35]/50 backdrop-blur-sm border border-[#2d2045] text-sm text-[#a89fc4]">
            <Calendar className="w-4 h-4 text-[#d4a853]" />
            4–17 марта 2026
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-6 text-balance animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <span className="text-[#d4a853]">Ваш первый Китай</span>
          <br />
          <span className="text-[#f5f0ff]">Правильно и красиво</span>
        </h1>

        <p className="text-lg md:text-xl text-[#a89fc4] max-w-2xl mx-auto mb-8 text-pretty animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          От императорской истории до футуристических мегаполисов — без спешки и суеты
        </p>

        <div className="flex items-center justify-center gap-2 text-[#a89fc4] mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <MapPin className="w-5 h-5 text-[#d4a853]" />
          <span className="text-lg tracking-wide">Пекин → Гуанчжоу → Шанхай</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          <a
            href="#cta"
            className="px-8 py-4 bg-[#d4a853] text-[#0f0a1a] rounded-full text-lg font-medium glow-pulse hover:scale-105 transition-transform"
          >
            Оставить заявку
          </a>
          <a
            href="#route"
            className="px-8 py-4 bg-[#251a35]/50 backdrop-blur-sm text-[#f5f0ff] rounded-full text-lg font-medium border border-[#2d2045] hover:bg-[#251a35]/70 transition-all hover:scale-105"
          >
            Смотреть маршрут
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-in fade-in duration-1000 delay-1000">
        <div className="w-6 h-10 rounded-full border-2 border-[#a89fc4]/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-[#d4a853] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
