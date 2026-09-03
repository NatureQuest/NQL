import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Helmet>
        <title>NatureQuest Langkawi — Luxury Nature Tours &amp; Adventures</title>
        <meta name="description" content="Private luxury nature tours in Langkawi: mangrove kayak, jet ski, island hopping &amp; ATV jungle trails. Safe, exclusive, unforgettable." />
        <link rel="canonical" href="https://naturequest.com.my/" />
        <meta property="og:title" content="NatureQuest Langkawi — Luxury Nature Tours &amp; Adventures" />
        <meta property="og:description" content="Private luxury nature tours in Langkawi: mangrove kayak, jet ski, island hopping &amp; ATV jungle trails." />
        <meta property="og:url" content="https://naturequest.com.my/" />
        <meta name="twitter:title" content="NatureQuest Langkawi — Luxury Nature Tours &amp; Adventures" />
        <meta name="twitter:description" content="Private luxury nature tours in Langkawi: mangrove kayak, jet ski, island hopping &amp; ATV jungle trails." />
      </Helmet>
      <Navbar />
      <HeroSection />
      <ToursSection />
      <AboutSection />
      <WhyChooseSection />
      <ExperienceSection />
      <TestimonialsSection />
      <BookingSection />
      <SafetySection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
