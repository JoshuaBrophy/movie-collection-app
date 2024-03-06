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
    setSelectedMovie(null);
    setActiveTab(tab);
  };

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=4d5f158f&type=movie`);
          const data = await response.json();

          if (data.Search) {
            const detailedResults = await Promise.all(
              data.Search.map(async (movie) => {
                const detailResponse = await fetch(`http://www.omdbapi.com/?i=${movie.imdbID}&apikey=4d5f158f&plot=full`);
                const detailData = await detailResponse.json();
                return detailData;
              })
            );
            setSearchResults(detailedResults);
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
          {/* Add other tabs as needed */}
        </div>
      </nav>
      <div className="app-container">
        {selectedMovie && (
          <MovieDetail movie={selectedMovie} />
        )}
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
      </div>
    </div>
  );
};

export default App;