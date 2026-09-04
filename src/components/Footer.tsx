import { MessageCircle, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const tourLinks = [
  { label: "Mangrove Kayak Tour", to: "/tours/kayak" },
  { label: "Mangrove Boat Tour", to: "/tours/boat" },
  { label: "Jet Ski Adventure", to: "/tours/jetski" },
  { label: "Island Hopping Tour", to: "/tours/islands" },
  { label: "ATV Jungle Trail", to: "/tours/atv" },
  { label: "Round Island Tour", to: "/tours/round" },
  { label: "Sunset Cruise", to: "/tours/sunset" },
  { label: "Day Cruise", to: "/tours/daycruise" },
];

const Footer = () => {
  return (
    <footer className="bg-midnight pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">NatureQuest</h3>
            <p className="text-muted-foreground text-sm font-sans leading-relaxed mb-6">
              Langkawi's luxury adventure. Exclusive nature. Unforgettable experiences crafted for travelers who demand the
              extraordinary.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/60172757968"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Experiences
            </h4>
            <ul className="space-y-2">
              {tourLinks.map((t) => (
                <li key={t.to}>
                  <Link
                    to={t.to}
                    className="text-muted-foreground text-sm font-sans hover:text-primary transition-colors"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-sans">
                <Phone size={14} className="text-primary flex-shrink-0" /> +60172757968
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-sans">
                <Mail size={14} className="text-primary flex-shrink-0" /> naturequest.v@gmail.com
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm font-sans">
                <MapPin size={14} className="text-primary" /> Langkawi Island, Malaysia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-sans">
            © {new Date().getFullYear()} NatureQuest. All rights reserved.
          </p>
          <a href="#" className="text-muted-foreground text-xs font-sans hover:text-primary transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
