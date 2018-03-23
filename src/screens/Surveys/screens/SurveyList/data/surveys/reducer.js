// Module dependencies
import { mapKeys, omit } from 'lodash';
import { createSelector } from 'reselect';

// Actions
import { USER_RESET } from '../../../../../../data/session/actions';
import {
  SURVEY_DELETE,
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_SUCCESS,
  SURVEY_REMOVE
} from '../../../../actions';
import {
  SURVEYS_GET,
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE,
  SURVEYS_RESET_DATA
} from './actions';

// Initial state
const initialState = {
  data: {},
  meta: {}
};

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get surveys
    case SURVEYS_GET:
    case SURVEYS_GET_FAILURE:
      return state;
    case SURVEYS_GET_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...mapKeys(action.payload.data, '_id')
        },
        meta: {
          ...action.payload.meta
        }
      };

    // Remove survey from a list
    case SURVEY_DELETE:
    case SURVEY_DELETE_FAILURE:
      return state;
    case SURVEY_DELETE_SUCCESS:
    case SURVEY_REMOVE:
      return {
        ...state,
        data: omit(state.data, action.payload)
      };

    // Clean up data
    case USER_RESET:
    case SURVEYS_SELECT_MODE:
    case SURVEYS_RESET_DATA:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.screens.surveys.list.data;

// Get surveys
export const getSurveys = createSelector(getNode, node => node.surveys);
