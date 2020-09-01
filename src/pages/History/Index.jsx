import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IconClock } from '../../components/Icon';
import Button from '../../components/Button';
import SavedWordList from '../../components/SavedWordList';

const PageHistory = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { history, historyLimit } = state.data;

  // set title
  useEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: 'geçmiş' })
  }, [dispatch]);

  return (
    <main className="sm:max-w-lg mx-auto py-4">
      {history.length === 0 &&
        <span className="flex flex-col items-center justify-center text-center p-8">
          <span className="block w-16 h-16"><IconClock /></span>

          <p className="text-xl mt-4">görüntülediğin son {historyLimit} içerik burada listenecek.</p>
        </span>
      }

      {history.length > 0 &&
        <SavedWordList
          words={history}
          remove={(word) => {
            if (window.confirm(`"${word}" geçmişten silinecek.`)) {
              dispatch({ type: 'REMOVE_FROM_HISTORY', payload: word });
            }
          }}
        />
      }

      {history.length > 1 &&
        <span className="block px-4 mt-4">
          <Button
            text="TÜMÜNÜ KALDIR"
            onClick={() => {
              if (window.confirm('tüm geçmiş silinecek.')) {
                dispatch({ type: 'CLEAR_HISTORY' });
              }
            }}
          />
        </span>
      }
    </main>
  );
};

export default PageHistory;
