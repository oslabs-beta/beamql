/**
 * @jest-environment jsdom
 */

import React from 'react';
import App from '../client/App.jsx';
import '@testing-library/dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import CodeOutputButtons, {
  Resolvers,
} from '../client/Components/CodeOutputButtons.jsx';
import UriEntry from '../client/Components/UriEntry.jsx';
import { Button } from '@material-ui/core';
import userEvent from '@testing-library/user-event';

xdescribe('testing CodeOutputButton functions', () => {
  test('onclick button changes render from true to false', function () {
    render(<CodeOutputButtons />);
    //screen.debug();
    //const { getByTestId } = render(<button id="selection" />);

    const btnIncrement = screen.getByText('Resolvers');
    // console.log(btnIncrement);
    userEvent.click(Button, 'btnIncrement');

    expect(screen.getByTestId('changeRender')).toHaveTextContent(false);
  });
});
