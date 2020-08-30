import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { data } from 'autoprefixer';

const DISABLED_KEYWORDS = [
  'elde'
];

const AnlamText = ({ text }) => {
  const [textLinked, setTextLinked] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [keywordsIsParsed, setKeywordsIsParsed] = useState(false);

  const state = useSelector(state => state);

  const { autocomplete } = state.data;

  // set keywords
  useEffect(() => {
    if (!keywordsIsParsed) {
      const parsed = [...new Set(text.split(' '))];
      const purified = [];

      parsed.length > 0 && parsed.forEach((dirty) => {
        const cleared = dirty.replace(/[^a-zA-Z ığüşöçĞÜŞİÖÇâîûÂÎÛ]/gi, '');

        const some = autocomplete.some((w) => w.length === cleared.length && w.toLocaleLowerCase('tr-TR') === cleared.toLocaleLowerCase('tr-TR'));

        if (some && !keywords.includes(cleared) && !DISABLED_KEYWORDS.includes(cleared)) {
          purified.push(cleared);
        }
      });

      setKeywords(purified);
      setKeywordsIsParsed(true);
    }
  }, [text, autocomplete, keywords, keywordsIsParsed]);

  // replace keywords with link
  useEffect(() => {
    if (keywords.length > 0 && !textLinked) {
      const template = (str) => `<a class="underline hover:no-underline hover:text-primary-800" href="#/word?w=${str}">${str}</a>`;

      const linked = text.replace(new RegExp(keywords.sort((a, b) => b.length - a.length).join('|'), 'gi'), template);

      setTextLinked(linked);
    }
  }, [keywords, text, textLinked]);

  return (
    <span className="text-lg leading-tight" dangerouslySetInnerHTML={{__html: textLinked ?? text}} />
  );
};

export default AnlamText;
