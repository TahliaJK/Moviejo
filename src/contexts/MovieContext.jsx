import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    const [watchedMovies, setWatchedMovies] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
    const storedWatched =
        localStorage.getItem("watchedMovies")

    if (storedWatched) {
        setWatchedMovies(JSON.parse(storedWatched))
    }
}, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    useEffect(() => {
    localStorage.setItem(
        "watchedMovies",
        JSON.stringify(watchedMovies)
    )
}, [watchedMovies])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const remove_FromFavs = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }
    
    const isFav = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const addToWatched = (movie) => {
    setWatchedMovies(prev => {
        if (
            prev.some(m => m.id === movie.id)
        ) {
            return prev
        }

        return [...prev, movie]
    })
}

const removeFromWatched = (movieId) => {
    setWatchedMovies(prev =>
        prev.filter(
            movie => movie.id !== movieId
        )
    )
}

const isWatched = (movieId) => {
    return watchedMovies.some(
        movie => movie.id === movieId
    )
}
    const value = {
    favorites,
    addToFavorites,
    remove_FromFavs,
    isFav,

    watchedMovies,
    addToWatched,
    removeFromWatched,
    isWatched,
} 

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}