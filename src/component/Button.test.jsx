/* eslint-disable max-len */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

const defaultClasses = 'font-semibold text-16/16 rounded-sm focus:outline-none focus:z-1 focus:ring-2 ring-offset-2 py-1.5 px-4';

test('renders children text', () => {
  render(<Button>children text</Button>);

  const text = screen.getByText(/children text/i);

  expect(text).toBeInTheDocument();
});

test('renders default classes', () => {
  const { container } = render(<Button>default class</Button>);

  expect(container.firstChild).toHaveClass(`${defaultClasses} active:bg-alternative-50 ring-alternative-400 text-alternative-900`);
});

test('renders primary prop classes correctly', () => {
  const { container } = render(<Button primary>primary class</Button>);

  expect(container.firstChild).toHaveClass(`${defaultClasses} bg-primary active:bg-primary-600 ring-primary-600 text-white`);
});

test('renders secondary prop classes correctly', () => {
  const { container } = render(<Button secondary>secondary class</Button>);

  expect(container.firstChild).toHaveClass(`${defaultClasses} bg-secondary-400 active:bg-secondary ring-secondary-700 text-secondary-900`);
});

test('onClick event works correctly', () => {
  let sampiyon = '';

  render(<Button onClick={() => { sampiyon = 'galatasaray'; }}>button text</Button>);

  expect(sampiyon).toEqual('');

  userEvent.click(screen.getByRole('button'));

  expect(sampiyon).toEqual('galatasaray');
});
