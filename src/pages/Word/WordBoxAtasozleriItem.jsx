import React from 'react';

import { Link } from 'react-router-dom';

const WordBoxAtasozleriItem = ({ atasozu }) => {
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
