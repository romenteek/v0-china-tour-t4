import { Sparkles, Users, Compass, Heart } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Тем, кто едет в Китай впервые",
    description: "Идеальное введение в культуру и атмосферу страны",
  },
  {
    icon: Sparkles,
    title: "Любителям городов и культуры",
    description: "Три уникальных мегаполиса с богатой историей",
  },
  {
    icon: Heart,
    title: "Тем, кто ценит комфорт",
    description: "Продуманная логистика и удобный темп",
  },
  {
    icon: Users,
    title: "Тем, кто ищет новые бизнес возможности",
    description: "Надежные и проверенные контакты по подбору товаров и поставщиков.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#300053]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a0080]/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-[#FFFFFF] uppercase tracking-wide">
            Почему этот тур <span className="text-[#FFC000]">другой</span>
          </h2>
          <p className="text-lg md:text-xl text-[#c4a8e0] max-w-3xl mx-auto text-pretty leading-relaxed">
            Это не массовый туризм.<br />
            Это продуманное путешествие для тех, кто хочет <em>почувствовать</em> Китай, а не просто увидеть его.
          </p>
          <p className="text-[#c4a8e0] mt-4">
            Свои люди. Комфортный темп. Умная логистика.
          </p>
        </div>

        {/* Who is this for */}
        <div className="mb-8 text-center">
          <h3 className="font-heading text-2xl md:text-3xl text-[#FFFFFF]/90 uppercase tracking-wide">
            Кому подойдёт этот тур
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-[#3d0066]/50 backdrop-blur-sm border border-[#7000C1] hover:border-[#FFC000]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#FFC000]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#FFC000]/10 flex items-center justify-center mb-6 group-hover:bg-[#FFC000]/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-[#FFC000]" />
                </div>
                <h4 className="font-medium text-lg mb-3 text-[#FFFFFF]">
                  {feature.title}
                </h4>
                <p className="text-[#c4a8e0] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
