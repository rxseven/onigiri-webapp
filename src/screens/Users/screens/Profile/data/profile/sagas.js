// Module dependencies
import { fromJS } from 'immutable';
import { call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';

// Services
import * as usersService from 'services/users';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Get user profile
export function* getProfile() {
  try {
    // Inform reducers that the request started
    yield put(actions.getProfileRequest());

    // Get user profile
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getProfile);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data);

    // Inform reducers that the request finished successfully
    yield put(actions.getProfileSuccess(immutableData));
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.getProfileFailure(immutableData));
  }
}

// Actions watcher
export function* watcher() {
  yield takeLatest(types.PROFILE_GET, getProfile);
}

// Module exports
export default watcher;
