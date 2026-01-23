import { Music, PartyPopper, Disc3 } from "lucide-react";

const partyHighlights = [
  {
    icon: PartyPopper,
    text: "Одна незабываемая ночь в Пекине",
  },
  {
    icon: Music,
    text: "Две яркие вечеринки в Шанхае",
  },
];

export function PartiesSection() {
  return (
    <section id="parties" className="py-32 relative overflow-hidden bg-[#300053]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/15 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-[#FFFFFF] uppercase tracking-wide">
            Эксклюзивные <span className="text-[#FFC000]">вечеринки</span>
          </h2>
          <p className="text-lg md:text-xl text-[#c4a8e0] max-w-3xl mx-auto text-pretty leading-relaxed">
            Во время нашего тура вас ждут эксклюзивные вечеринки с участием Replay Community, 
            чтобы вы могли полностью погрузиться в ночную жизнь Китая и отдохнуть в кругу единомышленников.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {partyHighlights.map((highlight) => (
              <div
                key={highlight.text}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#3d0066]/50 backdrop-blur-sm border border-[#7000C1] hover:border-[#FFC000]/30 hover:bg-[#3d0066]/70 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#FFC000]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFC000]/20 transition-colors">
                  <highlight.icon className="w-7 h-7 text-[#FFC000]" />
                </div>
                <span className="text-[#FFFFFF] text-lg">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* Accented text */}
          <div className="text-center p-8 rounded-2xl bg-[#3d0066]/30 border border-[#7000C1]/50">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Disc3 className="w-6 h-6 text-[#FFC000]" />
              <span className="text-[#FFC000] font-medium text-lg">За пультом для вас будут играть:</span>
            </div>
            <p className="text-2xl md:text-3xl font-heading text-[#FFFFFF] mb-4 uppercase tracking-wide">
              Luter и Marcello
            </p>
            <p className="text-[#c4a8e0] italic">
              Приготовьтесь топтать Китай!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
