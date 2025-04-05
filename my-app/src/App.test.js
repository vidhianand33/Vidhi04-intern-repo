// Importing jest-dom for the custom matchers like toBeInTheDocument
import React from 'react'; 
import '@testing-library/jest-dom';  
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  
  // Since the 'HelloWorld' component in your App renders the text "Hello, Focus Bear!",
  // we can check for that exact string to be in the document.
  const helloText = screen.getByText(/Hello, Focus Bear!/i);
  
  // Ensure that the text "Hello, Focus Bear!" is rendered and is in the document.
  expect(helloText).toBeInTheDocument();
});
