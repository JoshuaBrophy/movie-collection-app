import React, { useState } from 'react';
import MovieCard from '../MovieCard';
import Sidebar from '../Sidebar';
import '../CSS/App.css';

const Collection = ({ collection, onMovieClick }) => {
  const [filteredCollection, setFilteredCollection] = useState(collection);

  const handleFilterChange = (genre) => {
    if (genre === '') {
      setFilteredCollection(collection);
    } else {
      const filteredMovies = collection.filter((movie) => movie.Genre.includes(genre));
      setFilteredCollection(filteredMovies);
    }
  };

  const handleSearch = (query) => {
    // Implement the logic to search for movies by actor/actress using IMDb API
    // You can make a new API request here and update the filteredCollection accordingly
    // For simplicity, let's assume the API returns filtered results based on the actor/actress query
    // Replace 'YOUR_ACTOR_API_KEY' with your actual IMDb actor API key
    const actorApiUrl = `http://www.omdbapi.com/?s=${query}&apikey=YOUR_ACTOR_API_KEY&type=movie`;
    
    fetch(actorApiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setFilteredCollection(data.Search);
        } else {
          setFilteredCollection([]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <div className="collection-page">
      <Sidebar collection={collection} onFilterChange={handleFilterChange} onSearch={handleSearch} />
      <div className="movie-list">
        {filteredCollection.length > 0 ? (
          filteredCollection.map((movie, index) => (
            <MovieCard key={index} movie={movie} onMovieClick={onMovieClick} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default Collection;