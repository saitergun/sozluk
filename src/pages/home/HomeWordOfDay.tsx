import React from 'react';
import { Link } from 'react-router-dom';

type HomeWordOfDayType = {
  title: String,
  word: String,
  signification: String,
};

const HomeWordOfDay = ({ title, word, signification }: HomeWordOfDayType) => {
  const linkTo = `/word?w=${word}`;

  return (
    <section className="relative bg-white shadow-sm sm:rounded p-4">
      {title &&
        <header className="flex">
          <h3
            className="bg-secondary-100 text-secondary-800 text-11/16 leading-none"
          >{title}</h3>
        </header>
      }

      <main className="text-lg mt-2">
        <p className="font-bold">
          <Link to={linkTo}>{word}</Link>
        </p>

        <p>
          <Link to={linkTo}>{signification}</Link>
        </p>
      </main>
    </section>
  );
};

export default HomeWordOfDay;
