import React from 'react';

const WordLoaderPlaceholder = () => {
  return (
    <main className="sm:max-w-lg mx-auto">
      <section className="bg-white shadow-sm mt-4">
        <header className="py-3 px-4">
          <span className="block w-24 h-6 bg-gray-200 rounded" />
        </header>

        <main className="flex flex-col border-t border-gray-200 divide-y divide-gray-200">
          <span className="block space-y-1 py-3 px-4">
            <span className="block w-11/12 h-3 bg-gray-200 rounded" />
            <span className="block w-3/12 h-3 bg-gray-200 rounded" />
          </span>

          <span className="block space-y-1 py-3 px-4">
            <span className="block w-8/12 h-3 bg-gray-200 rounded" />
          </span>
        </main>
      </section>
    </main>
  );
};

export default WordLoaderPlaceholder;
