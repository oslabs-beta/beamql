import React from 'react';
import '@testing-library/dom';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import CodeOutputButtons from './client/Components/CodeOutputButtons';

// test('CodeOutput', () => {
//   expect(CodeOutput()).toBe();
// });

test('loads and displays Buttons', async () => {
  render(<CodeOutputButtons/>);

  fireEvent.click(screen.getByText('Schema'));

  await waitFor(() => screen.getBytext('heading'));

  expect(screen.getByRole('heading')).toHaveTextContent('Schema');
  expect(screen.getByRole('button')).toBeDisabled();
});

// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );
// });
