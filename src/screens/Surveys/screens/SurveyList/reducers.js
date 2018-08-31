// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Selectors
import { getDomain } from 'selectors';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADED, LOADING } from 'constants/types/asynchronous';

// Action and static types
import { USER_RESET, type Action as ActionSession } from 'data/session/types';
import {
  SURVEY_SELECTED_ADD,
  SURVEY_SELECTED_REMOVE,
  type Action as ActionSurveys
} from '../../types';
import {
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_REQUEST,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE,
  type Action as ActionData
} from './data/surveys/types';
import {
  SURVEYS_RESET_VIEW,
  SURVEYS_SAVE_PAGINATION,
  type Action as ActionList,
  type Async as Asynchronous,
  type View
} from './types';

// Reducers
import data from './data/reducers';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Action = ActionSession | ActionSurveys | ActionData | ActionList;
type Key = Object;
type Model = {
  asynchronous: Asynchronous,
  view: View
};
type State = any;

// State shape
export const stateShape: Model = {
  asynchronous: {
    get: {
      ...STATE_MODELS.model.asynchronous,
      loaded: false
    }
  },
  view: {
    mode: 'active',
    pagination: null,
    query: null,
    selected: null
  }
};

// Immutable key path
const statePath: Key = {
  asynchronous: {
    get: ['get']
  },
  view: ['view']
};

// Initial state
export const initialState: State = fromJS(stateShape);

// Asynchronous reducer
export const asynchronous = (
  state: State = initialState.get('asynchronous'),
  action: Action = { type: UNKNOWN }
): State => {
  switch (action.type) {
    // Get serveys
    case SURVEYS_GET_REQUEST:
      return setAsync(statePath.asynchronous.get, state, LOADING).setIn(
        [...statePath.asynchronous.get, LOADED],
        false
      );
    case SURVEYS_GET_FAILURE:
      return setAsync(statePath.asynchronous.get, state, ERROR, action.payload).setIn(
        [...statePath.asynchronous.get, LOADED],
        false
      );
    case SURVEYS_GET_SUCCESS:
      return setAsync(statePath.asynchronous.get, state).setIn(
        [...statePath.asynchronous.get, LOADED],
        true
      );

    // Reset state
    case USER_RESET:
    case SURVEYS_RESET_VIEW:
      return initialState.get('asynchronous');

    // Default
    default:
      return state;
  }
};

// View reducer
export const view = (
  state: State = initialState.get('view'),
  action: Action = { type: UNKNOWN }
): State => {
  switch (action.type) {
    // Save pagination query
    case SURVEYS_SAVE_PAGINATION:
      return state.set('pagination', fromJS(action.payload));

    // Change mode
    case SURVEYS_SELECT_MODE:
      return state.mergeDeep(fromJS(action.payload));

    // Track survey
    case SURVEY_SELECTED_ADD:
      return state.set('selected', action.payload);

    // Untrack survey
    case SURVEY_SELECTED_REMOVE:
      return state.set('selected', null);

    // Reset view
    case USER_RESET:
    case SURVEYS_RESET_VIEW:
      return initialState.get('view');

    // Default
    default:
      return state;
  }
};

// UI reducer
export const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({
  data,
  ui,
  view
});

// Non-memoized utility selectors
export const getNode = (state: any): any => getDomain(state, ['screens', 'surveys', 'list']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));

// Get view state
export const getView = createSelector(getNode, node => node.get('view'));
