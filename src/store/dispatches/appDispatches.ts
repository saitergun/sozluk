import store from '../index';
import {
  SET_TITLE,
  SET_LOADING_STATUS,
  SET_LOADING_ERROR_TEXT,
} from '../actions/appActions';
import {
  IActionSetTitle,
  IActionSetLoadingStatus,
  IActionSetLoadingErrorText,
} from '../interfaces/IActionApp';

export const dispatchSetTitle = (payload: IActionSetTitle['payload']) => {
  store.dispatch({
    type: SET_TITLE,
    payload,
  });

  document.title = `${payload}`;
};

export const dispatchSetLoadingStatus = (payload: IActionSetLoadingStatus['payload']) => {
  store.dispatch({
    type: SET_LOADING_STATUS,
    payload,
  });
};

export const dispatchSetLoadingErrorText = (payload: IActionSetLoadingErrorText['payload']) => {
  store.dispatch({
    type: SET_LOADING_ERROR_TEXT,
    payload,
  });
};
