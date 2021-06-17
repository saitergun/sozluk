import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

test('renders children text', () => {
  render(<Button>children text</Button>);

  const text = screen.getByText(/children text/i);

  expect(text).toBeInTheDocument();
});

test('renders default class', () => {
  const { container } = render(<Button>default class</Button>);

  expect(container.firstChild).toHaveClass('button');
});

test('renders primary prop classes correctly', () => {
  const { container } = render(<Button primary>primary class</Button>);

  expect(container.firstChild).toHaveClass('button primary');
});

test('renders secondary prop classes correctly', () => {
  const { container } = render(<Button secondary>secondary class</Button>);

  expect(container.firstChild).toHaveClass('button secondary');
});

test('onClick event works correctly', () => {
  let sampiyon = '';

  render(<Button onClick={() => { sampiyon = 'galatasaray'; }}>button text</Button>);

  expect(sampiyon).toEqual('');

  userEvent.click(screen.getByRole('button'));

  expect(sampiyon).toEqual('galatasaray');
});
