import { useState } from "react";
import { CheckCircle, XCircle, MapPin, Info, Clock, Users, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import kayakGallery1 from "@/assets/kayak-gallery-1.jpg";
import kayakGallery2 from "@/assets/kayak-gallery-2.jpg";
import kayakGallery3 from "@/assets/kayak-gallery-3.jpg";
import kayakGallery4 from "@/assets/kayak-gallery-4.jpg";
import kayakGallery5 from "@/assets/kayak-gallery-5.jpg";

const galleryImages = [
  { src: kayakGallery1, alt: "Aerial view of kayak in mangrove tunnel" },
  { src: kayakGallery2, alt: "Kayakers with limestone cliffs backdrop" },
  { src: kayakGallery3, alt: "Paddling through mangrove roots" },
  { src: kayakGallery4, alt: "Kayaking under mangrove canopy" },
  { src: kayakGallery5, alt: "First-person view from kayak in mangroves" },
];

const MangroveKayakDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Mangrove Kayak Tour</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            A quiet escape into Langkawi's mangroves — paddle through calm rivers, glide past limestone cliffs, and let
            the jungle do the talking. Everything's sorted for you. Just show up and enjoy.
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
            <Clock className="h-5 w-5 text-primary" /> Packages &amp; Prices
          </h3>
          <p className="text-sm text-muted-foreground">
            We time every tour around the tide — that's how you get to explore the hidden canals deep inside Kilim
            Geoforest Park. Your local guide handles the rest, including a proper safety rundown before you set off.
          </p>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">4 Hours — Full Experience</h4>
              <span className="text-primary font-bold text-lg">RM239/pax</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" /> Bringing 4 or more? RM219/pax
            </p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Start time depends on the tide that day</li>
              <li>• Up to 10 guests per group</li>
              <li>• We pick you up from your hotel and drop you back (small extra charge for Datai area)</li>
              <li>• About 2.5 hours of guided kayaking through the mangroves</li>
              <li>• We only go when the tide is right — that's how you get into the secret channels</li>
              <li>• Two-seater kayaks — paddle solo or share with someone</li>
              <li>• Stops along the way for photos and wildlife spotting</li>
              <li>• Watch eagles up close and explore the mangrove ecosystem</li>
              <li>• Finish with lunch at a floating restaurant on a fish farm</li>
            </ul>
          </div>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">2 Hours — Fun Kayak</h4>
              <span className="text-primary font-bold text-lg">RM149/pax</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" /> Bringing 6 or more? RM119/pax
            </p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Start time depends on the tide that day</li>
              <li>• About 1 hour of guided kayaking through the mangroves</li>
              <li>• We only go when the tide is right — that's how you get into the secret tunnels</li>
              <li>• Two-seater kayaks — paddle solo or share with someone</li>
              <li>• Stops along the way for photos and wildlife spotting</li>
              <li>• Watch eagles up close and explore the mangrove ecosystem</li>
            </ul>
          </div>

          <p className="text-sm text-muted-foreground italic">
            💡 Just pay RM50 per person upfront to lock in your spot. The rest you settle at the jetty on the day
            itself.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" /> What You Get
            </h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Hotel pickup &amp; drop-off (6hrs only)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> English-speaking guide
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Boat ride to the kayak spot
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Waterproof bag for your stuff
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Drinking water
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Lunch at a floating restaurant (6hrs
                only)
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jacket
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> All kayaking gear
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2">
              <XCircle className="h-5 w-5 text-destructive" /> Bring Your Own
            </h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Bug spray
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Sunscreen
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Towel
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" /> Where To Meet
          </h3>
          <p className="text-sm text-foreground/80">
            <strong>Kilim Geoforest Park Jetty</strong> — There's free parking right by the jetty. Just come about 15
            minutes early and look for your guide at the cafeteria with the green tables, right next to where you park.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" /> Good To Know
          </h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Parking is free near the jetty</span>
            <span>✓ Come 15 minutes early</span>
            <span>✓ Life jackets &amp; dry bags are on us</span>
            <span>✓ You'll get a WhatsApp with the exact location</span>
            <span>✓ Wear clothes that dry fast &amp; comfy sandals</span>
            <span>✓ A hat and sunscreen go a long way</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">
            Since we plan around the tides and keep groups small, we hold a specific slot and guide just for you once
            you confirm. Here's how cancellations work:
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
                <tr className="border-t border-border">
                  <td className="p-3">More than 3 days before</td>
                  <td className="p-3">Full refund — no worries</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">48 to 72 hours before</td>
                  <td className="p-3">50% charged</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="p-3">Less than 24 hours before</td>
                  <td className="p-3">Full charge</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="pt-2">
          <a href="/#booking">
            <Button className="w-full uppercase tracking-widest text-sm rounded-full" size="lg">
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default MangroveKayakDetails;
