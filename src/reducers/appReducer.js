const initialState = {
  name: 'sözlük',
  title: 'sözlük',

  loading: true,
  loadingErrorText: null,
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_APP_TITLE':
      state.title = payload;
      document.title = payload;

      return {...state};
    case 'SET_APP_LOADING_STATUS':
      state.loading = payload;

      return {...state};
    case 'SET_APP_LOADING_ERROR_TEXT':
      state.loadingErrorText = payload;

      return {...state};
    default:
      return state;
  }
}

export default appReducer;
