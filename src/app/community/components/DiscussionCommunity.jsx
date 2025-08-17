export default function DiscussionCommunity() {
  return (
    <div className="bg-gradient-to-b from-purple-400 to-white">
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          Community Discussions
        </h2>
        <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Share your thoughts, write reviews, or start a new conversation.
          Explore categories and join trending discussions.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              📖 Book Reviews
            </h3>
            <p className="text-gray-600">
              See what others think about the latest books.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              💡 Recommendations
            </h3>
            <p className="text-gray-600">
              Find your next favorite read from fellow members.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              💬 General Discussion
            </h3>
            <p className="text-gray-600">
              Talk about anything book-related and beyond.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-2xl font-medium shadow hover:bg-purple-700 transition">
            Start a New Discussion
          </button>
        </div>
      </section>
    </div>
  );
}
