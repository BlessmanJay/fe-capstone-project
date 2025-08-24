import React from "react";
import SearchBar from "../common/SearchBar";

<<<<<<< HEAD
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
=======
const HeroSection = () => {
  return (
    <section className="text-center mt-10 mb-12 text-white">
      <h2 className="text-4xl font-extrabold text-white">Discover Movies</h2>
      <p className="text-2xl font-bold text-white">Instantly</p>
      <div className="mt-6 flex justify-center">
        <SearchBar placeholder="Search to discover movies" />
>>>>>>> 359b9e2f149358f43e88fab236b764d1a8b3c2e1
      </div>
    </section>
  );
};

export default HeroSection;
