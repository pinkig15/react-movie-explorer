// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';


const API_KEY = process.env.OMDB_API_KEY;

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    const savedSearch = localStorage.getItem('searchText');
    if (savedSearch) {
      setSearchText(savedSearch);
      fetchMovies(savedSearch);
    }
  }, []);

  const handleChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    localStorage.setItem('searchText', text);
  };

  const fetchMovies = async (query) => {
    if (!query) return;
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    setResults(data.Search || []);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchText);
  };

  const handleOpenModal = (imdbID) => setSelectedMovieId(imdbID);
  const handleCloseModal = () => setSelectedMovieId(null);

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchText}
          onChange={handleChange}
          className="border p-2 rounded w-full max-w-md"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
        {results.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} onClick={handleOpenModal} />
        ))}
      </div>

      {selectedMovieId && (
        <MovieModal imdbID={selectedMovieId} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Home;
