import React from "react";
import SearchBar from "../common/SearchBar";

const HeroSection = ({ value, onChange, onSubmit }) => {
  return (
    <section className="text-center mt-10 mb-12 text-white">
      <h2 className="hero-head text-4xl font-extrabold text-white">
        Discover Movies
      </h2>
      <p className="hero-subtext">Instantly</p>
      <div className="mt-6 flex justify-center">
        <SearchBar
          placeholder="Search to discover movies"
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  );
};

export default HeroSection;
