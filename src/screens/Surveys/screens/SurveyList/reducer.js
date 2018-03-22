// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { SURVEYS_GET, SURVEYS_GET_FAILURE, SURVEYS_GET_SUCCESS } from './data/surveys/actions';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  asynchronous: {
    get: {
      ...STATE_MODELS.model.asynchronous,
      loaded: false
    }
  },
  view: {
    mode: 'active',
    pagination: null,
    query: null,
    selected: null
  }
};

// Asynchronous reducer
const asyncReducer = (state = initialState.asynchronous, action) => {
  switch (action.type) {
    // Get surveys
    case SURVEYS_GET:
      return {
        ...state,
        get: {
          ...initialState.asynchronous.get,
          loading: true
        }
      };
    case SURVEYS_GET_FAILURE:
      return {
        ...state,
        get: {
          ...initialState.asynchronous.get,
          error: action.payload
        }
      };
    case SURVEYS_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...initialState.asynchronous.get,
          loaded: true
        }
      };

    // Default
    default:
      return state;
  }
};

// View reducer
const viewReducer = (state = initialState.view, action) => state;

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer,
  view: viewReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.list;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
