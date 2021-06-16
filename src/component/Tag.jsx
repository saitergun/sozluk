import { createElement } from 'react';
import classNames from 'classnames';

const Tag = ({
  children,
  classes,
  primary,
  secondary,
}) => createElement('span', {
  className: classNames('text-13/16', {
    'bg-primary-100 text-primary-900': primary,
    'bg-secondary-100 text-secondary-900': secondary,
    'bg-alternative-100 text-alternative-900': !secondary && !primary,
  }, classes),
  children,
});

export default Tag;
