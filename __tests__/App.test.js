/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../client/App.jsx';
import '@testing-library/jest-dom';
import UriEntry from '../client/Components/UriEntry.jsx';
import userEvent from '@testing-library/user-event';
import CodeOutput from '../client/Components/CodeOutput.jsx';
import Diagram from '../client/Components/Diagram.jsx';
import { Button } from '@material-ui/core';
import { assertProperty } from '@babel/types';

describe('App Component', function () {
  test('should have Github Button', function () {
    render(<App />);
    expect(screen.getByText('Github')).toBeInTheDocument();
  });
  test('should have Sandbox Button', function () {
    render(<App />);
    expect(screen.getByText('Sandbox')).toBeInTheDocument();
  });
  test('should have a text field', function () {
    render(<App />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

describe('App Component', () => {
  test('renders renders text in URI textbox', function () {
    render(<App />);

    const inputNode = screen.getByRole('textbox');
    //expect(screen.queryByRole('textbox')).toBeNull();

    userEvent.type(inputNode, 'JavaScript');

    expect(screen.getByRole('textbox')).toHaveValue('JavaScript');
  });
});

// describe('Diagram Component', () => {
//   test('number of diagrams match the number of tables in users DB', () => {
//     render(<Diagram />);
//     fireEvent.click(screen.getByText('Submit'));

//     const reactFlowNode = screen.getByClass('');
//     //expect(screen.queryByRole('textbox')).toBeNull();

//     userEvent.type(inputNode, 'JavaScript');

//     expect(screen.getByRole('textbox')).toHaveValue('JavaScript');
//   });
// });

// describe('Input value', () => {
//   it('updates on change', () => {
//     const setSearch = jest.fn((value) => {});

//     const { queryByPlaceholderText } = render(<App setSearch={setSearch} />);

//     const searchInput = queryByPlaceholderText('Enter database URI');

//     fireEvent.change(searchInput, { target: { value: 'test' } });

//     expect(searchInput.value).toBe('test');
//   });
// });

// describe('App Component', function () {
//   test('shows text when schema clicked', () => {
//     render(<App />);
//     screen.debug();
//     // fireEvent.click(Button.getByText('Schema'));

//     // expect(screen.getByRole('codeOutput')).toHaveTextContent();
//     //expect(screen.getByRole('button')).toBeDisabled();
//   });
// });
