import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import {
  MangroveKayakPage,
  MangroveBoatPage,
  JetSkiPage,
  IslandHoppingPage,
  ATVPage,
  RoundIslandPage,
} from "./pages/TourPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours/kayak" element={<MangroveKayakPage />} />
          <Route path="/tours/boat" element={<MangroveBoatPage />} />
          <Route path="/tours/jetski" element={<JetSkiPage />} />
          <Route path="/tours/islands" element={<IslandHoppingPage />} />
          <Route path="/tours/atv" element={<ATVPage />} />
          <Route path="/tours/round" element={<RoundIslandPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
