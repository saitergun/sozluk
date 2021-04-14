import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Icon from './Icon';

const BottomNavbar = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  const countItems = items.length;

  return (
    <span
      className={classNames('h-full grid bg-white sm:max-w-lg mx-auto border-t shadow-sm sm:border-l sm:border-r sm:rounded-t-sm px-4', {
        'grid-cols-1': countItems === 1,
        'grid-cols-2': countItems === 2,
        'grid-cols-3': countItems === 3,
        'grid-cols-4': countItems === 4,
        'grid-cols-5': countItems === 5,
      })}
    >
      {items.map((item) => (
        <BottomNavbar.Item
          key={item.to}
          to={item.to}
          label={item.label}
          icon={item.icon}
        />
      ))}
    </span>
  );
};

BottomNavbar.Item = ({ to, icon }) => {
  return (
    <NavLink
      to={to}
      className="flex flex-col items-center justify-center"
      activeClassName="text-primary-600 pointer-events-none"
      exact
    >
      <Icon name={icon} className="text-24/16" />
    </NavLink>
  );
};

export default BottomNavbar;
