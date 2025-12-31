import React, { createContext, useState, useEffect, useContext } from 'react';

const StoreContext = createContext();

/**
 * Setting up a generic store context that can be used globally
 * Right now, it only has methods for favoriting feature.
 * Any future methods can be added here directly.
 *
 * This wraps our App so any components within it will have access to a common state.
 */
export function StoreProvider({ children }) {
  const storedFavorites = localStorage.getItem('favorites');
  const [favorites, setFavorites] = useState(storedFavorites ? JSON.parse(storedFavorites) : []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (food) => {
    setFavorites(prev => {
      const isFavorite = prev.some(f => f.fdcId === food.fdcId);
      if (isFavorite) {
        return prev.filter(f => f.fdcId !== food.fdcId);
      } else {
        return [...prev, food];
      }
    });
  };

  const isFavorite = (fdcId) => favorites.some(f => f.fdcId === fdcId);

  return (
    <StoreContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => useContext(StoreContext);