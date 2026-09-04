import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WHATSAPP_NUMBER = "60172757968";

interface WhatsAppEnquiryProps {
  tourName: string;
}

const WhatsAppEnquiry = ({ tourName }: WhatsAppEnquiryProps) => {
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleEnquire = () => {
    let message = `Hi NatureQuest! I'm interested in the ${tourName}.`;

    if (date) {
      const [year, month, day] = date.split("-");
      message += ` Preferred date: ${day}/${month}/${year}.`;
    }

    if (guests) {
      message += ` Number of guests: ${guests}.`;
    }

    message += ` Could you share more details?`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="space-y-4 rounded-xl border border-border p-5">
      <h3 className="font-serif text-lg font-bold flex items-center gap-2">
        <MessageCircle className="h-5 w-5 text-primary" /> Enquire About This Tour
      </h3>

      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">Preferred Date (Optional)</label>
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-background border-border rounded-lg"
        />
        <p className="text-xs text-muted-foreground/70 mt-1.5">Optional — we'll confirm details on WhatsApp.</p>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1.5 block">Number of Guests (Optional)</label>
        <Select value={guests} onValueChange={setGuests}>
          <SelectTrigger className="bg-background border-border rounded-lg">
            <SelectValue placeholder="Select guests" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <SelectItem key={n} value={String(n)}>
                {n} {n === 1 ? "Guest" : "Guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-xs text-muted-foreground/70 mt-1.5">Optional — we'll confirm details on WhatsApp.</p>
      </div>

      <Button
        type="button"
        onClick={handleEnquire}
        className="w-full uppercase tracking-widest text-sm rounded-full gap-2"
        size="lg"
      >
        <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
      </Button>
    </div>
  );
};

export default WhatsAppEnquiry;
