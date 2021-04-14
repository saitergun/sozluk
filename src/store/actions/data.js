import immer from 'immer';

export const getWordsByQuery = (query) => {
  return (dispatch, getState) => {
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
      .replace(new RegExp('[cCÇc]', 'gi'), '[cCÇc]')
      .replace(new RegExp('[gGĞg]', 'gi'), '[gGĞg]')
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
        score = 1 + Number((nameLocaleLowerCase.slice(queryLocaleLowerCase.length).length / 10).toFixed(2));
      }

      if (!isExactMatch && indexOf !== 0) {
        score = 3 + Number((nameLocaleLowerCase.replace(queryLocaleLowerCase, '').length / 10).toFixed(2));
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
};

// history

export const addHistory = (word) => {
  return async (dispatch, getState) => {
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
      localStorage.setItem('sozluk:saved-history', JSON.stringify(payload));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_HISTORY',
      payload,
    });
  };
};

export const removeHistory = (word) => {
  return async (dispatch, getState) => {
    const state = getState();

    const { history } = state.data;

    const payload = immer(history, (nextHistory) => {
      const wordIndex = history.findIndex((b) => b === word);

      if (wordIndex > -1) {
        nextHistory.splice(wordIndex, 1);
      }
    });

    try {
      localStorage.setItem('sozluk:saved-history', JSON.stringify(payload));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_HISTORY',
      payload,
    });
  };
};

export const clearHistory = () => {
  return async (dispatch) => {
    try {
      localStorage.setItem('sozluk:saved-history', JSON.stringify([]));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_HISTORY',
      payload: [],
    });
  };
};

// bookmarks

export const addBookmark = (word) => {
  return async (dispatch, getState) => {
    const state = getState();

    const { bookmarks } = state.data;

    const payload = immer(bookmarks, (nextBookmarks) => {
      nextBookmarks.unshift(word);
    });

    try {
      localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(payload));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_BOOKMARKS',
      payload,
    });
  };
};

export const removeBookmark = (word) => {
  return async (dispatch, getState) => {
    const state = getState();

    const { bookmarks } = state.data;

    const payload = immer(bookmarks, (nextBookmarks) => {
      const wordIndex = bookmarks.findIndex((b) => b === word);

      if (wordIndex > -1) {
        nextBookmarks.splice(wordIndex, 1);
      }
    });

    try {
      localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify(payload));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_BOOKMARKS',
      payload,
    });
  };
};

export const toggleBookmark = (word) => {
  return async (dispatch, getState) => {
    const state = getState();

    const bookmarked = state.data.bookmarks.some((b) => b === word);

    if (bookmarked) {
      dispatch(removeBookmark(word));
    } else {
      dispatch(addBookmark(word));
    }
  };
};

export const clearBookmarks = () => {
  return async (dispatch) => {
    try {
      localStorage.setItem('sozluk:saved-bookmarks', JSON.stringify([]));
    } catch {
      //
    }

    dispatch({
      type: 'data/SET_BOOKMARKS',
      payload: [],
    });
  };
};
