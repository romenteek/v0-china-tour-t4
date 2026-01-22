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
    title: "Тем, кто не любит толпы и суету",
    description: "Небольшая группа единомышленников",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#0f0a1a]">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#251a35]/20 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance text-[#f5f0ff]">
            Почему этот тур <span className="text-[#d4a853]">другой</span>
          </h2>
          <p className="text-lg md:text-xl text-[#a89fc4] max-w-3xl mx-auto text-pretty leading-relaxed">
            Это не массовый туризм.<br />
            Это продуманное путешествие для тех, кто хочет <em>почувствовать</em> Китай, а не просто увидеть его.
          </p>
          <p className="text-[#a89fc4] mt-4">
            Небольшая группа. Комфортный темп. Умная логистика.
          </p>
        </div>

        {/* Who is this for */}
        <div className="mb-8 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-[#f5f0ff]/90">
            Кому подойдёт этот тур
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-[#1a1128]/50 backdrop-blur-sm border border-[#2d2045] hover:border-[#d4a853]/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-[#d4a853]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#d4a853]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4a853]/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-[#d4a853]" />
                </div>
                <h4 className="font-medium text-lg mb-3 text-[#f5f0ff]">
                  {feature.title}
                </h4>
                <p className="text-[#a89fc4] text-sm leading-relaxed">
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
