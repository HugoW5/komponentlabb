// components/MovieDetails.jsx
import { useEffect, useState } from "react";

function MovieDetails({ imdbID, onBack, onAddFavorite }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${imdbID}&plot=full`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovie();
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <button onClick={onBack}>⬅ Back</button>
      <h2>{movie.Title}</h2>
      <p><b>Year:</b> {movie.Year}</p>
      <p><b>Director:</b> {movie.Director}</p>
      <p><b>Plot:</b> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
      <button onClick={() => onAddFavorite(movie)}>❤️ Add to favorites</button>
    </div>
  );
}

export default MovieDetails;
