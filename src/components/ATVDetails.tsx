import { useState } from "react";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";
import { Clock, Users, AlertTriangle, Sparkles, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import atvGallery1 from "@/assets/atv-gallery-1.jpg";
import atvGallery2 from "@/assets/atv-gallery-2.jpg";
import atvGallery3 from "@/assets/atv-gallery-3.jpg";
import atvGallery4 from "@/assets/atv-gallery-4.jpg";
import atvGallery5 from "@/assets/atv-gallery-5.jpg";
import atvGallery6 from "@/assets/atv-gallery-6.jpg";
import atvGallery7 from "@/assets/atv-gallery-7.jpg";

const galleryImages = [
  { src: atvGallery1, alt: "Rider splashing an ATV across a flooded causeway" },
  { src: atvGallery2, alt: "ATVs riding a track between Langkawi's green paddy fields" },
  { src: atvGallery3, alt: "Riders watching the sunset over the paddy fields beside their ATVs" },
  { src: atvGallery4, alt: "Rider taking an ATV along a sandy jungle trail" },
  { src: atvGallery5, alt: "Two riders on ATVs at a hilltop stop above the treetops" },
  { src: atvGallery6, alt: "Rider pausing on an ATV at a viewpoint over the countryside" },
  { src: atvGallery7, alt: "Rider celebrating on an ATV beside the paddy fields" },
];

const ATVDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % galleryImages.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <header className="mb-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">ATV Waterfall Adventure</h1>
        <p className="text-foreground/70 text-base mt-3">
          Jungle &amp; hill trails through Langkawi's wild side — mud, waterfalls, and pure adrenaline.
        </p>
      </header>

      <div className="space-y-3 mb-8">
        <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
          <Camera className="h-5 w-5" /> Gallery
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
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Clock className="w-4 h-4 text-primary" /><span>2 Hours</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Users className="w-4 h-4 text-primary" /><span>Join-In or Private</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">What to Expect</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          Get ready to get muddy. This 2-hour ATV ride takes you deep into Langkawi's jungle — through winding forest trails, across paddy fields, past rubber plantations, and all the way to the hidden Mat Kasa Waterfall. It's raw, it's wild, and it's one of the most fun things you'll do on the island.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2">
          <Sparkles className="w-5 h-5" /> Trail Highlights
        </h3>
        <ul className="space-y-2 text-sm text-foreground/70">
          <li>💦 <strong>Mat Kasa Waterfall</strong> — Cool off at one of Langkawi's hidden natural gems</li>
          <li>🌿 <strong>Jungle Trails</strong> — Wind through lush rainforest paths for a real adrenaline rush</li>
          <li>🏡 <strong>Village &amp; Rural Life</strong> — Experience the authentic charm of Langkawi's countryside</li>
          <li>🦅 <strong>Wildlife Encounters</strong> — Spot birds, monitor lizards, and local animals along the way</li>
          <li>🌳 <strong>Rubber Plantations</strong> — Ride across historic plantations that shaped the island</li>
          <li>🌾 <strong>Paddy Fields</strong> — Cross the vast, green rice fields iconic to Langkawi</li>
          <li>💧 <strong>Water Reservoir Splash</strong> — A fun, refreshing splash ride for extra excitement</li>
          <li>⛰️ <strong>Hill Challenge</strong> — Test your skills with thrilling ascents and descents</li>
        </ul>
      </div>

      <div className="mb-6 p-5 rounded-xl border border-primary/20 bg-primary/5">
        <h3 className="font-serif text-xl font-bold text-primary mb-1">Join-In Tour</h3>
        <p className="text-foreground/60 text-xs mb-4">Fixed departure at 10:00 AM &amp; 2:00 PM daily</p>
        <div className="space-y-2 text-sm text-foreground/80">
          <div className="flex justify-between items-center"><span>Single Rider</span><span className="font-bold text-primary">RM 269 / person</span></div>
          <p className="text-xs text-foreground/50 pl-2">Minimum 2 ATVs required</p>
          <div className="flex justify-between items-center"><span>Double Rider</span><span className="font-bold text-primary">RM 450</span></div>
        </div>
      </div>

      <div className="mb-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
        <h3 className="font-serif text-xl font-bold text-primary mb-1">Private Tour</h3>
        <p className="text-foreground/60 text-xs mb-4">Anytime between 10:00 AM – 5:00 PM</p>
        <div className="space-y-2 text-sm text-foreground/80">
          <div className="flex justify-between items-center"><span>Single Rider</span><span className="font-bold text-primary">RM 340 / person</span></div>
          <p className="text-xs text-foreground/50 pl-2">Minimum 2 ATVs required</p>
          <div className="flex justify-between items-center"><span>Double Rider</span><span className="font-bold text-primary">RM 550</span></div>
        </div>
      </div>

      <div className="mb-8 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
        <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
          <AlertTriangle className="w-4 h-4 text-destructive" /> Weight Limits
        </h4>
        <ul className="text-sm text-foreground/70 space-y-1">
          <li>Single Rider ATV — Max 100 KG</li>
          <li>Double Rider ATV — Max 200 KG</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">If You Need To Cancel</h3>
        <p className="text-sm text-foreground/70 mb-3">Since we keep groups small, we hold a specific slot and guide just for you once you confirm. Here's how cancellations work:</p>
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

      <WhatsAppEnquiry tourName="ATV Jungle Trail" />
    </article>
  );
};

export default ATVDetails;
