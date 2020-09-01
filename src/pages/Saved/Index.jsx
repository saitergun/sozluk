import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IconBookmarks } from '../../components/Icon';
import Button from '../../components/Button';
import SavedWordList from '../../components/SavedWordList';

const PageSaved = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  // set title
  useEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: 'kayıtlı' })
  }, [dispatch]);

  return (
    <main className="sm:max-w-lg mx-auto py-4">
      {state.data.bookmarks.length === 0 &&
        <span className="flex flex-col items-center justify-center text-center p-8">
          <span className="block w-16 h-16"><IconBookmarks /></span>

          <p className="text-xl mt-4">kaydettiğin içerik burada listenecek.</p>
        </span>
      }

      {state.data.bookmarks.length > 0 &&
        <SavedWordList
          words={state.data.bookmarks}
          remove={(word) => {
            if (window.confirm(`"${word}" kayıtlardan silinecek.`)) {
              dispatch({ type: 'REMOVE_FROM_BOOKMARKS', payload: word });
            }
          }}
        />
      }

      {state.data.bookmarks.length > 1 &&
        <span className="block px-4 my-4">
          <Button
            text="TÜMÜNÜ KALDIR"
            onClick={() => {
              if (window.confirm('tüm kayıtlar silinecek.')) {
                dispatch({ type: 'CLEAR_BOOKMARKS' });
              }
            }}
          />
        </span>
      }
    </main>
  );
};

export default PageSaved;
