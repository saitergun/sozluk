import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import classnames from 'classnames';

import { IconArrow, IconSearch } from './Icon';
import SearchScreen from './SearchScreen';

const AppNavbarHeader = () => {
  const [showSearchScreen, setShowSearchScreen] = useState(false);

  const state = useSelector(state => state);
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <nav
        className={classnames([
          'sticky left-0 top-0 right-0',
          'w-full h-12',
          'text-white bg-primary z-40'
        ])}
      >
        {location.pathname !== '/' &&
          <button
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
              title={state.app.title}
              className="block w-full text-xl truncate"
            >{state.app.title}</h1>
          </span>
        }
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
