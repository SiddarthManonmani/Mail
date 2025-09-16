import { EmailHeader } from "./components/EmailHeader";
import { UrgencyBanner } from "./components/UrgencyBanner";
import { HeroSection } from "./components/HeroSection";
import { ValueGrid } from "./components/ValueGrid";
import { SocialProof } from "./components/SocialProof";
import { CTASection } from "./components/CTASection";
import { EmailFooter } from "./components/EmailFooter";

export default function App() {
  return (
    <div className="bg-[#F3F9F5] min-h-screen font-['Montserrat']">
      {/* Email Container - 600px max width for email compatibility */}
      <div className="max-w-[600px] mx-auto bg-white min-h-screen shadow-lg">
        
        {/* Z-Pattern Layout Implementation */}
        
        {/* Top Section: Logo (Left) + Authority Badge (Right) */}
        <EmailHeader />
        
        {/* Urgency Banner - Above fold */}
        <UrgencyBanner />
        
        {/* Hero Block - Full-width with microgreens image */}
        <HeroSection />
        
        {/* Value Grid - Four benefits in diagonal arrangement */}
        <ValueGrid />
        
        {/* Social Proof - Testimonial with chef quote */}
        <SocialProof />
        
        {/* CTA Block - Contrasting orange button */}
        <CTASection />
        
        {/* Footer - Contact info and secondary links */}
        <EmailFooter />
        
      </div>
    </div>
  );
}