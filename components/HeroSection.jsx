import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="bg-white py-10">
      <div className="flex flex-col md:flex-row mx-auto max-w-7xl gap-8">
        {/* Bagian teks */}
        <div className="flex flex-col justify-center flex-1">
          <h1 className="text-5xl md:text-7xl font-semibold text-black leading-tight">
            All your book recommendation collection in one platform
          </h1>
          <p className="text-gray-500 text-lg mt-4">
            Our recommendation collection will help your home look better and we
            provide the best product for you.
          </p>
          <div className="mt-6">
            <Link
              href=""
              className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition"
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
              className="shadow-lg w-full h-full  translate-x-28 "
            />
            <img
              src="/HeroSections.png"
              alt=""
              className="absolute top-10 left-15 w-65 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
