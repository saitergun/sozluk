import React from 'react';
import classNames from 'classnames';

const Card = ({ children }) => {
  return (
    <div className="w-full sm:rounded-sm border-t border-b sm:border bg-white">
      {children}
    </div>
  );
};

Card.Header = ({ children }) => {
  return (
    <div className="border-b py-3 px-4">{children}</div>
  );
};

Card.Body = ({ children, noPad }) => {
  return (
    <div
      className={classNames({
        'py-3 px-4': !noPad,
      })}
    >{children}</div>
  );
};

export default Card;
