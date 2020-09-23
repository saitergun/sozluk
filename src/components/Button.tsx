import React from 'react';

type Button = {
  text: String,
  onClick: VoidFunction,
};

const Button = ({ text, onClick }: Button) => {
  return (
    <button
      className="block w-full bg-secondary active:bg-secondary-400 text-secondary-800 text-sm font-lexend-deca leading-none focus:outline-none py-2 px-4"
      onClick={onClick}
    >{text}</button>
  );
};

export default Button;
