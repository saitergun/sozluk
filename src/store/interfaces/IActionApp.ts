import {
  SET_TITLE,
  SET_LOADING_STATUS,
  SET_LOADING_ERROR_TEXT,
} from '../actions/appActions';

export type IActionSetTitle = {
  type: typeof SET_TITLE,
  payload: String,
};

export type IActionSetLoadingStatus = {
  type: typeof SET_LOADING_STATUS,
  payload: Boolean,
};

export type IActionSetLoadingErrorText = {
  type: typeof SET_LOADING_ERROR_TEXT,
  payload: String,
};

export type IActionData =
  | IActionSetTitle
  | IActionSetLoadingStatus
  | IActionSetLoadingErrorText;

export default IActionData;
