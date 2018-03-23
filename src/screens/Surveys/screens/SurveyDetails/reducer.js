// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux';

// Actions
import {
  RECIPIENTS_GET,
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET,
  SURVEY_GET_FAILURE,
  SURVEY_GET_SUCCESS
} from './data/survey/actions';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: {
    recipients: { ...STATE_MODELS.model.asynchronous },
    survey: { ...STATE_MODELS.model.asynchronous }
  },
  delete: { survey: { ...STATE_MODELS.model.asynchronous } }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get recipients
    case RECIPIENTS_GET:
      return {
        ...state,
        get: {
          ...state.get,
          recipients: {
            ...initialState.get.recipients,
            loading: true
          }
        }
      };
    case RECIPIENTS_GET_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          recipients: {
            ...initialState.get.recipients,
            error: action.payload
          }
        }
      };
    case RECIPIENTS_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          recipients: initialState.get.recipients
        }
      };

    // Get survey
    case SURVEY_GET:
      return {
        ...state,
        get: {
          ...state.get,
          survey: {
            ...initialState.get.survey,
            loading: true
          }
        }
      };
    case SURVEY_GET_FAILURE:
      return {
        ...state,
        get: {
          ...state.get,
          survey: {
            ...initialState.get.survey,
            error: action.payload
          }
        }
      };
    case SURVEY_GET_SUCCESS:
      return {
        ...state,
        get: {
          ...state.get,
          survey: initialState.get.survey
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
const getNode = state => state.screens.surveys.details;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
