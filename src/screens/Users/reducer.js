// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import profileReducer from './screens/Profile/reducer';
import signinReducer from './screens/SignIn/reducer';
import signupReducer from './screens/SignUp/reducer';

// Combine reducers
export default combineReducers({
  profile: profileReducer,
  signin: signinReducer,
  signup: signupReducer
});
