import { Leaf, Truck, Shield, Zap } from "lucide-react";

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ValueItem({ icon, title, description, delay }: ValueItemProps) {
  return (
    <div 
      className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-sm border border-[#2E7D32]/10 hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-[#F9F3D9] rounded-full p-4 mb-4">
        <div className="text-[#2E7D32] [&>svg]:h-6 [&>svg]:w-6">
          {icon}
        </div>
      </div>
      <h3 className="font-['Montserrat'] font-semibold text-[#333333] mb-2 text-lg">
        {title}
      </h3>
      <p className="font-['Montserrat'] text-[#555555] text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface ValueGridProps {
  className?: string;
}

export function ValueGrid({ className = "" }: ValueGridProps) {
  const values = [
    {
      icon: <Leaf />,
      title: "Nutrient Dense",
      description: "40x more nutrients than mature vegetables",
      delay: 0
    },
    {
      icon: <Truck />,
      title: "Fresh Delivery",
      description: "Harvested & delivered same day",
      delay: 100
    },
    {
      icon: <Shield />,
      title: "Pesticide Free",
      description: "Grown without chemicals or pesticides",
      delay: 200
    },
    {
      icon: <Zap />,
      title: "Quick Growing",
      description: "Ready in 7-14 days from seed",
      delay: 300
    }
  ];

  return (
    <div className={`bg-white py-8 md:py-12 ${className}`}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <ValueItem
              key={index}
              {...value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}