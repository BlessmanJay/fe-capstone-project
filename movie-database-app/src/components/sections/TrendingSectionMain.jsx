import React from "react";
import MovieCard from "../common/MovieCard";

const TrendingSectionMain = ({ movies }) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-white mb-4">Trending Movies</h2>
<<<<<<< HEAD
      <div className="grid grid-cols-5 gap-6">
=======
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 w-full">
>>>>>>> 359b9e2f149358f43e88fab236b764d1a8b3c2e1
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
