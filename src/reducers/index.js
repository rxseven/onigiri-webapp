// Module dependencies
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Reducers
import dataReducer from '../data/reducer';
import screensReducer from '../screens/reducer';

// Combine reducers
const reducer = combineReducers({
  data: dataReducer,
  form: formReducer,
  screens: screensReducer
});

// Module exports
export default reducer;
