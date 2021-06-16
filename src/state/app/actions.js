import * as actionTypes from './actionTypes';

export const actionSetAppTitle = (payload) => ({
  type: actionTypes.SET_APP_TITLE,
  payload,
});

export const actionSetLoadingStatus = (payload) => ({
  type: actionTypes.SET_APP_LOADING_STATUS,
  payload,
});

export const actionSetLoadingErrorText = (payload) => ({
  type: actionTypes.SET_APP_LOADING_ERROR_TEXT,
  payload,
});
