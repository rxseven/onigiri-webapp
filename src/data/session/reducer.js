// Module dependencies
import { createSelector } from 'reselect';

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
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNOUT_FAILURE,
  SIGNOUT_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  USER_DELETE,
  USER_DELETE_FAILURE,
  USER_DELETE_SUCCESS,
  USER_GET,
  USER_GET_FAILURE,
  USER_GET_SUCCESS
} from './actions';

// Initial state
const initialState = {
  authorization: false,
  loading: {
    signin: false,
    verify: false
  },
  user: null
};

// Data model
const dataModel = data => ({
  authorization: true,
  loading: {
    signin: false,
    verify: false
  },
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
    // OAuth
    case OAUTH_FACEBOOK:
    case OAUTH_GOOGLE:
    case OAUTH_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: true
        }
      };
    case OAUTH_FACEBOOK_FAILURE:
    case OAUTH_FAILURE:
    case OAUTH_GOOGLE_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: false
        }
      };
    case OAUTH_FACEBOOK_SUCCESS:
    case OAUTH_GOOGLE_SUCCESS:
      return {
        ...state,
        ...dataModel(action.payload.user)
      };

    // Sign-in & Sign-up
    case SIGNIN:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: true
        }
      };
    case SIGNUP:
      return state;
    case SIGNIN_FAILURE:
      return {
        ...state,
        loading: {
          ...state.loading,
          signin: false
        }
      };
    case SIGNUP_FAILURE:
      return state;
    case SIGNIN_SUCCESS:
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

    // Delete user account
    case USER_DELETE:
    case USER_DELETE_FAILURE:
      return state;
    case USER_DELETE_SUCCESS:
      return {
        ...state,
        ...initialState
      };

    // Get user info
    case USER_GET:
      return {
        ...state,
        authorization: true,
        loading: {
          ...state.loading,
          verify: true
        }
      };
    case USER_GET_FAILURE:
      return {
        ...state,
        ...initialState
      };
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
