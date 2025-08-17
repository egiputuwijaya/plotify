import { FaBookReader, FaStar } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import * as motion from "motion/react-client";

export default function OfferAbout() {
  return (
    <div className="bg-white py-16 px-6">
      {/* Title */}
      <motion.h1 initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }} className="text-center text-5xl font-bold text-black mb-12">
        What We Offer
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-12">
        {/* Offer List */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-purple-200 p-5 rounded-b-2xl shadow-md hover:shadow-lg"
          >
            <FaBookReader className="text-6xl text-purple-400" />
            <p className="text-gray-800 font-medium">
              Curated book recommendations by genre, mood, or theme
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-orange-100 p-5 rounded-b-2xl shadow-md hover:shadow-lg transition duration-300"
          >
            <MdLibraryBooks className="text-6xl text-purple-400" />
            <p className="text-gray-800 font-medium">
              Short, honest summaries without major spoilers
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-orange-100 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <FaStar className="text-4xl text-purple-400" />
            <p className="text-gray-800 font-medium">
              Reviews from fellow readers
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-4 bg-purple-200 p-5 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <FaPeopleGroup className="text-6xl text-purple-400" />
            <p className="text-gray-800 font-medium">
              Community events like book discussions and online meetups
            </p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/AboutOffer.svg"
            alt="What We Offer"
            className="max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </div>
  );
}
