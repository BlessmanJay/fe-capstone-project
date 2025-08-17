import React from "react";

const MovieCard = ({ poster, title }) => {
  return (
    <div className="flex-shrink-0 w-40">
      <img
        src={poster}
        alt={title}
        className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
      />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
};

export default MovieCard;
