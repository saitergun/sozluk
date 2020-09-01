import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <button
      className="block w-full bg-secondary active:bg-secondary-400 text-secondary-800 text-sm font-lexend-deca leading-none focus:outline-none py-2 px-4"
      onClick={onClick}
    >{text}</button>
  );
};

Button.defaultProps = {
  text: null,
  onClick: null,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
