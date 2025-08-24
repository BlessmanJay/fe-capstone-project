import React from "react";
import MovieCard from "../common/MovieCard";

const TrendingSectionMain = ({ movies }) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-white mb-4">Trending Movies</h2>
      <div className="grid grid-cols-5 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            poster={movie.poster}
            id={movie.id}
          />
        ))}
      </div>
    </section>
  );
};

export default TrendingSectionMain;
