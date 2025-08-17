import React, { useState } from "react";

const SearchBar = ({ placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center bg-gray-700 rounded-lg px-4 py-2 w-full max-w-md"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="text-white font-semibold hover:text-blue-400"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
