import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import IconButton from './IconButton';

test('renders children text', () => {
  render(<IconButton>children text</IconButton>);

  expect(screen.getByText(/children text/i)).toBeInTheDocument();
});

test('renders default class', () => {
  const { container } = render(<IconButton>default class</IconButton>);

  expect(container.firstChild).toHaveClass('icon-button');
});

test('renders small prop class correctly', () => {
  const { container } = render(<IconButton small>small class</IconButton>);

  expect(container.firstChild).toHaveClass('icon-button small');
});

test('onClick event works correctly', () => {
  let sampiyon = '';

  render(<IconButton onClick={() => { sampiyon = 'galatasaray'; }}>button text</IconButton>);

  expect(sampiyon).toEqual('');

  userEvent.click(screen.getByRole('button'));

  expect(sampiyon).toEqual('galatasaray');
});
