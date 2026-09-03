import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
{
  name: "Sarah & James",
  location: "London, UK",
  text: "The most unforgettable experience of our honeymoon. Our guide was incredible — knowledgeable, patient, and genuinely passionate about nature."
},
{
  name: "Michael Torres",
  location: "New York, USA",
  text: "I've done tours all over the world. NatureQuest is in a league of its own. The equipment, the safety standards, the personal attention — flawless."
},
{
  name: "Elena Dubois",
  location: "Paris, France",
  text: "From the moment we booked, everything was seamless. The jet ski tour was thrilling, and the island picnic afterwards felt like a dream."
},
{
  name: "Raj & Priya Patel",
  location: "Mumbai, India",
  text: "Our family of four felt completely safe the entire time. The kids are still talking about the mangrove kayak tour weeks later."
}];


const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16">

          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold">
            Words from Our Langkawi Guests
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) =>
            <Star key={i} size={20} className="text-primary fill-primary" />
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}>

              <p className="text-xl md:text-2xl italic leading-relaxed mb-8 text-foreground/90 font-sans">
                "{t.text}"
              </p>
              <p className="font-sans font-semibold text-primary">{t.name}</p>
              <p className="font-sans text-sm text-muted-foreground">{t.location}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial">

              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial">

              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;