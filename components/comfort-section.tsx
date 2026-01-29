import { Train, Plane, Building2, Moon, Clock, Route } from "lucide-react";

const comfortFeatures = [
  {
    icon: Train,
    text: "Скоростные поезда до 350 км/ч",
  },
  {
    icon: Plane,
    text: "Внутренние перелёты",
  },
  {
    icon: Building2,
    text: "Отели в центре городов",
  },
  {
    icon: Moon,
    text: "Без ночных переездов",
  },
  {
    icon: Clock,
    text: "Продуманный ежедневный ритм",
  },
  {
    icon: route,
    text: "Комфортные трансферы",
  },

];

export function ComfortSection() {
  return (
    <section id="comfort" className="py-32 relative overflow-hidden bg-[#300053]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4a0080]/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-[#FFFFFF] uppercase tracking-wide">
            Комфорт и <span className="text-[#FFC000]">логистика</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comfortFeatures.map((feature) => (
              <div
                key={feature.text}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#3d0066]/30 backdrop-blur-sm border border-[#7000C1]/30 hover:border-[#FFC000]/30 hover:bg-[#3d0066]/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FFC000]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FFC000]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#FFC000]" />
                </div>
                <span className="text-[#FFFFFF]/90">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
