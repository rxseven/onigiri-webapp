// Module dependencies
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import * as surveysService from '../../../../../../services/surveys';

// Cancel getting surveys
function* cancelSurveys() {
  try {
    // Cancel a network request
    yield call(surveysService.cancelSurveys);

    // Inform reducers that the request finished successfully
    yield put(actions.cancelSurveysSuccess());
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.cancelSurveysFailure(error));
  }
}

// Get surveys
function* getSurveys({ callback, payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getSurveys, payload.query);

    // Inform reducers that the request finished successfully
    yield put(actions.getSurveysSuccess(data));

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getSurveysFailure(error));
  }
}

// Actions watcher
function* watcher() {
  yield all([
    takeLatest(actions.SURVEYS_CANCEL, cancelSurveys),
    takeLatest(actions.SURVEYS_GET, getSurveys)
  ]);
}

// Module exports
export default watcher;
