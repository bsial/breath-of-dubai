import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Appointment from "@/components/Appointment";
import Founder from "@/components/Founder";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <HowItWorks />
      <Appointment />
      <Founder />
      <Footer />
    </div>
  );
};

export default Index;
