import '@testing-library/jest-dom';
import { schema } from './client/Components/CodeOutputButtons.jsx';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CodeOutput from './client/Components/CodeOutput.jsx';
import app from '../client/App.jsx';

test('show text when clicked', () => {
  const testMessage = 'Test Message';
  render(<div id="codebox"></div>);

  expect(screen.getAllByRole(/output/i)).toHaveTextContent('');
  fireEvent.click(screen.getByText(schema));

  expect(screen.getByRole(/output/i)).toHaveTextContent('Test Message');
});

test('renders page with github link', () => {
  render(<app />);
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});
