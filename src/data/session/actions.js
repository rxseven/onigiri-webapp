// @flow
// Module dependencies
import type { OAuthToken, SignIn, SignUp } from 'types/common/session';
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action and static types
import {
  OAUTH_FACEBOOK,
  OAUTH_FACEBOOK_FAILURE,
  OAUTH_FACEBOOK_REQUEST,
  OAUTH_FACEBOOK_SUCCESS,
  OAUTH_GOOGLE,
  OAUTH_GOOGLE_FAILURE,
  OAUTH_GOOGLE_REQUEST,
  OAUTH_GOOGLE_SUCCESS,
  OAUTH_FAILURE,
  OAUTH_REQUEST,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  USER_DELETE,
  USER_DELETE_FAILURE,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_GET,
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_RESET
} from './types';
import type { Action } from './types';

// Delete user account : Start
export const deleteUser = (callback: Callback): Action => ({
  callback,
  type: USER_DELETE
});

// Delete user account : Failure
export const deleteUserFailure = (error: Error): Action => ({
  payload: error,
  type: USER_DELETE_FAILURE
});

// Delete user account : Request
export const deleteUserRequest = (): Action => ({
  type: USER_DELETE_REQUEST
});

// Delete user account : Success
export const deleteUserSuccess = (): Action => ({
  type: USER_DELETE_SUCCESS
});

// Get user info : Start
export const getUser = (): Action => ({
  type: USER_GET
});

// Get user info : Failure
export const getUserFailure = (): Action => ({
  type: USER_GET_FAILURE
});

// Get user info : Request
export const getUserRequest = (): Action => ({
  type: USER_GET_REQUEST
});

// Get user info : Success
export const getUserSuccess = (data: Data): Action => ({
  payload: data,
  type: USER_GET_SUCCESS
});

// Sign in with Facebook : Start
export const oauthFacebook = (accessToken: OAuthToken, callback: Callback): Action => ({
  callback,
  payload: { accessToken },
  type: OAUTH_FACEBOOK
});

// Sign in with Facebook : Failure
export const oauthFacebookFailure = (error: Error): Action => ({
  payload: error,
  type: OAUTH_FACEBOOK_FAILURE
});

// Sign in with Facebook : Request
export const oauthFacebookRequest = (): Action => ({
  type: OAUTH_FACEBOOK_REQUEST
});

// Sign in with Facebook : Success
export const oauthFacebookSuccess = (data: Data): Action => ({
  payload: data,
  type: OAUTH_FACEBOOK_SUCCESS
});

// Sign in with Google : Start
export const oauthGoogle = (accessToken: OAuthToken, callback: Callback): Action => ({
  callback,
  payload: { accessToken },
  type: OAUTH_GOOGLE
});

// Sign in with Google : Failure
export const oauthGoogleFailure = (error: Error): Action => ({
  payload: error,
  type: OAUTH_GOOGLE_FAILURE
});

// Sign in with Google : Request
export const oauthGoogleRequest = (): Action => ({
  type: OAUTH_GOOGLE_REQUEST
});

// Sign in with Google : Success
export const oauthGoogleSuccess = (data: Data): Action => ({
  payload: data,
  type: OAUTH_GOOGLE_SUCCESS
});

// Sign in with OAuth : Failure
export const oauthFailure = (): Action => ({
  type: OAUTH_FAILURE
});

// Sign in with OAuth : Request
export const oauthRequest = (): Action => ({
  type: OAUTH_REQUEST
});

// Reset user
export const resetUser = (): Action => ({
  type: USER_RESET
});

// Sign in : Start
export const signIn = (credentials: SignIn, callback: Callback): Action => ({
  callback,
  payload: { credentials },
  type: SIGNIN
});

// Sign in : Failure
export const signInFailure = (error: Error): Action => ({
  payload: error,
  type: SIGNIN_FAILURE
});

// Sign in : Request
export const signInRequest = (): Action => ({
  type: SIGNIN_REQUEST
});

// Sign in : Success
export const signInSuccess = (data: Data): Action => ({
  payload: data,
  type: SIGNIN_SUCCESS
});

// Sign out : Start
export const signOut = (callback: Callback): Action => ({
  callback,
  type: SIGNOUT
});

// Sign out : Failure
export const signOutFailure = (error: Error): Action => ({
  payload: error,
  type: SIGNOUT_FAILURE
});

// Sign out : Request
export const signOutRequest = (): Action => ({
  type: SIGNOUT_REQUEST
});

// Sign out : Success
export const signOutSuccess = (): Action => ({
  type: SIGNOUT_SUCCESS
});

// Sign up : Start
export const signUp = (credentials: SignUp, callback: Callback): Action => ({
  callback,
  payload: { credentials },
  type: SIGNUP
});

// Sign up : Failure
export const signUpFailure = (error: Error): Action => ({
  payload: error,
  type: SIGNUP_FAILURE
});

// Sign up : Request
export const signUpRequest = (): Action => ({
  type: SIGNUP_REQUEST
});

// Sign up : Success
export const signUpSuccess = (data: Data): Action => ({
  payload: data,
  type: SIGNUP_SUCCESS
});
