// Actions
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

    // Default
    default:
      return state;
  }
};
