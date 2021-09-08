import '@testing-library/jest-dom';

import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Navigation from './client/Components/Navigation.jsx';

test('loads and displays Buttons', async () => {
  render(<Navigation />);

  screen.debug();

  //   fireEvent.click(screen.getByText('Team'));

  //   await waitFor(() => screen.getByRole('heading'));

  //   //expect(screen.getByRole('heading')).toHaveTextContent('Schema');
  //   expect(screen.getByRole('button')).toBeDisabled();
});
