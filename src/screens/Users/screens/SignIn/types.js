// @flow
/* eslint-disable import/prefer-default-export */

// Action types
export const SIGNIN_RESET_UI = 'SignIn/SIGNIN_RESET_UI';

// Static types
export type Strategy = { type: ?string };
export type Action = { type: typeof SIGNIN_RESET_UI };
