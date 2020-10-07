import { useState, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import IStateRoot from '../store/interfaces/IStateRoot';

type ScoredWordsType = {
  word: String,
  score: number,
};

const useQuickSearch = (query: String) => {
  // console.log('useQuickSearch query', query);

  const [words, setWords] = useState<String[]>([]);
  const [hasMoreWords, setHasMoreWords] = useState(false);

  const state = useSelector((state: IStateRoot) => state);
  const { autocomplete } = state.data;

  useLayoutEffect(() => {
    // console.log('useQuickSearch useLayoutEffect query', query);

    if (query !== '') {
      let result = autocomplete;

      // search words
      result = result.filter((word) => word.length >= query.length && word.match(new RegExp(query
        .replace(new RegExp('[aAÂâ]', 'gi'), '[aAÂâ]')
        .replace(new RegExp('[iİIıîÎ]', 'gi'), '[iİIıîÎ]')
        .replace(new RegExp('[üÜuUÛû]', 'gi'), '[üÜuUÛû]')
        .replace(new RegExp('[cCÇc]', 'gi'), '[cCÇc]')
        .replace(new RegExp('[gGĞg]', 'gi'), '[gGĞg]')
        .replace(new RegExp('[sSŞş]', 'gi'), '[sSŞş]')
        .replace(new RegExp('[oOÖö]', 'gi'), '[oOÖö]'), 'gi')
      ))

      // data order scoring
      let result2: ScoredWordsType[] = result.map((word) => {
        const toLocaleString = (string: String) => string.toLocaleLowerCase('tr-TR')
          .replace('â', 'a')
          .replace('Â', 'a')
          .replace('î', 'i')
          .replace('Î', 'i')
          .replace('İ', 'i')
          .replace('ı', 'i')
          .replace('û', 'u')
          .replace('Û', 'u')
          .replace('ü', 'u')
          .replace('Ü', 'u')
          .replace('ş', 's')
          .replace('Ş', 's')
          .replace('ö', 'o')
          .replace('Ö', 'o')
          .replace('ç', 'c')
          .replace('Ç', 'c')

        const nameLocaleLowerCase = toLocaleString(word)
        const queryLocaleLowerCase = toLocaleString(query)

        const indexOf = nameLocaleLowerCase.indexOf(queryLocaleLowerCase)
        const isExactMatch = queryLocaleLowerCase.length === nameLocaleLowerCase.length

        let score = 0

        if (!isExactMatch && indexOf === 0) {
          score = 1 + Number((nameLocaleLowerCase.slice(queryLocaleLowerCase.length).length / 10).toFixed(2))
        }

        if (!isExactMatch && indexOf !== 0) {
          score = 3 + Number((nameLocaleLowerCase.replace(queryLocaleLowerCase, '').length / 10).toFixed(2))
        }

        return {
          word,
          score
        }
      })

      // sort by score
      result2 = result2.sort((a, b) => a.score - b.score);

      // map
      let result3: String[] = result2.map((word) => word.word);

      // remove same data from array
      // result3 = [...new Set(result3)];
      result3 = Array.from(new Set(result3));

      // set is more
      setHasMoreWords(result3.length > 15);

      // slice
      result3 = result3.slice(0, 15);

      setWords(result3);
    } else {
      setWords([]);
    }
  }, [autocomplete, query]);

  return {
    words,
    hasMoreWords,
  };
};

export default useQuickSearch;
