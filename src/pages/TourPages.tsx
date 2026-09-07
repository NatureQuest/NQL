import TourPageShell from "@/components/TourPageShell";
import MangroveKayakDetails from "@/components/MangroveKayakDetails";
import MangroveBoatDetails from "@/components/MangroveBoatDetails";
import JetSkiDetails from "@/components/JetSkiDetails";
import IslandHoppingDetails from "@/components/IslandHoppingDetails";
import ATVDetails from "@/components/ATVDetails";
import RoundIslandDetails from "@/components/RoundIslandDetails";
import SunsetCruiseDetails from "@/components/SunsetCruiseDetails";
import DayCruiseDetails from "@/components/DayCruiseDetails";

export const MangroveKayakPage = () => (
  <TourPageShell title="Mangrove Kayak Tour" description="Paddle Langkawi's ancient mangrove tunnels with a local guide — packages, pricing & what to bring.">
    <MangroveKayakDetails />
  </TourPageShell>
);

export const MangroveBoatPage = () => (
  <TourPageShell title="Mangrove Boat Tour" description="Private & sharing mangrove boat charters through Kilim Geoforest Park, Langkawi.">
    <MangroveBoatDetails />
  </TourPageShell>
);

export const JetSkiPage = () => (
  <TourPageShell title="Jet Ski Adventure" description="Guided jet ski tours in Langkawi from RM550 — Bronze, Silver, Gold, private Platinum and supercharged Yamaha packages. Island-wide pickup included.">
    <JetSkiDetails />
  </TourPageShell>
);

export const IslandHoppingPage = () => (
  <TourPageShell title="Island Hopping Langkawi" description="Langkawi's classic island hopping tour — Pregnant Maiden Lake, eagle watching & beach stops.">
    <IslandHoppingDetails />
  </TourPageShell>
);

export const ATVPage = () => (
  <TourPageShell title="ATV Jungle Trail" description="ATV jungle & hill trails to Mat Kasa Waterfall in Langkawi — join-in or private tours.">
    <ATVDetails />
  </TourPageShell>
);

export const RoundIslandPage = () => (
  <TourPageShell title="Round Island Experience" description="A full-day private tour around Langkawi — beaches, waterfalls, culture and a Gunung Raya sunset.">
    <RoundIslandDetails />
  </TourPageShell>
);

export const SunsetCruisePage = () => (
  <TourPageShell title="Sunset Cruise" description="A private evening cruise across the Andaman Sea in Langkawi — packages, pricing & what to expect.">
    <SunsetCruiseDetails />
  </TourPageShell>
);

export const DayCruisePage = () => (
  <TourPageShell title="Day Cruise" description="A full-day boat cruise around Langkawi's islands — swimming, snorkeling, lunch onboard & pricing.">
    <DayCruiseDetails />
  </TourPageShell>
);
