import React from 'react';
import classnames from 'classnames';

import { IconX, IconCheck } from '../../components/Icon';

type HomeIncorrectWordType = {
  id: Number,
  incorrect: String,
  correct: String,
};

type HomeIncorrectWordsType = {
  title?: String,
  subtitle?: String,
  words: Array<HomeIncorrectWordType>,
  isColorful?: Boolean,
};

const HomeIncorrectWords = ({ title, subtitle, words, isColorful }: HomeIncorrectWordsType) => {
  return (
    <section className="relative bg-white shadow-sm sm:rounded py-2">
      {(title || subtitle) &&
        <header className="py-2 px-4">
          {title &&
            <h3 className="font-bold text-lg">{title}</h3>
          }

          {subtitle &&
            <p className="text-sm text-gray-700">{subtitle}</p>
          }
        </header>
      }

      <main>
        <ul className="flex flex-col">
          {words.map((word, index) => {
            return (
              <li
                key={`${word.id}`}
                className={classnames('flex items-center justify-between py-2 px-4', {
                  'border-t border-gray-200': index > 0,
                })}
              >
                <span
                  className={classnames('flex items-center space-x-1', {
                    'text-red-700': isColorful,
                  })}
                >
                  {isColorful &&
                    <span className="block w-5 h-5"><IconX /></span>
                  }

                  <span className="block leading-none">{word.incorrect}</span>
                </span>

                <span
                  className={classnames('flex items-center space-x-1', {
                    'text-green-700': isColorful,
                  })}
                >
                  <span className="block leading-none">{word.correct}</span>

                  {isColorful &&
                    <span className="block w-5 h-5"><IconCheck /></span>
                  }
                </span>
              </li>
            );
          })}
        </ul>
      </main>
    </section>
  );
}

export default HomeIncorrectWords;
