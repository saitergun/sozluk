import React, { forwardRef, useState, useLayoutEffect, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { useKey, useDebounce, useClickAway, useStartTyping } from 'react-use';

import {
  getWordsByQuery as dispatchGetWordsByQuery,
} from '../state/data/dispatches';

import Text from './Text';
import Icon from './Icon';
import IconButton from './IconButton';
import List from './List';
import HighlightText from './HighlightText';

const ListWord = ({ words, icon, highlight, headerMessage, selectedWordIndex, onFocusWord }) => {
  const listRef = useRef();

  useEffect(() => {
    if (selectedWordIndex > -1 && words.length > 0) {
      const items = listRef.current.querySelectorAll('a');

      const selectedItem = items[selectedWordIndex];

      selectedItem.focus();
    }
  }, [selectedWordIndex, words]);

  return (
    <List ref={listRef}>
      {headerMessage && (
        <List.Item>
          <Text>{headerMessage}</Text>
        </List.Item>
      )}

      {words.length > 0 && words.map((word, index) => {
        return (
          <List.Item
            key={word}
            to={`/word?w=${word}`}
            onFocusCapture={() => onFocusWord(index)}
            justifyStart
          >
            <Icon name={icon} />

            {highlight ? (
              <Text><HighlightText text={word} query={highlight} /></Text>
            ) : (
              <Text>{word}</Text>
            )}
          </List.Item>
        );
      })}
    </List>
  );
};

const ListSkeleton = () => {
  return (
    <List>
      {[...Array(5).keys()].map((index) => {
        const percent = Math.floor((Math.random() * 30));
        const width = `${percent > 15 ? percent : 15}%`;

        return (
          <List.Item
            key={index}
            justifyStart
          >
            <span className="block w-4 h-4 bg-alternative-200 animate-pulse rounded-full" />

            <span
              className="block h-3 bg-alternative-200 animate-pulse rounded-sm my-0.5"
              style={{ width }}
            />
          </List.Item>
        );
      })}
    </List>
  );
};

const Input = forwardRef(({ query, onChangeQuery, onFocus }, ref) => {
  const handleKeyDown = (e) => {
    let allow = /[aâbcçdefgğhıiîjklmnoöprsştuüûvyz ]/i.test(e.key.toLocaleLowerCase());

    // allow ctrl + x
    if (e.ctrlKey && e.key === 'x') {
      allow = true;
    }

    if (!allow) {
      e.preventDefault();
    }
  };

  return (
    <input
      type="text"
      className="w-full h-12 bg-white text-center text-18/16 placeholder-alternative-300 px-12 focus:outline-none focus:bg-primary-50 focus:ring-2 ring-primary ring-inset"
      placeholder="yazmaya başla"
      value={query}
      onFocus={onFocus}
      onKeyDown={handleKeyDown}
      onChange={(e) => onChangeQuery(e.target.value)}
      ref={ref}
    />
  );
});

const SearchModal = ({ history, historyWords, getWordsByQuery, onClose }) => {
  const [query, setQuery] = useState('');
  const [words, setWords] = useState([]);

  const [showListSkeleton, setShowListSkeleton] = useState(false);
  const [showListHistory, setShowListHistory] = useState(false);
  const [showListResult, setShowListResult] = useState(false);
  const [showListSuggestion, setShowListSuggestion] = useState(false);

  const [selectedWordIndex, setSelectedWordIndex] = useState(-1);

  const searchBoxRef = useRef();
  const inputRef = useRef();

  useStartTyping(() => inputRef.current?.focus());

  useClickAway(searchBoxRef, onClose);

  useKey('Escape', onClose);

  useKey('Enter', ({ ctrlKey }) => {
    if (ctrlKey && !showListSkeleton && words.length > 0) {
      history.push(`/word?w=${words[0]}`);
    }
  }, {}, [showListSkeleton, words]);

  useKey('ArrowUp', () => {
    if (selectedWordIndex > -1) {
      setSelectedWordIndex((prev) => prev - 1);
    }
  }, {}, [selectedWordIndex]);

  useKey('ArrowDown', () => {
    if (words.length > 0 && (words.length - 1) > selectedWordIndex) {
      setSelectedWordIndex((prev) => prev + 1);
    }
  }, {}, [selectedWordIndex, words]);

  useDebounce(() => {
    if (query !== '') {
      const { result } = getWordsByQuery(query);

      if (result.length > 0) {
        setWords(result);
        setShowListResult(true);
      } else {
        setShowListSuggestion(true);
        setWords([]);

        fetch(`https://sozluk.gov.tr/oneri?soz=${query}`)
          .then((response) => response.json())
          .then((response) => {
            setWords(Array.from(new Set(response.map(({ madde }) => madde))));
          })
          .catch(() => console.log('Öneriler yüklenirken beklenmeyen bir hata oluştu.'));
      }

      setShowListSkeleton(false);
    }
  }, 300, [query]);

  useLayoutEffect(() => {
    if (query === '') {
      setShowListSkeleton(false);
      setShowListResult(false);
      setShowListSuggestion(false);

      if (historyWords.length > 0) {
        setShowListHistory(true);

        setWords(historyWords.slice(0, 10));
      }
    }

    if (query !== '') {
      setShowListSkeleton(true);
      setShowListHistory(false);
      setShowListResult(false);
      setShowListSuggestion(false);
    }
  }, [query]);

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 5);

    document.body.classList.add('overflow-y-hidden');

    return () => {
      onClose();

      document.body.classList.remove('overflow-y-hidden');
    };
  }, []);

  useEffect(() => {
    if (selectedWordIndex === -1) {
      inputRef.current?.focus();
    }
  }, [selectedWordIndex]);

  return (
    <>
      <div className="fixed inset-0 w-full h-full overflow-hidden bg-alternative-50 sm:p-16 z-50">
        <div className="w-full h-full sm:max-w-md mx-auto">
          <div
            className="relative flex flex-col w-full max-h-full bg-white sm:border"
            ref={searchBoxRef}
          >
            <header className="relative z-10">
              <span className="absolute left-1 top-1 text-primary">
                <IconButton
                  onClick={onClose}
                >
                  <Icon name="RiArrowLeftLine" />
                </IconButton>
              </span>

              <Input
                query={query}
                onFocus={() => setSelectedWordIndex(-1)}
                onChangeQuery={setQuery}
                ref={inputRef}
              />

              {query !== '' && (
                <span className="absolute right-1 top-1">
                  <IconButton
                    onClick={() => {
                      setQuery('');

                      inputRef.current.focus();
                    }}
                  >
                    <Icon name="RiCloseLine" />
                  </IconButton>
                </span>
              )}
            </header>

            {(showListSkeleton || showListHistory || showListResult || showListSuggestion) && (
              <main className="overflow-y-auto border-t-2">
                {showListSkeleton && (
                  <ListSkeleton />
                )}

                {showListHistory && (
                  <ListWord
                    icon="RiTimeLine"
                    words={words}
                    selectedWordIndex={selectedWordIndex}
                    onFocusWord={setSelectedWordIndex}
                  />
                )}

                {showListResult && (
                  <ListWord
                    icon="RiSearch2Line"
                    words={words}
                    highlight={query}
                    selectedWordIndex={selectedWordIndex}
                    onFocusWord={setSelectedWordIndex}
                  />
                )}

                {showListSuggestion && (
                  <ListWord
                    icon="RiLightbulbFlashLine"
                    words={words}
                    headerMessage={words.length > 0 ? 'sonuç yok. aşağıdakilerden birini mi arıyorsun?' : 'sonuç yok'}
                    selectedWordIndex={selectedWordIndex}
                    onFocusWord={setSelectedWordIndex}
                  />
                )}
              </main>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  historyWords: state.data.history,
});

const mapDispatchToProps = {
  getWordsByQuery: dispatchGetWordsByQuery,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchModal));
