// Module dependencies
import { fromJS, OrderedMap } from 'immutable';
import { createSelector } from 'reselect';

// Actions
import { USER_RESET } from 'data/session/actions';
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
const initialState = fromJS({
  data: OrderedMap({}),
  meta: null
});

// Immutable map
const map = {
  data: 'data',
  meta: 'meta'
};

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Remove survey from a list
    case SURVEY_DELETE:
    case SURVEY_DELETE_FAILURE:
      return state;
    case SURVEY_DELETE_SUCCESS:
    case SURVEY_REMOVE:
      return state.deleteIn([map.data, payload]);

    // Get surveys
    case SURVEYS_GET:
    case SURVEYS_GET_FAILURE:
      return state;
    case SURVEYS_GET_SUCCESS:
      return state.mergeIn([map.data], payload.get(map.data)).set(map.meta, payload.get(map.meta));

    // Reset state
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
const getNode = state => state.getIn(['screens', 'surveys', 'list', 'data']);

// Get surveys state
export const getSurveys = createSelector(getNode, node => node.get('surveys'));
