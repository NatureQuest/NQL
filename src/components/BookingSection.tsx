import { useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { CalendarIcon, MessageCircle, ShieldCheck, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import type { DateRange } from "react-day-picker";

const tours = [
  "Mangrove Kayak Tour",
  "Mangrove Boat Tour",
  "Jet Ski Adventure",
  "Island Hopping Tour",
  "ATV Jungle Trail",
  "Round Island Tour",
  "Sunset Cruise",
  "Day Cruise",
];

const BookingSection = () => {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [tour, setTour] = useState("");
  const [guests, setGuests] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tour || !dateRange?.from || !guests || !name) {
      toast.error("Please fill in all fields");
      return;
    }
    const dateStr = dateRange.to
      ? `${format(dateRange.from, "PPP")} to ${format(dateRange.to, "PPP")}`
      : format(dateRange.from, "PPP");
    const message = `Hi NatureQuest! I'd like to book: ${tour} on ${dateStr} for ${guests} guest(s). My name is ${name}.`;
    window.open(`https://wa.me/60172757968?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp to confirm your booking!");
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">Book Now</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Your Langkawi Adventure Awaits</h2>
            <p className="text-muted-foreground font-sans">Limited daily slots available for private Langkawi experiences.</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 md:p-10 border border-border space-y-6"
          >
            <div>
              <label className="text-sm font-sans text-muted-foreground mb-2 block">Your Name</label>
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-sans text-muted-foreground mb-2 block">Select Experience</label>
              <Select value={tour} onValueChange={setTour}>
                <SelectTrigger className="bg-background border-border rounded-lg">
                  <SelectValue placeholder="Choose your tour" />
                </SelectTrigger>
                <SelectContent>
                  {tours.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-sans text-muted-foreground mb-2 block">Available Dates</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-background border-border rounded-lg",
                      !dateRange?.from && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        `${format(dateRange.from, "PPP")} – ${format(dateRange.to, "PPP")}`
                      ) : (
                        format(dateRange.from, "PPP")
                      )
                    ) : (
                      "Pick your available dates"
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="range"
                    selected={dateRange}
                    onSelect={setDateRange}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    numberOfMonths={2}
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div>
              <label className="text-sm font-sans text-muted-foreground mb-2 block">Number of Guests</label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="bg-background border-border rounded-lg">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n === 1 ? "Guest" : "Guests"}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-sm py-6 rounded-full shadow-lg shadow-primary/20"
            >
              Reserve Your Experience
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Got a group bigger than 10? No problem — just{" "}
              <a href="https://wa.me/60172757968" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp us</a>{" "}
              and we'll sort it out for you.
            </p>

            <div className="flex items-center justify-center gap-6 pt-2">
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans">
                <ShieldCheck size={14} className="text-primary" /> Verified Operator
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-sans">
                <Lock size={14} className="text-primary" /> Secure Booking
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-8"
          >
            <a
href="https://wa.me/60172757968"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-sans text-sm"
            >
              <MessageCircle size={18} />
              Prefer WhatsApp? Chat with us directly
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
