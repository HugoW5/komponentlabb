import MovieCard from "./MovieCard";

function MovieList({ movies, onSelect, onAddFavorite }) {
  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
          <MovieCard
            title={movie.Title}
            poster={movie.Poster}
            Year={movie.Year}
            onFavorite={() => onAddFavorite(movie)}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
