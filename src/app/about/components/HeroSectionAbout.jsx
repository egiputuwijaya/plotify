import * as motion from "motion/react-client";

export default function HeroSectionAbout() {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-purple-100 to-white py-20 px-30">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once:false }}
          transition={{ duration: 0.3 }}
          className=""
        >
          <h1 className="text-center text-5xl font-semibold text-black">
            About Plotify
          </h1>
          <p className="text-center text-xl text-gray-700 mt-2">
            Helping readers discover stories worth remembering
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 px-6 ">
            <div className="flex flex-col justify-center max-w-xl space-y-6">
              <h1 className="text-5xl font-bold text-purple-700">Our Story</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Plotify was born from our love for reading and sharing stories.
                We believe everyone deserves to find a book that can change
                their life. From timeless classics to hidden gems by new
                authors, our mission is to make book discovery easy and
                enjoyable for all readers.
              </p>
            </div>

            <div className="relative">
              <img
                src="/AboutStory.svg"
                alt="Our Story"
                className="w-full max-w-sm rounded-2xl shadow-lg transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
