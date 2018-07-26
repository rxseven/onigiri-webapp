// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

// Helper functions
import { setAsync } from 'helpers/state';

// Constants
import STATE_MODELS from 'constants/models/state';
import { ERROR, LOADED, LOADING } from 'constants/types/asynchronous';

// Action types
import { USER_RESET } from 'data/session/types';
import { SURVEY_SELECTED_ADD, SURVEY_SELECTED_REMOVE } from '../../actions';
import {
  SURVEYS_GET,
  SURVEYS_GET_FAILURE,
  SURVEYS_GET_SUCCESS,
  SURVEYS_SELECT_MODE
} from './data/surveys/actions';
import { SURVEYS_RESET_VIEW, SURVEYS_SAVE_PAGINATION } from './actions';

// Reducers
import data from './data/reducers';

// Initial state
const initialState = fromJS({
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
});

// Immutable map
const map = {
  asynchronous: {
    get: ['get']
  },
  view: ['view']
};

// Asynchronous reducer
const asynchronous = (state = initialState.get('asynchronous'), action) => {
  const { payload, type } = action;

  switch (type) {
    // Get serveys
    case SURVEYS_GET:
      return setAsync(map.asynchronous.get, state, LOADING).setIn(
        [...map.asynchronous.get, LOADED],
        false
      );
    case SURVEYS_GET_FAILURE:
      return setAsync(map.asynchronous.get, state, ERROR, payload).setIn(
        [...map.asynchronous.get, LOADED],
        false
      );
    case SURVEYS_GET_SUCCESS:
      return setAsync(map.asynchronous.get, state).setIn([...map.asynchronous.get, LOADED], true);

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
const view = (state = initialState.get('view'), action) => {
  const { payload, type } = action;

  switch (type) {
    // Save pagination query
    case SURVEYS_SAVE_PAGINATION:
      return state.set('pagination', payload);

    // Change mode
    case SURVEYS_SELECT_MODE:
      return state.mergeDeep(payload);

    // Track survey
    case SURVEY_SELECTED_ADD:
      return state.set('selected', payload);

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
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({
  data,
  ui,
  view
});

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'list']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));

// Get view state
export const getView = createSelector(getNode, node => node.get('view'));
