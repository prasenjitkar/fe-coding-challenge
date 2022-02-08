import React from 'react';
import { render, screen } from '@testing-library/react';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

const mockData = { board: [["X", "X", "X"],[null, null, null],[null, null, null]], game: {currentPlayer: "X", winner: "X"}};

describe('game', () => {
test('renders Board without mock data', () => {
  const  { asFragment } = render(<Provider store={configureStore()}><Board /></Provider>);
  const boardText = screen.getByText(/Player/i);
  expect(boardText).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});

test('renders Board with winner state', () => {
  const  { asFragment } = render(<Provider store={configureStore(mockData)}><Board /></Provider>);
  const boardText = screen.getByText(/Winner/i);
  expect(boardText).toBeInTheDocument();
  expect(asFragment()).toMatchSnapshot();
});
});
