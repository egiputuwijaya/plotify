import { HiArrowLongRight } from "react-icons/hi2";
export default function AboutSections() {
  return (
    <div className="bg-white py-10 md:py-15 ">
      <div className="flex flex-row gap-10 justify-between">
        <div className="relative flex-1 px-43 md:px-0">
          <div className="absolute flex flex-col top-0 left-0 bg-purple-500 px-0 md:px-20 z-50">
            <div className="relative z-100 text-white py-10 px-5 md:px-0">
              <p className="text-lg md:text-xl font-medium text-center md:text-left">
                Quote from Jorge Luis Borges
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold mt-2 leading-tight text-center md:text-left">
                "I have always imagined that Paradise will be a kind of library"
              </h2>
            </div>
          </div>
        </div>
        <div className="md:flex-1 md:py-15 md:pl-5 md:pr-10 relative hidden md:block">
          <p className="text-purple-400 py-2">Todays - 1/365</p>
          <h1 className="text-5xl text-black font-semibold  ">
            Exploring the Why, How, and What?
          </h1>
          <a href="">
            <HiArrowLongRight className="absolute md:top-36 md:left-43 text-6xl text-black animate-pulse  hover:text-purple-500 transition cursor-pointer hover:scale-110" />
          </a>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="md:flex-1 pt-70 px-5 md:py-15 md:pl-5 md:pr-10 relative">
          <p className="text-purple-400 py-2">Todays - 1/365</p>
          <h1 className="text-5xl text-black font-semibold  ">
            Exploring the Why, How, and What?
          </h1>
          <a href="">
            <HiArrowLongRight className="absolute  top-103 left-40 text-6xl text-black animate-pulse  hover:text-purple-500 transition cursor-pointer hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
}
