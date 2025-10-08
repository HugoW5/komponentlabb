import Search from "./Search";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";
import Favorites from "./Favorites";
import MovieDetails from "./MovieDetails";
import { useState } from "react";

function Tutorial() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const dummyMovies = [
    {
      imdbID: "tt1375666",
      Title: "Inception",
      Year: "2010",
      Poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
    }
  ];

  const dummyFavorites = [
    {
      imdbID: "tt0468569",
      Title: "The Dark Knight",
      Year: "2008",
      Poster: "https://m.media-amazon.com/images/I/51k0qa6qNWL._AC_.jpg",
    },
  ];

  return (
    <div className="tutorial">
      <h2>Komponentbibliotek – Tutorial</h2>

      <section>
        <h3>Search</h3>
        <p>En komponent som används för att söka efter filmer.</p>
        <pre>{`<Search onSearch={setMovies} />`}</pre>
        <Search onSearch={() => {}} />
      </section>

      <section>
        <h3>MovieCard</h3>
        <p>Visar titel, år och bild för en film.</p>
        <pre>{`<MovieCard title="Inception" poster="..." Year="2010" />`}</pre>
        <MovieCard title="Inception" Poster="https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg" Year="2010" />
      </section>

      <section>
        <h3>MovieList</h3>
        <p>Renderar en lista med FilmCard-komponenter.</p>
        <pre>{`<MovieList movies={dummyMovies} onSelect={() => {}} onAddFavorite={() => {}} />`}</pre>
        <MovieList movies={dummyMovies} onSelect={() => {}} onAddFavorite={() => {}} />
      </section>

      <section>
        <h3>MovieDetails</h3>
        <p>Visar detaljerad information om en film (dummy-exempel).</p>
        <pre>{`<MovieDetails imdbID="tt1375666" onBack={() => {}} onAddFavorite={() => {}} />`}</pre>
        {selectedMovie ? (
          <MovieDetails
            imdbID={selectedMovie}
            onBack={() => setSelectedMovie(null)}
            onAddFavorite={() => {}}
          />
        ) : (
          <button onClick={() => setSelectedMovie("tt1375666")}>
            Visa detaljer för Inception
          </button>
        )}
      </section>

      <section>
        <h3>Favorites</h3>
        <p>Visar en lista med användarens favoritfilmer.</p>
        <pre>{`<Favorites favorites={dummyFavorites} onSelect={() => {}} onRemove={() => {}} />`}</pre>
        <Favorites
          favorites={dummyFavorites}
          onSelect={() => {}}
          onRemove={() => {}}
        />
      </section>
    </div>
  );
}

export default Tutorial;
