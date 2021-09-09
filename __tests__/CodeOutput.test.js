/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import CodeOutputButtons, {
  schema,
} from '../client/Components/CodeOutputButtons.jsx';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CodeOutput from '../client/Components/CodeOutput.jsx';
import App from '../client/App.jsx';
import userEvent from '@testing-library/user-event';
import { Button, TextField } from '@material-ui/core';
import { submit } from '../client/Components/UriEntry.jsx';

xtest('renders page with github link', () => {
  render(<CodeOutputButtons />);
  const linkElement = screen.getByText(/github/i);
  expect(linkElement).toBeInTheDocument();
});
// test('show text when clicked', () => {
//   const testMessage = 'Test Message';
//   render(<div>{CodeOutput}</div>);

//   // query* functions will return the element or null if it cannot be found
//   // get* functions will return the element or throw an error if it cannot be found
//   expect(screen.getAllByRole(/output/i)).toHave('');
//   fireEvent.click(screen.getByText(schema));
//   // the queries can accept a regex to make your selectors more resilient to content tweaks and changes.
//   //fireEvent.click(screen.getByLabelText(/schema/i));

//   // .toBeInTheDocument() is an assertion that comes from jest-dom
//   // otherwise you could use .toBeDefined()
//   expect(screen.getByRole(/output/i)).toHave('Test Message');
// });

xdescribe('App Component', function () {
  test('shows text when schema clicked', () => {
    render(<CodeOutput />);

    // const inputNode = screen.getByRole('textbox');
    // userEvent.type('textbox', 'JavaScript');
    // fireEvent.click(Button.getByText('submit'));

    // // await waitFor(() => screen.getByRole('codeOutput'));

    // expect(screen.getByRole('codeOutput')).toHaveTextContent(' ');
    // expect(screen.getByRole('button')).toBeDisabled();
  });
});
