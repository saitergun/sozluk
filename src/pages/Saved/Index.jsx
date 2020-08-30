import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IconX, IconBookmarks } from '../../components/Icon';

const PageSaved = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  // set title
  useEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: 'kayıtlı' })
  }, [dispatch]);

  return (
    <main className="sm:max-w-lg mx-auto">
      {state.data.bookmarks.length === 0 &&
        <span className="flex flex-col items-center justify-center text-center p-8 my-4">
          <span className="block w-16 h-16"><IconBookmarks /></span>

          <p className="text-xl mt-4">kaydettiğin içerik burada listenecek.</p>
        </span>
      }

      {state.data.bookmarks.length > 0 &&
        <span className="block bg-white border-t border-b border-gray-200 my-4">
          <span className="flex flex-col divide-y divide-gray-200">
            {state.data.bookmarks.map((word, index) => {
              return (
                <span className="flex items-center justify-between py-1 px-4" key={index}>
                  <Link
                    className="flex-1 no-underline hover:underline hover:text-primary-800"
                    to={`/word?w=${word}&r=bookmarks`}
                  >{word}</Link>

                  <button
                    className="w-7 h-7 rounded-full text-gray-500 active:bg-gray-100 p-1"
                    onClick={() => {
                      if (window.confirm(`"${word}" kayıtlardan silinecek.`)) {
                        dispatch({ type: 'REMOVE_FROM_BOOKMARKS', payload: word });
                      }
                    }}
                  ><IconX /></button>
                </span>
              );
            })}
          </span>
        </span>
      }

      {state.data.bookmarks.length > 1 &&
        <span className="block px-4 my-4">
          <button
            className="block w-full bg-secondary active:bg-secondary-400 text-secondary-900 font-lexend-deca text-sm py-1 px-4"
            onClick={() => {
              if (window.confirm('tüm kayıtlar silinecek.')) {
                dispatch({ type: 'CLEAR_BOOKMARKS' });
              }
            }}
          >TÜMÜNÜ KALDIR</button>
        </span>
      }
    </main>
  );
};

export default PageSaved;
