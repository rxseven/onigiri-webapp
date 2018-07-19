// Module dependencies
import { fromJS } from 'immutable';

// Constants
import { ERROR, LOADING } from '../constants/types/asynchronous';

// Constants
import STATE_MODELS from '../constants/models/state';

// Set asynchronous status
// eslint-disable-next-line
export const setAsync = (selector, state, type = undefined, payload = null) => {
  switch (type) {
    case LOADING:
      return state.setIn([...selector, LOADING], true).setIn([...selector, 'error'], false);
    case ERROR:
      return state.setIn([...selector, LOADING], false).setIn([...selector, 'error'], payload);
    default:
      return state.setIn(selector, fromJS(STATE_MODELS.model.asynchronous));
  }
};
