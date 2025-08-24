import React from "react";

const SearchBar = ({ placeholder, value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center bg-gray-700 rounded-lg px-4 py-2 w-full max-w-md"
    >
      <input
        type="text"
        value={value}
        onChange={onChange}
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
