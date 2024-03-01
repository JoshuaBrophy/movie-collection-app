import React, { useState } from 'react';
import UserForm from './UserForm';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleUserSubmit = (userData) => {
    setUser(userData);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const movieList = [
    { Title: 'Movie 1', Poster: 'url-to-poster-1' },
    { Title: 'Movie 2', Poster: 'url-to-poster-2' },
    // Add more movies as needed
  ];

  return (
    <div className="app-container">
      <UserForm onUserSubmit={handleUserSubmit} />
      
      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} />
      ) : (
        <div className="movie-list">
          {movieList.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;