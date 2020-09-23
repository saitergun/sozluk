import { IHome } from './IStateData';
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

export interface IActionSetHome {
  type: typeof SET_HOME,
  payload: IHome,
};

export interface IActionSetAutocomplete {
  type: typeof SET_AUTOCOMPLETE,
  payload: Array<String>,
};

export interface IActionSetHistory {
  type: typeof SET_HISTORY,
  payload: Array<String>,
};

export interface IActionAddToHistory {
  type: typeof ADD_TO_HISTORY,
  payload: String,
};

export interface IActionRemoveFromHistory {
  type: typeof REMOVE_FROM_HISTORY,
  payload: String,
};

export interface IActionClearHistory {
  type: typeof CLEAR_HISTORY,
};

export interface IActionSetBookmarks {
  type: typeof SET_BOOKMARKS,
  payload: Array<String>,
};

export interface IActionAddToBookmarks {
  type: typeof ADD_TO_BOOKMARKS,
  payload: String,
};

export interface IActionRemoveFromBookmark {
  type: typeof REMOVE_FROM_BOOKMARKS,
  payload: String,
};

export interface IActionClearBookmarks {
  type: typeof CLEAR_BOOKMARKS,
};

export type IActionData =
  | IActionSetHome
  | IActionSetAutocomplete
  | IActionSetHistory
  | IActionAddToHistory
  | IActionRemoveFromHistory
  | IActionClearHistory
  | IActionSetBookmarks
  | IActionAddToBookmarks
  | IActionRemoveFromBookmark
  | IActionClearBookmarks;

export default IActionData;
