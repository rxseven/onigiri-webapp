// Module dependencies
import ajax from '../helpers/ajax';

// Constants
import API from '../config/api';

// Sign-up, register new user account
export const signUp = ({
  email, firstName, lastName, password
}) =>
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
export const signIn = ({ email, password }) =>
  ajax({
    auth: false,
    data: { email, password },
    method: 'post',
    url: API.endpoints.users.signin
  });

// Sign out the current user
export const signOut = () => ajax({ url: API.endpoints.users.signout });

// Get user info
export const getUser = () => ajax({ url: API.endpoints.users.base });

// Get user profile
export const getProfile = () => ajax({ url: API.endpoints.users.profile });

// Get credits
export const getCredits = () => ajax({ url: API.endpoints.users.credits });

// Delete user account
export const deleteUser = () =>
  ajax({
    method: 'delete',
    url: API.endpoints.users.base
  });
