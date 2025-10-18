import { Card } from "@/components/ui/card";
import vanBlueprint from "@/assets/van-blueprint.jpg";
import { Truck, Clock, Sparkles } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Truck,
      title: "We Come to You",
      description: "Our luxury mobile therapy van arrives at your location"
    },
    {
      icon: Clock,
      title: "Relax & Rejuvenate",
      description: "Experience your therapy session in our premium pods"
    },
    {
      icon: Sparkles,
      title: "Feel the Difference",
      description: "Leave feeling refreshed, energized, and revitalized"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Premium pressurized oxygen therapy delivered to your doorstep
          </p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card className="p-8 bg-card border border-border overflow-hidden">
            <img 
              src={vanBlueprint} 
              alt="Mana mobile therapy van interior"
              className="w-full h-auto object-contain mb-6"
            />
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold text-foreground">
                Your Sanctuary on Wheels
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our specially designed mobile wellness sanctuary features state-of-the-art hardshell pressurized chambers, 
                plush seating, and premium carpeting—creating a serene, spa-like atmosphere. 
                A certified technician brings this peaceful retreat directly to your door, ensuring 
                complete privacy and convenience.
              </p>
              <p className="text-sm text-muted-foreground italic max-w-3xl mx-auto pt-2">
                Our chambers utilize medical-grade air compressors to create a pressurized environment enriched with oxygen. 
                While not a pure oxygen environment, this controlled pressurization allows your body to absorb significantly 
                more oxygen than normal atmospheric conditions—promoting healing, recovery, and deep relaxation.
              </p>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((step) => (
            <Card 
              key={step.title}
              className="p-6 bg-card border border-border text-center"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
