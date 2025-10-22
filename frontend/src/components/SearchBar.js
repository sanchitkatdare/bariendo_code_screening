import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for foods (e.g., 'apple', 'chicken breast', 'yogurt')..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
        className="search-input"
      />
      <button type="submit" disabled={loading || !query.trim()} className="search-button">
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;
