// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

import STATE_MODELS from '../../../../constants/models/state';
import { ERROR, LOADING } from '../../../../constants/types/asynchronous';
import { setAsync } from '../../../../helpers/data';

// Actions
import {
  OAUTH_FACEBOOK,
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS
} from '../../../../data/session/actions';
import { SIGNIN_RESET_UI } from './actions';

// Initial state
const initialState = fromJS({
  asynchronous: {
    post: { ...STATE_MODELS.model.asynchronous }
  },
  strategy: {
    type: null
  }
});

// Immutable map
const map = {
  asynchronous: {
    post: ['post']
  },
  strategy: {
    type: 'type'
  }
};

// Asynchronous reducer
const asynchronous = (state = initialState.get('asynchronous'), action) => {
  const { payload, type } = action;

  switch (type) {
    // Authentication
    case OAUTH_FACEBOOK:
    case OAUTH_GOOGLE:
    case OAUTH_REQUEST:
    case SIGNIN:
      return setAsync(map.asynchronous.post, state, LOADING);

    case OAUTH_FAILURE:
      return setAsync(map.asynchronous.post, state, ERROR);
    case OAUTH_FACEBOOK_FAILURE:
    case OAUTH_GOOGLE_FAILURE:
    case SIGNIN_FAILURE:
      return setAsync(map.asynchronous.post, state, ERROR, payload);

    case OAUTH_FACEBOOK_SUCCESS:
    case OAUTH_GOOGLE_SUCCESS:
    case SIGNIN_SUCCESS:
      return setAsync(map.asynchronous.post, state);

    // Reset state
    case SIGNIN_RESET_UI:
      return initialState.get('asynchronous');

    // Default
    default:
      return state;
  }
};

// Strategy reducer
const strategy = (state = initialState.get('strategy'), action) => {
  const { type } = action;

  switch (type) {
    // Authentication
    case SIGNIN:
      return state.set(map.strategy.type, 'local');
    case OAUTH_REQUEST:
      return state.set(map.strategy.type, 'oauth');

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
