import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import HeroSectionAbout from "./components/HeroSectionAbout";
import MissionAbout from "./components/MissionAbout";
import OfferAbout from "./components/OfferAbout";
import SubscribeAbout from "./components/SubscribeAbout";

export default function AboutPage() {
  return (
    <div className="bg-white flex-col gap-0">
      <Navbar />
      <HeroSectionAbout />
      <MissionAbout />
      <OfferAbout />
      <SubscribeAbout/>
      <Footer />
    </div>
  );
}
