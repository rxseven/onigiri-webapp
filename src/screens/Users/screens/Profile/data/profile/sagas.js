// Module dependencies
import { fromJS } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

// Helper functions and services
import { getError } from 'helpers/state';
import * as usersService from 'services/users';

// Action types and action creators
import * as actions from './actions';

// Get user profile
function* getProfile(action) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getProfile);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.getProfileSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.getProfileFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  yield takeLatest(actions.PROFILE_GET, getProfile);
}

// Module exports
export default watcher;
