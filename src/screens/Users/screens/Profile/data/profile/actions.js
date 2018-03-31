// Module dependencies
import * as usersService from '../../../../../../services/users';

// Actions
export const PROFILE_GET = 'Profile/data/PROFILE_GET';
export const PROFILE_GET_FAILURE = 'Profile/data/PROFILE_GET_FAILURE';
export const PROFILE_GET_SUCCESS = 'Profile/data/PROFILE_GET_SUCCESS';

// Get user profile : Success
const getProfileSuccess = data => ({
  type: PROFILE_GET_SUCCESS,
  payload: data
});

// Get user profile : Failure
const getProfileFailure = error => ({
  type: PROFILE_GET_FAILURE,
  payload: error.response.data.error
});

// Get user profile : Start (loading)
export const getProfile = () => async (dispatch) => {
  try {
    // 1. Inform a reducer that the request began (loading)
    dispatch({ type: PROFILE_GET });

    // 2. Get user profile
    // 3. Retrieve data in a response and transform to an appropriate format
    const { data } = await usersService.getProfile();

    // 4. Inform a reducer that the request finished successfully
    dispatch(getProfileSuccess(data));
  } catch (error) {
    // Inform a reducer that the request failed
    dispatch(getProfileFailure(error));
  }
};
