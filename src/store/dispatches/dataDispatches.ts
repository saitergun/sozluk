import store from '../index';
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
} from '../actions/dataActions';
import {
  IActionSetHome,
  IActionSetAutocomplete,

  IActionSetHistory,
  IActionAddToHistory,
  IActionRemoveFromHistory,

  IActionSetBookmarks,
  IActionAddToBookmarks,
  IActionRemoveFromBookmark,
} from '../interfaces/IActionData';

export const dispatchSetHome = (payload: IActionSetHome['payload']) => {
  store.dispatch({
    type: SET_HOME,
    payload,
  });
};

export const dispatchSetAutocomplete = (payload: IActionSetAutocomplete['payload']) => {
  store.dispatch({
    type: SET_AUTOCOMPLETE,
    payload,
  });
};

export const dispatchSetHistory = (payload: IActionSetHistory['payload']) => {
  store.dispatch({
    type: SET_HISTORY,
    payload,
  });
};

export const dispatchAddToHistory = (payload: IActionAddToHistory['payload']) => {
  store.dispatch({
    type: ADD_TO_HISTORY,
    payload,
  });
};

export const dispatchRemoveFromHistory = (payload: IActionRemoveFromHistory['payload']) => {
  store.dispatch({
    type: REMOVE_FROM_HISTORY,
    payload,
  });
};

export const dispatchClearHistory = () => {
  store.dispatch({
    type: CLEAR_HISTORY,
  });
};

export const dispatchSetBookmarks = (payload: IActionSetBookmarks['payload']) => {
  store.dispatch({
    type: SET_BOOKMARKS,
    payload,
  });
};

export const dispatchAddToBookmarks = (payload: IActionAddToBookmarks['payload']) => {
  store.dispatch({
    type: ADD_TO_BOOKMARKS,
    payload,
  });
};

export const dispatchRemoveFromBookmarks = (payload: IActionRemoveFromBookmark['payload']) => {
  store.dispatch({
    type: REMOVE_FROM_BOOKMARKS,
    payload,
  });
};

export const dispatchClearBookmarks = () => {
  store.dispatch({
    type: CLEAR_BOOKMARKS,
  });
};
