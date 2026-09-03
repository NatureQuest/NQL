import { motion } from "framer-motion";

const experiences = [
  {
    title: "The Silence",
    text: "Glide through Langkawi's ancient mangrove tunnels where the only sound is your paddle breaking still water. Time stops. The world narrows to green canopy and golden light.",
  },
  {
    title: "The Thrill",
    text: "Feel the ocean spray as you carve across Langkawi's emerald waters. Islands blur past. The horizon opens. This is freedom at full throttle.",
  },
  {
    title: "The Discovery",
    text: "Step onto Langkawi's untouched shores where footprints are temporary and wonder is permanent. Hidden beaches. Secret lagoons. Your own private paradise.",
  },
  {
    title: "The Rush",
    text: "Mud flies. Engines roar. Langkawi's jungle trails twist through emerald wilderness. Every turn reveals something wilder than the last.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-emerald relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/20" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">Feel It</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-warm-white">Experience the Difference</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">{exp.title}</h3>
              <p className="text-warm-white/80 font-sans leading-relaxed text-sm">{exp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
