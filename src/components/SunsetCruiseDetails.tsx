import { CheckCircle, XCircle, MapPin, Info, Sunset, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const SunsetCruiseDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Sunset Cruise</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Watch Langkawi's sky turn gold and rose from the open deck of our cruise. Drift across the calm waters
            of the Andaman Sea as the sun dips behind the islands, with a welcome drink in hand and nothing on the
            agenda but the view.
          </p>
        </header>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Sunset className="h-5 w-5 text-primary" /> Package &amp; Price</h3>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Sunset Cruise</h4>
              <span className="text-primary font-bold text-lg">RM220 / adult</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" /> 3 Hours • Boarding 4:30 PM • Departs 5:00 PM • Returns 8:00 PM</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-4 w-4" /> Departs From: Avante Counter, Resort World Langkawi Jetty</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Cruise out to open water for uninterrupted sunset views</li>
              <li>• Sea eagles gliding home to roost at dusk</li>
              <li>• Onboard music and sundeck seating</li>
              <li>• Welcome drink and light canapés</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">RM150 per child (5–11 years).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> What You Get</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Welcome drink &amp; light canapés</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jackets for all guests</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Licensed skipper &amp; crew</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Onboard music &amp; sundeck seating</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Sea eagle spotting en route</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Hotel transfer (Cenang &amp; Pantai Tengah areas)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" /> Not Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Full dinner buffet (optional add-on — ask us)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Alcoholic drinks (available to purchase onboard)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Professional photography (optional add-on)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Hotel transfer outside Cenang/Tengah (surcharge applies)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Where To Meet</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground/80"><strong>Avante Counter, Resort World Langkawi Jetty</strong> — boarding starts at 4:30 PM.</p>
            <p className="text-sm text-muted-foreground italic pt-2">After booking, you'll receive full directions and a WhatsApp contact for your skipper.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Pro Tips For Your Trip</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Bring a light jacket — it cools down on the water</span>
            <span>✓ Arrive 20 minutes before departure</span>
            <span>✓ Charge your phone for golden-hour photos</span>
            <span>✓ Bring seasickness tablets if you're sensitive</span>
            <span>✓ Sunset slots are limited — book a few days ahead</span>
            <span>✓ Let us know in advance for proposals or celebrations</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">How To Book</h3>
          <p className="text-sm text-muted-foreground">
            Reserve your spot with a RM100 deposit per guest. Pay the balance at check-in.{" "}
            <a href="https://wa.me/60172757968" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp us to confirm your preferred date and package.</a>
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">If You Need To Cancel</h3>
          <p className="text-sm text-muted-foreground">Since we plan around the tides and keep groups small, we hold a specific slot and crew just for you once you confirm. Here's how cancellations work:</p>
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
                <tr className="border-t border-border"><td className="p-3">Didn't show up</td><td className="p-3">Full charge — deposit gone</td></tr>
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

export default SunsetCruiseDetails;
