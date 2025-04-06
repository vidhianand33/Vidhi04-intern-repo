import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserData from './UserData';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          name: 'John Doe',
          email: 'john@example.com',
        }),
    })
  );
});

afterEach(() => {
  jest.clearAllMocks(); // reset fetch between tests
});

test('fetches and displays user data', async () => {
  render(<UserData />);

  // Wait for user name to appear in the document
  await waitFor(() => expect(screen.getByText(/John Doe/i)).toBeInTheDocument());
  expect(screen.getByText(/john@example.com/i)).toBeInTheDocument();
});
