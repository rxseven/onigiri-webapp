// Module dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import * as surveysService from '../../services/surveys';

// Sagas
import surveyDetails from './screens/SurveyDetails/data/survey/sagas';
import surveyDoorway from './screens/SurveyDoorway/data/landing/sagas';
import surveyList from './screens/SurveyList/data/surveys/sagas';
import surveyNew from './screens/SurveyNew/sagas';

// Actions watcher
function* watcher() {
  yield takeLatest(actions.SURVEY_DELETE, deleteSurvey);
}

// Delete survey
function* deleteSurvey({ callback, payload }) {
  try {
    // Delete survey
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.deleteSurvey, payload.id);

    // Inform reducers that the request finished successfully
    yield put(actions.deleteSurveySuccess(data));

    // Execute a callback
    callback(data.id);
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.deleteSurveyFailure(error));
  }
}

// Combine Sagas
const sagas = {
  surveyRoot: watcher,
  surveyDetails,
  surveyDoorway,
  surveyList,
  surveyNew
};

// Module exports
export default sagas;
