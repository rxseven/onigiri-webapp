// Module dependencies
import { createSelector } from 'reselect';

// Action types
import { USER_RESET } from 'data/session/actions';
import { PROFILE_GET, PROFILE_GET_FAILURE, PROFILE_GET_SUCCESS } from './actions';

// Initial state
const initialState = null;

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get user profile
    case PROFILE_GET:
    case PROFILE_GET_FAILURE:
      return state;
    case PROFILE_GET_SUCCESS:
      return payload;

    // Reset state
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'users', 'profile', 'data']);

// Get user profile state
export const getProfile = createSelector(getNode, node => node.get('profile'));
