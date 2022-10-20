import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders', () => {
    const { getByText } = render(<App />);
    expect(getByText('Vite + React + TypeScript')).toBeTruthy();
  });
});
