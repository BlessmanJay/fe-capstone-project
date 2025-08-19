import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import TrendingSection from "../components/sections/TrendingSection";
import ErrorMessage from "../components/common/ErrorMessage";
import SearchBar from "../components/common/SearchBar";

const LandingPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "3ec1f210";

  useEffect(() => {
    // Initial trending movies
    const trendingTitles = [
      "Damsel",
      "Shazam",
      "Furiosa",
      "Hidden Strike",
      "Dora",
    ];
    const fetchTrendingMovies = async () => {
      setLoading(true);
      try {
        const moviePromises = trendingTitles.map(async (title) => {
          const res = await fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=${API_KEY}`
          );
          return await res.json();
        });
        const moviesData = await Promise.all(moviePromises);
        const formattedMovies = moviesData
          .filter((movie) => movie.Response !== "False")
          .map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
            year: movie.Year,
          }));
        setMovies(formattedMovies);
        setError(null);
      } catch (err) {
        setError("Failed to load trending movies");
      }
      setLoading(false);
    };
    fetchTrendingMovies();
  }, [API_KEY]);

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(
          data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
            year: movie.Year,
          }))
        );
        setError(null);
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (err) {
      setError("Failed to search movies.");
    }
    setLoading(false);
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#4C265C" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <section className="text-center mt-10 mb-12 text-white">
          <h2 className="text-4xl font-extrabold text-white">
            Discover Movies
          </h2>
          <p className="text-2xl font-bold text-white">Instantly</p>
          <div className="mt-6 flex justify-center">
            <SearchBar
              placeholder="Search to discover movies"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onSubmit={handleSearchSubmit}
            />
          </div>
        </section>
        {loading ? (
          <p className="text-center mt-10">Loading movies...</p>
        ) : error ? (
          <ErrorMessage type="error" text={error} />
        ) : (
          <TrendingSection movies={movies} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
