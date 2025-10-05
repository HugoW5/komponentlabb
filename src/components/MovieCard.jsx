function MovieCard({ title, poster, Year, onFavorite }) {
  const fallbackPoster = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png";

  return (
    <div className="movie-card">
      <img
        src={poster !== "N/A" ? poster : fallbackPoster}
        alt={`${title} poster`}
      />
      <div className="card-info">
        <h4>{title}</h4>
        <p>{Year}</p>
        {onFavorite && (
          <button onClick={onFavorite}>⭐</button>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
