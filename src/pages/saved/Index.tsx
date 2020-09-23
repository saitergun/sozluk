import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import IStateRoot from '../../store/interfaces/IStateRoot';

import {
  dispatchSetTitle,
} from '../../store/dispatches/appDispatches';

import {
  dispatchRemoveFromBookmarks,
  dispatchClearBookmarks,
} from '../../store/dispatches/dataDispatches';

import { IconBookmarks } from '../../components/Icon';
import Button from '../../components/Button';
import SavedWordList from '../../components/SavedWordList';

const PageSaved = () => {
  const state = useSelector((state: IStateRoot) => state);
  const { bookmarks } = state.data;

  // set title
  useLayoutEffect(() => {
    dispatchSetTitle('kayıtlı')
  }, []);

  return (
    <main className="sm:max-w-lg mx-auto py-4">
      {bookmarks.length === 0 &&
        <span className="flex flex-col items-center justify-center text-center p-8">
          <span className="block w-16 h-16"><IconBookmarks /></span>

          <p className="text-xl mt-4">kaydettiğin içerik burada listenecek.</p>
        </span>
      }

      {bookmarks.length > 0 &&
        <SavedWordList
          words={bookmarks}
          remove={(word) => {
            if (window.confirm(`"${word}" kayıtlardan silinecek.`)) {
              dispatchRemoveFromBookmarks(word);
            }
          }}
        />
      }

      {bookmarks.length > 1 &&
        <span className="block px-4 my-4">
          <Button
            text="TÜMÜNÜ KALDIR"
            onClick={() => {
              if (window.confirm('tüm kayıtlar silinecek.')) {
                dispatchClearBookmarks();
              }
            }}
          />
        </span>
      }
    </main>
  );
};

export default PageSaved;
