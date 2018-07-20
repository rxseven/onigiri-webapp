// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions and services
import { fromJSOrdered, getError } from '../../../../../../helpers/data';
import * as surveysService from '../../../../../../services/surveys';

// Action types and action creators
import * as actions from './actions';

// Get recipients
function* getRecipients({ payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getRecipients, payload.id);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJSOrdered(mapKeys(data.recipients, '_id'));

    // Inform reducers that the request finished successfully
    yield put(actions.getRecipientsSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getRecipientsFailure(immutableData));
  }
}

// Get survey
function* getSurvey({ callback, payload }) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getSurvey, payload.id);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.getSurveySuccess(immutableData));

    // Execute a callback
    if (callback) callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getSurveyFailure(immutableData));
  }
}

// Update survey
function* updateSurvey({ payload: { id, values } }) {
  try {
    // Update survey
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.updateSurvey, id, values);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.updateSurveySuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.updateSurveyFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield all([
    takeLatest(actions.RECIPIENTS_GET, getRecipients),
    takeLatest(actions.SURVEY_GET, getSurvey),
    takeLatest(actions.SURVEY_UPDATE, updateSurvey)
  ]);
}

// Module exports
export default watcher;
