import MovieCard from "./MovieCard"

function MovieList({ movies, onSelect }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
          <MovieCard
            Title={movie.Title}
            Poster={movie.Poster}
            Year={movie.Year}
          />
        </div>
      ))}
    </div>
  );
}

export default MovieList;