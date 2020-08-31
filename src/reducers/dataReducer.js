// set history from localstorage
let home = null;
let autocomplete = [];
let history = [];
let bookmarks = [];

(() => {
  try {
    const data = window.localStorage.getItem('sozluk:saved-home');

    if (data !== null && data !== undefined) {
      home = JSON.parse(data);
    }
  } catch (error) {}
})();

(() => {
  try {
    const data = window.localStorage.getItem('sozluk:saved-autocomplete');

    if (data !== null && data !== undefined) {
      autocomplete = JSON.parse(data);
    }
  } catch (error) {}
})();

(() => {
  try {
    const words = window.localStorage.getItem('sozluk:saved-history');

    if (words !== null && words !== undefined) {
      history = JSON.parse(words);
    }
  } catch (error) {}
})();

(() => {
  try {
    const words = window.localStorage.getItem('sozluk:saved-bookmarks');

    if (words !== null && words !== undefined) {
      bookmarks = JSON.parse(words);
    }
  } catch (error) {}
})();

const initialState = {
  origins: [
    { id: 11, nameLocale: 'Arapça', tdk: { lisan_kodu: 11, lisan: 'Arapça' } },
    { id: 12, nameLocale: 'Farsça', tdk: { lisan_kodu: 12, lisan: 'Farsça' } },
    { id: 13, nameLocale: 'Fransızca', tdk: { lisan_kodu: 13, lisan: 'Fransızca' } },
    { id: 14, nameLocale: 'İtalyanca', tdk: { lisan_kodu: 14, lisan: 'İtalyanca' } },
    { id: 18, nameLocale: 'İngilizce', tdk: { lisan_kodu: 18, lisan: 'İngilizce' } },
    { id: 26, nameLocale: 'Macarca', tdk: { lisan_kodu: 26, lisan: 'Mar.' } },
  ],

  home,

  autocomplete,

  history,
  historyLimit: 50,
  bookmarks,
};

const dataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_HOME':
      state.home = payload;

      window.localStorage.setItem('sozluk:saved-home', JSON.stringify(state.home));

      return {...state};

    case 'SET_AUTOCOMPLETE':
      state.autocomplete = payload;

      window.localStorage.setItem('sozluk:saved-autocomplete', JSON.stringify(state.autocomplete));
      window.localStorage.setItem('sozluk:saved-autocomplete-updated-at', Date.now());

      return {...state};

    case 'SET_HISTORY':
      state.history = payload;

      return {...state};
    case 'ADD_TO_HISTORY':
      // remove word if include
      if (state.history.includes(payload)) {
        const index = state.history.indexOf(payload);

        if (index > -1) {
          state.history.splice(index, 1);
        }
      }

      state.history.unshift(payload);

      window.localStorage.setItem('sozluk:saved-history', JSON.stringify(state.history.slice(0, state.historyLimit)));

      return {...state};
    case 'REMOVE_FROM_HISTORY':
      // remove word if include
      if (state.history.includes(payload)) {
        const index = state.history.indexOf(payload);

        if (index > -1) {
          state.history.splice(index, 1);
        }
      }

      window.localStorage.setItem('sozluk:saved-history', JSON.stringify(state.history.slice(0, state.historyLimit)));

      return {...state};
    case 'CLEAR_HISTORY':
      state.history = [];

      window.localStorage.removeItem('sozluk:saved-history');

      return {...state};

    case 'SET_BOOKMARKS':
      state.bookmarks = payload;

      return {...state};
    case 'ADD_TO_BOOKMARKS':
      // remove word if include
      if (state.bookmarks.includes(payload)) {
        const index = state.bookmarks.indexOf(payload);

        if (index > -1) {
          state.bookmarks.splice(index, 1);
        }
      }

      state.bookmarks.unshift(payload);

      window.localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(state.bookmarks));

      return {...state};
    case 'REMOVE_FROM_BOOKMARKS':
      // remove word if include
      if (state.bookmarks.includes(payload)) {
        const index = state.bookmarks.indexOf(payload);

        if (index > -1) {
          state.bookmarks.splice(index, 1);
        }
      }

      window.localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(state.bookmarks));

      return {...state};
    case 'CLEAR_BOOKMARKS':
      state.bookmarks = [];

      window.localStorage.removeItem('sozluk:saved-bookmarks');

      return {...state};

    default:
      return state;
  }
}

export default dataReducer;
