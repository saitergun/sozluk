import React from 'react';

import WordBoxAtasozleriItem from './WordBoxAtasozleriItem';

type WordBoxAtasozleri = {
  atasozleri: Atasozu[],
};

const WordBoxAtasozleri = ({ atasozleri }: WordBoxAtasozleri) => {
  if (!atasozleri) {
    return null;
  }

  return (
    <section className="bg-white shadow-sm mt-4">
      <header className="py-3 px-4">
        <h3 className="text-2xl leading-none">atasözleri ve deyimler</h3>
      </header>

      <main className="flex flex-col border-t border-gray-200 divide-y divide-gray-200">
        {atasozleri.slice(0, 5).map((soz) => <WordBoxAtasozleriItem key={`${soz.madde_id}`} atasozu={soz} />)}
      </main>
    </section>
  );
};

export default WordBoxAtasozleri;
