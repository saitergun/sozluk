import React, { forwardRef } from 'react';
import classNames from 'classnames';

const Button = forwardRef(({
  children,
  primary,
  secondary,
  onClick,
}, ref) => (
  <button
    type="button"
    className={classNames('button', { primary, secondary })}
    onClick={onClick}
    ref={ref}
  >
    {children}
  </button>
));

export default Button;
