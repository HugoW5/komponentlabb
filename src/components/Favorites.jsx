function Favorites({ favorites, onSelect, onRemove }) {
  return (
    <div className="favorites">
      <h3>Favorites</h3>
      {favorites.length === 0 && <p>No favorites yet</p>}
      {favorites.map((movie) => (
        <div key={movie.imdbID} className="favorite-item">
          <span onClick={() => onSelect(movie.imdbID)}>
            {movie.Title} ({movie.Year})
          </span>
          <button onClick={() => onRemove(movie.imdbID)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;