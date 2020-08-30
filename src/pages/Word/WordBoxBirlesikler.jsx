import React from 'react';
import { Link } from 'react-router-dom';

const WordBoxBirlesikler = ({ birlesikler }) => {
  return (
    <section className="bg-white shadow-sm mt-4">
      <header className="py-3 px-4">
        <h1 className="text-2xl leading-none">birleşikler</h1>
      </header>

      <main className="flex flex-col border-t border-gray-200 divide-y divide-gray-200">
        {birlesikler.split(', ').slice(0, 5).map((soz) => {
          return (
            <span
              key={soz}
              className="block py-1 px-4"
            >
              <Link
                className="no-underline hover:underline hover:text-primary-800"
                to={`/word?w=${soz}`}
              >{soz}</Link>
            </span>
          );
        })}
      </main>
    </section>
  );
};

export default WordBoxBirlesikler;
