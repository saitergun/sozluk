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
    className={classNames('font-semibold text-16/16 rounded-sm focus:outline-none focus:z-1 focus:ring-2 ring-offset-2 py-1.5 px-4', {
      'bg-primary       active:bg-primary-600     ring-primary-600     text-white': primary,
      'bg-secondary-400 active:bg-secondary       ring-secondary-700   text-secondary-900': secondary,
      '                   active:bg-alternative-50  ring-alternative-400 text-alternative-900': !primary && !secondary,
    })}
    onClick={onClick}
    ref={ref}
  >
    {children}
  </button>
));

export default Button;
