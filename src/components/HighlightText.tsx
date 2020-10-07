import React from 'react';

type HighlightTextType = {
  text: String,
  query: String,
};

const HighlightText = ({ text, query }: HighlightTextType) => {
  const regex = query
    .replace(new RegExp('[aâAÂ]', 'gi'), '[aâAÂ]')
    .replace(new RegExp('[ıiîIİÎ]', 'gi'), '[ıiîIİÎ]')
    .replace(new RegExp('[uüûUÜÛ]', 'gi'), '[uüûUÜÛ]')
    .replace(new RegExp('[cçCÇ]', 'gi'), '[cçCÇ]')
    .replace(new RegExp('[gğGĞ]', 'gi'), '[gğGĞ]')
    .replace(new RegExp('[sşSŞ]', 'gi'), '[sşSŞ]')
    .replace(new RegExp('[oöOÖ]', 'gi'), '[oöOÖ]');

  const matches = text.match(new RegExp(regex, 'gi'));

  if (matches) {
    let dirtyHTML = document.createElement('span');
    dirtyHTML.innerHTML = text.replace(new RegExp(regex, 'gi'), (str) => `<i>${str}</i>`);

    const reactNodes: React.ReactNode[] = [];

    // for nodes
    dirtyHTML.childNodes.forEach((node, index) => {
      // text node
      if (node.nodeType === 3) {
        reactNodes.push(React.createElement('strong', {key: `node-${index}`}, node.nodeValue));
      }

      // element node
      else {
        reactNodes.push(React.createElement(React.Fragment, {key: `node-${index}`}, node.textContent));
      }
    });

    return React.createElement(React.Fragment, null, reactNodes);
  }

  return <>{text}</>;
};

export default HighlightText;
