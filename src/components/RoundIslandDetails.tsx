import { Button } from "@/components/ui/button";
import { Clock, Users, MapPin, Info, Sparkles } from "lucide-react";

const RoundIslandDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <header className="mb-6">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Round Island Experience</h1>
        <p className="text-foreground/70 text-base mt-3">
          A full-day journey around Langkawi — from hidden beaches and waterfalls to local culture and hilltop sunsets.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Clock className="w-4 h-4 text-primary" /><span>Full Day Tour</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-foreground/80">
          <Users className="w-4 h-4 text-primary" /><span>Multiple Vehicle Options</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">What to Expect</h3>
        <p className="text-foreground/70 text-sm leading-relaxed">
          This isn't your typical island tour. You'll spend the entire day exploring the real Langkawi — starting with breakfast by the sea, riding through villages and paddy fields, chasing waterfalls, soaking in the culture, and ending with a sunset from Gunung Raya. It's the kind of day that stays with you long after you leave.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2"><MapPin className="w-5 h-5" /> Your Day, Stop by Stop</h3>
        <ul className="space-y-2 text-sm text-foreground/70">
          <li>🍳 <strong>Breakfast by the Sea</strong> — Start your morning at a charming local restaurant right on the water</li>
          <li>🏡 <strong>Village &amp; Rural Life</strong> — Get a feel for the authentic Langkawi countryside</li>
          <li>🌳 <strong>Rubber Plantations</strong> — Ride through the historic plantations that shaped the island</li>
          <li>🌾 <strong>Paddy Fields</strong> — Cross the vast, green rice fields iconic to Langkawi</li>
          <li>🏖️ <strong>Sandy Skulls Beach</strong> — A hidden stretch of coastline most visitors never find</li>
          <li>💦 <strong>Temurun Waterfall</strong> — One of Langkawi's most stunning multi-tier waterfalls</li>
          <li>🍽️ <strong>Lunch at Tanjung Rhu Beach</strong> — Refuel with a meal at one of the island's most beautiful beaches</li>
          <li>🎨 <strong>Craft Complex</strong> — Explore Malaysian culture, batik canting, and local artistry</li>
          <li>🍢 <strong>Hawker Stalls</strong> — Grab some local snacks and street food favourites</li>
          <li>🌅 <strong>Gunung Raya Sunset</strong> — End the day with a breathtaking sunset from Langkawi's highest peak</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3 flex items-center gap-2"><Sparkles className="w-5 h-5" /> Choose Your Ride</h3>
        <div className="space-y-3">
          {[
            { name: "🛵 Scooter Tour", note: "Per scooter", price: "RM 350" },
            { name: "🏎️ Sports Car — Shared", note: "Per person · Max 3 pax", price: "RM 399" },
            { name: "🏎️ Sports Car — Private", note: "Per tour · Max 3 pax", price: "RM 999" },
            { name: "🚐 Vellfire — Private", note: "Per tour · Max 5 pax", price: "RM 749" },
            { name: "🚐 Alphard — Private", note: "Per tour · Max 5 pax", price: "RM 999" },
            { name: "🚐 Van — Private", note: "Per tour · Max 10 pax", price: "RM 999" },
          ].map((p) => (
            <div key={p.name} className="p-4 rounded-xl border border-primary/20 bg-primary/5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-foreground">{p.name}</p>
                  <p className="text-xs text-foreground/50">{p.note}</p>
                </div>
                <span className="font-bold text-primary">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">🎒 Things to Bring</h3>
        <ul className="text-sm text-foreground/70 space-y-1">
          <li>• Spare change of clothes</li>
          <li>• Towels</li>
          <li>• Sunscreen</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">👕 What to Wear?</h3>
        <p className="text-sm text-foreground/70">Light clothing &amp; flip-flops are the best way to go.</p>
      </div>

      <div className="mb-8 p-4 rounded-lg bg-muted/50 border border-border">
        <h4 className="flex items-center gap-2 text-sm font-bold text-foreground mb-2">
          <Info className="w-4 h-4 text-primary" /> Good to Know
        </h4>
        <ul className="text-sm text-foreground/70 space-y-1">
          <li>• Food is not included in the pricing — you'll pay directly at each stop.</li>
          <li>• For private tours, you're free to customise your stops — subject to location, time, and distance.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="font-serif text-xl font-bold text-primary mb-3">If You Need To Cancel</h3>
        <p className="text-sm text-foreground/70 mb-3">Since we plan around the tides and keep groups small, we hold a specific slot and guide just for you once you confirm. Here's how cancellations work:</p>
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

      <div className="text-center pt-2">
        <a href="/#booking">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/80 uppercase tracking-widest text-sm px-10 py-6 rounded-full">Book Now</Button>
        </a>
      </div>
    </article>
  );
};

export default RoundIslandDetails;
