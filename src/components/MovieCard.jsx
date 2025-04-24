// src/components/MovieCard.jsx
import React, { useState, useEffect } from 'react';
import { toggleFavorite, isFavorite } from '../utils/localStorage';

const MovieCard = ({ movie, onClick }) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(isFavorite(movie.imdbID));
  }, [movie.imdbID]);

  const handleFavorite = () => {
    toggleFavorite(movie);
    setFavorite(!favorite);
  };

  return (
    <div className="rounded shadow overflow-hidden cursor-pointer group p-4"
      >
      <div className="relative">
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-bold" onClick={() => onClick(movie.imdbID)}>View details</span>
        </div>
      </div>
      <h2 className="text-lg font-semibold">{movie.Title}</h2>
      <p className="text-sm">{movie.Year}</p>
      <button
        onClick={handleFavorite}
        className="rounded bg-white-500 text-white hover:bg-white-600"
        // className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:scale-110 transition"
        title={favorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorite ? '💖' : '🤍'}
      </button>

      
    </div>
  );
};

export default MovieCard;
