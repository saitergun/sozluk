import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import classnames from 'classnames';

import IStateRoot from '../store/interfaces/IStateRoot';

import { IconArrow, IconSearch } from './Icon';
import SearchScreen from './SearchScreen';

const AppNavbarHeader = () => {
  const [showSearchScreen, setShowSearchScreen] = useState(false);

  const state = useSelector((state: IStateRoot) => state);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const event = (e: KeyboardEvent) => {
      const allowedKeys: String[] = [
        'a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'ö', 'p', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'y', 'z', '/', ' '
      ];

      if (e.key === '/') {
        e.preventDefault();
      }

      if (!e.ctrlKey && !e.altKey && allowedKeys.includes(e.key)) {
        setShowSearchScreen(true);
      }
    };

    window.addEventListener('keydown', event);

    return () => {
      window.removeEventListener('keydown', event);
    };
  }, []);

  return (
    <>
      <nav
        className={classnames([
          'sticky left-0 top-0 right-0',
          'w-full h-12',
          'text-white bg-primary z-40'
        ])}
      >
        <span className="block relative sm:max-w-lg mx-auto">
          {location.pathname !== '/' &&
            <button
              aria-label="Geri dön"
              className={classnames([
                'absolute left-2 top-2',
                'w-8 h-8 flex flex-grow items-center justify-center',
                'active:bg-primary-600',
                'rounded-full focus:outline-none p-1',
              ])}
              onClick={() => history.goBack()}
            ><IconArrow left={true} /></button>
          }

          {location.pathname !== '/' &&
            <button
              aria-label="Arama yap"
              className={classnames([
                'absolute right-2 top-2',
                'w-8 h-8 flex flex-grow items-center justify-center',
                'active:bg-primary-600',
                'rounded-full focus:outline-none p-1',
              ])}
              onClick={() => setShowSearchScreen(true)}
            ><IconSearch /></button>
          }

          {state.app.title &&
            <span className="w-full h-12 flex items-center justify-center text-center px-12">
              <h1
                title={`${state.app.title}`}
                className="block w-full text-xl truncate"
              >{state.app.title}</h1>
            </span>
          }
        </span>
      </nav>

      {showSearchScreen &&
        <SearchScreen
          close={() => setShowSearchScreen(false)}
        />
      }
    </>
  );
};

export default AppNavbarHeader;
