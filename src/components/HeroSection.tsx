import { motion } from "framer-motion";
import { Star, Shield, Leaf, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";

const badges = [
  { icon: Star, label: "5-Star Rated" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Leaf, label: "Small Private Groups" },
  { icon: Trophy, label: "Premium Equipment" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Langkawi limestone karst and emerald waters"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary uppercase tracking-[0.3em] text-sm mb-6 font-sans font-medium"
        >
          Langkawi's Premier Luxury Adventure
        </motion.p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          Where Luxury Meets
          <br />
          <span className="text-primary">Wild Nature</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans"
        >
          Private. Exclusive. Unforgettable Nature Experiences in Langkawi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a href="#booking">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-sm px-10 py-6 rounded-full shadow-lg shadow-primary/20">
              Reserve Your Experience
            </Button>
          </a>
          <a href="#tours">
            <Button
              variant="outline"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 uppercase tracking-widest text-sm px-10 py-6 rounded-full"
            >
              Explore Our Tours
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12"
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-muted-foreground">
              <badge.icon size={18} className="text-primary" />
              <span className="text-xs uppercase tracking-wider font-sans">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
