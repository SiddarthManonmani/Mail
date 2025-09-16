import imgImage1 from "figma:asset/b32d390900d8ae35b893bd2bd9eee61492aacca7.png";
import { Shield, Award } from "lucide-react";

interface EmailHeaderProps {
  className?: string;
}

export function EmailHeader({ className = "" }: EmailHeaderProps) {
  return (
    <div className={`flex items-center justify-between px-6 py-4 bg-white ${className}`}>
      {/* Logo - Top Left */}
      <div className="flex items-center">
        <div className="relative">
          <div 
            className="bg-center bg-cover bg-no-repeat h-10 w-10 rounded-full"
            style={{ backgroundImage: `url('${imgImage1}')` }}
          />
        </div>
        <div className="ml-3">
          <h1 className="text-[#026a15] text-2xl font-['Italiana'] tracking-tight">
            Amvi Green
          </h1>
        </div>
      </div>

      {/* Authority Badge - Top Right */}
      <div className="flex items-center bg-[#F3F9F5] px-3 py-2 rounded-full border border-[#2E7D32]/20">
        <Shield className="h-4 w-4 text-[#2E7D32] mr-2" />
        <span className="text-[#2E7D32] font-medium text-sm whitespace-nowrap">
          FSSAI Certified
        </span>
      </div>
    </div>
  );
}