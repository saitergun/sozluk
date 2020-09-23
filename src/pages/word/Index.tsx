import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector } from 'react-redux';

import IStateRoot from '../../store/interfaces/IStateRoot';

import {
  dispatchSetTitle
} from '../../store/dispatches/appDispatches';

import {
  dispatchAddToHistory
} from '../../store/dispatches/dataDispatches';

import WordLoaderPlaceholder from './WordLoaderPlaceholder';
import WordNotFound from './WordNotFound';
import WordsTab from './WordsTab';
import WordBoxInfo from './WordBoxInfo';
import WordBoxAnlamlar from './WordBoxAnlamlar';
import WordBoxAtasozleri from './WordBoxAtasozleri';
import WordBoxBirlesikler from './WordBoxBirlesikler';

type PageWordType = {
  word: String,
};

const PageWord = ({ word }: PageWordType) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState<String|null>(null);
  const [words, setWords] = useState<Word[]>([]);

  const [wordIndex, setWordIndex] = useState<number>(0);

  const state = useSelector((state: IStateRoot) => state);
  const { autocomplete } = state.data;

  // set title
  useLayoutEffect(() => {
    dispatchSetTitle(word);
  }, [word]);

  // set word
  useEffect(() => {
    const inAutocomplete: Boolean = autocomplete.filter((f) => f.length === word.length).some((s) => s.toLocaleLowerCase('tr-TR') === word.toLocaleLowerCase('tr-TR'));

    if (!inAutocomplete) {
      setIsLoading(false);
      setLoadingErrorMessage('Aradığın sözcük burada yok.');

      return;
    }

    const abortController = new AbortController();

    fetch(`https://sozluk.gov.tr/gts?ara=${word}`, { signal: abortController.signal })
      .then((response) => response.json())
      .then((response) => setWords(response))
      .catch((error) => setLoadingErrorMessage(error))
      .finally(() => setIsLoading(false));

    return () => {
      abortController.abort();

      setWords([]);
      setIsLoading(true);
      setLoadingErrorMessage(null);
    };
  }, [autocomplete, word]);

  useEffect(() => {
    if (words.length > 0) {
      dispatchAddToHistory(word);
    }
  }, [words, word]);

  if (!word) {
    return null;
  }

  return (
    <main className="sm:max-w-lg mx-auto">
      {isLoading && <WordLoaderPlaceholder />}

      {loadingErrorMessage && <WordNotFound />}

      {!isLoading && words.length > 0 && 
        <>
          {words.length > 1 &&
            <WordsTab
              count={words.length}
              selected={wordIndex}
              select={(index) => setWordIndex(index)}
            />
          }

          {words.filter((_, index) => index === wordIndex).map((word) => {
            return (
              <React.Fragment key={`${word.madde_id}`}>
                <WordBoxInfo
                  lisan={word.lisan}
                  telaffuz={word.telaffuz}
                />

                {word?.anlamlarListe.length > 0 &&
                  <WordBoxAnlamlar
                    anlamlar={word.anlamlarListe}
                    word={word.madde}
                  />
                }

                {word?.atasozu && <WordBoxAtasozleri atasozleri={word.atasozu} />}

                {word?.birlesikler && <WordBoxBirlesikler birlesikler={word.birlesikler} />}

                <span className="block w-full h-4" />
              </React.Fragment>
            );
          })}
        </>
      }
    </main>
  );
};

export default PageWord;
