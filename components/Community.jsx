import Link from "next/link";
import * as motion from "motion/react-client";

export default function Community() {
  const Fotos = [
    {
      title: "Author Q&A: Meet Sarah Johnson",
      location: "Jakarta City Library – Main Hall",
      image: "/CommunitySection1.png",
      date: "September 15, 2025 | 4:00 PM – 6:00 PM",
      deskription:
        "Join bestselling author Sarah Johnson as she shares insights about her latest mystery novel 'Shadows in the Rain'. Bring your questions and get your book signed!",
    },
    {
      title: "Monthly Book Club – August Edition",
      location: "Bandung Creative Space – Room 203",
      image: "/CommunitySection2.png",
      date: "August 25, 2025 | 7:00 PM – 8:30 PM ",
      deskription:
        "This month’s pick: 'The Midnight Library' by Matt Haig. Read the book, join the discussion, and vote for next month’s read.",
    },
    {
      title: "Creative Writing Workshop",
      location: "David Jhones Main Hall",
      image: "/CommunitySection3.png",
      date: "October 5, 2025 | 2:00 PM – 5:00 PM",
      deskription:
        "Learn the art of storytelling with award-winning author Michael Tan. Perfect for aspiring writers who want to bring their ideas to life.",
    },
    {
      title: "30-Day Reading Challenge Kickoff",
      location: "Community Forum (Website)",
      image: "/CommunitySection4.png",
      date: "October 5, 2025 | 2:00 PM – 5:00 PM",
      deskription:
        "Learn the art of storytelling with award-winning author Michael Tan. Perfect for aspiring writers who want to bring their ideas to life.",
    },
  ];
  return (
    <div className="bg-white">
      <div className=" px-3 md:px-40 md:pt-25 pb-15">
        <div className="flex flex-col justify-center items-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-black text-5xl font-semibold text-center md:text-left"
          >
            Join Our Book Lovers’ Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-gray-700 text-xl mt-3 text-center md:text-left"
          >
            Connect with fellow readers, share your thoughts, and discover new
            stories together.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="text-center text-gray-700 mt-10 text-xl"
          >
            Our community is where book lovers gather to exchange ideas, write
            reviews, join virtual book clubs, and take on fun reading
            challenges. Whether you’re into heartwarming romance, thrilling
            mysteries, or thought-provoking non-fiction, you’ll find readers who
            share your passion. Explore trending discussions, recommend your
            favorite reads, and even join live Q&A sessions with authors.
          </motion.p>
        </div>
        <div className="flex flex-wrap gap-6 justify-center py-7">
          {Fotos.map((foto, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              key={index}
              className="bg-white border-2 border-purple-300 rounded-xl shadow-xl shadow-purple-200 p-4 max-w-xs hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={foto.image}
                alt={foto.title}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-purple-500 text-lg font-semibold">
                {foto.title}
              </h2>
              <p className="text-gray-600 text-sm">{foto.location}</p>
              <p className="text-gray-500 text-sm mb-2">{foto.date}</p>
              <p className="text-gray-700 text-sm">{foto.deskription}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="text-center py-5 "
        >
          <Link
            href=""
            className="inline-block text-purple-400 border-2 border-purple-400 px-4 py-3 rounded-xl transition-colors duration-300 hover:bg-purple-400 hover:text-white"
          >
            Explore the Community
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
