import { render, screen } from '@testing-library/react';
import App from '../App';
import * as React from 'react'

let useEffectSpy, component

beforeEach(() => {
  useEffectSpy = jest.spyOn(React, 'useEffect')
  render(<App />);
});

it('renders learn react link', () => {
  const headerElement = screen.getByRole('button')
  expect(headerElement).toBeInTheDocument();
});

it('makes use of useEffect', () => {
  expect(useEffectSpy).toHaveBeenCalled()
});
