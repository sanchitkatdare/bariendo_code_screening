import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FoodList from '../components/FoodList';
import './SearchPage.css';

function SearchPage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await fetch(`/api/foods/search?query=${encodeURIComponent(query)}`);

      if (!response.ok) {
        throw new Error('Failed to fetch foods');
      }

      const data = await response.json();
      setFoods(data.foods || []);
    } catch (err) {
      setError(err.message);
      setFoods([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page">
      <div className="search-header">
        <h1>Search Foods</h1>
        <p>Search the USDA database for nutritional information</p>
      </div>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {error && (
        <div className="error-message">
          <p>Error: {error}</p>
          <p className="error-hint">
            Make sure the backend server is running on port 3001
          </p>
        </div>
      )}

      {loading && (
        <div className="loading">
          <p>Searching...</p>
        </div>
      )}

      {!loading && hasSearched && foods.length === 0 && !error && (
        <div className="no-results">
          <p>No foods found. Try a different search term.</p>
        </div>
      )}

      {!loading && foods.length > 0 && (
        <FoodList foods={foods} />
      )}
    </div>
  );
}

export default SearchPage;
