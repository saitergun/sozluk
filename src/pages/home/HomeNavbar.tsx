import React, { useEffect } from 'react';

import { IconSearch } from '../../components/Icon';

type HomeNavbarType = {
  onClick: VoidFunction
};

const HomeNavbar = ({ onClick }: HomeNavbarType) => {
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
          onClick={() => {
            onClick();
          }}
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

export default HomeNavbar;
