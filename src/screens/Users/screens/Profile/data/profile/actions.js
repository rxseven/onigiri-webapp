// Action types
export const PROFILE_GET = 'Profile/data/PROFILE_GET';
export const PROFILE_GET_FAILURE = 'Profile/data/PROFILE_GET_FAILURE';
export const PROFILE_GET_SUCCESS = 'Profile/data/PROFILE_GET_SUCCESS';

// Get user profile : Start
export const getProfile = () => ({
  type: PROFILE_GET
});

// Get user profile : Failure
export const getProfileFailure = error => ({
  payload: error,
  type: PROFILE_GET_FAILURE
});

// Get user profile : Success
export const getProfileSuccess = data => ({
  payload: data,
  type: PROFILE_GET_SUCCESS
});
