// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import {
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
import dataReducer from './data/reducer';

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
const asyncReducer = (state = initialState, action) => {
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
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.users.profile;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
