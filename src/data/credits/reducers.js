// Module dependencies
import { Map } from 'immutable';
import { createSelector } from 'reselect';

// Action types
import { USER_RESET } from 'data/session/types';
import {
  CHECKOUT,
  CHECKOUT_FAILURE,
  CHECKOUT_SUCCESS,
  CREDITS_GET,
  CREDITS_GET_FAILURE,
  CREDITS_GET_SUCCESS,
  CREDITS_UPDATE
} from './actions';

// Initial state
const initialState = Map({
  balance: null,
  lastCheckout: null
});

// Set credits
const setCredits = (state, payload) =>
  state.set('balance', payload.get('balance')).set('lastCheckout', payload.get('lastCheckout'));

// Reducer
export default (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    // Checkout
    case CHECKOUT:
    case CHECKOUT_FAILURE:
      return state;
    case CHECKOUT_SUCCESS:
      return setCredits(state, payload);

    // Get credits
    case CREDITS_GET:
    case CREDITS_GET_FAILURE:
      return state;
    case CREDITS_GET_SUCCESS:
      return setCredits(state, payload);

    // Update credits
    case CREDITS_UPDATE:
      return state.set('balance', payload.get('balance'));

    // Reset state
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.get('data');

// Get credits state
export const getCredits = createSelector(getNode, node => node.get('credits'));

// Get balance state
export const getBalance = createSelector(getNode, node => node.getIn(['credits', 'balance']));
