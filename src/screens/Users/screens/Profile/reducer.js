// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data/reducer';

// Initial state
const initialState = null;

// Asynchronous reducer
const asyncReducer = (state = initialState, action) => state;

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer
});
