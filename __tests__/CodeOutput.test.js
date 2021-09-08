import '@testing-library/jest-dom';
import { schema } from './client/Components/CodeOutputButtons.jsx';
import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CodeOutput from './client/Components/CodeOutput.jsx';

test('show text when clicked', () => {
  const testMessage = 'Test Message';
  render(<div>{CodeOutput}</div>);

  // query* functions will return the element or null if it cannot be found
  // get* functions will return the element or throw an error if it cannot be found
  expect(screen.getAllByRole(/output/i)).toHave('');
  fireEvent.click(screen.getByText(schema));
  // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
  //fireEvent.click(screen.getByLabelText(/schema/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  expect(screen.getByRole(/output/i)).toHave('Test Message');
});
