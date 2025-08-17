import Image from "next/image";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";
import AboutSections from "../../components/AboutSection";
import BookList from "../../components/BookList";
import FeatureYouGet from "../../components/Feature";
import Community from "../../components/Community";
import UserReviews from "../../components/UserReviews";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSections />
      <BookList />
      <FeatureYouGet />
      <Community />
      <UserReviews />
      <Footer />
    </div>
  );
}
