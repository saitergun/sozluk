import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import WordLoaderPlaceholder from './WordLoaderPlaceholder';
import WordNotFound from './WordNotFound';

import WordsTab from './WordsTab';
import WordBoxInfo from './WordBoxInfo';
import WordBoxAnlamlar from './WordBoxAnlamlar';
import WordBoxAtasozleri from './WordBoxAtasozleri';
import WordBoxBirlesikler from './WordBoxBirlesikler';

const PageWord = ({ word }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingErrorMessage, setLoadingErrorMessage] = useState(null);
  const [words, setWords] = useState([]);

  const [wordIndex, setWordIndex] = useState(0);

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const { autocomplete } = state.data;

  // set title
  useEffect(() => {
    dispatch({ type: 'SET_APP_TITLE', payload: word })
  }, [dispatch, word]);

  // set word
  useEffect(() => {
    if (word) {
      setTimeout(() => {
        const inAutoComplete = autocomplete.filter((f) => f.length === word.length).some((s) => s.toLocaleLowerCase('tr-TR') === word.toLocaleLowerCase('tr-TR'));

        setIsLoading(inAutoComplete);
        setLoadingErrorMessage(!inAutoComplete ? 'Aradığın sözcük burada yok.' : null);

        if (inAutoComplete) {
          fetch(`https://sozluk.gov.tr/gts?ara=${word}`)
            .then((response) => response.json())
            .then((response) => {
              setWords(response);

              dispatch({ type: 'ADD_TO_HISTORY', payload: word });
            })
            .catch((error) => setLoadingErrorMessage(error))
            .finally(() => { setIsLoading(false); });
        }
      }, 300);
    }
  }, [autocomplete, word, dispatch]);

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
              <React.Fragment key={word.madde_id}>
                {word.telaffuz &&
                  <WordBoxInfo
                    lisan={word.lisan}
                    telaffuz={word.telaffuz}
                  />
                }

                {word?.anlamlarListe.length > 0 &&
                  <WordBoxAnlamlar anlamlar={word.anlamlarListe} word={word.madde} />
                }

                {word?.atasozu &&
                  <WordBoxAtasozleri atasozleri={word.atasozu} />
                }

                {word?.birlesikler &&
                  <WordBoxBirlesikler birlesikler={word.birlesikler} />
                }

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
