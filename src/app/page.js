import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSections from "../../components/AboutSection";
import BookList from "../../components/BookList";
import FeatureYouGet from "../../components/Feature";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSection />
      <AboutSections />
      <BookList />
      <FeatureYouGet />
    </div>
  );
}
