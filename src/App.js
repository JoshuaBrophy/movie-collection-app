// src/App.js

import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieDetail from './MovieDetail';
import './App.css';

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [activeTab, setActiveTab] = useState('search');

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTabChange = (tab) => {
    setSelectedMovie(null); // Clear selected movie when changing tabs
    setActiveTab(tab);
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      // Make an API call or fetch data based on the search term (e.g., from OMDB API)
      // For simplicity, we'll use a placeholder function here
      const fetchData = async () => {
        try {
          const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4d5f158f`);
          const data = await response.json();

          if (data.Search) {
            setSearchResults(data.Search);
          } else {
            setSearchResults([]);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div>
      <nav className="navbar">
        <div className="nav-logo">Movie App</div>
        <div className="nav-tabs">
          <div
            className={`nav-tab ${activeTab === 'search' ? 'active' : ''}`}
            onClick={() => handleTabChange('search')}
          >
            Search
          </div>
          <div
            className={`nav-tab ${activeTab === 'collection' ? 'active' : ''}`}
            onClick={() => handleTabChange('collection')}
          >
            My Collection
          </div>
          <div
            className={`nav-tab ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => handleTabChange('favorites')}
          >
            Favorites
          </div>
          <div
            className={`nav-tab ${activeTab === 'random' ? 'active' : ''}`}
            onClick={() => handleTabChange('random')}
          >
            Find a Random Film
          </div>
        </div>
      </nav>
      <div className="app-container">
        {activeTab === 'search' && (
          <div>
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 ? (
              <div className="movie-list">
                {searchResults.map((movie, index) => (
                  <MovieCard key={index} movie={movie} onMovieClick={handleMovieClick} />
                ))}
              </div>
            ) : (
              <p>No results found</p>
            )}
          </div>
        )}
        {selectedMovie && <MovieDetail movie={selectedMovie} />}
      </div>
    </div>
  );
};

export default App;
