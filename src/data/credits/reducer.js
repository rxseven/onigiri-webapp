// Module dependencies
import { createSelector } from 'reselect';

// Actions
import { USER_RESET } from '../session/actions';
import { CREDITS_GET, CREDITS_GET_FAILURE, CREDITS_GET_SUCCESS } from './actions';

// Initial state
const initialState = {
  balance: null,
  lastCheckout: null
};

// Data model
const dataModel = data => ({
  balance: data.balance,
  lastCheckout: data.lastCheckout
});

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    // Get credits
    case CREDITS_GET:
    case CREDITS_GET_FAILURE:
      return state;
    case CREDITS_GET_SUCCESS:
      return {
        ...state,
        ...dataModel(action.payload)
      };

    // Clean up data
    case USER_RESET:
      return initialState;

    // Default
    default:
      return state;
  }
};

// Non-memoized utility selectors
const getNode = state => state.data;

// Get credits selector
export const getCredits = createSelector(getNode, node => node.credits);

// Get balance selector
export const getBalance = createSelector(getNode, node => node.credits.balance);