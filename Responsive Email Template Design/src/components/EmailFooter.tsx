import imgImage1 from "figma:asset/b32d390900d8ae35b893bd2bd9eee61492aacca7.png";
import { Mail, Phone, MapPin, ExternalLink, Facebook, Instagram, Linkedin } from "lucide-react";

interface EmailFooterProps {
  className?: string;
}

export function EmailFooter({ className = "" }: EmailFooterProps) {
  return (
    <div className={`bg-[#F3F9F5] border-t border-[#2E7D32]/10 ${className}`}>
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center mb-6">
          <div 
            className="bg-center bg-cover bg-no-repeat h-8 w-8 rounded-full mr-3"
            style={{ backgroundImage: `url('${imgImage1}')` }}
          />
          <h3 className="text-[#026a15] text-xl font-['Italiana']">Amvi Green</h3>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center text-[#555555]">
              <Phone className="h-4 w-4 mr-3 text-[#2E7D32]" />
              <a href="tel:+917338711601" className="hover:text-[#2E7D32] transition-colors">
                +91 7338711601
              </a>
            </div>
            <div className="flex items-center text-[#555555]">
              <Mail className="h-4 w-4 mr-3 text-[#2E7D32]" />
              <a href="mailto:hello@amvigreen.com" className="hover:text-[#2E7D32] transition-colors">
                hello@amvigreen.com
              </a>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start text-[#555555]">
              <MapPin className="h-4 w-4 mr-3 text-[#2E7D32] mt-0.5 flex-shrink-0" />
              <span className="text-sm">
                Growing Facility<br />
                Bangalore, Karnataka
              </span>
            </div>
          </div>
        </div>

        {/* Secondary Website Link */}
        <div className="text-center mb-6">
          <button className="inline-flex items-center text-[#2E7D32] font-['Montserrat'] font-medium hover:underline">
            <ExternalLink className="h-4 w-4 mr-2" />
            Visit Our Website
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
            <Instagram className="h-4 w-4 text-[#2E7D32]" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
            <Facebook className="h-4 w-4 text-[#2E7D32]" />
          </button>
          <button className="bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all">
            <Linkedin className="h-4 w-4 text-[#2E7D32]" />
          </button>
        </div>

        {/* Curiosity Hook */}
        <div className="text-center mb-6">
          <button className="text-[#555555] text-sm hover:text-[#2E7D32] underline transition-colors">
            Learn our planting process →
          </button>
        </div>

        {/* Legal and Unsubscribe */}
        <div className="border-t border-[#2E7D32]/10 pt-4 text-center text-xs text-[#555555] space-y-2">
          <p>© 2025 Amvi Green. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <button className="hover:text-[#2E7D32] underline">Unsubscribe</button>
            <button className="hover:text-[#2E7D32] underline">Privacy Policy</button>
            <button className="hover:text-[#2E7D32] underline">Terms</button>
          </div>
          <p className="text-xs">
            You received this email because you're a registered F&B professional interested in premium microgreens.
          </p>
        </div>
      </div>
    </div>
  );
}