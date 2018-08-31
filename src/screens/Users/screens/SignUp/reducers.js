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

// Types
import type { Asynchronous } from 'types/common/state';

// Action and static types
import {
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  type Action as ActionSession
} from 'data/session/types';
import { SIGNUP_RESET_UI, type Action as ActionSignUp } from './types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Action = ActionSession | ActionSignUp;
type Key = Object;
type Model = { post: Asynchronous };
type State = any;

// State shape
export const stateShape: Model = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Immutable key path
const statePath: Key = { post: ['post'] };

// Initial state
export const initialState: State = fromJS(stateShape);

// Asynchronous reducer
export const asynchronous = (
  state: State = initialState,
  action: Action = { type: UNKNOWN }
): State => {
  switch (action.type) {
    // Sign-up
    case SIGNUP_REQUEST:
      return setAsync(statePath.post, state, LOADING);
    case SIGNUP_FAILURE:
      return setAsync(statePath.post, state, ERROR, action.payload);
    case SIGNUP_SUCCESS:
      return initialState;

    // Reset state
    case SIGNUP_RESET_UI:
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
export const getNode = (state: any): any => getDomain(state, ['screens', 'users', 'signup']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
