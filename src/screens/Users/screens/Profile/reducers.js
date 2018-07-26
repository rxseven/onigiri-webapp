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
import {
  CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  CREDITS_GET,
  CREDITS_GET_FAILURE,
  CREDITS_GET_SUCCESS
} from 'data/credits/actions';
import {
  USER_DELETE,
  USER_DELETE_FAILURE,
  USER_DELETE_SUCCESS,
  USER_RESET
} from 'data/session/types';
import { PROFILE_GET, PROFILE_GET_FAILURE, PROFILE_GET_SUCCESS } from './data/profile/actions';

// Reducers
import data from './data/reducers';

// Constants
const asyncModel = { ...STATE_MODELS.model.asynchronous };

// Initial state
const initialState = fromJS({
  delete: { profile: asyncModel },
  get: {
    credits: asyncModel,
    profile: asyncModel
  },
  post: { checkout: asyncModel }
});

// Immutable map
const map = {
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

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Delete user account
    case USER_DELETE:
      return setAsync(map.delete.profile, state, LOADING);
    case USER_DELETE_FAILURE:
      return setAsync(map.delete.profile, state, ERROR, payload);
    case USER_DELETE_SUCCESS:
      return setAsync(map.delete.profile, state);

    // Get user profile
    case PROFILE_GET:
      return setAsync(map.get.profile, state, LOADING);
    case PROFILE_GET_FAILURE:
      return setAsync(map.get.profile, state, ERROR, payload);
    case PROFILE_GET_SUCCESS:
      return setAsync(map.get.profile, state);

    // Checkout
    case CHECKOUT:
      return setAsync(map.post.checkout, state, LOADING);
    case CHECKOUT_FAILURE:
      return setAsync(map.post.checkout, state, ERROR, payload);
    case CHECKOUT_SUCCESS:
      return setAsync(map.post.checkout, state);

    // Get credits
    case CREDITS_GET:
      return setAsync(map.get.credits, state, LOADING);
    case CREDITS_GET_FAILURE:
      return setAsync(map.get.credits, state, ERROR, payload);
    case CREDITS_GET_SUCCESS:
      return setAsync(map.get.credits, state);

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
