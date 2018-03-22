// Module dependencies
import { mapKeys } from 'lodash';
import { createSelector } from 'reselect';

// Actions
import { USER_RESET } from '../../../../../../data/session/actions';
import { SURVEYS_GET, SURVEYS_GET_FAILURE, SURVEYS_GET_SUCCESS } from './actions';

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

    // Clean up data
    case USER_RESET:
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
