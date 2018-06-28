// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import {
  CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  CREDITS_GET,
  CREDITS_GET_FAILURE,
  CREDITS_GET_SUCCESS
} from '../../../../data/credits/actions';
import {
  USER_DELETE,
  USER_DELETE_FAILURE,
  USER_DELETE_SUCCESS
} from '../../../../data/session/actions';
import { PROFILE_GET, PROFILE_GET_FAILURE, PROFILE_GET_SUCCESS } from './data/profile/actions';

// Reducers
import data from './data/reducers';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  delete: { profile: { ...STATE_MODELS.model.asynchronous } },
  get: {
    credits: { ...STATE_MODELS.model.asynchronous },
    profile: { ...STATE_MODELS.model.asynchronous }
  },
  post: { checkout: { ...STATE_MODELS.model.asynchronous } }
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  switch (action.type) {
    // Delete user account
    case USER_DELETE:
      return {
        ...state,
        delete: {
          profile: {
            ...initialState.delete.profile,
            loading: true
          }
        }
      };
    case USER_DELETE_FAILURE:
      return {
        ...state,
        delete: {
          profile: {
            ...initialState.delete.profile,
            error: action.payload
          }
        }
      };
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        delete: {
          profile: initialState.get.profile
        }
      };

    // Get user profile
    case PROFILE_GET:
      return {
        ...state,
        get: {
          ...state.get,
          profile: {
            ...initialState.get.profile,
            loading: true
          }
        }
      };
    case PROFILE_GET_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          profile: {
            ...initialState.get.profile,
            error: action.payload
          }
        }
      };
    case PROFILE_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          profile: initialState.get.profile
        }
      };

    // Checkout
    case CHECKOUT:
      return {
        ...state,
        post: {
          checkout: {
            ...initialState.post.checkout,
            loading: true
          }
        }
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        post: {
          checkout: {
            ...initialState.post.checkout,
            error: action.payload
          }
        }
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        post: {
          checkout: initialState.post.checkout
        }
      };

    // Get credits
    case CREDITS_GET:
      return {
        ...state,
        get: {
          ...state.get,
          credits: {
            ...initialState.get.credits,
            loading: true
          }
        }
      };
    case CREDITS_GET_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          credits: {
            ...initialState.get.credits,
            error: action.payload
          }
        }
      };
    case CREDITS_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          credits: initialState.get.credits
        }
      };

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
const getNode = state => state.screens.users.profile;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
