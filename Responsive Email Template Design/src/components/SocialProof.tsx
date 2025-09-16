import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Star, Quote } from "lucide-react";

interface SocialProofProps {
  className?: string;
}

export function SocialProof({ className = "" }: SocialProofProps) {
  return (
    <div className={`bg-gradient-to-r from-[#F3F9F5] to-white py-8 ${className}`}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#2E7D32]/10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Chef Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcmVzdGF1cmFudCUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU3OTIxOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional chef"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-[#2E7D32] rounded-full p-1">
                  <Quote className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#FF6B35] fill-current" />
                ))}
              </div>
              
              <blockquote className="text-[#333333] font-['Montserrat'] mb-4 italic">
                "Amvi Green's microgreens have transformed our dishes. The <span className="text-[#2E7D32] font-medium">flavor intensity</span> and <span className="text-[#2E7D32] font-medium">visual appeal</span> are unmatched. Our guests constantly ask about these vibrant garnishes."
              </blockquote>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div>
                  <cite className="font-['Montserrat'] font-semibold text-[#333333] not-italic">
                    Chef Priya Sharma
                  </cite>
                  <p className="text-[#555555] text-sm">
                    Executive Chef, The Green Table Restaurant
                  </p>
                </div>
                
                {/* Restaurant Logo placeholder */}
                <div className="bg-[#F3F9F5] px-3 py-1 rounded-full border border-[#2E7D32]/20">
                  <span className="text-[#2E7D32] text-xs font-medium">Verified Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}