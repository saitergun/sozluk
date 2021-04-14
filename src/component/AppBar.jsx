import React from 'react';
import { useStartTyping } from 'react-use';

import IconButton from './IconButton';
import Icon from './Icon';
import Text from './Text';

const AppBar = ({ title, onClickBackButton, onClickSearchButton }) => {
  useStartTyping(() => {
    onClickSearchButton();
  });

  return (
    <span className="h-full flex items-center sm:max-w-lg mx-auto px-1">
      <IconButton onClick={onClickBackButton}>
        <Icon name="RiArrowLeftLine" />
      </IconButton>

      <span className="flex-1 flex items-center justify-center overflow-hidden px-4">
        <Text tag="h1" truncate bold large>{title}</Text>
      </span>

      <IconButton onClick={onClickSearchButton}>
        <Icon name="RiSearch2Line" />
      </IconButton>
    </span>
  );
};

export default AppBar;
