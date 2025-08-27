import React from "react";
import MovieCard from "../common/MovieCard";

const TrendingSection = ({ movies = [] }) => {
  return (
    <section>
      <h3 className="text-left text-xl font-bold mb-4">Trending</h3>
      <div className="grid grid-cols-5 gap-4">
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
