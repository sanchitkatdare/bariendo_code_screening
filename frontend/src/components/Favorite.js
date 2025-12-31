import React from 'react'
import './Favorite.css'
import { useStore } from '../context/StoreContext';

function Favorite({ food }) {
  const { isFavorite, toggleFavorite } = useStore();
  const favorited = isFavorite(food.fdcId);

  const toggle = (e) => {
    e.stopPropagation();
    toggleFavorite(food);
  };

  return (
    <div
      className="food-card-starrer"
      onClick={toggle}
    >
      {favorited ? '★' : '☆'}
    </div>
  )
}

export default Favorite