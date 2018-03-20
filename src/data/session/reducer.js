// Module dependencies
import { createSelector } from 'reselect';

// Actions
import {
  SIGNOUT,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  USER_GET,
  USER_GET_FAILURE,
  USER_GET_SUCCESS
} from './actions';

// Initial state
const initialState = {
  authorization: false,
  verifying: false,
  user: null
};

// Data model
const dataModel = data => ({
  authorization: true,
  verifying: false,
  user: {
    id: data.id,
    email: data.email,
    name: data.name,
    photo: data.photo
  }
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Sign-up
    case SIGNUP:
      return state;
    case SIGNUP_FAILURE:
      return state;
    case SIGNUP_SUCCESS:
      return {
        ...state,
        ...dataModel(action.payload.user)
      };

    // Sign-out
    case SIGNOUT:
    case SIGNOUT_FAILURE:
      return state;
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        ...initialState
      };

    // Get user info
    case USER_GET:
      return {
        ...state,
        authorization: true,
        verifying: true
      };
    case USER_GET_FAILURE:
      return state;
    case USER_GET_SUCCESS:
      return {
        ...state,
        ...dataModel(action.payload)
      };

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.data;

// Get session state
export const getSession = createSelector(getNode, node => node.session);

// Get authorization state
export const getAuth = createSelector(getNode, node => node.session.authorization);
