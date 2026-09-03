import { motion } from "framer-motion";
import { Users, ShieldCheck, Award, CalendarCheck, BadgeDollarSign, Headset } from "lucide-react";

const features = [
  { icon: Users, title: "Private & Small Groups", desc: "Intimate experiences with no more than 10 guests per tour." },
  {
    icon: ShieldCheck,
    title: "Safety Certified Guides",
    desc: "Licensed, insured, and professionally accredited.",
  },
  { icon: Award, title: "Premium Equipment", desc: "Top-tier gear maintained and inspected before every expedition." },
  { icon: CalendarCheck, title: "Seamless Booking", desc: "Book in seconds. Confirm instantly. No hidden steps." },
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    desc: "What you see is what you pay. No surprise fees, ever.",
  },
  { icon: Headset, title: "Concierge Support", desc: "Dedicated support from inquiry to your Langkawi journey home." },
];

const WhyChooseSection = () => {
  return (
    <section id="why" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">Why NatureQuest Langkawi</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">Langkawi's Most Trusted</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-colors duration-300"
            >
              <f.icon size={32} className="text-primary mb-4" />
              <h3 className="font-serif text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm font-sans leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
