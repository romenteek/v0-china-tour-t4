import { Briefcase, Building, TrendingUp } from "lucide-react";

const businessOpportunities = [
  {
    icon: Briefcase,
    title: "Возможности для деловых связей",
    description: "Посетите передовые производства, крупнейшие выставки и оживлённые торговые рынки, чтобы увидеть китайскую экономику изнутри и наладить новые контакты.",
  },
  {
    icon: Building,
    title: "Гуанчжоу — центр торговли",
    description: "Окунитесь в динамичную атмосферу города, известного своими обширными торговыми площадками и международными выставками.",
  },
  {
    icon: TrendingUp,
    title: "Шанхай — деловой пульс страны",
    description: "Исследуйте финансовое сердце Китая, познакомьтесь с инновациями и перспективами в одном из ведущих мировых деловых центров.",
  },
];

export function BusinessSection() {
  return (
    <section id="business" className="py-32 relative overflow-hidden bg-[#300053]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a0080]/10 via-transparent to-[#4a0080]/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-[#FFFFFF] uppercase tracking-wide">
            Бизнес и торговля: <span className="text-[#FFC000]">возможности</span> для заинтересованных
          </h2>
          <p className="text-lg md:text-xl text-[#c4a8e0] max-w-3xl mx-auto text-pretty leading-relaxed">
            Для тех, кто работает с Китаем или заинтересован в развитии деловых связей, 
            наш тур предлагает уникальную возможность глубоко погрузиться в мир китайской коммерции.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {businessOpportunities.map((opportunity) => (
            <div
              key={opportunity.title}
              className="group relative p-8 rounded-2xl bg-[#3d0066]/50 backdrop-blur-sm border border-[#7000C1] hover:border-[#FFC000]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#FFC000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#FFC000]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFC000]/20 transition-colors duration-300">
                  <opportunity.icon className="w-7 h-7 text-[#FFC000]" />
                </div>
                <h4 className="font-medium text-xl mb-4 text-[#FFFFFF]">
                  {opportunity.title}
                </h4>
                <p className="text-[#c4a8e0] leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional note */}
        <div className="text-center">
          <p className="text-sm text-[#c4a8e0]/70 italic">
            Опционально для участников, желающих углубить профессиональные интересы и расширить деловые горизонты.
          </p>
        </div>
      </div>
    </section>
  );
}
