// Module dependencies
import { combineReducers } from 'redux';

// Actions
import { SIGNIN, SIGNIN_FAILURE, SIGNIN_SUCCESS } from '../../../../data/session/actions';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state,
        post: {
          ...initialState.post,
          loading: true
        }
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        post: {
          ...initialState.post,
          error: action.payload
        }
      };
    case SIGNIN_SUCCESS:
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
