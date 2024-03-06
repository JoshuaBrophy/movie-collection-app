import React, { useState } from 'react';

const Sidebar = ({ collection, onFilterChange, onSearch }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    onFilterChange(genre);
  };

  const handleSearch = (query) => {
    onSearch(query);
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div>
        <h4>Genres</h4>
        <button onClick={() => handleGenreChange('Action')}>Action</button>
        <button onClick={() => handleGenreChange('Drama')}>Drama</button>
        {/* Add more genre buttons as needed */}
      </div>
      <div>
        <h4>Search by Actor/Actress</h4>
        <input
          type="text"
          placeholder="Enter actor/actress name"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Sidebar;
