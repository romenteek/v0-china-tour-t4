import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="cta" className="py-32 relative overflow-hidden bg-[#0f0a1a]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#d4a853]/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a853]/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-[#f5f0ff]">
            Китай проще, <span className="text-[#d4a853]">чем кажется</span>
          </h2>
          
          <p className="text-xl text-[#a89fc4] mb-12">
            Когда маршрут продуман и всё уже организовано
          </p>

          <a
            href="https://t.me/romanzhk"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#d4a853] text-[#0f0a1a] rounded-full text-xl font-medium glow-pulse hover:scale-105 transition-transform"
          >
            Присоединиться к туру
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-8 text-sm text-[#a89fc4]">
            Без предоплаты на старте • Формируется группа
          </p>
        </div>
      </div>
    </section>
  );
}
