// Module dependencies
import { combineReducers } from 'redux';

// Actions
import { CHECKOUT, CHECKOUT_FAILURE, CHECKOUT_SUCCESS } from '../../credits/actions';

// Constants
import STATE_MODELS from '../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    // Checkout
    case CHECKOUT:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case CHECKOUT_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        ...initialState
      };

    // Default
    default:
      return state;
  }
};

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  ui: uiReducer
});
