"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import * as motion from "motion/react-client";

export default function BooksSections() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    const data = await res.json();
    setResult(data.docs.slice(0, 10));
  };

  const handleSelectedBook = async (book) => {
    const res = await fetch(
      `https://openlibrary.org/works/${book.key.split("/")[2]}.json`
    );
    const data = await res.json();
    setSelectedBook({ ...data, cover_i: book.cover_i });
  };

  return (
    <div className="bg-gradient-to-b from-orange-100 to-purple-100 pt-10 px-30">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-semibold text-black text-center"
      >
        Discover Your Next Favorite Book
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="text-gray-700 text-center text-xl py-3"
      >
        Explore a collection of thousands of books from various genres, authors,
        and publication years. Discover new reading material that inspires you.
      </motion.p>
      {/* SEARCH */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.7 }}
        className="border-2 border-purple-400 shadow-purple-100 rounded-lg my-10"
      >
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search your favorite book"
            className="w-full text-gray-700 focus:outline-none px-5 py-2"
          />
        </form>
      </motion.div>

      {/* RESULT */}
      {query.trim() !== "" && result.length === 0 && (
        <p className="text-center text-gray-500">No book found</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {result.map((book, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.7,
              e,
            }}
            key={index}
            onClick={() => handleSelectedBook(book)}
            className="cursor-pointer  rounded-lg p-3 shadow hover:shadow-lg transition border-2 border-purple-200 bg-white"
          >
            <div className="w-full h-80 flex items-center justify-center bg-gray-100 rounded">
              <img
                src={
                  book.cover_i
                    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
                    : "https://via.placeholder.com/150"
                }
                alt={book.title}
                className="max-h-full object-contain rounded"
              />
            </div>
            <h2 className="text-xl text-center mt-2 font-semibold text-purple-400">
              {book.title}
            </h2>
            <p className="text-center text-gray-700">
              {book.author_name ? book.author_name[0] : "Unknown"}
            </p>
            <p className="text-center text-black">{book.first_publish_year}</p>
          </motion.div>
        ))}
      </div>

      {/* POPUP DETAIL */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-2xl shadow-2xl max-w-3xl w-full relative"
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 transition"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Konten */}
            <div className="flex flex-col items-center">
              {/* Gambar + Info */}
              <div className="flex flex-row gap-8 w-full ">
                <img
                  src={
                    selectedBook.cover_i
                      ? `https://covers.openlibrary.org/b/id/${selectedBook.cover_i}-L.jpg`
                      : selectedBook.covers && selectedBook.covers.length > 0
                      ? `https://covers.openlibrary.org/b/id/${selectedBook.covers[0]}-L.jpg`
                      : "https://via.placeholder.com/200"
                  }
                  alt={selectedBook.title}
                  className="w-40 h-60 object-cover rounded-lg shadow-md"
                />

                <div className="flex flex-col">
                  <h2 className="text-3xl font-extrabold text-purple-700 mb-3">
                    {selectedBook.title}
                  </h2>
                  <p className="text-gray-800 text-lg">
                    <span className="font-semibold">Year: </span>
                    {selectedBook.first_publish_year || "Unknown Year"}
                  </p>
                  <p className="text-gray-600 text-md">
                    <span className="font-semibold">Edition: </span>
                    {selectedBook.edition_count || 0}
                  </p>
                </div>
              </div>

              {/* Garis Pemisah */}
              <div className="w-full border-t border-gray-200 my-6"></div>

              {/* Deskripsi */}
              <div className="bg-purple-50 p-4 rounded-lg shadow-inner w-full">
                <h3 className="text-lg font-semibold text-purple-600 mb-2">
                  About this book:
                </h3>
                <p className="text-sm text-gray-700 italic leading-relaxed">
                  {selectedBook.description
                    ? typeof selectedBook.description === "string"
                      ? selectedBook.description
                      : selectedBook.description.value
                    : "No Description available for this book."}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
