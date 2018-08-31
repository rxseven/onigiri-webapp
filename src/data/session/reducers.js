// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Action and static types
import {
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_REQUEST,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_REQUEST,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  UNKNOWN,
  type Action,
  type Session
} from './types';

// Selectors
import { getNode } from '../selectors';

// Static types
type State = any;

// State shape
export const stateShape: Session = {
  authorization: false,
  loading: {
    signin: false,
    verify: false
  },
  user: null
};

// Initial state
export const initialState: State = fromJS(stateShape);

// Set user state
export const setUser = <T: any>(state: T, payload: T): T =>
  state
    .set('authorization', true)
    .setIn(['loading', 'signin'], false)
    .setIn(['loading', 'verify'], false)
    .set('user', payload);

// Set loading state
export const setLoading = <T: any>(state: T, node: string, status?: boolean = true): T =>
  state.setIn(['loading', node], status);

// Reducer
export default (state: State = initialState, action: Action = { type: UNKNOWN }): State => {
  switch (action.type) {
    // OAuth
    case OAUTH_FACEBOOK_REQUEST:
    case OAUTH_GOOGLE_REQUEST:
    case OAUTH_REQUEST:
      return setLoading(state, 'signin');
    case OAUTH_FACEBOOK_FAILURE:
    case OAUTH_GOOGLE_FAILURE:
    case OAUTH_FAILURE:
      return setLoading(state, 'signin', false);
    case OAUTH_FACEBOOK_SUCCESS:
    case OAUTH_GOOGLE_SUCCESS:
      return setUser(state, action.payload);

    // Sign-in
    case SIGNIN_REQUEST:
      return setLoading(state, 'signin');
    case SIGNIN_FAILURE:
      return setLoading(state, 'signin', false);
    case SIGNIN_SUCCESS:
      return setUser(state, action.payload);

    // Sign-up
    case SIGNUP_REQUEST:
    case SIGNUP_FAILURE:
      return state;
    case SIGNUP_SUCCESS:
      return setUser(state, action.payload);

    // Sign-out
    case SIGNOUT_REQUEST:
    case SIGNOUT_FAILURE:
      return state;
    case SIGNOUT_SUCCESS:
      return initialState;

    // Delete user account
    case USER_DELETE_REQUEST:
    case USER_DELETE_FAILURE:
      return state;
    case USER_DELETE_SUCCESS:
      return initialState;

    // Get user info
    case USER_GET_REQUEST:
      return setLoading(state.set('authorization', true), 'verify');
    case USER_GET_FAILURE:
      return initialState;
    case USER_GET_SUCCESS:
      return setUser(state, action.payload);

    // Default
    default:
      return state;
  }
};

// Get session state
export const getSession = createSelector(getNode, node => node.get('session'));

// Get authorization state
export const getAuth = createSelector(getNode, node => node.getIn(['session', 'authorization']));
