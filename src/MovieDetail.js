import React, { useState } from 'react';
import './App.css';

const MovieDetail = ({ movie }) => {
  const [addToCollection, setAddToCollection] = useState(false);

  const handleCheckboxChange = () => {
    setAddToCollection(!addToCollection);
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