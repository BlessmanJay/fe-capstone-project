import { Link } from "react-router-dom";

const MovieCard = ({ poster, title, id }) => {
  return (
    <div className="w-full">
      <img
        src={poster}
        alt={title}
        className="w-full h-60 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <Link
        to={`/movie/${id}`}
        className="mt-4 block bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600 transition-colors duration-200 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
