import React from 'react';
import './App.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <p><strong>Release Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
    </div>
  );
};

export default MovieDetail;