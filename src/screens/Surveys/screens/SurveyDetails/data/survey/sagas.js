// Module dependencies
import { fromJS } from 'immutable';
import { mapKeys } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { fromJSOrdered, getError } from 'helpers/state';

// Services
import * as surveysService from '../../../../services';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Get recipients
function* getRecipients({ payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.getRecipientsRequest());

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
    // Inform reducers that the request started
    yield put(actions.getSurveyRequest());

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
    // Inform reducers that the request started
    yield put(actions.updateSurveyRequest());

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
    takeLatest(types.RECIPIENTS_GET, getRecipients),
    takeLatest(types.SURVEY_GET, getSurvey),
    takeLatest(types.SURVEY_UPDATE, updateSurvey)
  ]);
}

// Module exports
export default watcher;
