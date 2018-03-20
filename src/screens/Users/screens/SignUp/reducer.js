// Module dependencies
import { combineReducers } from 'redux';

// Actions
import { SIGNUP, SIGNUP_FAILURE, SIGNUP_SUCCESS } from '../../../../data/session/actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case SIGNUP_SUCCESS:
      return {
        ...initialState
      };
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
