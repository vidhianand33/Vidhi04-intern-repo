import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider
import App from './App';
import { store } from './redux/store'; // Import the store from your Redux setup

test('renders hello Focus Bear text', () => {
  render(
    <Provider store={store}>  {/* Wrap App with Provider */}
      <App />
    </Provider>
  );
  
  // Since the 'HelloWorld' component in your App renders the text "Hello, Focus Bear!",
  // we can check for that exact string to be in the document.
  const helloText = screen.getByText(/Hello, Focus Bear!/i);
  
  // Ensure that the text "Hello, Focus Bear!" is rendered and is in the document.
  expect(helloText).toBeInTheDocument();
});
