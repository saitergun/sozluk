import IStateData from '../interfaces/IStateData';
import {
  IActionSetHome,
  IActionSetAutocomplete,
  IActionSetHistory,
  IActionAddToHistory,
  IActionRemoveFromHistory,
  IActionClearHistory,
  IActionSetBookmarks,
  IActionAddToBookmarks,
  IActionRemoveFromBookmark,
  IActionClearBookmarks,
} from '../interfaces/IActionData';

export const SET_HOME               = 'data/SET_HOME';
export const SET_AUTOCOMPLETE       = 'data/SET_AUTOCOMPLETE';

export const SET_HISTORY            = 'data/SET_HISTORY';
export const ADD_TO_HISTORY         = 'data/ADD_TO_HISTORY';
export const REMOVE_FROM_HISTORY    = 'data/REMOVE_FROM_HISTORY';
export const CLEAR_HISTORY          = 'data/CLEAR_HISTORY';

export const SET_BOOKMARKS          = 'data/SET_BOOKMARKS';
export const ADD_TO_BOOKMARKS       = 'data/ADD_TO_BOOKMARKS';
export const REMOVE_FROM_BOOKMARKS  = 'data/REMOVE_FROM_BOOKMARKS';
export const CLEAR_BOOKMARKS        = 'data/CLEAR_BOOKMARKS';

export const actionSetHome = (state: IStateData, action: IActionSetHome) => {
  state.home = action.payload;

  window.localStorage.setItem('sozluk:saved-home', JSON.stringify(state.home));

  return {...state};
};

export const actionSetAutocomplete = (state: IStateData, action: IActionSetAutocomplete) => {
  state.autocomplete = action.payload;

  window.localStorage.setItem('sozluk:saved-autocomplete', JSON.stringify(action.payload));

  return {...state};
};

export const actionSetHistory = (state: IStateData, action: IActionSetHistory) => {
  state.history = action.payload;

  return {...state};
};

export const actionAddToHistory = (state: IStateData, action: IActionAddToHistory) => {
  // remove word if include
  if (state.history.includes(action.payload)) {
    const index = state.history.indexOf(action.payload);

    if (index > -1) {
      state.history.splice(index, 1);
    }
  }

  state.history.unshift(action.payload);

  window.localStorage.setItem('sozluk:saved-history', JSON.stringify(state.history.slice(0, state.historyLimit)));

  return {...state};
};

export const actionRemoveFromHistory = (state: IStateData, action: IActionRemoveFromHistory) => {
  // remove word if include
  if (state.history.includes(action.payload)) {
    const index = state.history.indexOf(action.payload);

    if (index > -1) {
      state.history.splice(index, 1);
    }
  }

  window.localStorage.setItem('sozluk:saved-history', JSON.stringify(state.history.slice(0, state.historyLimit)));

  return {...state};
};

export const actionClearHistory = (state: IStateData, action: IActionClearHistory) => {
  state.history = [];

  window.localStorage.removeItem('sozluk:saved-history');

  return {...state};
};

export const actionSetBookmarks = (state: IStateData, action: IActionSetBookmarks) => {
  state.bookmarks = action.payload;

  return {...state};
};

export const actionAddToBookmarks = (state: IStateData, action: IActionAddToBookmarks) => {
  // remove word if include
  if (state.bookmarks.includes(action.payload)) {
    const index = state.bookmarks.indexOf(action.payload);

    if (index > -1) {
      state.bookmarks.splice(index, 1);
    }
  }

  state.bookmarks.unshift(action.payload);

  window.localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(state.bookmarks));

  return {...state};
};

export const actionRemoveFromBookmarks = (state: IStateData, action: IActionRemoveFromBookmark) => {
  // remove word if include
  if (state.bookmarks.includes(action.payload)) {
    const index = state.bookmarks.indexOf(action.payload);

    if (index > -1) {
      state.bookmarks.splice(index, 1);
    }
  }

  window.localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(state.bookmarks));

  return {...state};
};

export const actionClearBookmarks = (state: IStateData, action: IActionClearBookmarks) => {
  state.bookmarks = [];

  window.localStorage.removeItem('sozluk:saved-bookmarks');

  return {...state};
};
