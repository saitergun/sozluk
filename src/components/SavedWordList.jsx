import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { IconX } from './Icon';

const SavedWordList = ({ words, remove }) => {
  return (
    <span className="block bg-white shadow-sm sm:rounded">
      <ul className="flex flex-col">
        {words.map((word, index) => {
          return (
            <li
              key={index}
              className={classnames('flex items-center justify-between py-1 px-4', {
                'border-t border-gray-200': index > 0
              })}
            >
              <span className="flex-1">
                <Link
                  className="inline-block no-underline leading-none hover:underline hover:text-primary-800"
                  to={`/word?w=${word}`}
                >{word}</Link>
              </span>

              <button
                className="w-8 h-8 rounded-full text-gray-500 active:bg-gray-100 focus:outline-none p-1"
                onClick={() => remove(word)}
              ><IconX /></button>
            </li>
          );
        })}
      </ul>
    </span>
  );
};

SavedWordList.defaultProps = {
  onClick: null,
  remove: null,
};

SavedWordList.propTypes = {
  onClick: PropTypes.array,
  remove: PropTypes.func,
};

export default SavedWordList;
