// Module dependencies
import { combineReducers } from 'redux';

// Initial state
const initialState = null;

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => state;

// Combine reducers
export default combineReducers({
  asynchronous: asyncReducer
});
