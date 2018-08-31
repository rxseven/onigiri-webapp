// @flow

// Module dependencies
import tokenHelper from './token';

// Authorize a user
// Save an access token in a browser's local storage
const authorizeAuth = (token: string): void => {
  tokenHelper.save(token);
};

// Reset the current user session
// Remove an access token from a browser's local storage
const resetAuth = (): void => {
  tokenHelper.remove();
};

// Verify an authorization
// If unauthorized, remove an access token from a browser's local storage
const verifyAuth = (status: number): void => {
  if (status === 401) {
    tokenHelper.remove();
  }
};

// Module exports
export default {
  authorize: authorizeAuth,
  reset: resetAuth,
  verify: verifyAuth
};
