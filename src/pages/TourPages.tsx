import TourPageShell from "@/components/TourPageShell";
import MangroveKayakDetails from "@/components/MangroveKayakDetails";
import MangroveBoatDetails from "@/components/MangroveBoatDetails";
import JetSkiDetails from "@/components/JetSkiDetails";
import IslandHoppingDetails from "@/components/IslandHoppingDetails";
import ATVDetails from "@/components/ATVDetails";
import RoundIslandDetails from "@/components/RoundIslandDetails";

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
  <TourPageShell title="Jet Ski Adventure" description="Guided jet ski tours across Langkawi's emerald waters — island hopping & geoforest routes.">
    <JetSkiDetails />
  </TourPageShell>
);

export const IslandHoppingPage = () => (
  <TourPageShell title="Island Hopping Langkawi" description="Langkawi's classic island hopping tour — Pregnant Maiden Lake, eagle watching & beach stops.">
    <IslandHoppingDetails />
  </TourPageShell>
);

export const ATVPage = () => (
  <TourPageShell title="ATV Waterfall Adventure" description="ATV jungle & hill trails to Mat Kasa Waterfall in Langkawi — join-in or private tours.">
    <ATVDetails />
  </TourPageShell>
);

export const RoundIslandPage = () => (
  <TourPageShell title="Round Island Experience" description="A full-day private tour around Langkawi — beaches, waterfalls, culture and a Gunung Raya sunset.">
    <RoundIslandDetails />
  </TourPageShell>
);
