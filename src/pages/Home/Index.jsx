import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import { IconX, IconCheck } from '../../components/Icon';
import SearchScreen from '../../components/SearchScreen';
import HomeNavbar from './HomeNavbar';

const PageHome = () => {
  const [showSearchScreen, setShowSearchScreen] = useState(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { home } = state.data;

  // set title
  useLayoutEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: state.app.name })
  }, [dispatch, state.app.name]);

  // set içerik
  useEffect(() => {
    fetch('https://sozluk.gov.tr/icerik')
      .then((response) => response.json())
      .then((response) => dispatch({ type: 'SET_HOME', payload: response }))
      .catch((error) => console.error(error))
  }, [dispatch]);

  return (
    <>
      <HomeNavbar onClick={() => setShowSearchScreen(true)} />

      {home &&
        <span className="block sm:max-w-lg mx-auto space-y-4 py-4">
          {home?.kelime?.length > 0 &&
            <section className="block relative bg-white shadow-sm py-3 px-4">
              <span className="bg-secondary-100 text-secondary-700 text-xs leading-none">GÜNÜN KELİMESİ</span>

              <h3 className="font-bold mt-1">
                <Link to={`/word?w=${home.kelime[0].madde}`}>{home.kelime[0].madde}</Link>
              </h3>

              <p className="text-lg mt-1">
                <Link to={`/word?w=${home.kelime[0].madde}`}>{home.kelime[0].anlam}</Link>
              </p>
            </section>
          }

          {home?.atasoz?.length > 0 &&
            <section className="block relative bg-white shadow-sm py-3 px-4">
              <span className="bg-secondary-100 text-secondary-700 text-xs leading-none">GÜNÜN ATASÖZÜ/DEYİMİ</span>

              <h3 className="font-bold mt-1">
                <Link to={`/word?w=${home.atasoz[0].madde}`}>{home.atasoz[0].madde}</Link>
              </h3>

              <p className="text-lg mt-1">
                <Link to={`/word?w=${home.atasoz[0].madde}`}>{home.atasoz[0].anlam}</Link>
              </p>
            </section>
          }

          {home?.syyd?.length > 0 &&
            <section className="block relative bg-white shadow-sm">
              <header className="py-3 px-4">
                <h3 className="font-semibold text-lg leading-none">sıkça yapılan yanlışlara doğrular</h3>

                {home.syyd.some((item) => item.yanliskelime.search(':') > -1 || item.dogrukelime.search(':') > -1) &&
                  <h6 className="text-xs text-gray-500 leadidng-none mt-1">(:) uzun okunan hecenin gösterilişi</h6>
                }
              </header>

              <main className="border-t border-gray-300">
                <ul className="flex flex-col">
                  {home.syyd.map((item, index) => {
                    return (
                      <li
                        key={item.id}
                        className={classnames('flex items-center justify-between py-3 px-4', {
                          'border-t border-gray-200': index > 0
                        })}
                      >
                        <span className="flex items-center space-x-1 text-red-600">
                          <span className="block w-4 h-4"><IconX /></span>

                          <span className="block leading-none">{item.yanliskelime}</span>
                        </span>

                        <span className="flex items-center space-x-1 text-green-600">
                          <span className="block leading-none">{item.dogrukelime}</span>

                          <span className="block w-4 h-4"><IconCheck /></span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </main>
            </section>
          }

          {home?.karistirma?.length > 0 &&
            <section className="block relative bg-white shadow-sm">
              <header className="py-3 px-4">
                <h3 className="font-semibold text-lg leading-none">sıkça karıştırılan sözler</h3>
              </header>

              <main className="border-t border-gray-300">
                <ul className="flex flex-col divide-y divide-gray-200">
                  {home.karistirma.slice(0, 9).map((item, index) => {
                    return (
                      <li
                        key={item.id}
                        className={classnames('flex items-center justify-between py-2 px-4', {
                          'bg-gray-100': index % 2
                        })}
                      >
                        <span>{item.yanlis}</span>
                        <span>{item.dogru}</span>
                      </li>
                    );
                  })}
                </ul>
              </main>
            </section>
          }
        </span>
      }

      {showSearchScreen && <SearchScreen close={() => setShowSearchScreen(false)} />}
    </>
  );
};

export default PageHome;
