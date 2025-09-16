import { Clock } from "lucide-react";

interface UrgencyBannerProps {
  className?: string;
}

export function UrgencyBanner({ className = "" }: UrgencyBannerProps) {
  return (
    <div className={`bg-gradient-to-r from-[#2E7D32] to-[#4CAF50] py-3 px-6 ${className}`}>
      <div className="flex items-center justify-center text-white">
        <Clock className="h-4 w-4 mr-2 animate-pulse" />
        <span className="font-medium text-sm md:text-base text-center">
          Limited weekly batches — exclusive to hospitality partners
        </span>
      </div>
    </div>
  );
}