// Module dependencies
import { fromJS } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';

// Services
import * as surveysService from 'services/surveys';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Get landing page URI
function* getLanding({ payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.getLandingRequest());

    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(surveysService.getLanding, payload.id);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.getLandingSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getLandingFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(types.LANDING_GET, getLanding);
}

// Module exports
export default watcher;
