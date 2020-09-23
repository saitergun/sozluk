import React from 'react';

import { IconChat } from '../../components/Icon';

type WordAnlamlarAnlamOrnekler = {
  ornekler: Ornek[],
};

const WordAnlamlarAnlamOrnekler = ({ ornekler }: WordAnlamlarAnlamOrnekler) => {
  if (!ornekler || ornekler.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {ornekler.map((ornek) => {
        const yazar = ornek?.yazar && ornek.yazar.length > 0 && `Yazar: ${ornek.yazar.map((yazar) => yazar.tam_adi)}`;

        return (
          <blockquote
            className="flex items-center justify-start space-x-2 text-gray-600 text-sm leading-tight"
            key={`${ornek.ornek_id}`}
          >
            <figure className="block w-3 h-3"><IconChat squareQuote={true} /></figure>

            <p className="flex-1" title={`${yazar}`}>{ornek.ornek}</p>
          </blockquote>
        );
      })}
    </React.Fragment>
  );
};

export default WordAnlamlarAnlamOrnekler;
