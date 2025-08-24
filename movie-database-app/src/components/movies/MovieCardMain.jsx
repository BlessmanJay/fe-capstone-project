import React from "react";

const MovieCardMain = ({ title, poster }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={poster}
        alt={title}
        className="w-36 h-52 object-cover rounded-md shadow-md"
      />
      <p className="mt-2 text-sm font-semibold text-white">{title}</p>
    </div>
  );
};

export default MovieCardMain;
