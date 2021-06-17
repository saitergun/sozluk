import React from 'react';
import classNames from 'classnames';

const IconButton = ({ children, small, onClick }) => (
  <button
    type="button"
    className={classNames('icon-button', { small })}
    onClick={onClick}
  >
    {children}
  </button>
);

export default IconButton;
