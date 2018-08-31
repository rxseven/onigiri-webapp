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
import { ERROR, LOADING } from 'constants/types/asynchronous';

// Static types
import type { Asynchronous } from 'types/common/state';

// Action and static types
import {
  SURVEY_CREATE_FAILURE,
  SURVEY_CREATE_REQUEST,
  SURVEY_CREATE_SUCCESS,
  SURVEY_RESET_UI,
  type Action
} from './types';

// Constants
const UNKNOWN = 'UNKNOWN';

// Static types
type Key = Object;
type Model = { post: Asynchronous };
type State = any;

// State shape
export const stateShape: Model = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Immutable key path
const statePath: Key = {
  post: ['post']
};

// Initial state
export const initialState: State = fromJS(stateShape);

// Asynchronous reducer
export const asynchronous = (
  state: State = initialState,
  action: Action = { type: UNKNOWN }
): State => {
  switch (action.type) {
    // Create survey
    case SURVEY_CREATE_REQUEST:
      return setAsync(statePath.post, state, LOADING);
    case SURVEY_CREATE_FAILURE:
      return setAsync(statePath.post, state, ERROR, action.payload);
    case SURVEY_CREATE_SUCCESS:
      return setAsync(statePath.post, state);

    // Reset state
    case SURVEY_RESET_UI:
      return setAsync(statePath.post, state);

    // Default
    default:
      return state;
  }
};

// UI reducer
export const ui = combineReducers({
  asynchronous
});

// Combine reducers
export default combineReducers({
  ui
});

// Non-memoized utility selectors
export const getNode = (state: any): any => getDomain(state, ['screens', 'surveys', 'new']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
