// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

import STATE_MODELS from '../../../../constants/models/state';
import { ERROR, LOADING } from '../../../../constants/types/asynchronous';
import { setAsync } from '../../../../helpers/state';

// Actions
import {
  SURVEY_CREATE,
  SURVEY_CREATE_FAILURE,
  SURVEY_CREATE_SUCCESS,
  SURVEY_RESET_UI
} from './actions';

// Initial state
const initialState = fromJS({
  post: { ...STATE_MODELS.model.asynchronous }
});

// Immutable map
const map = {
  post: ['post']
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Create survey
    case SURVEY_CREATE:
      return setAsync(map.post, state, LOADING);
    case SURVEY_CREATE_FAILURE:
      return setAsync(map.post, state, ERROR, payload);
    case SURVEY_CREATE_SUCCESS:
      return setAsync(map.post, state);

    // Reset state
    case SURVEY_RESET_UI:
      return setAsync(map.post, state);

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  ui
});

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'surveys', 'new']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
