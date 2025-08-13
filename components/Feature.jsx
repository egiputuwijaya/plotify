import { FaBookOpen } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { MdCollectionsBookmark } from "react-icons/md";
import { MdRateReview } from "react-icons/md";
import * as motion from "motion/react-client";

export default function FeatureYouGet() {
  return (
    <div className="bg-white px-3 md:px-40 py-10 md:py-0">
      <div className="pb-8 md:hidden">
        <h1 className="text-black  text-3xl md:text-4xl font-semibold text-center md:text-left block md:hidden">
          What feature you'll get
        </h1>
        <p className="text-black pt-2 text-center md:text-left block md:hidden">
          Our recommendations help you get the results you want, especially for
          you
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-10 ">
        <div className="flex-1 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="absolute z-20 md:top-30 left-30 md:left-45"
          >
            <img
              src="/FeatureImage2.png"
              alt=""
              className="w-55 md:w-85 h-auto shadow-2xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="absolute z-20 top-20 md:top-50 left-8 md:left-0 "
          >
            <img
              src="/FeatureImage1.png"
              alt=""
              className="w-45 md:w-75 h-auto shadow-2xl"
            />
          </motion.div>
        </div>
        <div className="flex-1 pt-70 md:pt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-black  text-3xl md:text-5xl font-semibold text-center md:text-left hidden md:block"
          >
            What feature you'll get
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }} className="text-black pt-2 text-center md:text-left hidden md:block">
            Our recommendations help you get the results you want, especially
            for you
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row gap-5 items-center bg-purple-200 px-5 py-2 rounded-b-2xl my-5"
          >
            <FaBookOpen className="text-4xl text-purple-600 " />
            <div className="flex flex-col">
              <h1 className="text-black text-xl font-semibold">
                Personalized Book Recommendations
              </h1>
              <p className="text-gray-600">
                Get book suggestions tailored to your reading preferences and
                favorite genres.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row gap-5 items-center bg-gray-200 px-5 py-2 rounded-b-2xl my-5"
          >
            <FaBook className="text-4xl text-gray-600 " />
            <div className="flex flex-col">
              <h1 className=" text-black text-xl font-semibold">
                Detailed Book Summaries
              </h1>
              <p className="text-gray-600">
                Access concise yet informative summaries, including plot
                overviews, themes, and key takeaways.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row  gap-5 items-center bg-purple-200 px-5 py-2 rounded-b-2xl my-5"
          >
            <MdCollectionsBookmark className="text-4xl text-gray-600 " />
            <div className="flex flex-col">
              <h1 className="text-black text-xl font-semibold">
                Trending & New Releases
              </h1>
              <p className="text-gray-600">
                Stay updated with the hottest books and latest releases on the
                market.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-row  gap-5 items-center bg-gray-200 px-5 py-2 rounded-b-2xl my-5"
          >
            <MdRateReview className="text-4xl text-gray-600 " />
            <div className="flex flex-col">
              <h1 className="text-black text-xl font-semibold">
                User Reviews & Ratings
              </h1>
              <p className="text-gray-600">
                Read honest reviews from fellow readers and share your own
                opinions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
