import IStateData from '../interfaces/IStateData';

// set history from localstorage
let home = null;
let autocomplete = [];
let history = [];
let bookmarks = [];

// set home state
(() => {
  try {
    const data = window.localStorage.getItem('sozluk:saved-home');

    if (data !== null && data !== undefined) {
      home = JSON.parse(data);
    }
  } catch (error) {}
})();

// set autocomplete state
(() => {
  try {
    const data = window.localStorage.getItem('sozluk:saved-autocomplete');

    if (data !== null && data !== undefined) {
      autocomplete = JSON.parse(data);
    }
  } catch (error) {}
})();

// set history state
(() => {
  try {
    const words = window.localStorage.getItem('sozluk:saved-history');

    if (words !== null && words !== undefined) {
      history = JSON.parse(words);
    }
  } catch (error) {}
})();

// set bookmarks state
(() => {
  try {
    const words = window.localStorage.getItem('sozluk:saved-bookmarks');

    if (words !== null && words !== undefined) {
      bookmarks = JSON.parse(words);
    }
  } catch (error) {}
})();

const origins = [
  { id: 11, nameLocale: 'Arapça', tdk: { lisan_kodu: 11, lisan: 'Arapça' } },
  { id: 12, nameLocale: 'Farsça', tdk: { lisan_kodu: 12, lisan: 'Farsça' } },
  { id: 13, nameLocale: 'Fransızca', tdk: { lisan_kodu: 13, lisan: 'Fransızca' } },
  { id: 14, nameLocale: 'İtalyanca', tdk: { lisan_kodu: 14, lisan: 'İtalyanca' } },
  { id: 18, nameLocale: 'İngilizce', tdk: { lisan_kodu: 18, lisan: 'İngilizce' } },
  { id: 26, nameLocale: 'Macarca', tdk: { lisan_kodu: 26, lisan: 'Mar.' } },
];

const dataInitialState: IStateData = {
  origins,

  home,

  autocomplete,

  history,
  historyLimit: 50,

  bookmarks,
};

export default dataInitialState;
