// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from '../data/reducer';

// Combine reducers
const reducer = combineReducers({
  data: dataReducer
});

// Module exports
export default reducer;
