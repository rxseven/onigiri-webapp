// Action types
export const OAUTH_FACEBOOK = 'data/session/OAUTH_FACEBOOK';
export const OAUTH_FACEBOOK_FAILURE = 'data/session/OAUTH_FACEBOOK_FAILURE';
export const OAUTH_FACEBOOK_SUCCESS = 'data/session/OAUTH_FACEBOOK_SUCCESS';

export const OAUTH_GOOGLE = 'data/session/OAUTH_GOOGLE';
export const OAUTH_GOOGLE_FAILURE = 'data/session/OAUTH_GOOGLE_FAILURE';
export const OAUTH_GOOGLE_SUCCESS = 'data/session/OAUTH_GOOGLE_SUCCESS';

export const OAUTH_FAILURE = 'data/session/OAUTH_FAILURE';
export const OAUTH_REQUEST = 'data/session/OAUTH_REQUEST';

export const SIGNIN = 'data/session/SIGNIN';
export const SIGNIN_FAILURE = 'data/session/SIGNIN_FAILURE';
export const SIGNIN_SUCCESS = 'data/session/SIGNIN_SUCCESS';

export const SIGNOUT = 'data/session/SIGNOUT';
export const SIGNOUT_FAILURE = 'data/session/SIGNOUT_FAILURE';
export const SIGNOUT_SUCCESS = 'data/session/SIGNOUT_SUCCESS';

export const SIGNUP = 'data/session/SIGNUP';
export const SIGNUP_FAILURE = 'data/session/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'data/session/SIGNUP_SUCCESS';

export const USER_DELETE = 'data/session/USER_DELETE';
export const USER_DELETE_FAILURE = 'data/session/USER_DELETE_FAILURE';
export const USER_DELETE_SUCCESS = 'data/session/USER_DELETE_SUCCESS';

export const USER_GET = 'data/session/USER_GET';
export const USER_GET_FAILURE = 'data/session/USER_GET_FAILURE';
export const USER_GET_SUCCESS = 'data/session/USER_GET_SUCCESS';

export const USER_RESET = 'data/session/USER_RESET';

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
