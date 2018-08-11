// @flow
// Module dependencies
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

// Action and static types
import { USER_RESET } from 'data/session/types';
import type { Action as ActionSession } from 'data/session/types';
import {
  CHECKOUT_FAILURE,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CREDITS_GET_FAILURE,
  CREDITS_GET_REQUEST,
  CREDITS_GET_SUCCESS,
  CREDITS_UPDATE,
  type Action as ActionCredits,
  type Credits
} from './types';

// Static types
type Action = ActionSession | ActionCredits;
type Model = Credits;
type State = any;

// State shape
const stateShape: Model = {
  balance: null,
  lastCheckout: null
};

// Initial state
const initialState: State = fromJS(stateShape);

// Set credits
const setCredits = <T: any>(state: T, payload: T): T =>
  state.set('balance', payload.get('balance')).set('lastCheckout', payload.get('lastCheckout'));

// Reducer
export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // Checkout
    case CHECKOUT_REQUEST:
    case CHECKOUT_FAILURE:
      return state;
    case CHECKOUT_SUCCESS:
      return setCredits(state, action.payload);

    // Get credits
    case CREDITS_GET_REQUEST:
    case CREDITS_GET_FAILURE:
      return state;
    case CREDITS_GET_SUCCESS:
      return setCredits(state, action.payload);

    // Update credits
    case CREDITS_UPDATE:
      return state.set('balance', action.payload.get('balance'));

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
