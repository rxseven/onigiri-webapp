// Module dependencies
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import * as surveysService from '../../../../../../services/surveys';

// Actions watcher
function* watcher() {
  yield all([
    takeLatest(actions.RECIPIENTS_GET, getRecipients),
    takeLatest(actions.SURVEY_GET, getSurvey),
    takeLatest(actions.SURVEY_UPDATE, updateSurvey)
  ]);
}

// Get recipients
function* getRecipients({ payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getRecipients, payload.id);

    // Inform reducers that the request finished successfully
    yield put(actions.getRecipientsSuccess(data));
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getRecipientsFailure(error));
  }
}

// Get survey
function* getSurvey({ callback, payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getSurvey, payload.id);

    // Inform reducers that the request finished successfully
    yield put(actions.getSurveySuccess(data));

    // Execute a callback
    if (callback) callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getSurveyFailure(error));
  }
}

// Update survey
function* updateSurvey({ payload: { id, values } }) {
  try {
    // Update survey
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.updateSurvey, id, values);

    // Inform reducers that the request finished successfully
    yield put(actions.updateSurveySuccess(data));
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.updateSurveyFailure(error));
  }
}

// Module exports
export default watcher;
