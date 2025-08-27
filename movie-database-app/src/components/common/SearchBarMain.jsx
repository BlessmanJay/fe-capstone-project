import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBarMain = ({ value, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex items-center w-full max-w-2xl bg-[#3a1f47] rounded-md px-4 py-3 mt-4"
    >
      <input
        type="text"
        placeholder="Search to discover movies"
        value={value}
        onChange={onChange}
        className="flex-grow bg-transparent outline-none text-white placeholder-gray-300"
      />
      <button type="submit" className="text-white-300 hover:text-gray">
        <FiSearch size={20} />
      </button>
    </form>
  );
};

<div className="min-h-screen bg-[#4C265C] text-white flex flex-col items-center justify-center">
  <h1 className="text-4xl font-bold mb-6">Movie Database App 🎥</h1>
  <button
    onClick={() => navigate("/main")}
    className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400"
  >
    Go to Main Page
  </button>
</div>;

export default SearchBarMain;
