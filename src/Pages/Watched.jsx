import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Watched() {
  const { watchedMovies } = useMovieContext();

  if (watchedMovies.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No watched movies yet</h2>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {watchedMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}
    </div>
  );
}

export default Watched;