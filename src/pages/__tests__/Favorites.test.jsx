import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from '../Favorites';

describe('Favorites Page', () => {
  test('heading available', () => {
    render(<Favorites />);
    
    const btn = screen.getByRole('heading', {level: 1});
    expect(btn).toHaveTextContent('Favorite Movies');
  });
});
