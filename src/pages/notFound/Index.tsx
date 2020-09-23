import React from 'react';

import { IconEmoji } from '../../components/Icon';

const PageNotFound = () => {
  return (
    <span className="flex flex-col items-center justify-center text-center sm:max-w-lg mx-auto p-8 my-4">
      <span className="block w-16 h-16"><IconEmoji frown={true} /></span>

      <p className="text-xl mt-4">aradığın şey burada yok</p>
    </span>
  );
};

export default PageNotFound;
