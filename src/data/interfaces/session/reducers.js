// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Action and static types
import { SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from 'data/session/types';
import type { Action } from 'data/session/types';
import type { Asynchronous } from 'types/common/state';

// Static types
type Key = Object;
type Model = { signout: Asynchronous };
type State = any;

// State shape
const stateShape: Model = {
  signout: { ...STATE_MODELS.model.asynchronous }
};

// Immutable key path
const statePath: Key = {
  signout: ['signout']
};

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Sign-out
    case SIGNOUT_REQUEST:
      return setAsync(statePath.signout, state, LOADING);
    case SIGNOUT_FAILURE:
      return setAsync(statePath.signout, state, ERROR, action.payload);
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
