// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

import STATE_MODELS from '../../../../constants/models/state';
import { ERROR, LOADING } from '../../../../constants/types/asynchronous';
import { setAsync } from '../../../../helpers/data';

// Actions
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../../../data/session/actions';
import { SIGNUP_RESET_UI } from './actions';

// Initial state
const initialState = fromJS({
  post: { ...STATE_MODELS.model.asynchronous }
});

// Immutable map
const map = {
  post: ['post']
};

// Asynchronous reducer
const asynchronous = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Sign-up
    case SIGNUP:
      return setAsync(map.post, state, LOADING);
    case SIGNUP_FAILURE:
      return setAsync(map.post, state, ERROR, payload);
    case SIGNUP_SUCCESS:
      return initialState;

    // Reset state
    case SIGNUP_RESET_UI:
      return initialState;

    // Default
    default:
      return state;
  }
};

// UI reducer
const ui = combineReducers({ asynchronous });

// Combine reducers
export default combineReducers({ ui });

// Non-memoized utility selectors
const getNode = state => state.getIn(['screens', 'users', 'signup']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
