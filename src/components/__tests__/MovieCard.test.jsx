// src/components/__tests__/MovieCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard';

const movie = {
  Title: 'The Matrix',
  Year: '1999',
  Poster: 'https://example.com/poster.jpg',
  imdbID: 'tt0133093',
};

test('renders movie title and year', () => {
  render(<MovieCard movie={movie} onClick={() => {}} />);
  expect(screen.getByText('The Matrix')).toBeInTheDocument();
  expect(screen.getByText('1999')).toBeInTheDocument();
});

test('displays poster image', () => {
  render(<MovieCard movie={movie} onClick={() => {}} />);
  const image = screen.getByAltText('The Matrix');
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', movie.Poster);
});
