import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import isMobile from 'is-mobile';

import useQuickSearch from '../hooks/useQuickSearch';

import { IconClock, IconArrow, IconBackspace } from '../components/Icon';
import HighlightText from './HighlightText';

const SearchScreen = ({ close }) => {
  const [quickSearchValue, setQuickSearchValue] = useState('');
  const [quickSearchTyping, setQuickSearchTyping] = useState(false);
  const [quickSearchInit, setQuickSearchInit] = useState(false);
  const [quickSearchTimeout, setQuickSearchTimeout] = useState(false);
  const [quickSearchSuggestions, setQuickSearchSuggestions] = useState([]);

  const quickSearchInput = useRef();
  const state = useSelector(state => state);
  const history = useHistory();

  const { words, hasMoreWords } = useQuickSearch({ query: quickSearchValue, init: quickSearchInit });

  const handleQuickSearch = (e) => {
    const { value } = e.target;

    let delayTimeout = isMobile() ? 400 : 200;

    if (value === '' || value.indexOf('q') > -1 || value.indexOf('w') > -1 || value.indexOf('x') > -1) {
      delayTimeout = 0;
    }

    setQuickSearchValue(value);
    setQuickSearchTyping(true);
    setQuickSearchInit(false);

    window.clearTimeout(quickSearchTimeout);

    setQuickSearchTimeout(setTimeout(() => {
      setQuickSearchValue(value);
      setQuickSearchInit(true);
      setQuickSearchTyping(false);
    }, delayTimeout));

    return () => {
      setQuickSearchValue('');
      setQuickSearchInit(false);
      setQuickSearchTyping(false);

      window.clearTimeout(quickSearchTimeout);
    };
  };

  const handleQuickSearchKeyDown = (e) => {
    if (words.length > 0) {
      if (e.which === 13) {
        // history.push(`/word?w=${words[0]}`);
        handlePushWord(words[0]);
      }

      if (e.which === 38) {}
      if (e.which === 40) {}
    }
  };

  const handleClearSearchBox = () => {
    setQuickSearchValue('');
    setQuickSearchInit(true);

    quickSearchInput.current.focus();
  };

  const handlePushWord = (word) =>  {
    close();

    history.push(`/word?w=${word}&q=${quickSearchValue}`);
  };

  // disable quick search
  useEffect(() => {
    setQuickSearchInit(false);
  }, [words]);

  // add/remove overflow class from body
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // focus input
  useEffect(() => {
    if (quickSearchInput.current) {
      quickSearchInput.current.focus();
    }
  }, []);

  // add keypress esc event
  useEffect(() => {
    const event = (e) => {
      if (e.which === 27 || e.keyCode === 27) {
        quickSearchInput.current.blur();

        setQuickSearchValue('');
        close();
      }
    };

    window.addEventListener('keydown', event);

    return () => {
      window.removeEventListener('keydown', event);
    };
  }, [close]);

  // unmount
  useEffect(() => {
    return () => {
      setQuickSearchValue('');
      setQuickSearchTyping(false);
      setQuickSearchInit(false);
      setQuickSearchTimeout(false);
    };
  }, []);

  // catch no result
  useEffect(() => {
    if (quickSearchValue !== '' && !quickSearchTyping && words.length === 0) {
      fetch(`https://sozluk.gov.tr/oneri?soz=${quickSearchValue}`)
        .then((response) => response.json())
        .then((response) => setQuickSearchSuggestions(response))
        .catch((error) => console.log(error));
    } else {
      setQuickSearchSuggestions([]);
    }
  }, [quickSearchValue, quickSearchTyping, words.length]);

  return (
    <>
      <section className="w-full h-full fixed inset-0 flex flex-col bg-white z-50">
        <header className="block relative bg-white border-b border-gray-300 z-10">
          <input
            type="text"
            className={classnames([
              'w-full h-12 bg-transparent py-2 px-4 z-10',
              'text-center leading-none text-xl placeholder-gray-500',
            ], {
              'pr-5': quickSearchValue.length,
            })}
            placeholder="yazmaya başla"
            value={quickSearchValue}
            onChange={handleQuickSearch}
            onKeyDown={handleQuickSearchKeyDown}
            ref={quickSearchInput}
          />

          <button
            className="absolute left-2 top-2 w-8 h-8 flex flex-grow items-center justify-center text-primary active:bg-primary-100 active:bg-opacity-25 rounded-full focus:outline-none p-1"
            onClick={close}
          ><IconArrow left={true} /></button>

          {quickSearchValue !== '' &&
            <button
              className="absolute right-2 top-2 w-8 h-8 flex flex-grow items-center justify-center text-gray-500 active:bg-gray-100 rounded-full focus:outline-none p-1"
              onClick={handleClearSearchBox}
            ><IconBackspace /></button>
          }
        </header>

        {quickSearchValue !== '' &&
          <main className="relative overflow-y-auto z-10">
            {quickSearchTyping &&
              <ul className="flex flex-col divide-y divide-gray-200 border-b border-gray-300">
                {[...Array(15).keys()].map((i) => {
                  const percent = Math.floor((Math.random() * 25));

                  return (
                    <li key={i} className="h-10 flex items-center bg-white py-1 px-4">
                      <span
                        className="block h-4 bg-gray-300 rounded-sm animate-pulse"
                        style={{
                          width: `${percent > 10 ? percent : 10}%`
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            }

            {!quickSearchTyping && words.length > 0 &&
              <ul className="flex flex-col divide-y divide-gray-200 border-b border-gray-300">
                {words.map((word, index) => {
                  return (
                    <li
                      className={classnames([
                        'flex items-center min-h-10 bg-white whitespace-pre-wrap cursor-pointer py-1 px-4',
                        'hover:bg-gray-100 active:bg-gray-100 active:no-underline active:text-current',
                      ])}
                      key={word + index}
                      onClick={() => handlePushWord(word)}
                    >
                      <span className="block text-lg leading-none">
                        <HighlightText text={word} query={quickSearchValue} />
                      </span>
                    </li>
                  );
                })}

                {hasMoreWords &&
                  <li
                    className={classnames([
                      'flex items-center justify-center min-h-10 bg-white whitespace-pre-wrap cursor-pointer py-3 px-4',
                      'hover:bg-gray-100 active:bg-gray-100 active:no-underline active:text-current',
                      'block text-center text-lg text-primary leading-none font-semibold'
                    ])}
                    onClick={() => history.push(`/search?q=${quickSearchValue}`)}
                  >tüm sonuçları göster</li>
                }
              </ul>
            }

            {!quickSearchTyping && words.length === 0 &&
              <ul className="flex flex-col border-b border-gray-300">
                <li className="flex items-center min-h-10 bg-white py-1 px-4">
                  <span className="block text-lg text-red-600 leading-none">sonuç bulunamadı.</span>
                </li>

                {quickSearchSuggestions.length > 0 &&
                  <li className="flex items-center min-h-10 bg-white py-1 px-4 -mt-3">
                    <span className="block text-red-600 leading-none">aşağıdakilerden birini mi arıyorsun?</span>
                  </li>
                }

                {quickSearchSuggestions.length > 0 && quickSearchSuggestions.map((word, index) => {
                  return (
                    <li
                      className={classnames([
                        'flex items-center min-h-10 bg-white whitespace-pre-wrap cursor-pointer py-1 px-4',
                        'hover:bg-gray-100 active:bg-gray-100 active:no-underline active:text-current',
                        'border-t border-gray-200'
                      ])}
                      key={word + index}
                      onClick={() => handlePushWord(word.madde)}
                    ><span className="block text-lg leading-none">{word.madde}</span></li>
                  );
                })}
              </ul>
            }
          </main>
        }

        {quickSearchValue === '' && state.data.history.length > 0 &&
          <main className="relative overflow-y-auto z-10">
            <ul className="flex flex-col divide-y divide-gray-200 border-b border-gray-300">
              {state.data.history.slice(0, 10).map((word) => {
                return (
                  <li
                    className={classnames([
                      'flex items-center min-h-10 bg-white whitespace-pre-wrap cursor-pointer py-1 px-4',
                      'hover:bg-gray-100 active:bg-gray-100 active:no-underline active:text-current',
                    ])}
                    key={word}
                    onClick={() => handlePushWord(word)}
                  >
                    <span className="flex-1">{word}</span>

                    <span className="w-6 h-6 rounded-full text-gray-500 active:bg-gray-100 p-1">
                      <IconClock history={true} />
                    </span>
                  </li>
                );
              })}
            </ul>
          </main>
        }

        <span className="fixed inset-0 w-screen h-screen bg-gray-100" onClick={close} />
      </section>
    </>
  );
};

export default SearchScreen;
