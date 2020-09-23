import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';

import IStateRoot from '../../store/interfaces/IStateRoot';

import {
  dispatchSetTitle
} from '../../store/dispatches/appDispatches';

import {
  dispatchSetHome
} from '../../store/dispatches/dataDispatches';

import SearchScreen from '../../components/SearchScreen';
import HomeNavbar from './HomeNavbar';
import HomeWordOfDay from './HomeWordOfDay';
import HomeIncorrectWords from './HomeIncorrectWords';

const PageHome = () => {
  const [showSearchScreen, setShowSearchScreen] = useState(false);

  const state = useSelector((state: IStateRoot) => state);
  const { home } = state.data;

  // set title
  useLayoutEffect(() => {
    dispatchSetTitle(state.app.name)
  }, [state.app.name]);

  // set içerik
  useEffect(() => {
    fetch('https://sozluk.gov.tr/icerik')
      .then((response) => response.json())
      .then((response) => dispatchSetHome(response))
      .catch((error) => console.error(error))
  }, []);

  return (
    <>
      <HomeNavbar onClick={() => setShowSearchScreen(true)} />

      {home &&
        <span className="block sm:max-w-lg mx-auto space-y-4 py-4">
          {home?.kelime?.length > 0 &&
            <HomeWordOfDay
              title="GÜNÜN KELİMESİ"
              word={home.kelime[0].madde}
              signification={home.kelime[0].anlam}
            />
          }

          {home?.atasoz?.length > 0 &&
            <HomeWordOfDay
              title="GÜNÜN ATASÖZÜ/DEYİMİ"
              word={home.atasoz[0].madde}
              signification={home.atasoz[0].anlam}
            />
          }

          {home?.syyd?.length > 0 &&
            <HomeIncorrectWords
              title="sıkça yapılan yanlışlara doğrular"
              subtitle={home.syyd.some((item) => item.yanliskelime.search(':') > -1 || item.dogrukelime.search(':') > -1) ? '(:) uzun okunan hecenin gösterilişi' : undefined}
              words={home.syyd.map((word) => ({ id: word.id, incorrect: word.yanliskelime, correct: word.dogrukelime }))}
              isColorful={true}
            />
          }

          {home?.karistirma?.length > 0 &&
            <HomeIncorrectWords
              title="sıkça karıştırılan sözler"
              words={home.karistirma.slice(0, 9).map((word) => ({ id: word.id, incorrect: word.yanlis, correct: word.dogru }))}
            />
          }
        </span>
      }

      {showSearchScreen && <SearchScreen close={() => setShowSearchScreen(false)} />}
    </>
  );
};

export default PageHome;
