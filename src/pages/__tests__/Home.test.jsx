import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home Page', () => {
  test('Search button', () => {
    render(<Home />);
    
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
