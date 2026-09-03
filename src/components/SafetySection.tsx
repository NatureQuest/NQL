import { motion } from "framer-motion";
import { FileCheck, Shield, UserCheck, Wrench } from "lucide-react";

const credentials = [
  { icon: FileCheck, title: "Fully Licensed Operator", desc: "Registered and approved by all local and national regulatory authorities." },
  { icon: Shield, title: "Comprehensive Insurance", desc: "Every tour is fully insured for your complete peace of mind." },
  { icon: UserCheck, title: "Experienced Langkawi Guides", desc: "Certified professionals with deep knowledge of every Langkawi route and ecosystem." },
  { icon: Wrench, title: "Premium Maintained Equipment", desc: "All gear is inspected, serviced, and replaced on a strict schedule." },
];

const SafetySection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
            Safety & Trust
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Your Safety, Our Priority
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {credentials.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm font-sans">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
