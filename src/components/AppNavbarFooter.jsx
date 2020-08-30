import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { IconHouse, IconBookmarks, IconClock } from '../components/Icon';

const AppNavbarFooter = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isSaved = location.pathname === '/saved';
  const isHistory = location.pathname === '/history';

  return (
    <span className="navbar-footer-mobile">
      <nav className="navbar-footer-mobile-menu">
        <NavLink
          to="/"
          className="menu-item"
          activeClassName="active"
          exact
        >
          <span className="menu-item-icon">
            <IconHouse fill={isHome} />
          </span>
        </NavLink>

        <NavLink
          to="/saved"
          className="menu-item"
          activeClassName="active"
          exact
        >
          <span className="menu-item-icon">
            <IconBookmarks fill={isSaved} />
          </span>
        </NavLink>

        <NavLink
          to="/history"
          className="menu-item"
          activeClassName="active"
          exact
        >
          <span className="menu-item-icon">
            <IconClock fill={isHistory} />
          </span>
        </NavLink>
      </nav>
    </span>
  );
};

export default AppNavbarFooter;
