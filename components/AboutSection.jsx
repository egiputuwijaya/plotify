export default function AboutSections() {
  return (
    <div className="bg-white">
      <div className="flex flex-row gap-10 justify-between">
        <div className="relative flex-1">
          <div className="absolute flex flex-col top-0 left-0  bg-purple-500 z-50">
            <div className="relative z-10 text-white px-30">
              <p className="text-lg md:text-xl font-medium">
                Quote from Jorge Luis Borges
              </p>
              <h2 className="text-2xl md:text-6xl font-semibold mt-2 leading-tight">
                I have always imagined that Paradise will be a kind of library
              </h2>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1>Exploring the Why, How, and What?</h1>
        </div>
      </div>
    </div>
  );
}
