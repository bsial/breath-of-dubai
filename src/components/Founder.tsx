import { Card } from "@/components/ui/card";
import { Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <section id="founder" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Meet Our Founder
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-primary/10 flex items-center justify-center">
                  <User className="w-20 h-20 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Sarah Al-Mansouri
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As someone deeply passionate about longevity-focused treatments and holistic wellness, 
                    I've personally experienced the transformative power of pressurized oxygen therapy. 
                    After years of exploring cutting-edge health technologies and being an avid user of 
                    hyperbaric chambers myself, I founded Mana with a simple mission: to make this 
                    incredible therapy accessible and convenient for everyone in Dubai.
                  </p>
                  <p>
                    I believe wellness shouldn't be complicated or time-consuming. That's why we bring 
                    the therapy directly to you—whether you're at home, your office, or recovering after 
                    a long flight. Every session is an opportunity to invest in your long-term health and vitality.
                  </p>
                  <p className="font-medium text-foreground">
                    I'm always happy to chat about wellness, longevity, and how pressurized oxygen therapy 
                    might benefit you. Feel free to reach out anytime!
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button variant="outline" className="gap-2">
                    <Mail className="w-4 h-4" />
                    sarah@mana-dubai.com
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Phone className="w-4 h-4" />
                    +971 50 123 4567
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Founder;
