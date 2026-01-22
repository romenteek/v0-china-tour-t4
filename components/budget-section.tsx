import { Check } from "lucide-react";

const budgetPoints = [
  "Авторский тур в небольшой группе",
  "Cтоимость тура: 90 000 рублей на человека без международного перелёта с учетом двухместного размещения",
  "Личные расходы: ~ $50 в день на человека",
  "Тур формируется, без предоплаты на старте",
];

export function BudgetSection() {
  return (
    <section id="budget" className="py-32 relative overflow-hidden bg-[#0f0a1a]">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-[#f5f0ff]">
              Формат и <span className="text-[#d4a853]">бюджет</span>
            </h2>
          </div>

          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#1a1128]/80 to-[#1a1128]/40 backdrop-blur-xl border border-[#2d2045]">
            {/* Decorative glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#d4a853]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#d4a853]/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 space-y-6">
              {budgetPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-[#d4a853]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#d4a853]" />
                  </div>
                  <p className="text-lg text-[#f5f0ff]/90 leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
