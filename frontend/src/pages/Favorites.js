import FoodList from "../components/FoodList"
import { useStore } from "../context/StoreContext";

/**
 * Since we do not want to make excessive API calls,
 * the entire 'food' object is stored in localStorage for each favorite,
 * so that we do not need to make a request by food fdcId.
 *
 * Ideally, we should also match it with a backend cache (like Redis) per user.
 * There isn't any PII in the 'food' object response.
 */

function Favorites() {
  const { favorites: storedFavorites } = useStore()

  if (storedFavorites.length === 0) {
    // If we know what to search for, we can use the /search API call
    // The /search endpoint works for food name as well as food fdcId, among other attributes
    // else we can reach out to our server if we are storing there.
    console.log('fetch from backend')
  }
  const favorites = storedFavorites

  return <FoodList foods={favorites} title="Favorites" />
}

export default Favorites;
