"use client";
import * as motion from "motion/react-client";

export default function UserReviews() {
  const Comments = [
    {
      name: "Emily Carter",
      Occupation: "Librarian",
      Comment:
        "A beautifully written novel that captures the essence of friendship and love.",
      date: "March 5, 2025",
    },
    {
      name: "Daniel Hughes",
      Occupation: "Software Engineer",
      Comment:
        "The pacing was perfect, and the plot twists kept me hooked until the end.",
      date: "March 8, 2025",
    },
    {
      name: "Olivia Martinez",
      Occupation: "College Student",
      Comment:
        "A thought-provoking read that made me see the world from a new perspective.",
      date: "March 10, 2025",
    },
    {
      name: "James Robertson",
      Occupation: "Journalist",
      Comment:
        "Engaging from start to finish—highly recommended for mystery lovers.",
      date: "March 12, 2025",
    },
    {
      name: "Sophia Bennett",
      Occupation: "Marketing Specialist",
      Comment:
        "Some chapters felt slow, but the overall message of the book is powerful.",
      date: "March 15, 2025",
    },
    {
      name: "Ethan Walker",
      Occupation: "High School Teacher",
      Comment:
        "Perfect for young readers—fun, educational, and full of life lessons.",
      date: "March 17, 2025",
    },
  ];

  return (
    <div className="bg-white px-3 md:px-30 md:pt-20 pb-5 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.4 }}
        className="text-center text-black text-5xl font-semibold mb-10"
      >
        What Readers Are Saying
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10"
      >
        {Comments.map((comment, index) => (
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
            className="bg-purple-200 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div className="flex flex-row justify-between items-start mb-4">
              <div>
                <p className="text-black font-semibold">{comment.name}</p>
                <p className="text-gray-700 text-sm">{comment.Occupation}</p>
              </div>
              <p className="text-gray-500 text-sm">{comment.date}</p>
            </div>
            <p className="text-gray-800">{comment.Comment}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
