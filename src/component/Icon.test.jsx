import React from 'react';
import { render } from '@testing-library/react';

import Icon from './Icon';

test('renders svg correctly', () => {
  const { container } = render(<Icon name="RiSearch2Line" />);

  expect(container.firstChild.nodeName).toBe('svg');
});

test('renders svg wrongly', () => {
  const { container } = render(<Icon />);

  expect(container.firstChild).toBe(null);
});

test('renders primary prop classes correctly', () => {
  const { container } = render(<Icon name="RiSearch2Line" primary />);

  expect(container.firstChild).toHaveClass('text-primary');
});

test('renders secondary prop classes correctly', () => {
  const { container } = render(<Icon name="RiSearch2Line" secondary />);

  expect(container.firstChild).toHaveClass('text-secondary');
});

test('renders white prop classes correctly', () => {
  const { container } = render(<Icon name="RiSearch2Line" white />);

  expect(container.firstChild).toHaveClass('text-white');
});

test('render classes props classes correctly', () => {
  const { container } = render(<Icon name="RiSearch2Line" className="deneme-class">deneme-class</Icon>);

  expect(container.firstChild).toHaveClass('deneme-class');
});
