// Module dependencies
import tokenHelper from '../../helpers/token';
import * as usersService from '../../services/users';

// Actions
export const SIGNOUT = 'data/session/SIGNOUT';
export const SIGNOUT_FAILURE = 'data/session/SIGNOUT_FAILURE';
export const SIGNOUT_SUCCESS = 'data/session/SIGNOUT_SUCCESS';

export const SIGNUP = 'data/session/SIGNUP';
export const SIGNUP_FAILURE = 'data/session/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'data/session/SIGNUP_SUCCESS';

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

    // 5. Remove an access token from the user's browser
    tokenHelper.remove();

    // 6. Execute a callback
    callback();
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(signOutFailure(error));
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
