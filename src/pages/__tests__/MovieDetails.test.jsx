import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as api from '../../services/api';
import MovieDetails from '../MovieDetails';

// Mock the API
jest.mock('../../services/api');

// Mock useParams
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'tt1234567' }),
}));

describe('MovieDetails', () => {
  test('fetches and displays movie details', async () => {
    // Arrange: mock API response
    const mockMovie = {
      Title: 'The Test Movie',
      Year: '2023',
      Genre: 'Action',
      Plot: 'A thrilling test of component logic.',
      Poster: 'https://example.com/poster.jpg',
    };

    api.fetchMovieDetails.mockResolvedValue(mockMovie);

    // Act
    render(
      <MemoryRouter>
        <MovieDetails />
      </MemoryRouter>
    );

    // Assert loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for content to appear
    await waitFor(() => {
      expect(screen.getByText('The Test Movie')).toBeInTheDocument();
    });

    expect(screen.getByText(/2023 • Action/i)).toBeInTheDocument();
    expect(screen.getByText(/A thrilling test/i)).toBeInTheDocument();
    expect(screen.getByAltText(/the test movie poster/i)).toBeInTheDocument();
  });
});
