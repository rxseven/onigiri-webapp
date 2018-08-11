// @flow
// Module dependencies
import ajax from 'helpers/ajax';
import type { OAuthToken, SignIn, SignUp } from 'types/common/session';

// Constants
import API from 'config/api';

// Static types
type Return = Promise<any>;

// Sign in a user with Facebook
export const oauthFacebook = (accessToken: OAuthToken): Return =>
  ajax({
    auth: false,
    data: { access_token: accessToken },
    method: 'post',
    url: API.endpoints.users.oauth.facebook
  });

// Sign in a user with Google
export const oauthGoogle = (accessToken: OAuthToken): Return =>
  ajax({
    auth: false,
    data: { access_token: accessToken },
    method: 'post',
    url: API.endpoints.users.oauth.google
  });

// Sign up, register new user account
export const signUp = ({
  email, firstName, lastName, password
}: SignUp): Return =>
  ajax({
    auth: false,
    data: {
      email,
      firstName,
      lastName,
      password
    },
    method: 'post',
    url: API.endpoints.users.signup
  });

// Sign in a user with an email address and password
export const signIn = ({ email, password }: SignIn): Return =>
  ajax({
    auth: false,
    data: { email, password },
    method: 'post',
    url: API.endpoints.users.signin
  });

// Sign out the current user
export const signOut = (): Return => ajax({ url: API.endpoints.users.signout });

// Get user info
export const getUser = (): Return => ajax({ url: API.endpoints.users.base });

// Get user profile
export const getProfile = (): Return => ajax({ url: API.endpoints.users.profile });

// Get credits
export const getCredits = (): Return => ajax({ url: API.endpoints.users.credits });

// Delete user account
export const deleteUser = (): Return =>
  ajax({
    method: 'delete',
    url: API.endpoints.users.base
  });
