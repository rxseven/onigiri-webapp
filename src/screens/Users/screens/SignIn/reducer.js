// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import {
  OAUTH_FACEBOOK,
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS
} from '../../../../data/session/actions';
import { SIGNIN_RESET_UI } from './actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  asynchronous: {
    post: { ...STATE_MODELS.model.asynchronous }
  },
  strategy: {
    type: null
  }
};

// Asynchronous reducer
const asyncReducer = (state = initialState.asynchronous, action) => {
  switch (action.type) {
    case OAUTH_FACEBOOK:
    case OAUTH_REQUEST:
    case SIGNIN:
      return {
        ...state,
        post: {
          ...initialState.asynchronous.post,
          loading: true
        }
      };
    case OAUTH_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.asynchronous.post,
          loading: false
        }
      };
    case OAUTH_FACEBOOK_FAILURE:
    case SIGNIN_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.asynchronous.post,
          error: action.payload
        }
      };
    case OAUTH_FACEBOOK_SUCCESS:
    case SIGNIN_SUCCESS:
    case SIGNIN_RESET_UI:
      return {
        ...initialState.asynchronous
      };

    // Default
    default:
      return state;
  }
};

// Strategy reducer
const strategyReducer = (state = initialState.strategy, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        type: 'local'
      };
    case OAUTH_REQUEST:
      return {
        ...state,
        type: 'oauth'
      };
    case SIGNIN_RESET_UI:
      return {
        ...initialState.strategy
      };

    // Default
    default:
      return state;
  }
};

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer,
  strategy: strategyReducer
});

// Combine reducers
export default combineReducers({
  ui: uiReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.users.signin;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.asynchronous);
