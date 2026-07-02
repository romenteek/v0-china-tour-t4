import Image from "next/image";
import { tourConfig } from "@/lib/tour-config";

export function Footer() {
  return (
    <footer className="border-t border-[#7000C1]/30 bg-[#300053] py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-4">
            <Image
              src="/images/replay-life-logo-vert-transp.png"
              alt="Replay Life"
              width={60}
              height={45}
              className="h-10 w-auto"
            />
            <span className="text-[#c4a8e0]">2026</span>
          </div>

          <p className="text-center text-sm text-[#c4a8e0] md:text-right">
            {tourConfig.title}: {tourConfig.route.display}
          </p>
        </div>
      </div>
    </footer>
  );
}
