// Module dependencies
import { combineReducers } from 'redux';

// Constants
import STATE_MODELS from '../../../constants/models/state';

// Initial state
const initialState = {
  signout: {
    ...STATE_MODELS.model.asynchronous
  }
};

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => state;

// Combine reducers
export default combineReducers({
  asynchronous: asyncReducer
});
