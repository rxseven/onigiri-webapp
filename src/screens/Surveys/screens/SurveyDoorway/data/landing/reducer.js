// Module dependencies
import { createSelector } from 'reselect';

// Actions
import { LANDING_GET, LANDING_GET_FAILURE, LANDING_GET_SUCCESS } from './actions';

// Initial state
const initialState = { URI: 'null' };

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get landing page URI
    case LANDING_GET:
    case LANDING_GET_FAILURE:
      return state;
    case LANDING_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.doorway.data;

// Get landing page URI
export const getLanding = createSelector(getNode, node => node.landing);
