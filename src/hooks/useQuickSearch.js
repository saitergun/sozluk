import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useQuickSearch = ({ query, init }) => {
  const [words, setWords] = useState([]);
  const [hasMoreWords, setHasMoreWords] = useState(false);

  const state = useSelector(state => state);
  const { autocomplete } = state.data;

  useEffect(() => {
    if (init) {
      if (typeof query === 'string' && query !== '') {
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
        result = result.map((word) => {
          const toLocaleString = (string) => string.toLocaleLowerCase('tr-TR')
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
        result = result.sort((a, b) => a.score - b.score);

        // map
        result = result.map((word) => word.word);

        // remove same data from array
        result = [...new Set(result)];

        // set is more
        setHasMoreWords(result.length > 15);

        // slice
        result = result.slice(0, 15);

        setWords(result);
      } else {
        setWords([]);
      }
    }
  }, [autocomplete, query, init]);

  return {
    words,
    hasMoreWords,
  };
};

export default useQuickSearch;
