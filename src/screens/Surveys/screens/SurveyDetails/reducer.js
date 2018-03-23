// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from './data/reducer';

// Combine reducers
export default combineReducers({
  data: dataReducer
});
