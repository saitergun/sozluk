import React from 'react';
import classnames from 'classnames';

type WordsTab = {
  count: Number,
  selected: Number,
  select: (number: number) => void,
};

const WordsTab = ({ count, selected, select }: WordsTab) => {
  if (!count) {
    return null;
  }

  return (
    <nav className="flex bg-white shadow-sm px-4">
      {[...Array(count)].map((_, index) => {
        return (
          <button
            key={index}
            className={classnames([
              'flex-1 items-center justify-center text-center leading-none',
              'cursor-pointer',
              'rounded-none border-b-2',
              'py-4 px-2',
              'focus:outline-none',
            ], {
              'border-white': index !== selected,
              'border-primary text-primary cursor-default': index === selected,
            })}
            onClick={() => select(index)}
          >{index+1}. anlam</button>
        );
      })}
    </nav>
  );
};

export default WordsTab;
