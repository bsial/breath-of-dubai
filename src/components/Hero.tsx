import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";
import { useState } from "react";

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  const scrollToAppointment = () => {
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVideoEnd = () => {
    setShowContent(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-background/30 z-[1]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-7xl md:text-9xl font-bold mb-4 text-primary">
            Mana.
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-foreground font-medium">
            Pressurized Oxygen Therapy, brought directly to your home.
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
      
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
