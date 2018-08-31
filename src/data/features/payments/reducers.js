// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Selectors
import { getDomain } from 'selectors';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Action and static types
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  UNKNOWN,
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
export const stateShape: Model = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Immutable key path
const statePath: Key = {
  post: ['post']
};

// Initial state
export const initialState: State = fromJS(stateShape);

// Asynchronous reducer
export const asynchronous = (
  state: State = initialState,
  action: Action = { type: UNKNOWN }
): State => {
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
export const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({ ui });

// Non-memoized utility selectors
export const getNode = (state: any): any => getDomain(state, ['data', 'features', 'payments']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
