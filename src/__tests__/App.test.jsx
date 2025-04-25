// src/__tests__/App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App Navigation', () => {
  test('renders navigation links', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
  });


  test('navigates to Home page on link click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Click the Favorites link
    const favLink = screen.getByText('Home');
    fireEvent.click(favLink);

    // Check for content unique to the /favorites route
    expect(screen.getByRole('button')).toHaveTextContent('Search');
  });

  test('navigates to Favorites page on link click', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Click the Favorites link
    const favLink = screen.getByText('Favorites');
    fireEvent.click(favLink);

    // Check for content unique to the /favorites route
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/favorite movies/i);
  });
});
