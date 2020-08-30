import React from 'react';

import { IconChat } from '../../components/Icon';

const WordAnlamlarAnlamOrnekler = ({ ornekler }) => {
  if (!ornekler || ornekler.length === 0) {
    return null;
  }

  return (
    <blockquote className="flex items-center justify-start space-x-2 text-gray-600 text-xs leading-tight">
      {ornekler.map((ornek) => {
        const yazar = ornek?.yazar && ornek.yazar.length > 0 && `Yazar: ${ornek.yazar.map((yazar) => yazar.tam_adi)}`;

        return (
          <React.Fragment key={ornek.ornek_id}>
            <figure className="block w-3 h-3"><IconChat squareQuote={true} /></figure>

            <p className="flex-1" title={yazar}>{ornek.ornek}</p>
          </React.Fragment>
        );
      })}
    </blockquote>
  );
};

export default WordAnlamlarAnlamOrnekler;
