import { CheckCircle, XCircle, MapPin, Info, Clock, Users, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";

const IslandHoppingDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Island Hopping Langkawi</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Langkawi's most-loved boat tour — a laid-back 3 to 4-hour cruise around some of the most beautiful islands you'll ever see. You'll stop at Pregnant Maiden Lake, watch eagles soar over the water, and chill on a quiet white-sand beach. Great for families, couples, or anyone who just wants a relaxing day on the water.
          </p>
        </header>

        <div className="space-y-3">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Anchor className="h-5 w-5 text-primary" /> Where You'll Go</h3>
          <ul className="text-sm space-y-2 text-foreground/80">
            <li>• <strong>Dayang Bunting Island</strong> — Walk through the jungle trail and swim in the famous Pregnant Maiden Lake, surrounded by limestone cliffs</li>
            <li>• <strong>Singa Besar Island</strong> — Watch majestic eagles circle and dive right above your boat</li>
            <li>• <strong>Beras Basah Island</strong> — Spend time on a gorgeous sandy beach — swim, relax, take photos</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Clock className="h-5 w-5 text-primary" /> Packages &amp; Prices</h3>
          <p className="text-sm text-muted-foreground">Pick the package that suits you best — whether you're looking for a budget-friendly shared trip or a private boat all to yourself.</p>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Sharing Tour</h4>
              <span className="text-primary font-bold text-lg">RM50/person</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" /> Departs at 9:00 AM or 2:00 PM (based on availability)</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-4 w-4" /> Meeting Point: Teluk Baru Jetty</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Duration: around 4 hours</li>
              <li>• Lion Rock, Dayang Bunting Mountain, Jong Island & Dino Island views</li>
              <li>• Land at Pregnant Maiden Island and visit the lake</li>
              <li>• Eagle watching at Singa Besar Island</li>
              <li>• Beach stop at Beras Basah Island</li>
              <li>• RM50 deposit required to confirm your booking</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">* Entrance fee to Pregnant Maiden Lake not included</p>
          </div>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Private Boat — Cenang Area</h4>
              <span className="text-primary font-bold text-lg">RM450/boat</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Users className="h-4 w-4" /> Up to 8 passengers per boat</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" /> Start anytime between 9:00 AM – 1:00 PM</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-4 w-4" /> Meeting Point: Teluk Baru Jetty</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Duration: around 4 hours</li>
              <li>• Lion Rock, Dayang Bunting Mountain, Jong Island & Dino Island views</li>
              <li>• Land at Pregnant Maiden Island and visit the lake</li>
              <li>• Eagle watching at Singa Besar Island</li>
              <li>• Beach stop at Beras Basah Island</li>
              <li>• RM100 deposit required to confirm your booking</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">* Entrance fee to Pregnant Maiden Lake not included</p>
          </div>

          <div className="border border-border rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Private Boat — Kuah Jetty</h4>
              <span className="text-primary font-bold text-lg">RM400/boat</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Users className="h-4 w-4" /> Up to 8 passengers per boat</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" /> Start anytime between 9:00 AM – 1:00 PM</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-4 w-4" /> Meeting Point: Kuah Jetty (Marble Jetty)</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Duration: around 4 hours</li>
              <li>• Land at Pregnant Maiden Island and visit the lake</li>
              <li>• Eagle watching at Singa Besar Island</li>
              <li>• Beach stop at Beras Basah Island</li>
              <li>• RM100 deposit required to confirm your booking</li>
            </ul>
            <p className="text-xs text-muted-foreground italic">* Entrance fee to Pregnant Maiden Lake not included</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> What's Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Boat ride with experienced local captain</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jackets provided</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Free hotel pickup (Cenang &amp; Pantai Tengah area)</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> WhatsApp booking support</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" /> Not Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Snorkeling gear (rent at jetty — RM15/set)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Lunch</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Pregnant Maiden Lake entrance fee</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Optional extras (banana boat, kayak, etc.)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Where To Meet</h3>
          <div className="text-sm text-foreground/80 space-y-2">
            <p><strong>Teluk Baru Jetty</strong> — For Sharing tours and Private Cenang departures. We'll send you the exact location on WhatsApp.</p>
            <p><strong>Kuah Jetty (Marble Jetty)</strong> — For Private Kuah departures. Easy to find, right in town.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Good To Know</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Bring a towel — you'll get wet</span>
            <span>✓ Wear light, quick-dry clothes</span>
            <span>✓ Sunblock is a must</span>
            <span>✓ Sharing trips: 9 AM or 2 PM</span>
            <span>✓ Private tours: anytime 9 AM – 1 PM</span>
            <span>✓ RM50 deposit (Sharing), RM100 (Private Cenang &amp; Kuah)</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">Since we keep groups small, we hold a specific slot and guide just for you once you confirm. Here's how cancellations work:</p>
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

        <div className="pt-2">
          <a href="/#booking">
            <Button className="w-full uppercase tracking-widest text-sm rounded-full" size="lg">Book Now</Button>
          </a>
        </div>
      </div>
    </article>
  );
};

export default IslandHoppingDetails;
