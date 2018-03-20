// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import signupReducer from './screens/SignUp/reducer';

// Combine reducers
export default combineReducers({
  signup: signupReducer
});
