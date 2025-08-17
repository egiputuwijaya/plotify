"use client";
import * as motion from "motion/react-client";
import { useState, useEffect } from "react";

export default function HeroCommunity() {
  const Carousels = [
    { carousel: "Carousel1.png" },
    { carousel: "Carousel2.png" },
    { carousel: "Carousel3.png" },
    { carousel: "Carousel4.png" },
    { carousel: "Carousel5.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Carousels.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [Carousels.length]);

  return (
    <div className="bg-gray-50">
      <section className="bg-purple-400 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to the Book Community
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-15 mt-10">
          {/* Carousel */}
          <div className="relative w-80 h-60 md:w-[500px] md:h-[350px] overflow-hidden rounded-2xl shadow-lg">
            {Carousels.map((item, index) => (
              <motion.img
                key={index}
                src={item.carousel}
                alt={`Carousel ${index + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentIndex ? 1 : 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="flex flex-col max-w-md text-left">
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="text-lg md:text-2xl mb-6"
            >
              Connect with fellow readers, join discussions, and discover
              exciting events around books you love.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="bg-white text-purple-600 px-6 py-3 rounded-2xl font-medium shadow-2xl hover:bg-gray-100 transition"
            >
              Join the Community
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
