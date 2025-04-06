// src/ToggleButton.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';  // for .toBeInTheDocument() and other matchers
import ToggleButton from './ToggleButton';

test('toggles button text between ON and OFF', () => {
  render(<ToggleButton />);

  // Get the button
  const button = screen.getByRole('button');

  // Check that the initial text is "OFF"
  expect(button).toHaveTextContent('OFF');

  // Simulate a click to toggle the state
  fireEvent.click(button);

  // After the first click, the text should change to "ON"
  expect(button).toHaveTextContent('ON');

  // Simulate another click to toggle the state back
  fireEvent.click(button);

  // After the second click, the text should change back to "OFF"
  expect(button).toHaveTextContent('OFF');
});
