export function Footer() {
  return (
    <footer className="py-12 border-t border-[#2d2045]/30 bg-[#0f0a1a]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif text-xl text-[#d4a853]">Ваш первый Китай</span>
            <span className="text-[#a89fc4]">• 2026</span>
          </div>
          
          <p className="text-sm text-[#a89fc4] text-center md:text-right">
            Авторский тур от Replay Life
          </p>
        </div>
      </div>
    </footer>
  );
}
