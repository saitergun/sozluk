import {
  actionSetAppTitle,
  actionSetLoadingStatus,
  actionSetLoadingErrorText,
} from './actions';

import {
  actionSetAutocomplete,
} from '../data/actions';

import {
  setSavedAutocomplete,
  setSavedBookmarks,
  setSavedHistory,
} from '../data/dispatches';

export const startApp = () => {
  return async (dispatch, getState) => {
    dispatch(setSavedBookmarks());
    dispatch(setSavedHistory());
    dispatch(setSavedAutocomplete());

    const state = getState();

    if (state.data.autocomplete.length === 0) {
      fetch('/autocomplete.json')
        .then((response) => response.json())
        .then((response) => {
          localStorage.setItem('sozluk:saved-autocomplete', JSON.stringify(response));

          dispatch(actionSetAutocomplete(response));
        })
        .catch(() => dispatch(actionSetLoadingErrorText('Sözler yüklenirken beklenmeyen bir hata oluştu.')))
        .finally(() => dispatch(actionSetLoadingStatus(false)));
    } else {
      dispatch(actionSetLoadingStatus(false));
    }
  };
};

export const setAppTitle = (title) => {
  return async (dispatch, getState) => {
    const state = getState();

    document.title = title ? `${title} / ${state.app.name}` : state.app.name;

    dispatch(actionSetAppTitle(title));
  };
};
