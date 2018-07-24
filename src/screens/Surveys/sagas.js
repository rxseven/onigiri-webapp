// Module dependencies
import { fromJS } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';

// Services
import * as surveysService from 'services/surveys';

// Sagas
import surveyDetails from './screens/SurveyDetails/data/survey/sagas';
import surveyDoorway from './screens/SurveyDoorway/data/landing/sagas';
import surveyList from './screens/SurveyList/data/surveys/sagas';
import surveyNew from './screens/SurveyNew/sagas';

// Action types and action creators
import * as actions from './actions';

// Delete survey
function* deleteSurvey({ callback, payload }) {
  try {
    // Delete survey
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.deleteSurvey, payload.id);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data.id);

    // Inform reducers that the request finished successfully
    yield put(actions.deleteSurveySuccess(immutableData));

    // Execute a callback
    callback(data.id);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.deleteSurveyFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(actions.SURVEY_DELETE, deleteSurvey);
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
