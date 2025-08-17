import React, { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import SearchBarMain from "../components/movies/SearchBarMain";
import TrendingSection from "../components/sections/TrendingSection";

const MainPage = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  // Fetch trending (default movies)
  useEffect(() => {
    b;
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?s=batman&apikey="3ec1f210"`
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrending();
  }, []);

  // Handle search submit
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${search}&apikey="3ec1f210"`
      );
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#4C265C" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <SearchBar
          search={search}
          setSearch={setSearch}
          onSubmit={handleSearchSubmit}
        />
        <TrendingSection movies={movies} />
      </div>
    </div>
  );
};

export default MainPage;
