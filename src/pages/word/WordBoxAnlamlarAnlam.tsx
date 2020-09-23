import React from 'react';

import WordAnlamlarAnlamOrnekler from './WordAnlamlarAnlamOrnekler';

type WordBoxAnlamlarAnlam = {
  anlam: Anlam,
  firstTur: String|undefined,
};

const WordBoxAnlamlarAnlam = ({ anlam, firstTur }: WordBoxAnlamlarAnlam) => {
  if (!anlam) {
    return null;
  }

  return (
    <span className="block space-y-2 py-2 px-4">
      <p className="block space-x-1">
        {firstTur &&
          <span className="bg-opacity-50 bg-secondary-100 text-secondary-700 text-sm leading-tight rounded-sm">{firstTur}</span>
        }

        {anlam?.ozelliklerListe && anlam.ozelliklerListe.length > 0 &&
          anlam.ozelliklerListe.map((ozellik) => 
            <span
              key={`${ozellik.ozellik_id}`}
              className="bg-opacity-50 bg-secondary-100 text-secondary-700 text-sm leading-tight rounded-sm"
            >{ozellik.tam_adi}</span>
        )}

        <span className="text-lg leading-tight">{anlam.anlam}</span>
      </p>

      {anlam?.orneklerListe && anlam.orneklerListe.length > 0 &&
        <WordAnlamlarAnlamOrnekler ornekler={anlam.orneklerListe} />
      }
    </span>
  );
};

export default WordBoxAnlamlarAnlam;
