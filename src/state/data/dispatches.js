import immer from 'immer';

import * as actionTypes from './actionTypes';
import { actionSetBookmarks, actionSetHistory } from './actions';

export const setSavedBookmarks = () => async (dispatch) => {
  try {
    const savedBookmarks = localStorage.getItem('sozluk:saved-history');

    if (savedBookmarks !== null && savedBookmarks !== undefined) {
      const parsedBookmarks = JSON.parse(savedBookmarks);

      dispatch({
        type: actionTypes.SET_BOOKMARKS,
        payload: parsedBookmarks,
      });
    }
  } catch (error) {
    // .
  }
};

export const setSavedHistory = () => async (dispatch) => {
  try {
    const savedHistory = localStorage.getItem('sozluk:saved-bookmarks');

    if (savedHistory !== null && savedHistory !== undefined) {
      const parsedHistory = JSON.parse(savedHistory);

      dispatch({
        type: actionTypes.SET_HISTORY,
        payload: parsedHistory,
      });
    }
  } catch (error) {
    // .
  }
};

export const setSavedAutocomplete = () => async (dispatch) => {
  try {
    const savedAutocomplete = localStorage.getItem('sozluk:saved-autocomplete');

    if (savedAutocomplete !== null && savedAutocomplete !== undefined) {
      const parsedAutocomplete = JSON.parse(savedAutocomplete);

      dispatch({
        type: actionTypes.SET_AUTOCOMPLETE,
        payload: parsedAutocomplete,
      });
    }
  } catch (error) {
    // .
  }
};

// bookmarks

export const addBookmark = (word) => async (dispatch, getState) => {
  const state = getState();

  const { bookmarks } = state.data;

  const payload = immer(bookmarks, (nextBookmarks) => {
    nextBookmarks.unshift(word);
  });

  try {
    localStorage.setItem('sozluk:saved-history', JSON.stringify(payload));
  } catch {
    //
  }

  dispatch(actionSetBookmarks(payload));
};

export const removeBookmark = (word) => async (dispatch, getState) => {
  const state = getState();

  const { bookmarks } = state.data;

  const payload = immer(bookmarks, (nextBookmarks) => {
    const wordIndex = bookmarks.findIndex((b) => b === word);

    if (wordIndex > -1) {
      nextBookmarks.splice(wordIndex, 1);
    }
  });

  try {
    localStorage.setItem('sozluk:saved-history', JSON.stringify(payload));
  } catch {
    //
  }

  dispatch(actionSetBookmarks(payload));
};

export const toggleBookmark = (word) => async (dispatch, getState) => {
  const state = getState();

  const bookmarked = state.data.bookmarks.some((b) => b === word);

  if (bookmarked) {
    dispatch(removeBookmark(word));
  } else {
    dispatch(addBookmark(word));
  }
};

export const clearBookmarks = () => async (dispatch) => {
  try {
    localStorage.setItem('sozluk:saved-history', JSON.stringify([]));
  } catch {
    //
  }

  dispatch(actionSetBookmarks([]));
};

// history

export const addHistory = (word) => async (dispatch, getState) => {
  const state = getState();

  const { history, historyLimit } = state.data;

  let payload = immer(history, (nextHistory) => {
    const wordIndex = nextHistory.findIndex((w) => w === word);

    if (wordIndex > -1) {
      nextHistory.splice(wordIndex, 1);
    }

    nextHistory.unshift(word);
  });

  payload = payload.slice(0, historyLimit);

  try {
    localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(payload));
  } catch {
    //
  }

  dispatch(actionSetHistory(payload));
};

export const removeHistory = (word) => async (dispatch, getState) => {
  const state = getState();

  const { history } = state.data;

  const payload = immer(history, (nextHistory) => {
    const wordIndex = history.findIndex((b) => b === word);

    if (wordIndex > -1) {
      nextHistory.splice(wordIndex, 1);
    }
  });

  try {
    localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(payload));
  } catch {
    //
  }

  dispatch(actionSetHistory(payload));
};

export const clearHistory = () => async (dispatch) => {
  try {
    localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify([]));
  } catch {
    //
  }

  dispatch(actionSetHistory([]));
};

export const getWordsByQuery = (query) => (dispatch, getState) => {
  const query2 = query.trim();

  if (query2 === '') {
    return {
      result: [],
    };
  }

  const state = getState();

  let result = state.data.autocomplete;

  const regex = new RegExp(query2
    .replace(new RegExp('[aAÂâ]', 'gi'), '[aAÂâ]')
    .replace(new RegExp('[iİIıîÎ]', 'gi'), '[iİIıîÎ]')
    .replace(new RegExp('[üÜuUÛû]', 'gi'), '[üÜuUÛû]')
    .replace(new RegExp('[cCÇç]', 'gi'), '[cCÇç]')
    .replace(new RegExp('[gGĞğ]', 'gi'), '[gGĞğ]')
    .replace(new RegExp('[sSŞş]', 'gi'), '[sSŞş]')
    .replace(new RegExp('[oOÖö]', 'gi'), '[oOÖö]'), 'gi');

  // filter by query length
  result = result.filter((word) => word.length >= query2.length);

  // filter by regex
  result = result.filter((word) => word.match(regex));

  // data order scoring
  result = result.map((word) => {
    const toLocaleString = (string) => string.toLocaleLowerCase('tr-TR')
      .replace('â', 'a')
      .replace('Â', 'a')
      .replace('î', 'i')
      .replace('Î', 'i')
      .replace('İ', 'i')
      .replace('ı', 'i')
      .replace('û', 'u')
      .replace('Û', 'u')
      .replace('ü', 'u')
      .replace('Ü', 'u')
      .replace('ş', 's')
      .replace('Ş', 's')
      .replace('ö', 'o')
      .replace('Ö', 'o')
      .replace('ç', 'c')
      .replace('Ç', 'c');

    const nameLocaleLowerCase = toLocaleString(word);
    const queryLocaleLowerCase = toLocaleString(query2);

    const indexOf = nameLocaleLowerCase.indexOf(queryLocaleLowerCase);
    const isExactMatch = queryLocaleLowerCase.length === nameLocaleLowerCase.length;

    let score = 0;

    if (!isExactMatch && indexOf === 0) {
      const slicedLength = nameLocaleLowerCase.slice(queryLocaleLowerCase.length).length;

      score = 1 + Number((slicedLength / 10).toFixed(2));
    }

    if (!isExactMatch && indexOf !== 0) {
      const slicedLength = nameLocaleLowerCase.replace(queryLocaleLowerCase, '').length;

      score = 3 + Number((slicedLength / 10).toFixed(2));
    }

    return {
      word,
      score,
    };
  });

  // sort by score
  result = result.sort((a, b) => a.score - b.score);

  // map
  result = result.map((word) => word.word);

  // remove same data from array
  result = Array.from(new Set(result));

  // slice
  result = result.slice(0, 15);

  return {
    result,
  };
};
