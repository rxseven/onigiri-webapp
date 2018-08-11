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
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  type Action as ActionCredits
} from 'data/credits/types';
import { USER_RESET, type Action as ActionSession } from 'data/session/types';
import type { Asynchronous } from 'types/common/state';

// Static types
type Action = ActionSession | ActionCredits;
type Key = Object;
type Model = { post: Asynchronous };
type State = any;

// State shape
const stateShape: Model = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Immutable key path
const statePath: Key = {
  post: ['post']
};

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Checkout
    case CHECKOUT_REQUEST:
      return setAsync(statePath.post, state, LOADING);
    case CHECKOUT_FAILURE:
      return setAsync(statePath.post, state, ERROR, action.payload);
    case CHECKOUT_SUCCESS:
      return initialState;

    // Reset state
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({ ui });

// Non-memoized utility selectors
const getNode = state => state.getIn(['data', 'features', 'payments']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
