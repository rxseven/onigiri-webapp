// @flow
// Module dependencies
import { createSelector } from 'reselect';

// Selectors
import { getDomain } from 'selectors';

// Action and static types
import { USER_RESET, type Action as ActionSession } from 'data/session/types';
import {
  PROFILE_GET_FAILURE,
  PROFILE_GET_REQUEST,
  PROFILE_GET_SUCCESS,
  type Action as ActionProfile,
  type Profile
} from './types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Action = ActionSession | ActionProfile;
type Model = ?Profile;
type State = any;

// State shape
const stateShape: Model = null;

// Initial state
const initialState: State = stateShape;

// Reducer
export default (state: State = initialState, action: Action = { type: UNKNOWN }): State => {
  switch (action.type) {
    // Get user profile
    case PROFILE_GET_REQUEST:
    case PROFILE_GET_FAILURE:
      return state;
    case PROFILE_GET_SUCCESS:
      return action.payload;

    // Reset state
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
export const getNode = (state: any): any =>
  getDomain(state, ['screens', 'users', 'profile', 'data']);

// Get user profile state
export const getProfile = createSelector(getNode, node => node.get('profile'));
