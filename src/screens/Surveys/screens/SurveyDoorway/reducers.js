// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { combineReducers } from 'redux-immutable';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Types
import type { Asynchronous } from 'types/common/state';

// Action and static types
import {
  LANDING_GET_FAILURE,
  LANDING_GET_REQUEST,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA,
  type Action
} from './data/landing/types';

// Reducers
import data from './data/reducers';

// Static types
type Key = Object;
type Model = { get: { landing: Asynchronous } };
type State = any;

// State shape
const stateShape: Model = {
  get: {
    landing: { ...STATE_MODELS.model.asynchronous }
  }
};

// Immutable key path
const statePath: Key = {
  get: {
    landing: ['get', 'landing']
  }
};

// Initial state
const initialState: State = fromJS(stateShape);

// Asynchronous reducer
const asynchronous = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Get landing page URI
    case LANDING_GET_REQUEST:
      return setAsync(statePath.get.landing, state, LOADING);
    case LANDING_GET_FAILURE:
      return setAsync(statePath.get.landing, state, ERROR, action.payload);
    case LANDING_GET_SUCCESS:
      return setAsync(statePath.get.landing, state);

    // Reset state
    case LANDING_RESET_DATA:
      return initialState;

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({
  data,
  ui
});

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'doorway']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
