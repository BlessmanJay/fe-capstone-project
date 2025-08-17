import React from "react";
import SearchBar from "../common/SearchBar";

const HeroSection = () => {
  return (
    <section className="text-center mt-10 mb-12 text-white">
      <h2 className="text-4xl font-extrabold text-white">Discover Movies</h2>
      <p className="text-2xl font-bold text-white">Instantly</p>
      <div className="mt-6 flex justify-center">
        <SearchBar placeholder="Search to discover movies" />
      </div>
    </section>
  );
};

export default HeroSection;
