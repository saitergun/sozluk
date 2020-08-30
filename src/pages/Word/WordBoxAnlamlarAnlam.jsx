import React from 'react';

import WordAnlamlarAnlamOrnekler from './WordAnlamlarAnlamOrnekler';

const Ozellik = ({ ozellik }) => {
  return (
    <span className="bg-opacity-50 bg-secondary-100 text-secondary-700 text-sm leading-tight rounded-sm">{ozellik}</span>
  );
};

const WordBoxAnlamlarAnlam = ({ anlam, firstTur }) => {
  if (!anlam) {
    return null;
  }

  return (
    <span className="block space-y-2 py-2 px-4">
      <p className="block space-x-1">
        {firstTur && <Ozellik ozellik={firstTur} />}

        {anlam?.ozelliklerListe && anlam.ozelliklerListe.length > 0 &&
          anlam.ozelliklerListe.map((ozellik) => <Ozellik key={ozellik.ozellik_id} ozellik={ozellik.tam_adi} />
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
