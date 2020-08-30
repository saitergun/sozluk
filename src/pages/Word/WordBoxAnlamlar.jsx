import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';

import { IconBookmark } from '../../components/Icon';
import WordBoxAnlamlarAnlam from './WordBoxAnlamlarAnlam';

const WordBoxAnlamlar = ({ word, anlamlar }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { bookmarks } = state.data;

  useEffect(() => {
    const some = bookmarks.some((w) => w === word);

    setIsBookmarked(some);
  }, [word, bookmarks]);

  const handleToggleBookmark = () => {
    const some = bookmarks.some((w) => w === word);

    if (some) {
      dispatch({ type: 'REMOVE_FROM_BOOKMARKS', payload: word });
    } else {
      dispatch({ type: 'ADD_TO_BOOKMARKS', payload: word });
    }

    setIsBookmarked(!some);
  };

  if (!anlamlar) {
    return null;
  }

  return (
    <section className="bg-white shadow-sm mt-4">
      <header className="flex items-center justify-between py-1 px-4">
        <h1 className="text-2xl leading-none">{anlamlar.length > 1 ? 'anlamlar' : 'anlam'}</h1>

        <button
          className={classnames('w-10 h-10 active:bg-gray-100 rounded-full p-2', {
            'text-primary': isBookmarked
          })}
          onClick={handleToggleBookmark}
        >
          <IconBookmark
            checkFill={isBookmarked}
            check={!isBookmarked}
          />
        </button>
      </header>

      <main className="border-t border-gray-200 divide-y divide-gray-200">
        {anlamlar.sort((a, b) => a.anlam_sira - b.anlam_sira).map((anlam, anlamIndex) => {
          // tür 3 özelliğe sahip olmayan anlamlar
          const nonTur3Ozellikler = anlam?.ozelliklerListe?.length > 0 && anlam.ozelliklerListe.filter((o) => o.tur !== '3');
          // tür 3 özelliğe sahip olan anlamlar
          const tur3Ozellikler = anlam?.ozelliklerListe?.length > 0 && anlam.ozelliklerListe.filter((o) => o.tur === '3');
          // anlam eğer tür 3'e sahip değilse git ilk anlam'ın tür 3 değerini göster (çok karışık eet. ama tdk böyle yapmış. :())
          const addFirstTur = (anlamIndex && nonTur3Ozellikler?.length > 0 && tur3Ozellikler.length === 0) || !anlam.ozelliklerListe;
          // set tam_adi
          const firstTurTamAdi = addFirstTur && anlamlar?.[0]?.ozelliklerListe?.[0]?.tam_adi;

          return (
            <WordBoxAnlamlarAnlam
              key={anlam.anlam_id}
              anlam={anlam}
              firstTur={firstTurTamAdi}
            />
          );
        })}
      </main>
    </section>
  );
};

export default WordBoxAnlamlar;
