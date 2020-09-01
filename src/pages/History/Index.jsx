import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { IconX, IconClock } from '../../components/Icon';
import Button from '../../components/Button';

const PageHistory = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { history, historyLimit } = state.data;

  // set title
  useEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: 'geçmiş' })
  }, [dispatch]);

  return (
    <main className="sm:max-w-lg mx-auto">
      {history.length === 0 &&
        <span className="flex flex-col items-center justify-center text-center p-8 my-4">
          <span className="block w-16 h-16"><IconClock /></span>

          <p className="text-xl mt-4">görüntülediğin son {historyLimit} içerik burada listenecek.</p>
        </span>
      }

      {history.length > 0 &&
        <span className="block bg-white border-t border-b border-gray-200 my-4">
          <span className="flex flex-col divide-y divide-gray-200">
            {history.map((word, index) => {
              return (
                <span className="flex items-center justify-between py-1 px-4" key={index}>
                  <Link
                    className="flex-1 no-underline hover:underline hover:text-primary-800"
                    to={`/word?w=${word}&r=history`}
                  >{word}</Link>

                  <button
                    className="w-7 h-7 rounded-full text-gray-500 active:bg-gray-100 p-1"
                    onClick={() => {
                      if (window.confirm(`"${word}" geçmişten silinecek.`)) {
                        dispatch({ type: 'REMOVE_FROM_HISTORY', payload: word });
                      }
                    }}
                  ><IconX /></button>
                </span>
              );
            })}
          </span>
        </span>
      }

      {history.length > 1 &&
        <span className="block px-4 my-4">
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
