// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { PROFILE_GET, PROFILE_GET_FAILURE, PROFILE_GET_SUCCESS } from './data/profile/actions';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: {
    profile: { ...STATE_MODELS.model.asynchronous }
  }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
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
