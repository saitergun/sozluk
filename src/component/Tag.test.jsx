import React from 'react';
import { render, screen } from '@testing-library/react';

import Tag from './Tag';

test('renders children text', () => {
  render(<Tag>children text</Tag>);

  const text = screen.getByText(/children text/i);

  expect(text).toBeInTheDocument();
});

test('renders default class', () => {
  const { container } = render(<Tag>default class</Tag>);

  expect(container.firstChild).toHaveClass('tag');
});

test('renders primary prop classes correctly', () => {
  const { container } = render(<Tag primary>primary class</Tag>);

  expect(container.firstChild).toHaveClass('tag primary');
});

test('renders secondary prop classes correctly', () => {
  const { container } = render(<Tag secondary>secondary class</Tag>);

  expect(container.firstChild).toHaveClass('tag secondary');
});

test('render classes props classes correctly', () => {
  const { container } = render(<Tag classes="deneme-class">deneme-class</Tag>);

  screen.debug();

  expect(container.firstChild).toHaveClass('deneme-class');
});
