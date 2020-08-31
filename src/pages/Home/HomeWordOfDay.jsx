import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeWordOfDay = ({ title, word, signification }) => {
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
        <h6 className="font-bold">
          <Link to={linkTo}>{word}</Link>
        </h6>

        <p>
          <Link to={linkTo}>{signification}</Link>
        </p>
      </main>
    </section>
  );
};

HomeWordOfDay.defaultProps = {
  title: null,
  word: null,
  signification: null
}

HomeWordOfDay.propTypes = {
  title: PropTypes.string,
  word: PropTypes.string.isRequired,
  signification: PropTypes.string.isRequired
}

export default HomeWordOfDay;
