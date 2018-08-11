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

// Static types
import type { Asynchronous } from 'types/common/state';

// Action and static types
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CREDITS_GET_FAILURE,
  CREDITS_GET_REQUEST,
  CREDITS_GET_SUCCESS,
  type Action as ActionCredits
} from 'data/credits/types';
import {
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_RESET,
  type Action as ActionSession
} from 'data/session/types';
import {
  PROFILE_GET_FAILURE,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  type Action as ActionProfile
} from './data/profile/types';

// Reducers
import data from './data/reducers';

// Constants
const asyncModel = { ...STATE_MODELS.model.asynchronous };

// Static types
type Action = ActionCredits | ActionSession | ActionProfile;
type Key = Object;
type Model = {
  delete: {
    profile: Asynchronous
  },
  get: {
    credits: Asynchronous,
    profile: Asynchronous
  },
  post: {
    checkout: Asynchronous
  }
};
type State = any;

// State shape
const stateShape: Model = {
  delete: { profile: asyncModel },
  get: {
    credits: asyncModel,
    profile: asyncModel
  },
  post: { checkout: asyncModel }
};

// Immutable key path
const statePath: Key = {
  delete: {
    profile: ['delete', 'profile']
  },
  get: {
    credits: ['get', 'credits'],
    profile: ['get', 'profile']
  },
  post: {
    checkout: ['post', 'checkout']
  }
};

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Delete user account
    case USER_DELETE_REQUEST:
      return setAsync(statePath.delete.profile, state, LOADING);
    case USER_DELETE_FAILURE:
      return setAsync(statePath.delete.profile, state, ERROR, action.payload);
    case USER_DELETE_SUCCESS:
      return setAsync(statePath.delete.profile, state);

    // Get user profile
    case PROFILE_GET_REQUEST:
      return setAsync(statePath.get.profile, state, LOADING);
    case PROFILE_GET_FAILURE:
      return setAsync(statePath.get.profile, state, ERROR, action.payload);
    case PROFILE_GET_SUCCESS:
      return setAsync(statePath.get.profile, state);

    // Checkout
    case CHECKOUT_REQUEST:
      return setAsync(statePath.post.checkout, state, LOADING);
    case CHECKOUT_FAILURE:
      return setAsync(statePath.post.checkout, state, ERROR, action.payload);
    case CHECKOUT_SUCCESS:
      return setAsync(statePath.post.checkout, state);

    // Get credits
    case CREDITS_GET_REQUEST:
      return setAsync(statePath.get.credits, state, LOADING);
    case CREDITS_GET_FAILURE:
      return setAsync(statePath.get.credits, state, ERROR, action.payload);
    case CREDITS_GET_SUCCESS:
      return setAsync(statePath.get.credits, state);

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
export default combineReducers({
  data,
  ui
});

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'users', 'profile']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
