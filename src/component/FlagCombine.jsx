import React from 'react';

import origins from '../util/origins';

const FlagCombine = ({ text }) => {
  const origins2 = origins.filter((origin) => text.search(origin.nameLocale) > -1).reverse();

  return (
    <span className="inline-flex items-center justify-start -space-x-1">
      {origins2.map((origin) => {
        return (
          <img
            className="w-6 h-6 rounded-xl ring-2 ring-white"
            key={origin.code}
            src={origin.flag}
            alt={origin.nameLocale}
          />
        );
      })}
    </span>
  );
};

export default FlagCombine;
