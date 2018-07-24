// Module dependencies
import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { createSelector } from 'reselect';

import STATE_MODELS from '../../../constants/models/state';
import { ERROR, LOADING } from '../../../constants/types/asynchronous';
import { setAsync } from '../../../helpers/state';

// Actions
import { USER_RESET } from '../../../data/session/actions';
import { CHECKOUT, CHECKOUT_FAILURE, CHECKOUT_SUCCESS } from '../../../data/credits/actions';

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
    // Checkout
    case CHECKOUT:
      return setAsync(map.post, state, LOADING);
    case CHECKOUT_FAILURE:
      return setAsync(map.post, state, ERROR, payload);
    case CHECKOUT_SUCCESS:
      return initialState;

    // Reset state
    case USER_RESET:
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
const getNode = state => state.getIn(['data', 'features', 'payments']);

// Get UI state
export const getUI = createSelector(getNode, node => node.get('ui'));

// Get asynchronous state
export const getAsync = createSelector(getNode, node => node.getIn(['ui', 'asynchronous']));
