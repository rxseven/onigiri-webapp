// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux-immutable';

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
const asynchronous = (state = initialState, action) => {
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
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({ ui });

// Non-memoized utility selectors
const getNode = state => state.screens.users.signup;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.asynchronous);
