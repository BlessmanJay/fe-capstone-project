<<<<<<< HEAD
import React from "react";

const SearchBar = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
=======
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
>>>>>>> 359b9e2f149358f43e88fab236b764d1a8b3c2e1
      className="flex items-center bg-gray-700 rounded-lg px-4 py-2 w-full max-w-md"
    >
      <input
        type="text"
<<<<<<< HEAD
        value={value}
        onChange={onChange}
=======
        value={query}
        onChange={(e) => setQuery(e.target.value)}
>>>>>>> 359b9e2f149358f43e88fab236b764d1a8b3c2e1
        placeholder={placeholder}
        className="bg-transparent outline-none flex-grow text-white placeholder-gray-400"
        style={{ color: "white" }}
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
