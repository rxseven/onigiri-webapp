// Module dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';
import { updateCredits } from '../../../../data/credits/actions';

// Services
import * as surveysService from '../../../../services/surveys';

// Create survey
function* createSurvey({ callback, payload }) {
  try {
    // Create survey and send emails asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.createSurvey, payload.values);

    // Inform reducers that the request finished successfully
    yield put(actions.createSurveySuccess());
    yield put(updateCredits(data.credits));

    // Execute a callback
    callback(data.id);
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.createSurveyFailure(error));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(actions.SURVEY_CREATE, createSurvey);
}

// Module exports
export default watcher;
