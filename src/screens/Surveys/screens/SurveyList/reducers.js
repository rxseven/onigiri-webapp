// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import { USER_RESET } from '../../../../data/session/actions';
import { SURVEY_SELECTED_ADD, SURVEY_SELECTED_REMOVE } from '../../actions';
import {
  SURVEYS_GET,
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE
} from './data/surveys/actions';
import { SURVEYS_RESET_VIEW, SURVEYS_SAVE_PAGINATION } from './actions';

// Reducers
import data from './data/reducers';

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
const asynchronous = (state = initialState.asynchronous, action) => {
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

    // Reset list view
    case SURVEYS_RESET_VIEW:
      return {
        ...initialState.asynchronous
      };

    // Default
    default:
      return state;
  }
};

// View reducer
const view = (state = initialState.view, action) => {
  switch (action.type) {
    // Save pagination query
    case SURVEYS_SAVE_PAGINATION:
      return {
        ...state,
        pagination: action.payload
      };

    // Change mode
    case SURVEYS_SELECT_MODE:
      return {
        ...state,
        ...action.payload
      };

    // Track survey
    case SURVEY_SELECTED_ADD:
      return {
        ...state,
        selected: action.payload
      };

    // Untrack survey
    case SURVEY_SELECTED_REMOVE:
      return {
        ...state,
        selected: initialState.view.selected
      };

    // Reset view
    case USER_RESET:
    case SURVEYS_RESET_VIEW:
      return {
        ...initialState.view
      };

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
  ui,
  view
});

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.list;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);

// Get view state
export const getView = createSelector(getNode, node => node.view);
