import IActionData from '../interfaces/IActionData';
import dataInitialState from '../initialStates/dataInitialState';
import {
  SET_HOME,
  SET_AUTOCOMPLETE,

  SET_HISTORY,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAR_HISTORY,

  SET_BOOKMARKS,
  ADD_TO_BOOKMARKS,
  REMOVE_FROM_BOOKMARKS,
  CLEAR_BOOKMARKS,

  actionSetHome,
  actionSetAutocomplete,

  actionSetHistory,
  actionAddToHistory,
  actionRemoveFromHistory,
  actionClearHistory,

  actionSetBookmarks,
  actionAddToBookmarks,
  actionRemoveFromBookmarks,
  actionClearBookmarks
} from '../actions/dataActions';

const dataReducer = (state = dataInitialState, action: IActionData) => {
  switch(action.type) {
    case SET_HOME: return actionSetHome(state, action);
    case SET_AUTOCOMPLETE: return actionSetAutocomplete(state, action);

    case SET_HISTORY: return actionSetHistory(state, action);
    case ADD_TO_HISTORY: return actionAddToHistory(state, action);
    case REMOVE_FROM_HISTORY: return actionRemoveFromHistory(state, action);
    case CLEAR_HISTORY: return actionClearHistory(state, action);

    case SET_BOOKMARKS: return actionSetBookmarks(state, action);
    case ADD_TO_BOOKMARKS: return actionAddToBookmarks(state, action);
    case REMOVE_FROM_BOOKMARKS: return actionRemoveFromBookmarks(state, action);
    case CLEAR_BOOKMARKS: return actionClearBookmarks(state, action);

    default:
      return state;
  }
};

export default dataReducer;
