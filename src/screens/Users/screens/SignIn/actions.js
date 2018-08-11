// @flow
/* eslint-disable import/prefer-default-export */

// Action and static types
import { SIGNIN_RESET_UI, type Action } from './types';

// Reset UI state
export const resetUI = (): Action => ({
  type: SIGNIN_RESET_UI
});
