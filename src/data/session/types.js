// @flow
// Module dependencies
import type { OAuthToken, SignIn, SignUp } from 'types/common/session';
import type { Data, Error } from 'types/common/state';
import type { Callback } from 'types/common/utilities';

// Action types
export const OAUTH_FACEBOOK = 'data/session/OAUTH_FACEBOOK';
export const OAUTH_FACEBOOK_FAILURE = 'data/session/OAUTH_FACEBOOK_FAILURE';
export const OAUTH_FACEBOOK_REQUEST = 'data/session/OAUTH_FACEBOOK_REQUEST';
export const OAUTH_FACEBOOK_SUCCESS = 'data/session/OAUTH_FACEBOOK_SUCCESS';

export const OAUTH_GOOGLE = 'data/session/OAUTH_GOOGLE';
export const OAUTH_GOOGLE_FAILURE = 'data/session/OAUTH_GOOGLE_FAILURE';
export const OAUTH_GOOGLE_REQUEST = 'data/session/OAUTH_GOOGLE_REQUEST';
export const OAUTH_GOOGLE_SUCCESS = 'data/session/OAUTH_GOOGLE_SUCCESS';

export const OAUTH_FAILURE = 'data/session/OAUTH_FAILURE';
export const OAUTH_REQUEST = 'data/session/OAUTH_REQUEST';

export const SIGNIN = 'data/session/SIGNIN';
export const SIGNIN_FAILURE = 'data/session/SIGNIN_FAILURE';
export const SIGNIN_REQUEST = 'data/session/SIGNIN_REQUEST';
export const SIGNIN_SUCCESS = 'data/session/SIGNIN_SUCCESS';

export const SIGNOUT = 'data/session/SIGNOUT';
export const SIGNOUT_FAILURE = 'data/session/SIGNOUT_FAILURE';
export const SIGNOUT_REQUEST = 'data/session/SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'data/session/SIGNOUT_SUCCESS';

export const SIGNUP = 'data/session/SIGNUP';
export const SIGNUP_FAILURE = 'data/session/SIGNUP_FAILURE';
export const SIGNUP_REQUEST = 'data/session/SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'data/session/SIGNUP_SUCCESS';

export const USER_DELETE = 'data/session/USER_DELETE';
export const USER_DELETE_FAILURE = 'data/session/USER_DELETE_FAILURE';
export const USER_DELETE_REQUEST = 'data/session/USER_DELETE_REQUEST';
export const USER_DELETE_SUCCESS = 'data/session/USER_DELETE_SUCCESS';

export const USER_GET = 'data/session/USER_GET';
export const USER_GET_FAILURE = 'data/session/USER_GET_FAILURE';
export const USER_GET_REQUEST = 'data/session/USER_GET_REQUEST';
export const USER_GET_SUCCESS = 'data/session/USER_GET_SUCCESS';

export const USER_RESET = 'data/session/USER_RESET';

// Static types
export type User = {
  email: string,
  name: {
    firstName: string,
    lastName: string
  },
  id: string,
  photo: {
    url: string
  }
};

export type Session = {
  authorization: boolean,
  loading: {
    signin: boolean,
    verify: boolean
  },
  user: ?User
};

export type Action =
  | { type: typeof OAUTH_FACEBOOK, callback: Callback, payload: { accessToken: OAuthToken } }
  | { type: typeof OAUTH_FACEBOOK_FAILURE, payload: Error }
  | { type: typeof OAUTH_FACEBOOK_REQUEST }
  | { type: typeof OAUTH_FACEBOOK_SUCCESS, payload: Data }
  | { type: typeof OAUTH_GOOGLE, callback: Callback, payload: { accessToken: OAuthToken } }
  | { type: typeof OAUTH_GOOGLE_FAILURE, payload: Error }
  | { type: typeof OAUTH_GOOGLE_REQUEST }
  | { type: typeof OAUTH_GOOGLE_SUCCESS, payload: Data }
  | { type: typeof OAUTH_FAILURE }
  | { type: typeof OAUTH_REQUEST }
  | { type: typeof SIGNIN, callback: Callback, payload: { credentials: SignIn } }
  | { type: typeof SIGNIN_FAILURE, payload: Error }
  | { type: typeof SIGNIN_REQUEST }
  | { type: typeof SIGNIN_SUCCESS, payload: Data }
  | { type: typeof SIGNOUT, callback: Callback }
  | { type: typeof SIGNOUT_FAILURE, payload: Error }
  | { type: typeof SIGNOUT_REQUEST }
  | { type: typeof SIGNOUT_SUCCESS }
  | { type: typeof SIGNUP, callback: Callback, payload: { credentials: SignUp } }
  | { type: typeof SIGNUP_FAILURE, payload: Error }
  | { type: typeof SIGNUP_REQUEST }
  | { type: typeof SIGNUP_SUCCESS, payload: Data }
  | { type: typeof USER_DELETE, callback: Callback }
  | { type: typeof USER_DELETE_FAILURE, payload: Error }
  | { type: typeof USER_DELETE_REQUEST }
  | { type: typeof USER_DELETE_SUCCESS }
  | { type: typeof USER_GET }
  | { type: typeof USER_GET_FAILURE }
  | { type: typeof USER_GET_REQUEST }
  | { type: typeof USER_GET_SUCCESS, payload: Data }
  | { type: typeof USER_RESET };
