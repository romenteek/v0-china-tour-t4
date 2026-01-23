import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-12 border-t border-[#7000C1]/30 bg-[#300053]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/replay-life-logo-vert-transp.png"
              alt="Replay Life"
              width={60}
              height={45}
              className="h-10 w-auto"
            />
            <span className="text-[#c4a8e0]">• 2026</span>
          </div>
          
          <p className="text-sm text-[#c4a8e0] text-center md:text-right">
            Авторский тур от Replay Life
          </p>
        </div>
      </div>
    </footer>
  );
}
