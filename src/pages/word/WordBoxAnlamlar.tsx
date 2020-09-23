/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';

import IStateRoot from '../../store/interfaces/IStateRoot';

import {
  dispatchRemoveFromBookmarks,
  dispatchAddToBookmarks,
} from '../../store/dispatches/dataDispatches';

import { IconBookmark } from '../../components/Icon';
import WordBoxAnlamlarAnlam from './WordBoxAnlamlarAnlam';

type WordBoxAnlamlar = {
  word: String,
  anlamlar: Anlam[],
};

const WordBoxAnlamlar = ({ word, anlamlar }: WordBoxAnlamlar) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const state = useSelector((state: IStateRoot) => state);
  const { bookmarks } = state.data;

  useEffect(() => {
    const some = bookmarks.some((w) => w === word);

    setIsBookmarked(some);
  }, [word, bookmarks]);

  const handleToggleBookmark = () => {
    const some = bookmarks.some((w) => w === word);

    if (some) {
      dispatchRemoveFromBookmarks(word);
    } else {
      dispatchAddToBookmarks(word);
    }

    setIsBookmarked(!some);
  };

  if (!anlamlar) {
    return null;
  }

  return (
    <section className="bg-white shadow-sm mt-4">
      <header className="flex items-center justify-between py-1 px-4">
        <h3 className="text-2xl leading-none">{anlamlar.length > 1 ? 'anlamlar' : 'anlam'}</h3>

        <button
          aria-label={isBookmarked ? 'kayıtlı listesinden kaldır' : 'kayıtlı listesine ekle'}
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
        {anlamlar.sort((a, b) => Number(a.anlam_sira) - Number(b.anlam_sira)).map((anlam, anlamIndex) => {
          // tür 3 özelliğe sahip olmayan anlamlar
          let nonTur3Ozellikler: Ozellik[] = [];
          if (anlam.ozelliklerListe !== undefined && anlam.ozelliklerListe.length > 0) {
            nonTur3Ozellikler = anlam.ozelliklerListe.filter((o: Ozellik) => o.tur !== '3');
          }

          // tür 3 özelliğe sahip olan anlamlar
          let tur3Ozellikler: Ozellik[] = [];
          if (anlam.ozelliklerListe !== undefined && anlam.ozelliklerListe.length > 0) {
            tur3Ozellikler = anlam.ozelliklerListe.filter((o: Ozellik) => o.tur === '3');
          }

          // anlam eğer tür 3'e sahip değilse git ilk anlam'ın tür 3 değerini göster (çok karışık eet. ama tdk böyle yapmış. :())
          const addFirstTur: Boolean = (anlamIndex > 0 && nonTur3Ozellikler.length > 0 && tur3Ozellikler.length === 0)
            || (anlam.ozelliklerListe !== undefined && anlam.ozelliklerListe.length === 0);

          // set tam_adi
          let firstTurTamAdi: String|undefined = undefined;
          if (addFirstTur && anlam.ozelliklerListe !== undefined) {
            firstTurTamAdi = anlamlar[0].ozelliklerListe?.[0]?.tam_adi;
          }

          return (
            <WordBoxAnlamlarAnlam
              key={`${anlam.anlam_id}`}
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
