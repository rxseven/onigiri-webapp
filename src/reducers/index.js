// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import dataReducer from '../data/reducer';
import screensReducer from '../screens/reducer';

// Combine reducers
const reducer = combineReducers({
  data: dataReducer,
  screens: screensReducer
});

// Module exports
export default reducer;
