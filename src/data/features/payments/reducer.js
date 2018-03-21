// Module dependencies
import { combineReducers } from 'redux';

// Constants
import STATE_MODELS from '../../../constants/models/state';

// Initial state
const initialState = {
  post: { ...STATE_MODELS.model.asynchronous }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => state;

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  ui: uiReducer
});
