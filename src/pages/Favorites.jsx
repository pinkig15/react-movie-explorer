// src/pages/Favorites.jsx
import React, { useEffect, useState } from 'react';
import { getFavorites } from '../utils/localStorage';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
