import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mana.jpg";

const Hero = () => {
  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-primary animate-fade-in">
            Mana.
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-foreground font-medium">
            Dubai's first mobile oxygen therapy service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8"
              onClick={scrollToAppointment}
            >
              Book Your Session
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8"
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
