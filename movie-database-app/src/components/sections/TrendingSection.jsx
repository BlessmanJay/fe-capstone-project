import React from "react";
import MovieCard from "../common/MovieCard";

const TrendingSection = ({ movies = [] }) => {
  return (
    <section>
      <h3 className="text-left text-xl font-bold mb-4">Trending</h3>
<<<<<<< HEAD
      <div className="grid grid-cols-5 gap-4">
=======
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
>>>>>>> 359b9e2f149358f43e88fab236b764d1a8b3c2e1
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
