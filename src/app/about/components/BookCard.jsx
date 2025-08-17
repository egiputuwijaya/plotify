export default function BookCard({ book }) {
  const coverId = book.cover_id || null;
  const coverURL = coverId
    ? `https//covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="border rounded-lg shadow p-3 hover:shadow-lg transition">
      <img
        src={coverURL}
        alt=""
        className="w-full h-40 object-cover mb-3 rounded"
      />
      <h2>{book.tile}</h2>
      <p className="text-xs text-gray-600">
        {book.authors?.map((a) => a.name).join(", ")}
      </p>
    </div>
  );
}
