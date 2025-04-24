import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../services/api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded shadow max-w-3xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
          alt={`${movie.Title} Poster`}
          className="w-full md:w-1/3 rounded"
        />
        <div>
          <h2 className="text-2xl font-bold">{movie.Title}</h2>
          <p className="text-gray-700 mb-2">{movie.Year} • {movie.Genre}</p>
          <p className="text-sm">{movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
