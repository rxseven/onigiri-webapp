// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Action and static types
import {
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA,
  type Action,
  type URI
} from './types';

// Static types
type Model = URI;
type State = any;

// State shape
const stateShape: Model = { URI: '' };

// Initial state
const initialState: State = fromJS(stateShape);

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Get landing page URI
    case LANDING_GET_REQUEST:
    case LANDING_GET_FAILURE:
      return state;
    case LANDING_GET_SUCCESS:
      return state.merge(action.payload);

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
