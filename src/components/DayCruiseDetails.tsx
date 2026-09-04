import { CheckCircle, XCircle, MapPin, Info, Ship, Clock } from "lucide-react";
import WhatsAppEnquiry from "@/components/WhatsAppEnquiry";

const DayCruiseDetails = () => {
  return (
    <article className="container mx-auto px-6 py-8 md:py-12 max-w-3xl">
      <div className="space-y-8">
        <header>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Day Cruise</h1>
          <p className="text-muted-foreground text-base leading-relaxed pt-3">
            Spend the day out on the water at an easy pace. Cruise between Langkawi's islands, drop anchor to swim
            and snorkel in quiet lagoons, and relax on the sundeck while the crew takes care of everything — no
            rushing between stops, just open water and time to enjoy it.
          </p>
        </header>

        <div className="space-y-6">
          <h3 className="font-serif text-xl font-bold flex items-center gap-2"><Ship className="h-5 w-5 text-primary" /> Package &amp; Price</h3>

          <div className="border border-primary/30 rounded-xl p-5 space-y-3 bg-primary/5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <h4 className="font-serif text-lg font-bold">Day Cruise</h4>
              <span className="text-primary font-bold text-lg">RM180 / adult</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><Clock className="h-4 w-4" /> 4 Hours • 2–3 Stops • Snorkeling Included</p>
            <p className="text-sm text-muted-foreground flex items-center gap-1"><MapPin className="h-4 w-4" /> Departs From: Avante Counter, Resort World Langkawi Jetty</p>
            <ul className="text-sm space-y-1.5 text-foreground/80">
              <li>• Swim stop at a quiet lagoon</li>
              <li>• Snorkeling gear provided</li>
              <li>• Sundeck lounging &amp; shaded seating</li>
              <li>• Soft drinks and water, free-flow</li>
            </ul>
            <p className="text-sm text-muted-foreground italic pt-1">RM160 per child (5–11 years).</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><CheckCircle className="h-5 w-5 text-primary" /> What You Get</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Life jackets &amp; snorkeling gear</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Licensed skipper &amp; crew</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Soft drinks &amp; water, free-flow</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Sundeck &amp; shaded seating</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Safety briefing included</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Hotel transfer (Cenang &amp; Pantai Tengah areas)</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-serif text-lg font-bold flex items-center gap-2"><XCircle className="h-5 w-5 text-destructive" /> Not Included</h3>
            <ul className="text-sm space-y-2 text-foreground/80">
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Lunch (available to add on)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Alcoholic drinks</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Towel rental (RM10)</li>
              <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 shrink-0" /> Professional photography/drone (optional add-on)</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><MapPin className="h-5 w-5 text-primary" /> Where To Meet</h3>
          <div className="space-y-3">
            <p className="text-sm text-foreground/80"><strong>Avante Counter, Resort World Langkawi Jetty</strong> — free parking nearby.</p>
            <p className="text-sm text-muted-foreground italic pt-2">After booking, you'll receive full directions and a WhatsApp contact for your crew.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold flex items-center gap-2"><Info className="h-5 w-5 text-primary" /> Pro Tips For Your Trip</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-foreground/80">
            <span>✓ Wear swimwear under your clothes</span>
            <span>✓ Bring reef-safe sunscreen</span>
            <span>✓ Bring cash for onboard extras</span>
            <span>✓ Arrive 15 minutes early</span>
            <span>✓ Bring seasickness tablets if you're sensitive</span>
            <span>✓ Kids under 5 must wear a life jacket at all times</span>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-serif text-lg font-bold">How To Book</h3>
          <p className="text-sm text-muted-foreground">
            Reserve your place with a RM50 deposit per guest. Pay the balance at the jetty counter on the day of your cruise.{" "}
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
              </tbody>
            </table>
          </div>
        </div>

        <WhatsAppEnquiry tourName="Day Cruise" />
      </div>
    </article>
  );
};

export default DayCruiseDetails;
