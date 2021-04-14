import * as API from '../../util/api';

export const startApp = () => {
  return async (dispatch) => {
    // #region set bookmarks
    try {
      const bookmarks = localStorage.getItem('sozluk:saved-bookmarks');

      if (bookmarks !== null && bookmarks !== undefined) {
        dispatch({
          type: 'data/SET_BOOKMARKS',
          payload: JSON.parse(bookmarks),
        });
      }
    } catch (error) {
      // .
    }
    // #endregion

    // #region set history
    try {
      const history = localStorage.getItem('sozluk:saved-history');

      if (history !== null && history !== undefined) {
        dispatch({
          type: 'data/SET_HISTORY',
          payload: JSON.parse(history),
        });
      }
    } catch (error) {
      // .
    }
    // #endregion

    API.getAutocomplete().then((response) => {
      dispatch({
        type: 'data/SET_AUTOCOMPLETE',
        payload: response,
      });
    }).catch((error) => {
      dispatch({
        type: 'app/SET_APP_LOADING_ERROR_TEXT',
        payload: error,
      });
    }).finally(() => {
      setTimeout(() => {
        dispatch({
          type: 'app/SET_APP_LOADING_STATUS',
          payload: false,
        });
      }, 1000);
    });
  };
};

export const setAppTitle = (title) => {
  return async (dispatch, getState) => {
    const state = getState();

    const appName = state.app.name;

    document.title = title ? `${title} / ${appName}` : appName;

    dispatch({
      type: 'app/SET_APP_TITLE',
      payload: title,
    });
  };
};
