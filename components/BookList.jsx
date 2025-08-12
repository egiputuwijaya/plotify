export default function BookList() {
  const books = [
    { title: "Atomic Habits", cover: "cover1.png", author: "James Clear" },
    {
      title: "Think Again",
      cover: "cover2.png",
      author: "Adam Grant",
    },
    {
      title: "Range",
      cover: "cover3.png",
      author: "David Epstein",
    },
    {
      title: "The Power of Writing it Down",
      cover: "cover4.png",
      author: "Allison Fallon",
    },
    {
      title: "The Beauty of Starry Night",
      cover: "cover5.png",
      author: "Sahna Aqila",
    },
  ];
  return (
    <div className="md:py-20 ">
      <div className="bg-purple-500 py-10 px-1 md:py-20 md:px-6">
        <div>
          <h1 className="text-5xl text-center font-semibold pb-2">
            Discover Your Next Favorite Read
          </h1>
          <p className="text-xl text-center pb-10">
            Explore our curated book picks designed to inspire, entertain, and
            expand your horizon
          </p>
        </div>

        {/* ukuran dekstop  */}
        <div className="hidden md:block">
          <div className="flex flex-row justify-between px-30">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 shadow-2xl rounded-lg"
                style={{ backgroundColor: "#FFE3A9" }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="shadow-2xl rounded-t-lg px-3 py-3 w-full h-72 object-cover"
                />
                <h2 className="text-black text-xl font-semibold text-center px-2">
                  {book.title}
                </h2>
                <p className="text-gray-700 text-center">{book.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ukuran mobile */}
        <div className="block md:hidden">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-1">
            {books.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 shadow-2xl rounded-lg"
                style={{ backgroundColor: "#FFE3A9" }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  className="shadow-2xl rounded-t-lg px-3 py-3 w-full h-72 object-cover"
                />
                <h2 className="text-black text-xl font-semibold text-center px-2">
                  {book.title}
                </h2>
                <p className="text-gray-700 text-center">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
