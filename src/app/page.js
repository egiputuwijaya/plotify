import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSections from "../../components/AboutSection";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <AboutSections />
    </div>
  );
}
