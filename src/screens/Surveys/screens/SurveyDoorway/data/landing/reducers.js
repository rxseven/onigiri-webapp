// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Selectors
import { getDomain } from 'selectors';

// Action and static types
import {
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA,
  type Action,
  type URI
} from './types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Model = URI;
type State = any;

// State shape
export const stateShape: Model = { URI: '' };

// Initial state
export const initialState: State = fromJS(stateShape);

// Reducer
export default (state: State = initialState, action: Action = { type: UNKNOWN }): State => {
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
export const getNode = (state: any): any =>
  getDomain(state, ['screens', 'surveys', 'doorway', 'data']);

// Get landing page URI state
export const getLanding = createSelector(getNode, node => node.get('landing'));
