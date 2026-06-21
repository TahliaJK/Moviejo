import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";


function MovieCard({movie}){
  const {
  isFav,
  addToFavorites,
  remove_FromFavs,
  isWatched,
  addToWatched,
  removeFromWatched
} = useMovieContext();
    const favorite = isFav(movie.id)
    const watched = isWatched(movie.id)
    
    function LikeMovie(e){
        e.preventDefault()
        if (favorite) remove_FromFavs(movie.id)
        else addToFavorites(movie)
    };

   function markWatched(e) {
    e.preventDefault()

    if (watched) {
        removeFromWatched(movie.id)
    } else {
        addToWatched(movie)
    }
}

    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={LikeMovie}>
                   ♥
                </button>

                <button

                className={`watched-btn ${
                watched ? "active" : ""
    }`}
    onClick={markWatched}
>
    👁
</button>

            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
};

export default MovieCard;
