// Module dependencies
import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Action types
import { LANDING_GET, LANDING_GET_FAILURE, LANDING_GET_SUCCESS, LANDING_RESET_DATA } from './types';

// Initial state
const initialState = Map({ URI: null });

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get landing page URI
    case LANDING_GET:
    case LANDING_GET_FAILURE:
      return state;
    case LANDING_GET_SUCCESS:
      return state.merge(payload);

    // Reset state
    case LANDING_RESET_DATA:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'doorway', 'data']);

// Get landing page URI state
export const getLanding = createSelector(getNode, node => node.get('landing'));
