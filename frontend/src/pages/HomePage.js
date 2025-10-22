import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Nutrition & Diet Tool</h1>
        <p className="subtitle">
          Discover nutritional information for thousands of foods
        </p>
        <p className="description">
          Search for foods, explore their nutritional profiles, and make informed
          dietary choices.
        </p>
        <Link to="/search" className="cta-button">
          Start Searching
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>🔍 Search Foods</h3>
          <p>Find nutritional information for branded foods from the USDA database</p>
        </div>
        <div className="feature-card">
          <h3>📊 View Nutrition Facts</h3>
          <p>See detailed breakdowns of calories, proteins, fats, and carbohydrates</p>
        </div>
        <div className="feature-card">
          <h3>✨ More Features Coming</h3>
          <p>This is a starting point - let's build something great together!</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
