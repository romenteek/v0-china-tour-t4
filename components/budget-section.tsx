import { Check } from "lucide-react";

const budgetPoints = [
  "Авторский тур в группе своих людей",
  "Cтоимость тура: От 100 000 рублей на человека без международного перелёта с учетом двухместного размещения (цена действительна на 30.01.2026)",
  "Личные расходы: ~ $50 в день на человека",
  "В стоимость тура входит посещение всех вечеринок",
  "Возможность присоединится на любом этапе, стоимость будет рассчитана индивидуально",
  "Сопровождение на всех этапах тура",
];

export function BudgetSection() {
  return (
    <section id="budget" className="py-32 relative overflow-hidden bg-[#300053]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-[#FFFFFF] uppercase tracking-wide">
              Формат и <span className="text-[#FFC000]">бюджет</span>
            </h2>
          </div>

          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#3d0066]/80 to-[#3d0066]/40 backdrop-blur-xl border border-[#7000C1]">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFC000]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#7000C1]/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              {budgetPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFC000]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#FFC000]" />
                  </div>
                  <p className="text-lg text-[#FFFFFF]/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
