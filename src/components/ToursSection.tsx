import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tourKayak from "@/assets/tour-kayak.webp";
import tourBoat from "@/assets/tour-boat.webp";
import tourJetski from "@/assets/tour-jetski.webp";
import tourIsland from "@/assets/tour-island-option2.webp";
import tourAtv from "@/assets/tour-atv.webp";
import tourRoundIsland from "@/assets/tour-round-island-v2-option3-wrx.webp";

const tours = [
  { title: "Mangrove Kayak", description: "Paddle silently through Langkawi's ancient mangrove tunnels in emerald waters.", image: tourKayak, slug: "kayak" },
  { title: "Mangrove Boat", description: "Cruise through Langkawi's serene mangrove forest aboard a speedboat.", image: tourBoat, slug: "boat" },
  { title: "Jet Ski Adventure", description: "Race across Langkawi's emerald waters with breathtaking island panoramas.", image: tourJetski, slug: "jetski" },
  { title: "Island Hopping", description: "Discover Langkawi's hidden beaches and pristine islands only accessible by boat.", image: tourIsland, slug: "islands" },
  { title: "ATV Jungle Trail", description: "Conquer Langkawi's rugged jungle trails through lush tropical landscapes.", image: tourAtv, slug: "atv" },
  { title: "Round Island", description: "A private circumnavigation of Langkawi — the ultimate island experience.", image: tourRoundIsland, slug: "round" },
];

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">Our Langkawi Experiences</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Curated Langkawi Adventures</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/5]"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl font-bold mb-2 drop-shadow-md">{tour.title}</h3>
                <p className="text-foreground/80 text-sm mb-4 font-sans drop-shadow-sm">{tour.description}</p>
                <div className="flex flex-wrap gap-3 items-center">
                  <a href="#booking">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-xs px-6 rounded-full">
                      Book Now
                    </Button>
                  </a>
                  <Link to={`/tours/${tour.slug}`}>
                    <Button
                      variant="outline"
                      className="uppercase tracking-widest text-xs px-6 rounded-full border-primary/50 text-primary hover:bg-primary/10"
                    >
                      More Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
