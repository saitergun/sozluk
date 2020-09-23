import IActionApp from '../interfaces/IActionApp';
import appInitialState from '../initialStates/appInitialState';
import {
  SET_TITLE,
  SET_LOADING_STATUS,
  SET_LOADING_ERROR_TEXT,

  actionSetTitle,
  actionSetLoadingStatus,
  actionSetLoadingErrorText,
} from '../actions/appActions';

const appReducer = (state = appInitialState, action: IActionApp) => {
  switch(action.type) {
    case SET_TITLE: return actionSetTitle(state, action);
    case SET_LOADING_STATUS: return actionSetLoadingStatus(state, action);
    case SET_LOADING_ERROR_TEXT: return actionSetLoadingErrorText(state, action);

    default:
      return state;
  }
};

export default appReducer;
