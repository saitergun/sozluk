import { createElement } from 'react';
import classNames from 'classnames';

const Text = ({ children, tag, title1, title2, large, small, muted, bold, truncate, nowrap, primary, white }) => {
  return createElement(tag ?? 'p', {
    className: classNames('leading-none', {
      'text-36/16': title1,
      'text-24/16': title2,

      'text-19/16': large,
      'text-13/16': small,

      'text-alternative-400': muted,

      'font-bold': bold,

      truncate,

      'whitespace-pre': nowrap,

      'text-primary': primary,
      'text-white': white,
    }),
  }, children);
};

export default Text;
