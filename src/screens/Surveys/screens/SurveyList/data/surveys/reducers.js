// @flow
// Module dependencies
import { fromJS, OrderedMap } from 'immutable';
import { createSelector } from 'reselect';

// Selectors
import { getDomain } from 'selectors';

// Action and static types
import { USER_RESET, type Action as ActionSession } from 'data/session/types';
import {
  SURVEY_DELETE_FAILURE,
  SURVEY_DELETE_REQUEST,
  SURVEY_DELETE_SUCCESS,
  SURVEY_REMOVE,
  type Action as ActionSurveys
} from '../../../../types';
import {
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_REQUEST,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE,
  SURVEYS_RESET_DATA,
  type Action as ActionData,
  type Meta
} from './types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Action = ActionSession | ActionSurveys | ActionData;
type Key = Object;
type Model = {
  data: any,
  meta: Meta
};
type State = any;

// State shape
export const stateShape: Model = {
  data: OrderedMap({}),
  meta: null
};

// Immutable key path
const statePath: Key = {
  data: 'data',
  meta: 'meta'
};

// Initial state
export const initialState: State = fromJS(stateShape);

// Reducer
export default (state: State = initialState, action: Action = { type: UNKNOWN }): State => {
  switch (action.type) {
    // Remove survey from a list
    case SURVEY_DELETE_REQUEST:
    case SURVEY_DELETE_FAILURE:
      return state;
    case SURVEY_DELETE_SUCCESS:
    case SURVEY_REMOVE:
      return state.deleteIn([statePath.data, action.payload]);

    // Get surveys
    case SURVEYS_GET_REQUEST:
    case SURVEYS_GET_FAILURE:
      return state;
    case SURVEYS_GET_SUCCESS:
      return state
        .mergeIn([statePath.data], action.payload.get(statePath.data))
        .set(statePath.meta, action.payload.get(statePath.meta));

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
export const getNode = (state: any): any =>
  getDomain(state, ['screens', 'surveys', 'list', 'data']);

// Get surveys state
export const getSurveys = createSelector(getNode, node => node.get('surveys'));
