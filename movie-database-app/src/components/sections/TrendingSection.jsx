import React from "react";
import MovieCard from "../common/MovieCard";

const TrendingSection = ({ movies = [] }) => {
  return (
    <section>
      <h3 className="text-left text-xl font-bold mb-4">Trending</h3>
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster={movie.poster}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
