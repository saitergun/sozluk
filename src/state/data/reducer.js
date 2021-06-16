const INITAL_STATE = {
  autocomplete: [],

  bookmarks: [],

  history: [],
  historyLimit: 25,
};

const dataReducer = (state = INITAL_STATE, { type, payload }) => {
  switch (type) {
    case 'data/SET_AUTOCOMPLETE': return { ...state, autocomplete: payload };

    case 'data/SET_BOOKMARKS': return { ...state, bookmarks: payload };

    case 'data/SET_HISTORY': return { ...state, history: payload };

    default:
      return state;
  }
};

export default dataReducer;
