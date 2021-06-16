import * as actionTypes from './actionTypes';

export const actionSetAutocomplete = (payload) => ({
  type: actionTypes.SET_AUTOCOMPLETE,
  payload,
});

export const actionSetBookmarks = (payload) => ({
  type: actionTypes.SET_BOOKMARKS,
  payload,
});

export const actionSetHistory = (payload) => ({
  type: actionTypes.SET_HISTORY,
  payload,
});
