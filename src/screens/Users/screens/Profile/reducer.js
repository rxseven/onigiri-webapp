// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  get: {
    profile: { ...STATE_MODELS.model.asynchronous }
  }
};

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
