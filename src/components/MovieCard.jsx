function MovieCard({ title, poster, Year }) {
  const fallbackPoster =
    "https://via.placeholder.com/300x445.png?text=No+Image";

  return (
    <div className="movie-card">
      <p className="card-title">{title}</p>
      <img
        src={poster !== "N/A" ? poster : fallbackPoster}
        alt={`${title} poster`}
      />
      <div className="footer-info">
        <p>Year: {Year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
