import React from 'react';
import classNames from 'classnames';

import Button from '../../component/Button';

const Tab = ({ count, selectedIndex, onSelectIndex }) => (
  <nav
    className={classNames('grid gap-1 rounded-sm bg-white py-1 px-4', {
      'grid-cols-2': count === 2,
      'grid-cols-3': count === 3,
      'grid-cols-4': count === 4,
    })}
  >
    {[...Array(count)].map((_, index) => {
      const key = index;

      return (
        <Button
          key={key}
          onClick={() => onSelectIndex(index)}
          secondary={index === selectedIndex}
        >
          {`${index + 1}. anlam`}
        </Button>
      );
    })}
  </nav>
);

export default Tab;
