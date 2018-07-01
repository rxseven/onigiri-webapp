// Module dependencies
import { all, call, put, takeLatest } from 'redux-saga/effects';

// Action types and action creators
import * as actions from './actions';

// Helpers and services
import tokenHelper from '../../helpers/token';
import * as usersService from '../../services/users';

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
    // Inform reducers that the request failed
    yield put(actions.deleteUserFailure(error));
  }
}

// Get user info
function* getUser() {
  try {
    // Fetch data asynchronously
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.getUser);

    // Inform reducers that the request finished successfully
    yield put(actions.getUserSuccess(data));
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
    const { data, status } = yield call(usersService.oauthFacebook, payload.accessToken);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthFacebookSuccess(data, status));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.oauthFacebookFailure(error));
  }
}

// Sign in with Google
function* oauthGoogle({ callback, payload }) {
  try {
    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data, status } = yield call(usersService.oauthGoogle, payload.accessToken);

    // Inform reducers that the request finished successfully
    yield put(actions.oauthGoogleSuccess(data, status));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.oauthGoogleFailure(error));
  }
}

// Sign in with an email address and password
function* signIn({ callback, payload }) {
  try {
    // Sign in a user
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signIn, payload.credentials);

    // Inform reducers that the request finished successfully
    yield put(actions.signInSuccess(data));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.signInFailure(error));
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
    // Inform reducers that the request failed
    yield put(actions.signOutFailure(error));
  }
}

// Sign up
function* signUp({ callback, payload }) {
  try {
    // Create a password-based account
    // Retrieve data in a response and transform to an appropriate format
    const { data } = yield call(usersService.signUp, payload.credentials);

    // Inform reducers that the request finished successfully
    yield put(actions.signUpSuccess(data));

    // Store an access token in a browser's local storage
    tokenHelper.save(data.token);

    // Execute a callback
    callback();
  } catch (error) {
    // Inform reducers that the request failed
    yield put(actions.signUpFailure(error));
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
