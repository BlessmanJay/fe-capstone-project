import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "3ec1f210";

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch (err) {
        setError("Failed to load movie details.");
      }
    }
    fetchMovie();
  }, [id]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4C265C] text-white">
        <div className="text-center">
          <p className="text-xl">{error}</p>
          <Link
            to="/main"
            className="mt-4 inline-block bg-white text-[#4C265C] px-4 py-2 rounded-lg"
          >
            Back to Main
          </Link>
        </div>
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#4C265C] text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#4C265C] text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Link
            to="/"
            className="inline-block bg-white text-[#4C265C] px-4 py-2 rounded-lg font-semibold"
          >
            Back to Home
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x400"
            }
            alt={movie.Title}
            className="w-72 h-auto rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold">{movie.Title}</h1>
            <p className="mt-2 text-lg italic">
              {movie.Year} • {movie.Runtime} • {movie.Genre}
            </p>
            <p className="mt-4">{movie.Plot}</p>

            <div className="mt-6">
              <p>
                <span className="font-semibold">Director:</span>{" "}
                {movie.Director}
              </p>
              <p>
                <span className="font-semibold">Actors:</span> {movie.Actors}
              </p>
              <p>
                <span className="font-semibold">IMDB Rating:</span>{" "}
                {movie.imdbRating}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-row justify-between gap-4">
              <button
                className="trailer-btn px-6 py-3 text-white font-semibold"
                style={{ backgroundColor: "#a47b7b" }}
              >
                Watch Trailer
              </button>
              <button
                className="favorites-btn px-6 py-3 text-white font-semibold"
                style={{ backgroundColor: "#a47b7b" }}
              >
                Add to Favorites
              </button>
            </div>

            <Link
              to="/main"
              className="mt-6 inline-block bg-white text-[#4C265C] px-4 py-2 rounded-lg font-semibold"
            >
              Back to Main
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
