// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data/reducer';

// Initial state
const initialState = {
  asynchronous: null
};

// Asynchronous reducer
const asyncReducer = (state = initialState.asynchronous, action) => state;

// UI reducer
const uiReducer = combineReducers({
  asynchronous: asyncReducer
});

// Combine reducers
export default combineReducers({
  data: dataReducer,
  ui: uiReducer
});
