// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import { combineReducers } from 'redux-immutable';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Action types
import {
  LANDING_GET,
  LANDING_GET_FAILURE,
  LANDING_GET_SUCCESS,
  LANDING_RESET_DATA
} from './data/landing/actions';

// Reducers
import data from './data/reducers';

// Initial state
const initialState = fromJS({
  get: {
    landing: { ...STATE_MODELS.model.asynchronous }
  }
});

// Immutable map
const map = {
  get: {
    landing: ['get', 'landing']
  }
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get landing page URI
    case LANDING_GET:
      return setAsync(map.get.landing, state, LOADING);
    case LANDING_GET_FAILURE:
      return setAsync(map.get.landing, state, ERROR, payload);
    case LANDING_GET_SUCCESS:
      return setAsync(map.get.landing, state);

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
