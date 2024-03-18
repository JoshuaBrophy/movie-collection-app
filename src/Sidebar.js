import React from 'react';

const Sidebar = ({ collection, onFilterChange, onSearch }) => {
  const handleGenreChange = (genre) => {
    onFilterChange(genre);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  // List of all genres
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western"
  ];

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <div>
        <h4>Genres</h4>
        {genres.map((genre, index) => (
          <button key={index} onClick={() => handleGenreChange(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div>
        <h4>Search by Actor/Actress</h4>
        <input
          type="text"
          placeholder="Enter actor/actress name"
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

export default Sidebar;
