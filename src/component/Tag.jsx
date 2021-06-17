import { createElement } from 'react';
import classNames from 'classnames';

const Tag = ({
  children,
  classes,
  primary,
  secondary,
}) => createElement('span', {
  className: classNames('tag', { primary, secondary }, classes),
  children,
});

export default Tag;
