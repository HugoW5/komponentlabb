function Favorites({ favorites, onSelect }) {
  return (
    <div className="favorites">
      <h3>Favorites</h3>
      {favorites.length === 0 && <p>No favorites yet</p>}
      {favorites.map((movie) => (
        <div key={movie.imdbID} onClick={() => onSelect(movie.imdbID)}>
          <p>
            {movie.Title} ({movie.Year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default Favorites;
