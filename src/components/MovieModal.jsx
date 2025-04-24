// src/components/MovieModal.jsx
import React, { useEffect, useState } from 'react';


const API_KEY = process.env.OMDB_API_KEY;

const MovieModal = ({ imdbID, onClose }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
      const data = await res.json();
      setMovie(data);
    };
    fetchDetails();
  }, [imdbID]);

  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg">
          ✖
        </button>
        <div className="flex flex-col md:flex-row gap-4">
          <img src={movie.Poster} alt={movie.Title} className="w-40 h-auto" />
          <div>
            <h2 className="text-2xl font-bold">{movie.Title}</h2>
            <p><strong>Year:</strong> {movie.Year}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
