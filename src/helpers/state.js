// Module dependencies
import { fromJS, Seq } from 'immutable';

import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Set asynchronous status
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

// Convert plain JavaScript objects into Immutable.OrderedMap
// https://github.com/facebook/immutable-js/wiki/Converting-from-JS-objects
export const fromJSOrdered = (js) => {
  if (typeof js !== 'object' || js === null) {
    return js;
  } else if (Array.isArray(js)) {
    return Seq(js)
      .map(fromJSOrdered)
      .toList();
  }
  return Seq(js)
    .map(fromJSOrdered)
    .toOrderedMap();
};

// Generate state for a container component
export const generateState = handler => ({
  state: handler
});

// Extract error message from a network response
export const getError = error => error.response.data.error;
