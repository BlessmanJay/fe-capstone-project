import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import HeroSection from "../components/sections/HeroSection";
import TrendingSection from "../components/sections/TrendingSection";
import ErrorMessage from "../components/common/ErrorMessage";
const LandingPage = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = "3ec1f210"; //Real OMDb API Key

  useEffect(() => {
    // Titles we'll use to simulate "trending" movies
    const trendingTitles = [
      "Damsel",
      "Shazam",
      "Furiosa",
      "Hidden Strike",
      "Dora",
    ];

    const fetchTrendingMovies = async () => {
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

        setTrendingMovies(formattedMovies);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching trending movies:", err);
        setError("Failed to load trending movies");
        setLoading(false);
      }
    };

    fetchTrendingMovies();
  }, [API_KEY]);

  // Add search state and handler
  const [search, setSearch] = useState("");

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
        setTrendingMovies(
          data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
            year: movie.Year,
          }))
        );
        setError(null);
      } else {
        setTrendingMovies([]);
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
      <div className="px-4">
        <Header />
        <HeroSection
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearchSubmit}
        />
        {loading ? (
          <p className="text-center mt-10">Loading trending movies...</p>
        ) : error ? (
          <ErrorMessage type="error" text={error} />
        ) : (
          <TrendingSection movies={trendingMovies} />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
