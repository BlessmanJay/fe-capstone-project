import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <h1 className="text-left text-2xl font-bold text-white">FlixFinder</h1>
      <nav className="flex flex-row items-center pr-8 gap-8">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        <br />
        <Link to="/main" className="text-white hover:underline ml-8">
          Main page
        </Link>
      </nav>
    </header>
  );
};

export default Header;
