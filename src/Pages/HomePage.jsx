import "../css/HomePage.css";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error(error);
      }
    };

    loadMovies();
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
    } catch (error) {
      console.error(error);
    }

    setSearchQuery("");
  };
 
return (
  <div className="home">
    <form onSubmit={handleSearch} className="search-form">
      ...
    </form>

    <div style={{ color: "white", padding: "10px" }}>
      Movies loaded: {movies.length}
    </div>

    <div className="movies-grid">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          key={movie.id}
        />
      ))}
    </div>
  </div>
);
  );

}

export default HomePage;
