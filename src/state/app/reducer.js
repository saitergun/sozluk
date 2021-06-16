import * as actionTypes from './actionTypes';

const INITAL_STATE = {
  name: 'sözlük',
  title: 'sözlük',

  loading: true,
  loadingErrorText: null,
};

const appReducer = (state = INITAL_STATE, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_APP_TITLE:
      return {
        ...state,
        title: payload,
      };

    case actionTypes.SET_APP_LOADING_STATUS:
      return {
        ...state,
        loading: payload,
      };

    case actionTypes.SET_APP_LOADING_ERROR_TEXT:
      return {
        ...state,
        loadingErrorText: payload,
      };

    default:
      return state;
  }
};

export default appReducer;
