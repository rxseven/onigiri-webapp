// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { fromJSOrdered, getError } from 'helpers/state';

// Services
import * as surveysService from 'services/surveys';

// Action types and action creators
import * as actions from './actions';

// Cancel getting surveys
function* cancelSurveys() {
  try {
    // Cancel a network request
    yield call(surveysService.cancelSurveys);

    // Inform reducers that the request finished successfully
    yield put(actions.cancelSurveysSuccess());
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.cancelSurveysFailure());
  }
}

// Get surveys
function* getSurveys({ callback, payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getSurveys, payload.query);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJSOrdered({
      ...data,
      data: mapKeys(data.data, '_id')
    });

    // Inform reducers that the request finished successfully
    yield put(actions.getSurveysSuccess(immutableData));

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getSurveysFailure(immutableData));
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
