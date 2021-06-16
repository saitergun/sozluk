import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const List = forwardRef(({ children }, ref) => (
  <div className="w-full flex flex-col divide-y" ref={ref}>
    {children}
  </div>
));

List.Item = ({
  children,
  justifyStart,
  justifyCenter,
  justifyBetween,
  compact,
  to,
  onFocusCapture,
}) => {
  const className = classNames('px-4', {
    'hover:bg-primary-50 active:bg-primary-100 cursor-pointer': to,
    'focus:outline-none focus:bg-primary-50 focus:ring-2 ring-inset ring-primary-400 ring-offset-0 ring-offset-white': to,
    'flex items-center justify-start gap-3': justifyStart,
    'flex items-center justify-between gap-3': justifyBetween,
    'flex items-center justify-center gap-3': justifyCenter,
    'py-2.5': !compact,
    'py-1': compact,
  });

  if (to) {
    return (
      <Link
        to={to}
        className={className}
        onFocusCapture={onFocusCapture}
      >
        {children}
      </Link>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default List;
