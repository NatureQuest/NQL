import { CheckCircle, XCircle, MapPin, Info, Zap } from "lucide-react";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";

const JetSkiDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Jet Ski Adventure</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Experience the ultimate adrenaline rush across Langkawi's sparkling emerald waters. Pilot your own jet ski with an experienced local guide, discover hidden islands, watch eagles soar, and swim in pristine tropical paradise — all at your own pace.
          </p>
        </header>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /> Choose Your Adventure</h3>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Island Hopping</h4>
              <span className="text-primary font-bold text-lg">RM600 / ski</span>
            </div>
            <p className="text-sm text-muted-foreground">4 Hours • 5 Stops • 2 People Per Jet Ski</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Pregnant Maiden Lake (Dayang Bunting)</li>
              <li>• Beras Basah Island</li>
              <li>• Eagle Watching</li>
              <li>• Echo Island</li>
              <li>• Limestone Island</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">Perfect for exploring multiple islands with plenty of swimming and photo stops.</p>
          </div>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Island Hopping + Tuba</h4>
              <span className="text-primary font-bold text-lg">RM700 / ski</span>
            </div>
            <p className="text-sm text-muted-foreground">4 Hours • 8 Stops • 2 People Per Jet Ski</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Pregnant Maiden Lake (Dayang Bunting)</li>
              <li>• Beras Basah Island</li>
              <li>• Tuba Island</li>
              <li>• Echo Island</li>
              <li>• Limestone Island</li>
              <li>• Eagle Square</li>
              <li>• Eagle Watching</li>
              <li>• Mangrove River</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">The ultimate explorer package — hit all the highlights with a full 4-hour adventure.</p>
          </div>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Kilim Geoforest Park Route</h4>
              <span className="text-primary font-bold text-lg">RM750 / ski</span>
            </div>
            <p className="text-sm text-muted-foreground">3 Hours • 8 Stops • 2 People Per Jet Ski</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Kilim River & Rhu River cruise</li>
              <li>• Monkey Watching & Feeding</li>
              <li>• Eagle Watching</li>
              <li>• Fish Feeding at Dangli Island</li>
              <li>• Kilim Geoforest Park exploration</li>
              <li>• Gorilla Rock Formation</li>
              <li>• Floating Restaurant & Fish Farm</li>
              <li>• Andaman Sea Views</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">Packed with wildlife and dramatic scenery — the fastest-paced adventure route.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">Which Route Is Right For You?</h3>
          <div className="border border-border rounded-lg overflow-hidden text-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold">Package</th>
                  <th className="text-left p-3 font-semibold">Best For</th>
                  <th className="text-left p-3 font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="text-foreground/80">
                <tr className="border-t border-border"><td className="p-3 font-medium">Island Hopping</td><td className="p-3">First-timers, families</td><td className="p-3">4 hours</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Island Hopping + Tuba</td><td className="p-3">Adventure seekers</td><td className="p-3">4 hours</td></tr>
                <tr className="border-t border-border"><td className="p-3 font-medium">Kilim Geoforest Route</td><td className="p-3">Wildlife lovers, shorter trip</td><td className="p-3">3 hours</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> What You Get</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Your own jet ski with 2-person capacity</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jackets &amp; waterproof bag</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Wet shoes for comfort</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> English-speaking licensed guide</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Complimentary mineral water</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Hotel transfer (Cenang &amp; Pantai Tengah areas)</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Safety briefing included</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" /> Not Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Lunch (order &amp; pay at restaurant)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Snorkeling gear (RM30/person — optional)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Pregnant Maiden Lake entrance (RM6/person)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Drone/GoPro recording (optional add-on)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Where To Meet</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground/80"><strong>Option 1: Pantai Cenang</strong> — Behind Casa Del Mar Hotel (free parking, easy to find)</p>
            <p className="text-sm text-foreground/80"><strong>Option 2: Tanjung Rhu Beach</strong> — Kilim Geoforest route (scenic northern departure point)</p>
            <p className="text-sm text-muted-foreground italic pt-2">After booking, you'll receive full directions and a WhatsApp contact for your jet ski guide.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Pro Tips For Your Trip</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Bring sunblock — essential</span>
            <span>✓ Bring a towel — you'll get wet</span>
            <span>✓ Wear comfy board shorts or swim trunks</span>
            <span>✓ Arrive 15 minutes early</span>
            <span>✓ Phone goes in waterproof bag</span>
            <span>✓ Follow your guide's safety briefing</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">How To Book</h3>
          <p className="text-sm text-muted-foreground">
            Reserve your jet ski with a RM50 deposit per ski. Pay the balance at the jetty counter on the day of your tour.{" "}
            <a href="https://wa.me/60172757968" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp us to confirm your preferred date and package.</a>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">Since we plan around the tides and keep groups small, we hold a specific slot and guide just for you once you confirm. Here's how cancellations work:</p>
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
