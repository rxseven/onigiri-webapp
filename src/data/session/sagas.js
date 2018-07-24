// Module dependencies
import { fromJS } from 'immutable';
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Helper functions
import { getError } from 'helpers/state';
import tokenHelper from 'helpers/token';

// Services
import * as usersService from 'services/users';

// Action types and action creators
import * as actions from './actions';

// Delete user account
function* deleteUser({ callback }) {
  try {
    // Delete the current user account
    yield call(usersService.deleteUser);

    // Inform reducers that the request finished successfully
    yield put(actions.deleteUserSuccess());
    yield put(actions.resetUser());

    // Remove an access token from browser's local storage
    tokenHelper.remove();

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.deleteUserFailure(immutableData));
  }
}

// Get user info
function* getUser() {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getUser);

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data);

    // Inform reducers that the request finished successfully
    yield put(actions.getUserSuccess(immutableData));
  } catch (error) {
    // If unauthorized, remove an access token
    if (error.response.status === 401) {
      tokenHelper.remove();
    }

    // Inform reducers that the request failed
    yield put(actions.getUserFailure());
  }
}

// Sign in with Facebook
function* oauthFacebook({ callback, payload }) {
  try {
    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data: { token, user }, status } = yield call(
      usersService.oauthFacebook,
      payload.accessToken
    );

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(user);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthFacebookSuccess(immutableData));

    // Store an access token in a browser's local storage
    tokenHelper.save(token);

    // Execute a callback
    callback(status);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.oauthFacebookFailure(immutableData));
  }
}

// Sign in with Google
function* oauthGoogle({ callback, payload }) {
  try {
    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data: { token, user }, status } = yield call(
      usersService.oauthGoogle,
      payload.accessToken
    );

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(user);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthGoogleSuccess(immutableData));

    // Store an access token in a browser's local storage
    tokenHelper.save(token);

    // Execute a callback
    callback(status);
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.oauthGoogleFailure(immutableData));
  }
}

// Sign in with an email address and password
function* signIn({ callback, payload }) {
  try {
    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signIn, payload.credentials.toJS());

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data.user);

    // Inform reducers that the request finished successfully
    yield put(actions.signInSuccess(immutableData));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.signInFailure(immutableData));
  }
}

// Sign out
function* signOut({ callback }) {
  try {
    // Sign out the current user
    yield call(usersService.signOut);

    // Inform reducers that the request finished successfully
    yield put(actions.signOutSuccess());

    // Clean up session state
    yield put(actions.resetUser());

    // Remove an access token from browser's local storage
    tokenHelper.remove();

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.signOutFailure(immutableData));
  }
}

// Sign up
function* signUp({ callback, payload }) {
  try {
    // Create a password-based account
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signUp, payload.credentials.toJS());

    // Normalize data and convert plain JavaScript into Immutable object
    const immutableData = fromJS(data.user);

    // Inform reducers that the request finished successfully
    yield put(actions.signUpSuccess(immutableData));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Convert plain JavaScript into Immutable object
    const immutableData = fromJS(getError(error));

    // Inform reducers that the request failed
    yield put(actions.signUpFailure(immutableData));
  }
}

// Actions watcher
function* watcher() {
  all([
    yield takeLatest(actions.OAUTH_FACEBOOK, oauthFacebook),
    yield takeLatest(actions.OAUTH_GOOGLE, oauthGoogle),
    yield takeLatest(actions.SIGNIN, signIn),
    yield takeLatest(actions.SIGNOUT, signOut),
    yield takeLatest(actions.SIGNUP, signUp),
    yield takeLatest(actions.USER_DELETE, deleteUser),
    yield takeLatest(actions.USER_GET, getUser)
  ]);
}

// Module exports
export default watcher;
