import React, { useEffect } from 'react';
import { func } from 'prop-types';

import { IconSearch } from '../../components/Icon';

export const HomeNavbar = ({ onClick }) => {
  useEffect(() => {
    const event = (e) => {
      const keyCode = e.keyCode || e.which;

      if ((keyCode > 64 && keyCode < 91) || (keyCode > 96 && keyCode < 123) || keyCode === 8) {
        onClick();
      }
    };

    window.addEventListener('keydown', event);

    return () => {
      window.removeEventListener('keydown', event);
    };
  }, [onClick]);

  return (
    <nav className="sticky left-0 top-0 right-0 bg-primary shadow p-2 z-40">
      <span className="block relative bg-white shadow-sm rounded sm:max-w-lg mx-auto">
        <button
          className="w-full h-8 flex items-center justify-start space-x-3 px-4 bg-transparent shadow-sm rounded text-gray-700 leading-none select-none cursor-text"
          onClick={onClick}
        >
          <span className="block w-4 h-4">
            <IconSearch />
          </span>

          <span className="block">güncel türkçe sözlük'te ara</span>
        </button>
      </span>
    </nav>
  );
};

HomeNavbar.defaultProps = {
  onClick: null
}

HomeNavbar.propTypes = {
  onClick: func
}

export default HomeNavbar;
