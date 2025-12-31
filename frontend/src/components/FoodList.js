import React from 'react';
import FoodCard from './FoodCard';
import './FoodList.css';

function FoodList({ foods, title="Results" }) {
  return (
    <div className="food-list">
      <div className="results-header">
        <h2>{title} ({foods.length})</h2>
      </div>
      <div className="food-grid">
        {foods.map((food) => (
          <FoodCard key={food.fdcId} food={food} />
        ))}
      </div>
    </div>
  );
}

export default FoodList;
