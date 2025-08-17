/** @type { import('tailwindcss').Config} */
import "./App.css";
import LandingPage from "./pages/LandingPage";
import HeroSection from "./components/sections/HeroSection";
import TrendingSection from "./components/sections/TrendingSection";
import Header from "./components/layout/Header";
import SearchBar from "./components/common/SearchBar";

function App() {
  return (
    <>
      <LandingPage />
    </>
  );
}

export default App;
