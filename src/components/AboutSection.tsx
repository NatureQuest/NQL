import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden aspect-[4/5]"
          >
            <img
              src={aboutImage}
              alt="NatureQuest luxury tour experience"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
              About NatureQuest Langkawi
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Not Just a Tour.
              <br />
              <span className="text-primary">A Langkawi Experience.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
              NatureQuest delivers curated, safe, and unforgettable nature experiences
              across Langkawi — designed for travelers who expect more than just a tour. Every journey is
              private, every detail is considered, every moment is crafted on this extraordinary island.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Private Experiences",
                "Personalized Service",
                "Professional Guides",
                "Safety-First Standards",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-sans">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <a href="#why">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-xs px-8 py-5 rounded-full">
                Discover the Difference
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
