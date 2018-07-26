// Action types
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
  USER_GET_SUCCESS,
  USER_RESET
} from './types';

// Delete user account : Start
export const deleteUser = callback => ({
  callback,
  type: USER_DELETE
});

// Delete user account : Failure
export const deleteUserFailure = error => ({
  payload: error,
  type: USER_DELETE_FAILURE
});

// Delete user account : Success
export const deleteUserSuccess = () => ({
  type: USER_DELETE_SUCCESS
});

// Get user info : Start
export const getUser = () => ({
  type: USER_GET
});

// Get user info : Failure
export const getUserFailure = () => ({
  type: USER_GET_FAILURE
});

// Get user info : Success
export const getUserSuccess = data => ({
  payload: data,
  type: USER_GET_SUCCESS
});

// Sign in with Facebook : Start
export const oauthFacebook = (accessToken, callback) => ({
  callback,
  payload: { accessToken },
  type: OAUTH_FACEBOOK
});

// Sign in with Facebook : Failure
export const oauthFacebookFailure = error => ({
  payload: error,
  type: OAUTH_FACEBOOK_FAILURE
});

// Sign in with Facebook : Success
export const oauthFacebookSuccess = data => ({
  payload: data,
  type: OAUTH_FACEBOOK_SUCCESS
});

// Sign in with Google : Start
export const oauthGoogle = (accessToken, callback) => ({
  callback,
  payload: { accessToken },
  type: OAUTH_GOOGLE
});

// Sign in with Google : Failure
export const oauthGoogleFailure = error => ({
  payload: error,
  type: OAUTH_GOOGLE_FAILURE
});

// Sign in with Google : Success
export const oauthGoogleSuccess = data => ({
  payload: data,
  type: OAUTH_GOOGLE_SUCCESS
});

// Sign in with OAuth : Failure
export const oauthFailure = () => ({
  type: OAUTH_FAILURE
});

// Sign in with OAuth : Request
export const oauthRequest = () => ({
  type: OAUTH_REQUEST
});

// Reset user
export const resetUser = () => ({
  type: USER_RESET
});

// Sign in : Start
export const signIn = (credentials, callback) => ({
  callback,
  payload: { credentials },
  type: SIGNIN
});

// Sign in : Failure
export const signInFailure = error => ({
  payload: error,
  type: SIGNIN_FAILURE
});

// Sign in : Success
export const signInSuccess = data => ({
  payload: data,
  type: SIGNIN_SUCCESS
});

// Sign out : Start
export const signOut = callback => ({
  callback,
  type: SIGNOUT
});

// Sign out : Failure
export const signOutFailure = error => ({
  payload: error,
  type: SIGNOUT_FAILURE
});

// Sign out : Success
export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS
});

// Sign up : Start
export const signUp = (credentials, callback) => ({
  callback,
  payload: { credentials },
  type: SIGNUP
});

// Sign up : Failure
export const signUpFailure = error => ({
  payload: error,
  type: SIGNUP_FAILURE
});

// Sign up : Success
export const signUpSuccess = data => ({
  payload: data,
  type: SIGNUP_SUCCESS
});
