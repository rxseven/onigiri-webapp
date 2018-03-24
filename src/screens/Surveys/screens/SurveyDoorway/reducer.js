// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { LANDING_GET, LANDING_GET_FAILURE, LANDING_GET_SUCCESS } from './data/landing/actions';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: { landing: { ...STATE_MODELS.model.asynchronous } }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get landing page URI
    case LANDING_GET:
      return {
        ...state,
        get: {
          landing: {
            ...initialState.get.landing,
            loading: true
          }
        }
      };
    case LANDING_GET_FAILURE:
      return {
        ...state,
        get: {
          landing: {
            ...initialState.get.landing,
            error: action.payload
          }
        }
      };
    case LANDING_GET_SUCCESS:
      return {
        ...state,
        get: {
          landing: initialState.get.landing
        }
      };

    // Default
    default:
      return state;
  }
};

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.doorway;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);
