import * as motion from "motion/react-client";

export default function EventsCommunity() {
  const events = [
    {
      title: "Book Club Meeting",
      date: "August 25, 2025",
      description: "Theme: Exploring Modern Fiction",
      icon: "/Event1.png",
    },
    {
      title: "Live Discussion",
      date: "September 2, 2025",
      description: "Top 10 Must-Read Classics",
      icon: "/Event2.png",
    },
    {
      title: "Online Webinar",
      date: "September 10, 2025",
      description: "How to Build a Reading Habit",
      icon: "/Event3.png",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-orange-100 py-16 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Events & Activities
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-gray-600 mb-12 text-xl"
        >
          Join exciting events and connect with fellow readers around the world.
        </motion.p>

        <div className="grid gap-6 md:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              key={index}
              className="bg-purple-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <img
                src={event.icon}
                alt=""
                className="rounded-2xl hover:rotate-1 transition py-2"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {event.title}
              </h3>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="text-gray-600 mt-2">{event.description}</p>
              <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
                RSVP
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:bg-purple-800 transition">
            Join an Event
          </button>
        </div>
      </div>
    </section>
  );
}
