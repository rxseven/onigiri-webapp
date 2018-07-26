// Module dependencies
import { createSelector } from 'reselect';

// Action types
import { USER_RESET } from 'data/session/types';
import { SURVEY_DELETE, SURVEY_DELETE_FAILURE, SURVEY_DELETE_SUCCESS } from '../../../../actions';
import {
  RECIPIENTS_GET,
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET,
  SURVEY_GET_FAILURE,
  SURVEY_GET_SUCCESS,
  SURVEY_RESET_DATA,
  SURVEY_UPDATE,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_SUCCESS
} from './actions';

// Initial state
const initialState = null;

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get recipients
    case RECIPIENTS_GET:
    case RECIPIENTS_GET_FAILURE:
      return state;
    case RECIPIENTS_GET_SUCCESS:
      return state.set('recipients', payload);

    // Delete survey
    case SURVEY_DELETE:
    case SURVEY_DELETE_FAILURE:
      return state;
    case SURVEY_DELETE_SUCCESS:
      return initialState;

    // Get survey
    case SURVEY_GET:
    case SURVEY_GET_FAILURE:
      return state;
    case SURVEY_GET_SUCCESS:
      return payload;

    // Update survey
    case SURVEY_UPDATE:
    case SURVEY_UPDATE_FAILURE:
      return state;
    case SURVEY_UPDATE_SUCCESS:
      return state.merge(payload);

    // Reset state
    case SURVEY_RESET_DATA:
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'details', 'data']);

// Get survey state
export const getSurvey = createSelector(getNode, node => node.get('survey'));
