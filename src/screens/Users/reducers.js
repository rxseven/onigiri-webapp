// Module dependencies
import { combineReducers } from 'redux-immutable';

// Reducers
import profile from './screens/Profile/reducers';
import signin from './screens/SignIn/reducers';
import signup from './screens/SignUp/reducers';

// Combine reducers
export default combineReducers({
  profile,
  signin,
  signup
});
