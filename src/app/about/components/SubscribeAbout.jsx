import Link from "next/link";

export default function SubscribeAbout() {
  return (
    <div className="bg-purple-100 py-16 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <img
          src="/SubscribeAbout.svg"
          alt="Books illustration"
          className="w-72 md:w-96 drop-shadow-lg"
        />

        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-black font-bold text-4xl md:text-5xl leading-tight mb-4">
            Ready to find your{" "}
            <span className="text-purple-600">next favorite book?</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Join thousands of readers who explore handpicked recommendations,
            spoiler-free summaries, and a welcoming community that shares your
            love for stories.
          </p>

          <Link
            href=""
            className="text-purple-500 text-xl px-4 py-1 rounded-md border-3 border-purple-400 hover:text-white hover:bg-purple-400 transition."
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
