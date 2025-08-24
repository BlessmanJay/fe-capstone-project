import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import SearchBarMain from "../components/movies/SearchBarMain";
import { Link } from "react-router-dom";
import TrendingSectionMain from "../components/sections/TrendingSectionMain";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch trending (default movies)
  useEffect(() => {
    const trendingTitles = [
      "Damsel",
      "Shazam",
      "Furiosa",
      "Hidden Strike",
      "Dora",
    ];

    const fetchTrendingAndLatest = async () => {
      setLoading(true);
      try {
        // Fetch trending movies (same as LandingPage)
        const trendingPromises = trendingTitles.map(async (title) => {
          const res = await fetch(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              title
            )}&apikey=3ec1f210`
          );
          return await res.json();
        });
        const trendingData = await Promise.all(trendingPromises);
        const trendingMovies = trendingData
          .filter((movie) => movie.Response !== "False")
          .map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
          }));

        // Fetch latest movies (using a year or keyword)
        const latestRes = await fetch(
          `https://www.omdbapi.com/?s=2023&apikey=3ec1f210`
        );
        const latestData = await latestRes.json();
        const latestMovies = latestData.Search
          ? latestData.Search.map((movie) => ({
              id: movie.imdbID,
              title: movie.Title,
              poster:
                movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
            }))
          : [];

        // Combine trending and latest movies
        setMovies([...trendingMovies, ...latestMovies]);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
      setLoading(false);
    };

    fetchTrendingAndLatest();
  }, []);

  // Handle search submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey=3ec1f210`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(
          data.Search.map((movie) => ({
            id: movie.imdbID,
            title: movie.Title,
            poster: movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg",
          }))
        );
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
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
        <SearchBarMain
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onSubmit={handleSearchSubmit}
        />
        {loading ? (
          <LoadingSpinner />
        ) : movies.length === 0 ? (
          <p className="text-center text-lg mt-10 text-red-400">
            No movies found.
          </p>
        ) : (
          <TrendingSectionMain movies={movies} />
        )}
      </div>
    </div>
  );
};

export default MainPage;
