import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import BooksRelate from "./components/BookRelate";
import BooksSections from "./components/BooksSections";

export default function Books() {
  return (
    <div className="bg-white">
      <Navbar />
      <BooksSections />
      <BooksRelate />
      <Footer />
    </div>
  );
}
