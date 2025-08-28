# 🎬 Movie Database App

A React-based web application that allows users to search and explore movies using an external API. The app features responsive design, clean UI with Tailwind CSS, and a smooth user experience.

## 📂 Project Structure

Root README.md (this file): High-level overview of the repository.

react-app/README.md: \***\*Detail**ed\*\* setup guide, dependencies, and development notes.

### 🚀 Features

🔍 Search for movies by title

🎭 View movie details (poster, release date, genre/category, rating etc.)

### 📺 Trending Section with popular picks

📱 Responsive UI built with Tailwind CSS

⚡ Fast, client-side rendering with React

🌍 Data fetched from an external Movie API

🛠 Built with reusable components (SearchBar, ErrorMessage, MovieCard, LoadingSpinner etc.)

### 🖥️ Screens / Pages

Landing Page → Search bar + trending movies

Results Page → List of movies returned from search

Movie Details Page → Detailed view for selected movie

### 🛠️ Tech Stack

Frontend: React (JSX)

Styling: Tailwind CSS

API: Movie Database API (OMDb)

State Management: React Hooks (useState, useEffect)

Deployment: Vercel or Netlify

### ⚙️ Installation & Setup

Clone the repo and install dependencies:

git clone https://github.com/BlessmanJay/fe-capstone-project.git

cd movie-database-app

npm install

Create a .env file in the root directory and add your OMDb API key:

VITE_OMDB_API_KEY="3ec1f210"

Run the app:

npm run dev

### 🔑 Environment Variables

VITE_OMDB_API_KEY → "3ec1f210" (gotten for free at omdbapi.com)

### 🌟 Future Improvements

Add pagination for search results

Add favorites / watchlist feature

Add user authentication for personalization

Integrate with other movie APIs for richer content

### 📜 License

This project is open source and available under the MIT License.

### 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open a pull request or report a bug.
