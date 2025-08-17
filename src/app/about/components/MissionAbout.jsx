import * as motion from "motion/react-client";

export default function MissionAbout() {
  const AboutFotos = [
    { image: "/About1.png" },
    { image: "/About2.png" },
    { image: "/About3.png" },
    { image: "/About4.png" },
    { image: "/About5.png" },
    { image: "/About5.png" },
  ];

  const MissionFotos = [
    { image: "/Mission1.png" },
    { image: "/Mission2.png" },
    { image: "/Mission3.png" },
    { image: "/Mission5.png" },
  ];

  return (
    <div className="bg-gradient-to-l from-orange-100 to-white py-20 px-30">
      {/* VISION */}
      <div className="flex flex-col items-center justify-center gap-5 px-6">
        <div className="flex flex-col md:flex-row gap-10 justify-center max-w-5xl space-y-6 px-3">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-5xl flex font-bold text-purple-700"
          >
            Our Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            Plotify was born from our love for reading and sharing stories. We
            believe everyone deserves to find a book that can change their life.
            From timeless classics to hidden gems by new authors, our mission is
            to make book discovery easy and enjoyable for all readers.
          </motion.p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {AboutFotos.map((foto, index) => (
            <div className="" key={index}>
              <motion.img
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                src={foto.image}
                alt=""
                className="w-45 rounded shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
      {/* MISSION  */}
      <div className="flex flex-col md:flex-row items-center md:py-20 max-w-5xl mx-auto px-6 gap-12">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="flex flex-col max-w-2xl space-y-6"
        >
          <h1 className="text-5xl font-bold text-purple-700">Our Mission</h1>
          <p className="text-gray-700 text-lg leading-relaxed text-justify max-w-2xl">
            At Plotify, our mission is to deliver relevant and honest book
            recommendations that truly resonate with each reader’s taste and
            interests. We carefully curate every suggestion to ensure it aligns
            with different moods, genres, and reading goals, helping readers
            discover stories that matter most to them.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed text-justify  max-w-2xl">
            We also believe in preserving the joy of reading through
            spoiler-free summaries, allowing readers to explore books without
            losing the magic of discovery. Beyond that, we aim to build a warm
            and supportive reading community where book lovers can connect,
            share insights, and inspire one another on their literary journeys.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className=""
        >
          <div className="grid grid-cols-2 gap-3">
            {MissionFotos.map((foto, index) => (
              <div key={index} className="overflow-hidden shadow-2xl">
                <img
                  src={foto.image}
                  alt={`Mission ${index + 1}`}
                  className="w-70 h-auto transform hover:scale-105 transition duration-500"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
