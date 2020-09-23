import IStateApp from '../interfaces/IStateApp';
import {
  IActionSetTitle,
  IActionSetLoadingStatus,
  IActionSetLoadingErrorText,
} from '../interfaces/IActionApp';

export const SET_TITLE              = 'app/SET_TITLE';
export const SET_LOADING_STATUS     = 'app/SET_LOADING_STATUS';
export const SET_LOADING_ERROR_TEXT = 'app/SET_LOADING_ERROR_TEXT';

export const actionSetTitle = (state: IStateApp, action: IActionSetTitle) => {
  state.title = action.payload;

  return {...state};
};

export const actionSetLoadingStatus = (state: IStateApp, action: IActionSetLoadingStatus) => {
  state.loading = action.payload;

  return {...state};
};

export const actionSetLoadingErrorText = (state: IStateApp, action: IActionSetLoadingErrorText) => {
  state.loadingErrorText = action.payload;

  return {...state};
};
