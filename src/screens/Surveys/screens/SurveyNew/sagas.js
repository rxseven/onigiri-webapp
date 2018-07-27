// Module dependencies
import { fromJS } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';

// Services
import * as surveysService from 'services/surveys';

// Action creators and action types
import { updateCredits } from 'data/credits/actions';
import * as actions from './actions';
import * as types from './types';

// Create survey
function* createSurvey({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.createSurveyRequest());

    // Create survey and send emails asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.createSurvey, payload.values);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data.credits);

    // Inform reducers that the request finished successfully
    yield put(actions.createSurveySuccess());
    yield put(updateCredits(immutableData));

    // Execute a callback
    callback(data.id);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.createSurveyFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(types.SURVEY_CREATE, createSurvey);
}

// Module exports
export default watcher;
