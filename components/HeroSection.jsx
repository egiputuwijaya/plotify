import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroSection() {
  return (
    <div className="bg-white py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="flex flex-col md:flex-row md:mx-auto md:max-w-7xl gap-9"
      >
        {/* Bagian teks */}
        <div className="flex flex-col justify-center flex-1 px-1 md:px-0 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-semibold text-black leading-tight">
            All your book recommendation collection in one platform
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            Our recommendation collection will help your home look better and we
            provide the best product for you.
          </p>
          <div className="mt-7">
            <Link
              href=""
              className="bg-purple-500 text-white px-8  py-3 rounded-lg hover:bg-purple-600 transition"
            >
              See Collection
            </Link>
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="flex-1 relative flex items-center justify-center">
          <div className="relative w-60 h-auto md:w-80">
            <img
              src="/HeroSections3.png"
              alt="Book Cover"
              className="shadow-2xl w-full h-full  md:translate-x-28 "
            />
            <img
              src="/HeroSections.png"
              alt=""
              className="absolute top-10 left-5 md:left-15 w-50 md:w-65 h-auto shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
