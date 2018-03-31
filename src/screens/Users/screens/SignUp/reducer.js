// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../../../data/session/actions';
import { SIGNUP_RESET_UI } from './actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case SIGNUP_SUCCESS:
    case SIGNUP_RESET_UI:
      return {
        ...initialState
      };
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
  ui: uiReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.users.signup;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.asynchronous);
