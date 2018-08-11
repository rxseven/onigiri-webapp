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

// Types
import type { Asynchronous } from 'types/common/state';

// Action and static types
import {
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_REQUEST,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_REQUEST,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  type Action as ActionSession
} from 'data/session/types';
import { SIGNIN_RESET_UI, type Action as ActionSignIn, type Strategy } from './types';

// Static types
type Action = ActionSession | ActionSignIn;
type Key = Object;
type Model = {
  asynchronous: { post: Asynchronous },
  strategy: Strategy
};
type State = any;

// State shape
const stateShape: Model = {
  asynchronous: {
    post: { ...STATE_MODELS.model.asynchronous }
  },
  strategy: {
    type: null
  }
};

// Immutable key path
const statePath: Key = {
  asynchronous: {
    post: ['post']
  },
  strategy: {
    type: 'type'
  }
};

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState.get('asynchronous'), action: Action): State => {
  switch (action.type) {
    // Authentication
    case OAUTH_FACEBOOK_REQUEST:
    case OAUTH_GOOGLE_REQUEST:
    case OAUTH_REQUEST:
    case SIGNIN_REQUEST:
      return setAsync(statePath.asynchronous.post, state, LOADING);

    case OAUTH_FAILURE:
      return setAsync(statePath.asynchronous.post, state, ERROR);
    case OAUTH_FACEBOOK_FAILURE:
    case OAUTH_GOOGLE_FAILURE:
    case SIGNIN_FAILURE:
      return setAsync(statePath.asynchronous.post, state, ERROR, action.payload);

    case OAUTH_FACEBOOK_SUCCESS:
    case OAUTH_GOOGLE_SUCCESS:
    case SIGNIN_SUCCESS:
      return setAsync(statePath.asynchronous.post, state);

    // Reset state
    case SIGNIN_RESET_UI:
      return initialState.get('asynchronous');

    // Default
    default:
      return state;
  }
};

// Strategy reducer
const strategy = (state: State = initialState.get('strategy'), action: Action): State => {
  switch (action.type) {
    // Authentication
    case SIGNIN_REQUEST:
      return state.set(statePath.strategy.type, 'local');
    case OAUTH_REQUEST:
      return state.set(statePath.strategy.type, 'oauth');

    // Reset state
    case SIGNIN_RESET_UI:
      return initialState.get('strategy');

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({
  asynchronous,
  strategy
});

// Combine reducers
export default combineReducers({ ui });

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'users', 'signin']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
