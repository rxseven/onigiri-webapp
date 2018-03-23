// Module dependencies
import { createSelector } from 'reselect';

// Actions
import { USER_RESET } from '../../../../../../data/session/actions';
import { SURVEY_GET, SURVEY_GET_FAILURE, SURVEY_GET_SUCCESS } from './actions';

// Initial state
const initialState = {};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get survey
    case SURVEY_GET:
    case SURVEY_GET_FAILURE:
      return state;
    case SURVEY_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    // Clean up data
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.details.data;

// Get survey
export const getSurvey = createSelector(getNode, node => node.survey);
