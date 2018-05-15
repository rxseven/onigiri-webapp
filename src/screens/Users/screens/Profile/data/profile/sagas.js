// Module dependencies
import { call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Services
import * as usersService from '../../../../../../services/users';

// Actions watcher
function* watcher() {
  yield takeLatest(actions.PROFILE_GET, getProfile);
}

// Get user profile
function* getProfile(action) {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getProfile);

    // Inform reducers that the request finished successfully
    yield put(actions.getProfileSuccess(data));
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.getProfileFailure(error));
  }
}

// Module exports
export default watcher;
