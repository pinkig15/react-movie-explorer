// src/utils/localStorage.js
const FAVORITES_KEY = 'favoriteMovies';

export const getFavorites = () => {
  const data = localStorage.getItem(FAVORITES_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = (movies) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(movies));
};

export const toggleFavorite = (movie) => {
  const favorites = getFavorites();
  const exists = favorites.find((m) => m.imdbID === movie.imdbID);

  if (exists) {
    const updated = favorites.filter((m) => m.imdbID !== movie.imdbID);
    saveFavorites(updated);
    return updated;
  } else {
    const updated = [...favorites, movie];
    saveFavorites(updated);
    return updated;
  }
};

export const isFavorite = (movieId) => {
  const favorites = getFavorites();
  return favorites.some((m) => m.imdbID === movieId);
};
