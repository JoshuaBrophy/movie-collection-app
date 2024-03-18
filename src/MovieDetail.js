import React, { useState } from 'react';
import './CSS/App.css';

const MovieDetail = ({ movie, onAddToCollection, onRemoveFromCollection }) => {
  const [addToCollection, setAddToCollection] = useState(false);

  const handleCheckboxChange = () => {
    setAddToCollection(!addToCollection);

    // Call the appropriate function based on the checkbox state
    if (!addToCollection) {
      onAddToCollection(movie);
    } else {
      onRemoveFromCollection(movie);
    }
  };

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <h2>{movie.Title}</h2>
        <p><strong>Release Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
        <label>
          <input
            type="checkbox"
            checked={addToCollection}
            onChange={handleCheckboxChange}
          />
          Add to Collection
        </label>
      </div>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;