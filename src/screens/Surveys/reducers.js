// Module dependencies
import { combineReducers } from 'redux';

// Reducers
import detailsReducer from './screens/SurveyDetails/reducers';
import doorwayReducer from './screens/SurveyDoorway/reducers';
import listReducer from './screens/SurveyList/reducers';
import newReducer from './screens/SurveyNew/reducers';

// Combine reducers
export default combineReducers({
  details: detailsReducer,
  doorway: doorwayReducer,
  list: listReducer,
  new: newReducer
});
