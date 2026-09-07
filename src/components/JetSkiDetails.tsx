import { useState } from "react";
import { CheckCircle, MapPin, Info, Zap, Clock, Users, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";
import jetskiGallery1 from "@/assets/jetski-gallery-1.jpg";
import jetskiGallery2 from "@/assets/jetski-gallery-2.jpg";
import jetskiGallery3 from "@/assets/jetski-gallery-3.jpg";
import jetskiGallery4 from "@/assets/jetski-gallery-4.jpg";
import jetskiGallery5 from "@/assets/jetski-gallery-5.jpg";

const galleryImages = [
  { src: jetskiGallery1, alt: "Family of four on two jet skis in Langkawi's green waters" },
  { src: jetskiGallery2, alt: "Group of riders pausing beneath Langkawi's limestone cliffs" },
  { src: jetskiGallery3, alt: "Couple riding a jet ski past a limestone karst" },
  { src: jetskiGallery4, alt: "Couple on a jet ski in a calm emerald lagoon" },
  { src: jetskiGallery5, alt: "Supercharged Yamaha jet ski powering through the water" },
];

const groupPackages = [
  {
    name: "Bronze Package",
    price: "RM550 / jet ski",
    meta: "2 Hours • 25 KM • 3 Checkpoints",
    departures: "9:30 AM, 12:00 PM, 2:00 PM or 4:00 PM",
    stops: [
      "Pregnant Maiden Lake view",
      "Eagle feeding at Pulau Singa",
      "Beras Basah / Diamond Island — beach walk & swimming",
    ],
    note: "A shorter tour — well suited to families and children.",
    featured: false,
  },
  {
    name: "Silver Package",
    price: "RM700 / jet ski",
    meta: "3–4 Hours • 50 KM • 7 Checkpoints • Free drone video",
    departures: "9:30 AM or 2:00 PM",
    stops: [
      "Private beach",
      "Pregnant Maiden Lake",
      "Beras Basah / Diamond Island",
      "Limestone cliff",
      "Rock formation",
      "Fjord Eco Marine Park (swimming)",
      "Eagle feeding",
    ],
    note: "The middle option — a proper half-day out on the water.",
    featured: true,
  },
  {
    name: "Gold Package",
    price: "RM800 / jet ski",
    meta: "4 Hours • 70 KM • 10 Checkpoints • Free drone video",
    departures: "9:30 AM or 2:00 PM",
    stops: [
      "Pregnant Maiden Lake",
      "Beras Basah / Diamond Island",
      "Private beach",
      "Eagle feeding",
      "Eagle Square (Langkawi signature)",
      "Tuba Island — Langkawi's second largest island",
      "Mangrove river tour",
      "Limestone cliff",
      "Rock formation",
      "Fjord Eco Marine Park (swimming)",
    ],
    note: "The full group route — every checkpoint we run.",
    featured: false,
  },
];

const superchargedPackages = [
  {
    name: "Luxury Bronze — Supercharged",
    price: "RM1,199",
    meta: "2 Hours • 4 Checkpoints",
    perks: ["Lunch included", "Free drone video", "Yamaha FX 1800cc SVHO"],
  },
  {
    name: "Luxury Gold — Supercharged",
    price: "RM1,699",
    meta: "4 Hours • 7 Checkpoints",
    perks: ["Lunch included", "Free drone video", "Yamaha FX 1800cc SVHO"],
  },
];

const JetSkiDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Jet Ski Adventure</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Ride your own jet ski across Langkawi's emerald waters with a licensed guide leading the way. Weave
            between limestone cliffs, stop for eagle feeding, swim off a private beach, and cover as much of the
            island as your package allows — from a relaxed two-hour loop to a full 70&nbsp;km day.
          </p>
        </header>

        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2">
            <Camera className="h-5 w-5 text-primary" /> Gallery
          </h3>
          <div
            className="relative rounded-xl overflow-hidden bg-muted flex items-center justify-center"
            style={{ minHeight: "250px" }}
          >
            <img
              src={galleryImages[currentImage].src}
              alt={galleryImages[currentImage].alt}
              className="max-w-full max-h-[400px] object-contain transition-opacity duration-300"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-colors"
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-background transition-colors"
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? "bg-primary" : "bg-background/60"}`}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${i === currentImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"}`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" /> Group Tour Packages
          </h3>
          <p className="text-sm text-muted-foreground">
            Priced per jet ski, with two riders per machine. Every package includes a licensed guide, all safety
            gear and island-wide hotel pickup.
          </p>

          {groupPackages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-xl p-5 space-y-3 border ${pkg.featured ? "border-primary/30 bg-primary/5" : "border-border"}`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-serif text-lg font-bold">{pkg.name}</h4>
                <span className="text-primary font-bold text-lg">{pkg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4 shrink-0" /> {pkg.meta}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Users className="h-4 w-4 shrink-0" /> Departs {pkg.departures}
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                {pkg.stops.map((stop) => (
                  <li key={stop}>• {stop}</li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic pt-1">{pkg.note}</p>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Private Tour
          </h3>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Platinum Package</h4>
              <span className="text-primary font-bold text-lg">RM999 / jet ski</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4 shrink-0" /> 4–5 Hours • 70 KM • 10 Checkpoints • Free drone video
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4 shrink-0" /> Departs 9:30 AM — morning session only • Minimum 2 jet skis
            </p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Pregnant Maiden Lake</li>
              <li>• Beras Basah / Diamond Island</li>
              <li>• Private beach</li>
              <li>• Eagle feeding</li>
              <li>• Eagle Square (Langkawi signature)</li>
              <li>• Tuba Island — Langkawi's second largest island</li>
              <li>• Mangrove river tour</li>
              <li>• Limestone cliff</li>
              <li>• Rock formation</li>
              <li>• Fjord Eco Marine Park (swimming)</li>
              <li>• Seafood lunch at Mee Udang Pulau Tuba</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">
              An exclusive private tour — you won't be joining the group departures.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" /> Supercharged Jet Ski
          </h3>
          <p className="text-sm text-muted-foreground">
            Private tours on the Yamaha FX 1800cc SVHO — considerably faster and more demanding than our standard
            machines. Best suited to riders with previous jet ski experience.
          </p>

          {superchargedPackages.map((pkg) => (
            <div key={pkg.name} className="border border-border rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-serif text-lg font-bold">{pkg.name}</h4>
                <span className="text-primary font-bold text-lg">{pkg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Clock className="h-4 w-4 shrink-0" /> {pkg.meta}
              </p>
              <ul className="text-sm space-y-1.5 text-foreground/80">
                {pkg.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-primary" /> Included In Every Package
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Licence & insurance coverage",
              "Pickup service — covers the whole island",
              "Waterproof bag",
              "Life jacket",
              "Beach shoes",
              "Licensed guide leading the route",
            ].map((item) => (
              <span key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" /> Good To Know
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Two riders per jet ski</span>
            <span>✓ Hotel pickup anywhere on the island</span>
            <span>✓ Drone video free on Silver &amp; above</span>
            <span>✓ Platinum needs a minimum of 2 jet skis</span>
            <span>✓ Supercharged tours suit experienced riders</span>
            <span>✓ Bring sunblock, a towel and swimwear</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Pickup &amp; Meeting Point
          </h3>
          <p className="text-sm text-foreground/80">
            Pickup is included and covers the whole island. Once you've booked, we'll confirm your pickup time and
            the exact departure point over WhatsApp.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">
            Since we keep groups small, we hold a specific slot and guide just for you once you confirm. Here's how
            cancellations work:
          </p>
          <div className="border border-border rounded-lg overflow-hidden text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">When You Cancel</th>
                  <th className="text-left p-3 font-semibold">What Happens</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-t border-border"><td className="p-3">More than 3 days before</td><td className="p-3">Full refund — no worries</td></tr>
                <tr className="border-t border-border"><td className="p-3">48 to 72 hours before</td><td className="p-3">50% charged</td></tr>
                <tr className="border-t border-border"><td className="p-3">Less than 24 hours before</td><td className="p-3">Full charge</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <WhatsAppEnquiry tourName="Jet Ski Adventure" />
      </div>
    </article>
  );
};

export default JetSkiDetails;
