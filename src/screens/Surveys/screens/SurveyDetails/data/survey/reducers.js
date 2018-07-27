// Module dependencies
import { createSelector } from 'reselect';

// Action types
import { USER_RESET } from 'data/session/types';
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS
} from '../../../../types';
import {
  RECIPIENTS_GET_FAILURE,
  RECIPIENTS_GET_REQUEST,
  RECIPIENTS_GET_SUCCESS,
  SURVEY_GET_FAILURE,
  SURVEY_GET_REQUEST,
  SURVEY_GET_SUCCESS,
  SURVEY_RESET_DATA,
  SURVEY_UPDATE_FAILURE,
  SURVEY_UPDATE_REQUEST,
  SURVEY_UPDATE_SUCCESS
} from './types';

// Initial state
const initialState = null;

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Get recipients
    case RECIPIENTS_GET_REQUEST:
    case RECIPIENTS_GET_FAILURE:
      return state;
    case RECIPIENTS_GET_SUCCESS:
      return state.set('recipients', payload);

    // Delete survey
    case SURVEY_DELETE_REQUEST:
    case SURVEY_DELETE_FAILURE:
      return state;
    case SURVEY_DELETE_SUCCESS:
      return initialState;

    // Get survey
    case SURVEY_GET_REQUEST:
    case SURVEY_GET_FAILURE:
      return state;
    case SURVEY_GET_SUCCESS:
      return payload;

    // Update survey
    case SURVEY_UPDATE_REQUEST:
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
