// Module dependencies
import { fromJS } from 'immutable';
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
} from './types';

// Initial state
const initialState = fromJS({
  authorization: false,
  loading: {
    signin: false,
    verify: false
  },
  user: null
});

// Set user state
const setUser = (state, payload) =>
  state
    .set('authorization', true)
    .setIn(['loading', 'signin'], false)
    .setIn(['loading', 'verify'], false)
    .set('user', payload);

// Set loading state
const setLoading = (state, node, status = true) => state.setIn(['loading', node], status);

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // OAuth
    case OAUTH_FACEBOOK:
    case OAUTH_GOOGLE:
    case OAUTH_REQUEST:
      return setLoading(state, 'signin');
    case OAUTH_FACEBOOK_FAILURE:
    case OAUTH_GOOGLE_FAILURE:
    case OAUTH_FAILURE:
      return setLoading(state, 'signin', false);
    case OAUTH_FACEBOOK_SUCCESS:
    case OAUTH_GOOGLE_SUCCESS:
      return setUser(state, payload);

    // Sign-in
    case SIGNIN:
      return setLoading(state, 'signin');
    case SIGNIN_FAILURE:
      return setLoading(state, 'signin', false);
    case SIGNIN_SUCCESS:
      return setUser(state, payload);

    // Sign-up
    case SIGNUP:
    case SIGNUP_FAILURE:
      return state;
    case SIGNUP_SUCCESS:
      return setUser(state, payload);

    // Sign-out
    case SIGNOUT:
    case SIGNOUT_FAILURE:
      return state;
    case SIGNOUT_SUCCESS:
      return initialState;

    // Delete user account
    case USER_DELETE:
    case USER_DELETE_FAILURE:
      return state;
    case USER_DELETE_SUCCESS:
      return initialState;

    // Get user info
    case USER_GET:
      return setLoading(state.set('authorization', true), 'verify');
    case USER_GET_FAILURE:
      return initialState;
    case USER_GET_SUCCESS:
      return setUser(state, payload);

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.get('data');

// Get session state
export const getSession = createSelector(getNode, node => node.get('session'));

// Get authorization state
export const getAuth = createSelector(getNode, node => node.getIn(['session', 'authorization']));
