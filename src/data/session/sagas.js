// Module dependencies
import { fromJS } from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import authHelper from 'helpers/authentication';
import { getError } from 'helpers/state';
import { callFunction } from 'helpers/utilities';

// Services
import * as usersService from 'services/users';

// Action creators and action types
import * as actions from './actions';
import * as types from './types';

// Delete user account
function* deleteUser({ callback }) {
  try {
    // Inform reducers that the request started
    yield put(actions.deleteUserRequest());

    // Delete the current user account
    yield call(usersService.deleteUser);

    // Inform reducers that the request finished successfully
    yield put(actions.deleteUserSuccess());
    yield put(actions.resetUser());

    // Reset the current user session
    yield call(authHelper.reset);

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.deleteUserFailure(immutableData));
  }
}

// Get user info
function* getUser() {
  try {
    // Inform reducers that the request started
    yield put(actions.getUserRequest());

    // Get user info
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getUser);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data);

    // Inform reducers that the request finished successfully
    yield put(actions.getUserSuccess(immutableData));
  } catch (error) {
    // If unauthorized, reset the current user session
    yield call(authHelper.verify, error.response.status);

    // Inform reducers that the request failed
    yield put(actions.getUserFailure());
  }
}

// Sign in with Facebook
function* oauthFacebook({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.oauthFacebookRequest());

    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data: { token, user }, status } = yield call(
      usersService.oauthFacebook,
      payload.accessToken
    );

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, user);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthFacebookSuccess(immutableData));

    // Create a user session
    yield call(authHelper.authorize, token);

    // Execute a callback
    yield call(callback, status);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.oauthFacebookFailure(immutableData));
  }
}

// Sign in with Google
function* oauthGoogle({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.oauthGoogleRequest());

    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data: { token, user }, status } = yield call(
      usersService.oauthGoogle,
      payload.accessToken
    );

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, user);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthGoogleSuccess(immutableData));

    // Create a user session
    yield call(authHelper.authorize, token);

    // Execute a callback
    yield call(callback, status);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.oauthGoogleFailure(immutableData));
  }
}

// Sign in with an email address and password
function* signIn({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.signInRequest());

    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signIn, payload.credentials.toJS());

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data.user);

    // Inform reducers that the request finished successfully
    yield put(actions.signInSuccess(immutableData));

    // Create a user session
    yield call(authHelper.authorize, data.token);

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.signInFailure(immutableData));
  }
}

// Sign out
function* signOut({ callback }) {
  try {
    // Inform reducers that the request started
    yield put(actions.signOutRequest());

    // Sign out the current user
    yield call(usersService.signOut);

    // Inform reducers that the request finished successfully
    yield put(actions.signOutSuccess());

    // Clean up session state
    yield put(actions.resetUser());

    // Reset the current user session
    yield call(authHelper.reset);

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.signOutFailure(immutableData));
  }
}

// Sign up
function* signUp({ callback, payload }) {
  try {
    // Inform reducers that the request started
    yield put(actions.signUpRequest());

    // Create a password-based account
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signUp, payload.credentials.toJS());

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, data.user);

    // Inform reducers that the request finished successfully
    yield put(actions.signUpSuccess(immutableData));

    // Create a user session
    yield call(authHelper.authorize, data.token);

    // Execute a callback
    yield call(callFunction, callback);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = yield call(fromJS, getError(error));

    // Inform reducers that the request failed
    yield put(actions.signUpFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  all([
    yield takeLatest(types.OAUTH_FACEBOOK, oauthFacebook),
    yield takeLatest(types.OAUTH_GOOGLE, oauthGoogle),
    yield takeLatest(types.SIGNIN, signIn),
    yield takeLatest(types.SIGNOUT, signOut),
    yield takeLatest(types.SIGNUP, signUp),
    yield takeLatest(types.USER_DELETE, deleteUser),
    yield takeLatest(types.USER_GET, getUser)
  ]);
}

// Module exports
export default watcher;
