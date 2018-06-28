// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import details from './screens/SurveyDetails/reducers';
import doorway from './screens/SurveyDoorway/reducers';
import list from './screens/SurveyList/reducers';
import create from './screens/SurveyNew/reducers';

// Combine reducers
export default combineReducers({
  details,
  doorway,
  list,
  new: create
});
