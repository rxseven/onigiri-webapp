// @flow
// Module dependencies
import { createSelector } from 'reselect';

// Action and static types
import { USER_RESET } from 'data/session/types';
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  type Action as ActionSurveys
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
  SURVEY_UPDATE_SUCCESS,
  type Action as ActionData,
  type Survey
} from './types';

// Static types
type Action = ActionSurveys | ActionData;
type Model = ?Survey;
type State = any;

// State shape
const stateShape: Model = null;

// Initial state
const initialState: State = stateShape;

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Get recipients
    case RECIPIENTS_GET_REQUEST:
    case RECIPIENTS_GET_FAILURE:
      return state;
    case RECIPIENTS_GET_SUCCESS:
      return state.set('recipients', action.payload);

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
      return action.payload;

    // Update survey
    case SURVEY_UPDATE_REQUEST:
    case SURVEY_UPDATE_FAILURE:
      return state;
    case SURVEY_UPDATE_SUCCESS:
      return state.merge(action.payload);

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
