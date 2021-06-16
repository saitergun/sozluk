import React from 'react';
import classNames from 'classnames';

const IconButton = ({ children, small, onClick }) => {
  return (
    <button
      type="button"
      className={classNames([
        'flex items-center justify-center text-24/16 rounded-full',
        'transition duration-100 ease-in',
        'focus:outline-none',
        'focus:bg-black focus:bg-opacity-5',
        'active:bg-black active:bg-opacity-10',
        'hover:bg-black hover:bg-opacity-5',
      ], {
        'w-10 h-10': !small,
        'w-7 h-7': small,
      })}

      onClick={onClick}
    >{children}</button>
  );
};

export default IconButton;
