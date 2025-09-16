import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <div className={`relative bg-gradient-to-br from-[#F3F9F5] to-white ${className}`}>
      <div className="max-w-2xl mx-auto px-6 py-8 md:py-12">
        {/* Hero Image */}
        <div className="relative mb-6">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1668733520830-31ac5bfc336e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb2dyZWVucyUyMGZyZXNoJTIwaGVyYnMlMjBncm93aW5nfGVufDF8fHx8MTc1NzkyMzQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fresh microgreens growing in trays"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          
          {/* Visual cue arrow pointing down */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
            <div className="bg-[#FF6B35] rounded-full p-2 shadow-lg animate-bounce">
              <ArrowDown className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#333333] mb-4 leading-tight">
            Fresh Partnership
            <span className="block text-[#2E7D32]">Opportunity</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-['Montserrat'] font-medium text-[#555555] mb-6">
            Planted-to-Order Excellence
          </h2>
          
          <p className="text-base md:text-lg text-[#555555] leading-relaxed max-w-lg mx-auto">
            Elevate your culinary creations with our premium microgreens, 
            <span className="text-[#2E7D32] font-medium"> grown exclusively</span> for hospitality professionals.
          </p>
        </div>
      </div>
    </div>
  );
}