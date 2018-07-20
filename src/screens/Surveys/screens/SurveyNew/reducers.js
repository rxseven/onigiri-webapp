// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux-immutable';

// Actions
import {
  SURVEY_CREATE,
  SURVEY_CREATE_FAILURE,
  SURVEY_CREATE_SUCCESS,
  SURVEY_RESET_UI
} from './actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SURVEY_CREATE:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case SURVEY_CREATE_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case SURVEY_CREATE_SUCCESS:
    case SURVEY_RESET_UI:
      return {
        ...initialState
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
  ui: uiReducer
});

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.new;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
