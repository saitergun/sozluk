import React from 'react';

type WordBoxInfo = {
  lisan: String,
  telaffuz: String|null,
};

const WordBoxInfo = ({ lisan, telaffuz }: WordBoxInfo) => {
  if (lisan === null && telaffuz === null) {
    return null;
  }

  return (
    <section className="bg-white shadow-sm mt-4 divide-y divide-gray-200">
      {lisan &&
        <span className="flex items-center justify-between py-2 px-4">
          <span>köken</span>
          <span>{lisan}</span>
        </span>
      }

      {telaffuz &&
        <span className="flex items-center justify-between py-2 px-4">
          <span>telaffuz</span>
          <span>{telaffuz}</span>
        </span>
      }
    </section>
  );
};

export default WordBoxInfo;
