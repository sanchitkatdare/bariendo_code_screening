import React, { useState } from 'react';
import './FoodCard.css';

function FoodCard({ food }) {
  const [expanded, setExpanded] = useState(false);

  // Extract key nutrients for quick view
  const getKeyNutrients = () => {
    if (!food.nutrients) return null;

    const keyNutrientNames = ['Energy', 'Protein', 'Total lipid (fat)', 'Carbohydrate, by difference'];
    return food.nutrients.filter(n => keyNutrientNames.includes(n.name));
  };

  const keyNutrients = getKeyNutrients();

  return (
    <div className="food-card">
      <div className="food-card-header">
        <h3 className="food-name">{food.description}</h3>
        {food.brandOwner && (
          <p className="food-brand">{food.brandOwner}</p>
        )}
      </div>

      {food.servingSize && (
        <p className="serving-size">
          Serving: {food.servingSize} {food.servingSizeUnit}
        </p>
      )}

      {keyNutrients && keyNutrients.length > 0 && (
        <div className="key-nutrients">
          {keyNutrients.map((nutrient, index) => (
            <div key={index} className="nutrient-item">
              <span className="nutrient-name">
                {nutrient.name === 'Total lipid (fat)' ? 'Fat' : nutrient.name}:
              </span>
              <span className="nutrient-value">
                {nutrient.amount?.toFixed(1)} {nutrient.unit}
              </span>
            </div>
          ))}
        </div>
      )}

      <button
        className="expand-button"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </button>

      {expanded && (
        <div className="expanded-content">
          {food.ingredients && (
            <div className="ingredients">
              <h4>Ingredients:</h4>
              <p>{food.ingredients}</p>
            </div>
          )}

          {food.nutrients && food.nutrients.length > 0 && (
            <div className="all-nutrients">
              <h4>All Nutrients:</h4>
              <div className="nutrient-list">
                {food.nutrients.map((nutrient, index) => (
                  <div key={index} className="nutrient-row">
                    <span>{nutrient.name}</span>
                    <span>{nutrient.amount?.toFixed(2)} {nutrient.unit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FoodCard;
