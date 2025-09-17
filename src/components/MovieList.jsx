import MovieCard from "./MovieCard"

function MovieList({ movies, onSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
          <MovieCard
            title={movie.Title}
            poster={movie.Poster}
            Year={movie.Year}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;