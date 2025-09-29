import { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import './app.css'

function App() {
   const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddFavorite = (movie) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  return (
    <div>
      <h1>🎬 Movie Explorer</h1>
      <Search onSearch={setMovies} />
      
      <Favorites favorites={favorites} onSelect={setSelectedMovie} />

      {!selectedMovie ? (
        <MovieList movies={movies} onSelect={setSelectedMovie} />
      ) : (
        <MovieDetails
          imdbID={selectedMovie}
          onBack={() => setSelectedMovie(null)}
          onAddFavorite={handleAddFavorite}
        />
      )}
    </div>
  );
}

export default App;
