import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Menu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import tourKayak from "@/assets/tour-kayak.webp";
import tourBoat from "@/assets/tour-boat.webp";
import tourJetski from "@/assets/tour-jetski.webp";
import tourIsland from "@/assets/tour-island-option2.webp";
import tourAtv from "@/assets/tour-atv.webp";
import tourRoundIsland from "@/assets/tour-round-island-v2-option3-wrx.webp";
import tourSunsetCruise from "@/assets/hero-bg.webp";
import tourDayCruise from "@/assets/tour-island.jpg";

const allTours = [
  { title: "Mangrove Kayak", tagline: "Paddle the ancient mangroves", to: "/tours/kayak", image: tourKayak },
  { title: "Mangrove Boat", tagline: "Cruise the Kilim Geopark", to: "/tours/boat", image: tourBoat },
  { title: "Jet Ski Adventure", tagline: "Race the emerald waters", to: "/tours/jetski", image: tourJetski },
  { title: "Island Hopping", tagline: "Hidden beaches & lakes", to: "/tours/islands", image: tourIsland },
  { title: "ATV Jungle Trail", tagline: "Mud, jungle & waterfalls", to: "/tours/atv", image: tourAtv },
  { title: "Round Island", tagline: "A full-day private tour", to: "/tours/round", image: tourRoundIsland },
  { title: "Sunset Cruise", tagline: "Golden hour on the Andaman Sea", to: "/tours/sunset", image: tourSunsetCruise },
  { title: "Day Cruise", tagline: "Cruise, swim & snorkel all day", to: "/tours/daycruise", image: tourDayCruise },
];

interface TourPageShellProps {
  title: string;
  description: string;
  children: ReactNode;
}

const TourPageShell = ({ title, description, children }: TourPageShellProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <title>{title} | NatureQuest Langkawi</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navbar />
      <div className="pt-28 md:pt-32 pb-4">
        <div className="container mx-auto px-6 max-w-3xl flex items-center justify-between gap-4">
          <a
            href="/#tours"
            className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Experiences
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-xs uppercase tracking-widest text-primary hover:bg-primary/10 transition-colors"
                aria-label="Browse all tours"
              >
                <Menu className="w-4 h-4" /> All Tours
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-midnight border-l border-primary/20 p-0 overflow-y-auto">
              <SheetHeader className="px-6 pt-8 pb-4 text-left">
                <p className="text-primary uppercase tracking-[0.3em] text-[10px] font-sans">Explore</p>
                <SheetTitle className="font-serif text-2xl text-foreground">Our Langkawi Tours</SheetTitle>
              </SheetHeader>
              <nav className="px-4 pb-8 space-y-2">
                {allTours.map((tour) => {
                  const active = location.pathname === tour.to;
                  return (
                    <Link
                      key={tour.to}
                      to={tour.to}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center gap-4 p-3 rounded-xl border transition-all ${
                        active
                          ? "border-primary/40 bg-primary/10"
                          : "border-transparent hover:border-primary/20 hover:bg-primary/5"
                      }`}
                    >
                      <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={tour.image}
                          alt={tour.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className={`font-serif text-base font-bold leading-tight ${active ? "text-primary" : "text-foreground"}`}>
                          {tour.title}
                        </h3>
                        <p className="text-xs text-foreground/60 mt-0.5 truncate">{tour.tagline}</p>
                      </div>
                    </Link>
                  );
                })}
              </nav>
              <div className="px-6 pb-8 border-t border-border/40 pt-6">
                <a
                  href="/#booking"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 transition-colors uppercase tracking-widest text-xs font-medium"
                >
                  Reserve Your Experience
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {children}
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default TourPageShell;
