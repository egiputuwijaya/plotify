import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import DiscussionCommunity from "./components/DiscussionCommunity";
import EventsCommunity from "./components/EventCommunity";
import HeroCommunity from "./components/HeroCommunity";

export default function Community() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroCommunity />
      <DiscussionCommunity />
      <EventsCommunity />
      <Footer />
    </div>
  );
}
