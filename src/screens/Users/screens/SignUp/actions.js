// @flow
/* eslint-disable import/prefer-default-export */

// Action and static types
import { SIGNUP_RESET_UI, type Action } from './types';

// Reset UI state
export const resetUI = (): Action => ({
  type: SIGNUP_RESET_UI
});
