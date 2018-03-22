// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data/reducer';

// Constants
import STATE_MODELS from '../../../../constants/models/state';

// Initial state
const initialState = {
  asynchronous: {
    get: {
      ...STATE_MODELS.model.asynchronous,
      loaded: false
    }
  }
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
