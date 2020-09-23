import React from 'react';

import { Link } from 'react-router-dom';

type WordBoxAtasozleriItem = {
  atasozu: Atasozu,
};

const WordBoxAtasozleriItem = ({ atasozu }: WordBoxAtasozleriItem) => {
  return (
    <span className="block py-1 px-4">
      <Link
        className="no-underline hover:underline hover:text-primary-800"
        to={`/word?w=${atasozu.madde}`}
      >{atasozu.madde}</Link>
    </span>
  );
};

export default WordBoxAtasozleriItem;
