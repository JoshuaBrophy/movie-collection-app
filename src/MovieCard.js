import React from 'react';
import './App.css';

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div className="movie-card" onClick={() => onMovieClick(movie)}>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
    </div>
  );
};

export default MovieCard;
