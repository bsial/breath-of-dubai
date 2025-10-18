import { Card } from "@/components/ui/card";
import brainIcon from "@/assets/brain-abstract.jpg";
import jetlagIcon from "@/assets/jetlag-abstract.jpg";
import energyIcon from "@/assets/energy-abstract.jpg";
import { Brain, Plane, Zap, Heart, Shield, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      image: brainIcon,
      title: "Enhanced Cognitive Function",
      description: "Boost mental clarity, focus, and memory with increased oxygen flow to the brain. Perfect for professionals and students seeking peak performance.",
    },
    {
      icon: Plane,
      image: jetlagIcon,
      title: "Rapid Jet Lag Relief",
      description: "Combat travel fatigue and adjust to new time zones faster. Ideal for frequent flyers arriving in Dubai or departing on business trips.",
    },
    {
      icon: Zap,
      image: energyIcon,
      title: "Increased Energy & Vitality",
      description: "Feel rejuvenated and energized naturally. Oxygen therapy helps reduce fatigue and promotes overall wellness and recovery.",
    },
  ];

  const additionalBenefits = [
    { icon: Heart, text: "Improved athletic recovery" },
    { icon: Shield, text: "Strengthened immune system" },
    { icon: Sparkles, text: "Better skin health & complexion" },
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            The Power of Pure Oxygen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover how oxygen therapy can transform your wellness and performance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit) => (
            <Card 
              key={benefit.title}
              className="p-8 hover:shadow-lg transition-all duration-300 border border-border bg-card"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground text-center">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border border-border">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Additional Benefits
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {additionalBenefits.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
