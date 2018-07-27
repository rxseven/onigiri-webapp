// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Action types
import { SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from 'data/session/types';

// Initial state
const initialState = fromJS({
  signout: { ...STATE_MODELS.model.asynchronous }
});

// Immutable map
const map = {
  signout: ['signout']
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Sign-out
    case SIGNOUT_REQUEST:
      return setAsync(map.signout, state, LOADING);
    case SIGNOUT_FAILURE:
      return setAsync(map.signout, state, ERROR, payload);
    case SIGNOUT_SUCCESS:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Combine reducers
export default combineReducers({ asynchronous });

// Non-memoized utility selectors
const getNode = state => state.getIn(['data', 'interfaces']);

// Get session state
export const getSession = createSelector(getNode, node => node.get('session'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['session', 'asynchronous']));
