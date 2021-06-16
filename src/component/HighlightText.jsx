import React from 'react';

const useMarkedText = (text, query) => {
  const regex = query
    .replace(new RegExp('[aâAÂ]', 'gi'), '[aâAÂ]')
    .replace(new RegExp('[ıiîIİÎ]', 'gi'), '[ıiîIİÎ]')
    .replace(new RegExp('[uüûUÜÛ]', 'gi'), '[uüûUÜÛ]')
    .replace(new RegExp('[cçCÇ]', 'gi'), '[cçCÇ]')
    .replace(new RegExp('[gğGĞ]', 'gi'), '[gğGĞ]')
    .replace(new RegExp('[sşSŞ]', 'gi'), '[sşSŞ]')
    .replace(new RegExp('[oöOÖ]', 'gi'), '[oöOÖ]');

  // return marked text
  return text.replace(new RegExp(regex, 'gi'), (string) => `<mark>${string}</mark>`);
};

const HighlightText = ({ text, query }) => {
  const markedText = useMarkedText(text, query);

  if (query && markedText) {
    const markedHTML = document.createElement('span');
    markedHTML.innerHTML = markedText;

    const children = [];

    // marked html to unmarked react element
    markedHTML.childNodes.forEach((node, index) => {
      let tag = React.Fragment;
      let child = node.textContent;

      // convert text node to element node
      if (node.nodeType === 3) {
        tag = 'strong';
        child = node.nodeValue;
      }

      const key = `node-${index}`;

      const el = React.createElement(tag, { key }, child);

      children.push(el);
    });

    return React.createElement(React.Fragment, null, children);
  }

  return <>{text}</>;
};

export default HighlightText;
