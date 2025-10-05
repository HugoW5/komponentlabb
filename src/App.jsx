import { useState, useEffect } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Favorites from "./components/Favorites";
import Tutorial from "./components/Tutorial";

import "./app.css";

function App() {
  const [view, setView] = useState("home");
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

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((f) => f.imdbID !== id));
  };

  return (
    <div className="app-container">
      <aside>
        <h1>Movie Explorer</h1>
        <nav>
          <button onClick={() => setView("home")}>Home</button>
          <button onClick={() => setView("tutorial")}>Tutorial</button>
        </nav>
        <Favorites
          favorites={favorites}
          onSelect={setSelectedMovie}
          onRemove={handleRemoveFavorite}
        />
      </aside>

      <main>
        {view === "tutorial" ? (
          <Tutorial />
        ) : (
          <>
            <Search onSearch={setMovies} />

            {!selectedMovie ? (
              <MovieList
                movies={movies}
                onSelect={setSelectedMovie}
                onAddFavorite={handleAddFavorite}
              />
            ) : (
              <MovieDetails
                imdbID={selectedMovie}
                onBack={() => setSelectedMovie(null)}
                onAddFavorite={handleAddFavorite}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
