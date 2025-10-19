import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Mana Pods
            </h3>
            <p className="text-muted-foreground mb-4">
              Dubai's premier mobile oxygen therapy service, bringing wellness and vitality to your doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+971 50 996 5171</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@manapods.com</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Dubai, UAE</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Service Hours</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Sunday</p>
              <p className="font-semibold text-primary">8:00 AM - 10:00 PM</p>
              <p className="text-sm">Mobile service available across Dubai</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mana Pods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
