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
      "Broken Love",
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

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#4C265C" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <HeroSection />
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
