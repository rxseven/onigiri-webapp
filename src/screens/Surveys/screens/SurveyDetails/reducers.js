// Module dependencies
import { createSelector } from 'reselect';
import { combineReducers } from 'redux-immutable';

// Actions
import { SURVEY_DELETE, SURVEY_DELETE_FAILURE, SURVEY_DELETE_SUCCESS } from '../../actions';
import {
  RECIPIENTS_GET,
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET,
  SURVEY_GET_FAILURE,
  SURVEY_GET_SUCCESS,
  SURVEY_UPDATE,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_SUCCESS
} from './data/survey/actions';

// Reducers
import data from './data/reducers';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: {
    recipients: { ...STATE_MODELS.model.asynchronous },
    survey: { ...STATE_MODELS.model.asynchronous }
  },
  delete: { survey: { ...STATE_MODELS.model.asynchronous } },
  patch: {
    survey: { ...STATE_MODELS.model.asynchronous }
  }
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
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

    // Delete survey
    case SURVEY_DELETE:
      return {
        ...state,
        delete: {
          survey: {
            ...initialState.delete.survey,
            loading: true
          }
        }
      };
    case SURVEY_DELETE_FAILURE:
      return {
        ...state,
        delete: {
          survey: {
            ...initialState.delete.survey,
            error: action.payload
          }
        }
      };
    case SURVEY_DELETE_SUCCESS:
      return {
        ...state,
        delete: {
          survey: initialState.delete.survey
        }
      };

    // Update survey
    case SURVEY_UPDATE:
      return {
        ...state,
        patch: {
          survey: {
            ...initialState.patch.survey,
            loading: true
          }
        }
      };
    case SURVEY_UPDATE_FAILURE:
      return {
        ...state,
        patch: {
          survey: {
            ...initialState.patch.survey,
            error: action.payload
          }
        }
      };
    case SURVEY_UPDATE_SUCCESS:
      return {
        ...state,
        patch: {
          survey: initialState.patch.survey
        }
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
  ui
});

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.details;

// Get UI state
export const getUI = createSelector(getNode, node => node.ui);

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.ui.asynchronous);
