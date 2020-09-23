import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { IconHouse, IconBookmarks, IconClock } from '../components/Icon';

const AppNavbarFooter = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isSaved = location.pathname === '/saved';
  const isHistory = location.pathname === '/history';

  return (
    <span className="fixed left-0 right-0 bottom-0 z-20 transition-transform duration-500 ease-linear transform translate-y-0">
      <span className="block sm:max-w-lg mx-auto">
        <nav className="flex bg-white shadow-xs px-4 -mb-px -mx-px sm:rounded-t">
          <NavLink
            to="/"
            className="relative w-1/3 h-12 flex flex-col items-center justify-center z-10"
            activeClassName="text-primary-700"
            exact
          >
            <span className="block w-6 h-6">
              <IconHouse fill={isHome} />
            </span>

            <span className="sr-only">Anasayfa</span>
          </NavLink>

          <NavLink
            to="/saved"
            className="relative w-1/3 h-12 flex flex-col items-center justify-center z-10"
            activeClassName="text-primary-700"
            exact
          >
            <span className="block w-6 h-6">
              <IconBookmarks fill={isSaved} />
            </span>

            <span className="sr-only">Kayıtlı</span>
          </NavLink>

          <NavLink
            to="/history"
            className="relative w-1/3 h-12 flex flex-col items-center justify-center z-10"
            activeClassName="text-primary-700"
            exact
          >
            <span className="block w-6 h-6">
              <IconClock fill={isHistory} />
            </span>

            <span className="sr-only">Geçmiş</span>
          </NavLink>
        </nav>
      </span>
    </span>
  );
};

export default AppNavbarFooter;
