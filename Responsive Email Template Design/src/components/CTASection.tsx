import { ArrowRight, Calendar, Phone } from "lucide-react";

interface CTASectionProps {
  className?: string;
}

export function CTASection({ className = "" }: CTASectionProps) {
  return (
    <div className={`bg-gradient-to-r from-[#FF6B35] to-[#e55a2e] py-8 md:py-12 ${className}`}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-white mb-4">
          Ready to Elevate Your Menu?
        </h2>
        
        <p className="text-white/90 font-['Montserrat'] mb-8 text-lg">
          Experience the difference with a complimentary tasting session
        </p>

        {/* Primary CTA Button */}
        <div className="mb-6">
          <button className="bg-white text-[#FF6B35] font-['Montserrat'] font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group inline-flex items-center">
            <Calendar className="h-5 w-5 mr-3" />
            Schedule Free Tasting
            <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Secondary CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-white/90">
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">Or call directly:</span>
          </div>
          <button className="font-semibold underline hover:no-underline transition-all">
            +91 7338711601
          </button>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
          <span>✓ No commitment required</span>
          <span>✓ Same-day delivery available</span>
          <span>✓ Exclusive hospitality pricing</span>
        </div>
      </div>
    </div>
  );
}