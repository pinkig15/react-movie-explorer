import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import MovieModal from '../MovieModal';

describe('MovieModal', () => {
  const mockMovie = {
    Title: 'Inception',
    Year: '2010',
    Genre: 'Action, Sci-Fi',
    Plot: 'A thief who steals corporate secrets through dream-sharing tech.',
    Director: 'Christopher Nolan',
    Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
    Poster: 'https://example.com/inception.jpg',
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockMovie),
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and displays movie details', async () => {
    render(<MovieModal imdbID="tt1375666" onClose={jest.fn()} />);

    // Initially, no content should be present
    expect(screen.queryByText(/Inception/i)).not.toBeInTheDocument();

    // Wait for movie data to load
    await waitFor(() => {
      expect(screen.getByText('Inception')).toBeInTheDocument();
    });

    expect(screen.getByText(/Action, Sci-Fi/i)).toBeInTheDocument();
    expect(screen.getByText(/Christopher Nolan/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Inception/i)).toBeInTheDocument();
  });

  test('calls onClose when ✖ button is clicked', async () => {
    const onCloseMock = jest.fn();

    render(<MovieModal imdbID="tt1375666" onClose={onCloseMock} />);

    await waitFor(() => {
      expect(screen.getByText('Inception')).toBeInTheDocument();
    });

    const closeButton = screen.getByText('✖');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
