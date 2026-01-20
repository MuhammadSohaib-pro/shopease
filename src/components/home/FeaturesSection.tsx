import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $50",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% protected checkout",
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Dedicated customer care",
    },
  ];
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center  gap-2">
              <div className="h-12 w-12 p-1 bg-accent/20 rounded-full flex items-center justify-center">
                <item.icon size={24} className="text-lg text-accent" />
              </div>
              <h6 className="text-primary text-sm">{item.title}</h6>
              <p className="text-muted-foreground text-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
