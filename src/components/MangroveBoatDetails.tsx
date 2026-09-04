import { CheckCircle, XCircle, MapPin, Info, Users, Anchor } from "lucide-react";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";

const MangroveBoatDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Mangrove Boat Tour</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Explore the UNESCO Kilim Karst Geoforest Park the way it should be done — on your own terms. Our private boat charters let you cruise through limestone caves and ancient mangroves without the crowd, at whatever pace feels right. Hit all the iconic spots — Bat Cave, Eagle Watching, the Floating Fish Farm — with zero rush and plenty of time for photos and wildlife.
          </p>
        </header>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Anchor className="h-5 w-5 text-primary" /> Private Boat Tour</h3>
          <p className="text-sm text-muted-foreground">Your own boat, your own schedule. Great for families, friends, or couples who just want to take it easy without strangers on board. Up to 8 people per boat.</p>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Private Charter — 3-4 Hours</h4>
              <span className="text-primary font-bold text-lg">RM999 / boat</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Users className="h-4 w-4" /> Up to 8 people per boat</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Naturalist (Tourist Guide)</li>
              <li>• Bat Cave</li>
              <li>• Fish Farm</li>
              <li>• Lunch at Floating Restaurant (Vegetarian &amp; Vegan is available)</li>
              <li>• Mangrove Sightseeing</li>
              <li>• Crocodile Cave</li>
              <li>• Monkey Kingdom</li>
              <li>• Beautiful photo spots along the way</li>
              <li>• Gorilla Mount</li>
              <li>• Swimming on a island beach</li>
              <li>• Kilim Geoforest Park Signboard</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">Ideal if you're travelling with kids, elderly, or just want full flexibility.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Users className="h-5 w-5 text-primary" /> Sharing Boat Tour</h3>
          <p className="text-sm text-muted-foreground">Same stunning route, two completely different moods. Whether you want golden morning light or a fiery sunset glow over the mangroves — pick the one that speaks to you. Small groups only (max 10 people), so it always feels personal.</p>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">☀️ Morning Tour — 4 Hours</h4>
              <span className="text-primary font-bold text-lg">RM170 / person</span>
            </div>
            <p className="text-sm text-muted-foreground">Start your day on the water when the mangroves are at their quietest. The light is soft, the wildlife is active, and you'll have the caves practically to yourself.</p>
            <p className="text-sm text-muted-foreground">✅ Lunch set included (vegetarian &amp; vegan options available)</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Naturalist (tourist guide)</li>
              <li>• Bat Cave</li>
              <li>• Monkey Kingdom</li>
              <li>• Fish Farm</li>
              <li>• Floating Restaurant</li>
              <li>• Eagle Watching</li>
              <li>• Mangrove Sightseeing</li>
              <li>• Crocodile Cave</li>
              <li>• Andaman Sea Tour</li>
              <li>• Kilim Geoforest Park landmarks</li>
              <li>• Swimming on island beach</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">Departs around 9:00am — exact timing follows the tides.</p>
          </div>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">🌅 Sunset Tour — 4 Hours</h4>
              <span className="text-primary font-bold text-lg">RM170 / person</span>
            </div>
            <p className="text-sm text-muted-foreground">There's something magic about watching the sky turn orange while you drift through ancient limestone. The afternoon heat fades, eagles circle overhead, and the whole geopark feels like it's yours.</p>
            <p className="text-sm text-muted-foreground">✅ Lunch set included (vegetarian &amp; vegan options available)</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Naturalist (tourist guide)</li>
              <li>• Bat Cave</li>
              <li>• Monkey Kingdom</li>
              <li>• Fish Farm</li>
              <li>• Floating Restaurant</li>
              <li>• Eagle Watching</li>
              <li>• Mangrove Sightseeing</li>
              <li>• Crocodile Cave</li>
              <li>• Andaman Sea Tour</li>
              <li>• Kilim Geoforest Park landmarks</li>
              <li>• Swimming on island beach</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">Departs around 4:30pm — timed so you catch the golden hour on the water.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">Not Sure Which One's Right?</h3>
          <div className="border border-border rounded-lg overflow-hidden text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">Package</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                  <th className="text-left p-3 font-semibold">Vibe</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-t border-border"><td className="p-3 font-medium">Private Tour</td><td className="p-3">Family / Group</td><td className="p-3">Privacy, flexible timing, your own pace</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Sharing Tour</td><td className="p-3">Solo / Couple</td><td className="p-3">Affordable, fixed schedule, meet new people</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> What You Get</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Boat ride &amp; captain</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jackets</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Mangrove sightseeing</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Floating restaurant stop</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> WhatsApp booking support</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" /> Not Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Lunch (pay at the restaurant)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Hotel transfer (available for extra charge)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Where To Meet</h3>
          <p className="text-sm text-foreground/80"><strong>Kilim Geoforest Park Jetty</strong> — Private tours can head out anytime between 9:00am and 4:00pm. Sharing tours follow a fixed schedule based on the tides.</p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Good To Know</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Free parking at the jetty</span>
            <span>✓ Arrive 15 minutes early</span>
            <span>✓ Life jackets provided</span>
            <span>✓ We'll WhatsApp you the exact location</span>
            <span>✓ Wear comfy clothes &amp; sandals</span>
            <span>✓ Sunscreen &amp; a hat are a good idea</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">Bigger Group?</h3>
          <p className="text-sm text-muted-foreground">
            Got more than 10 people? No worries — just{" "}
            <a href="https://wa.me/60172757968" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp us</a>{" "}
            and we'll sort out the details for you.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">We keep groups small and plan around the tides, so once you confirm we hold a slot and boat just for you.</p>
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

        <WhatsAppEnquiry tourName="Mangrove Boat Tour" />
      </div>
    </article>
  );
};

export default MangroveBoatDetails;
