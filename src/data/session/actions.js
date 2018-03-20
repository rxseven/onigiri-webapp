// Module dependencies
import tokenHelper from '../../helpers/token';
import * as usersService from '../../services/users';

// Actions
export const SIGNUP = 'data/session/SIGNUP';
export const SIGNUP_FAILURE = 'data/session/SIGNUP_FAILURE';
export const SIGNUP_SUCCESS = 'data/session/SIGNUP_SUCCESS';

export const USER_GET = 'data/session/USER_GET';
export const USER_GET_FAILURE = 'data/session/USER_GET_FAILURE';
export const USER_GET_SUCCESS = 'data/session/USER_GET_SUCCESS';

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
