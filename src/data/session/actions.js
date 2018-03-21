// Module dependencies
import tokenHelper from '../../helpers/token';
import * as usersService from '../../services/users';

// Actions
export const SIGNIN = 'data/session/SIGNIN';
export const SIGNIN_FAILURE = 'data/session/SIGNIN_FAILURE';
export const SIGNIN_SUCCESS = 'data/session/SIGNIN_SUCCESS';

export const SIGNOUT = 'data/session/SIGNOUT';
export const SIGNOUT_FAILURE = 'data/session/SIGNOUT_FAILURE';
export const SIGNOUT_SUCCESS = 'data/session/SIGNOUT_SUCCESS';

export const SIGNUP = 'data/session/SIGNUP';
export const SIGNUP_FAILURE = 'data/session/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'data/session/SIGNUP_SUCCESS';

export const USER_DELETE = 'data/session/USER_DELETE';
export const USER_DELETE_FAILURE = 'data/session/USER_DELETE_FAILURE';
export const USER_DELETE_SUCCESS = 'data/session/USER_DELETE_SUCCESS';

export const USER_GET = 'data/session/USER_GET';
export const USER_GET_FAILURE = 'data/session/USER_GET_FAILURE';
export const USER_GET_SUCCESS = 'data/session/USER_GET_SUCCESS';

export const USER_RESET = 'data/session/USER_RESET';

// Reset user
export const resetUser = () => ({ type: USER_RESET });

// Sign-up : Success
const signUpSuccess = data => ({
  type: SIGNUP_SUCCESS,
  payload: data
});

// Sign-up : Failure
const signUpFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error.response.data.error
});

// Sign-up : Start (loading)
export const signUp = (credentials, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SIGNUP });

    // 2. Register new user account with email and password
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.signUp(credentials);

    // 4. Inform a reducer that the request finished successfully
    dispatch(signUpSuccess(data));

    // 5. Store a token in the user's browser
    tokenHelper.save(data.token);

    // 6. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(signUpFailure(error));
  }
};

// Sign-in : Success
const signInSuccess = data => ({
  type: SIGNIN_SUCCESS,
  payload: data
});

// Sign-in : Failure
const signInFailure = ({ response }) => {
  // Destructure object properties
  const { data, status } = response;

  // Create custom error message
  const errorMessage = status === 401 ? 'Incorrect email or password' : data;

  // Return action
  return {
    type: SIGNIN_FAILURE,
    payload: { message: errorMessage }
  };
};

// Sign-in : Start (loading)
export const signIn = (credentials, callback) => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SIGNIN });

    // 2. Sign in a user with an email address and password
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.signIn(credentials);

    // 4. Inform a reducer that the request finished successfully
    dispatch(signInSuccess(data));

    // 5. Store a token in the user's browser
    tokenHelper.save(data.token);

    // 6. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(signInFailure(error));
  }
};

// Sign-out : Success
const signOutSuccess = () => ({ type: SIGNOUT_SUCCESS });

// Sign-out : Failure
const signOutFailure = error => ({
  type: SIGNOUT_FAILURE,
  payload: error.response.data.error
});

// Sign-out : Start (loading)
export const signOut = callback => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: SIGNOUT });

    // 2. Sign out the current user
    // 3. Retrieve a response
    await usersService.signOut();

    // 4. Inform a reducer that the request finished successfully
    dispatch(signOutSuccess());

    // 5. Clean up session state
    dispatch(resetUser());

    // 6. Remove an access token from the user's browser
    tokenHelper.remove();

    // 7. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(signOutFailure(error));
  }
};

// Delete user account : Success
const deleteUserSuccess = () => ({
  type: USER_DELETE_SUCCESS
});

// Delete user account : Failure
const deleteUserFailure = error => ({
  type: USER_DELETE_FAILURE,
  payload: error.response.data.error
});

// Delete user account : Start (loading)
export const deleteUser = callback => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: USER_DELETE });

    // 2. Delete user account
    await usersService.deleteUser();

    // 4. Inform a reducer that the request finished successfully
    dispatch(deleteUserSuccess());

    // 5. Clean up session state
    dispatch(resetUser());

    // 6. Remove an access token from the user's browser
    tokenHelper.remove();

    // 7. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(deleteUserFailure(error));
  }
};

// Get user info : Success
const getUserSuccess = data => ({
  type: USER_GET_SUCCESS,
  payload: data
});

// Get user info : Failure
const getUserFailure = error => ({
  type: USER_GET_FAILURE,
  payload: error.response.data.error
});

// Get user info : Start (loading)
export const getUser = () => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: USER_GET });

    // 2. Get user account's info
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.getUser();

    // 4. Inform a reducer that the request finished successfully
    dispatch(getUserSuccess(data));
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getUserFailure(error));
  }
};
